import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface SiteWorkItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  url?: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
  features?: string[];
}

interface FunnelBarrelProps {
  items: SiteWorkItem[];
  onOpen: (item: SiteWorkItem) => void;
  spinRef?: React.MutableRefObject<((delta: number) => void) | null>;
}

export const FunnelBarrel = ({ items, onOpen, spinRef }: FunnelBarrelProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const onOpenRef = useRef(onOpen);
  onOpenRef.current = onOpen;

  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current || !labelRef.current) return;
    if (items.length === 0) return;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const labelEl = labelRef.current;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (e) {
      console.warn('WebGL init failed:', e);
      wrap.dataset.failed = 'true';
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 120);
    // Positioned back and slightly above to see the cylinder curve ellipse
    camera.position.set(0, 4.2, 31);
    camera.lookAt(0, 0.5, 0);

    // Barrel cylinder geometry
    const COLS = 16;
    const ROWS = Math.max(6, Math.ceil(items.length / COLS));
    const RAD = 11;
    const anglePer = (Math.PI * 2) / COLS;
    const thetaLen = anglePer * 0.9;
    const arcW = thetaLen * RAD;
    const cardH = arcW * (4 / 3); // 3:4 portrait card ratio
    const rowGap = cardH * 1.04;
    const TOWER_H = ROWS * rowGap;

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';
    const maxAniso = renderer.capabilities.getMaxAnisotropy();
    const texCache = new Map<string, THREE.Texture>();
    const mats: THREE.MeshBasicMaterial[] = [];

    function loadTex(url: string, matIndex: number) {
      const cached = texCache.get(url);
      if (cached) return cached;
      const t = loader.load(
        url,
        () => {
          // CRITICAL: Three.js must be notified that the texture loaded to recompile/update shader
          const m = mats[matIndex];
          if (m) {
            m.needsUpdate = true;
          }
        },
        undefined,
        (err) => {
          console.warn('Texture failed to load for card', matIndex, url, err);
          const m = mats[matIndex];
          if (m) {
            m.userData.base = 0.4;
            m.needsUpdate = true;
          }
        }
      );
      t.colorSpace = THREE.SRGBColorSpace;
      t.minFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
      t.anisotropy = maxAniso;
      texCache.set(url, t);
      return t;
    }

    // Rounded-corner alpha mask for curved card tiles
    function makeRoundedAlpha() {
      const w = 300;
      const h = 400;
      const r = 26;
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.arcTo(w, 0, w, h, r);
      ctx.arcTo(w, h, 0, h, r);
      ctx.arcTo(0, h, 0, 0, r);
      ctx.arcTo(0, 0, w, 0, r);
      ctx.closePath();
      ctx.fill();
      const t = new THREE.CanvasTexture(c);
      t.minFilter = THREE.LinearFilter;
      return t;
    }
    const roundTex = makeRoundedAlpha();

    const sharedGeo = new THREE.CylinderGeometry(
      RAD,
      RAD,
      cardH,
      24,
      1,
      true,
      -thetaLen / 2,
      thetaLen,
    );

    // Inner group spins on Y; outer tilt frames the drum
    const group = new THREE.Group();
    const tilt = new THREE.Group();
    tilt.add(group);
    tilt.rotation.z = -0.04;
    tilt.rotation.x = 0.16; // tilt down so top-rim ellipse is clearly visible
    tilt.position.set(0, -1, 0);
    scene.add(tilt);

    type CardData = {
      item: SiteWorkItem;
      baseY: number;
      baseAngle: number;
      cur: number;
      dim: number;
    };

    const cards: THREE.Mesh[] = [];
    const SLOTS = ROWS * COLS;
    const N = items.length;
    const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
    let stride = Math.max(1, Math.round(N / 3));
    while (N > 1 && gcd(stride, N) !== 1) stride++;
    const order: number[] = [];
    for (let k = 0; k < SLOTS; k++) order.push(k < N ? k : (k * stride) % N);

    let counter = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const item = items[order[counter]];
        const material = new THREE.MeshBasicMaterial({
          side: THREE.FrontSide,
          transparent: true,
          alphaMap: roundTex,
          color: 0xffffff,
        });
        material.userData.base = 1;
        mats[counter] = material;
        material.map = loadTex(item.image, counter);

        const mesh = new THREE.Mesh(sharedGeo, material);
        const baseAngle = c * anglePer + (r % 2 ? anglePer * 0.5 : 0);
        mesh.rotation.y = baseAngle;
        mesh.position.y = r * rowGap - TOWER_H / 2 + rowGap / 2;
        mesh.userData = {
          item,
          baseY: mesh.position.y,
          baseAngle,
          cur: 0,
          dim: 1,
        } satisfies CardData;

        group.add(mesh);
        cards.push(mesh);
        counter++;
      }
    }

    // Interaction state
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-2, -2);
    let hovered: THREE.Mesh | null = null;
    let scrollTarget = 0;
    let scrollCurrent = 0;
    let spinTarget = 0;
    let spinAngle = 0;
    let dragSpin = 0;
    let pointerInside = false;

    const labCat = labelEl.querySelector('.funnels__barrel-label-cat') as HTMLElement;
    const labTitle = labelEl.querySelector('.funnels__barrel-label-title') as HTMLElement;

    if (spinRef) {
      spinRef.current = (delta: number) => {
        dragSpin += delta;
      };
    }

    function setPointerFromEvent(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      labelEl.style.left = `${e.clientX - rect.left}px`;
      labelEl.style.top = `${e.clientY - rect.top}px`;
    }

    let dragging = false;
    let downX = 0;
    let downY = 0;
    let lastX = 0;
    let lastY = 0;
    let moved = 0;

    const onPointerMove = (e: PointerEvent) => {
      setPointerFromEvent(e);
      spinTarget = pointer.x * 0.22;
      if (dragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        dragSpin += dx * 0.006;
        scrollTarget += dy * 0.01;
        moved += Math.abs(dx) + Math.abs(dy);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const onPointerEnter = () => {
      pointerInside = true;
    };

    const onPointerLeave = () => {
      pointerInside = false;
      pointer.set(-2, -2);
      hovered = null;
      labelEl.classList.remove('is-on');
    };

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      downX = lastX = e.clientX;
      downY = lastY = e.clientY;
      moved = 0;
      setPointerFromEvent(e);
      canvas.setPointerCapture?.(e.pointerId);
    };

    const onPointerUp = (e: PointerEvent) => {
      const wasTap = moved < 6 && Math.abs(e.clientX - downX) < 6 && Math.abs(e.clientY - downY) < 6;
      dragging = false;
      canvas.releasePointerCapture?.(e.pointerId);
      if (wasTap) {
        setPointerFromEvent(e);
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(cards, false).find((h) => {
          const mat = (h.object as THREE.Mesh).material as THREE.MeshBasicMaterial;
          return mat.opacity > 0.08;
        });
        const data = hit?.object.userData as CardData | undefined;
        if (data?.item) onOpenRef.current(data.item);
      }
    };

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerenter', onPointerEnter);
    canvas.addEventListener('pointerleave', onPointerLeave);
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);

    function resize() {
      const w = wrap.clientWidth || window.innerWidth;
      const h = wrap.clientHeight || Math.round(window.innerHeight * 0.62);
      if (w <= 0 || h <= 0) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    // Delay check after layout settle
    const resizeTimer = setTimeout(resize, 60);

    let raf = 0;
    const clock = new THREE.Clock();

    function animate() {
      raf = requestAnimationFrame(animate);
      if (document.hidden) return;
      const dt = Math.min(clock.getDelta(), 0.05);

      // Horizontal: idle spin + parallax + drag
      const idleSpeed = reduce ? 0 : pointerInside ? 0.04 : 0.16;
      spinAngle += idleSpeed * dt;
      group.rotation.y = spinAngle + dragSpin + spinTarget * 0.4;

      // Vertical: slow drift + drag scrub
      if (!reduce && !pointerInside) scrollTarget += 0.35 * dt;
      scrollCurrent += (scrollTarget - scrollCurrent) * Math.min(1, dt * 5);

      for (const m of cards) {
        let y = (m.userData as CardData).baseY + scrollCurrent;
        y = (((y + TOWER_H / 2) % TOWER_H) + TOWER_H) % TOWER_H - TOWER_H / 2;
        if (m === hovered && Math.abs(y - m.position.y) > rowGap * 1.5) {
          hovered = null;
          labelEl.classList.remove('is-on');
        }
        m.position.y = y;
      }

      // Hover pick
      if (pointerInside && !dragging) {
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(cards, false).find((h) => {
          const mat = (h.object as THREE.Mesh).material as THREE.MeshBasicMaterial;
          return mat.opacity > 0.08;
        });
        const top = (hit?.object as THREE.Mesh) ?? null;
        if (top !== hovered) {
          hovered = top;
          if (hovered) {
            const data = hovered.userData as CardData;
            if (labCat) labCat.textContent = data.item.category;
            if (labTitle) labTitle.textContent = data.item.title;
            labelEl.classList.add('is-on');
            canvas.style.cursor = 'pointer';
          } else {
            labelEl.classList.remove('is-on');
            canvas.style.cursor = 'grab';
          }
        }
      }

      const anyHover = !!hovered;
      // Generous visibility range so 3-4 curved rows are clearly visible on screen
      const VIS = rowGap * 1.6;
      const FADE = rowGap * 1.8;

      for (const m of cards) {
        const data = m.userData as CardData;
        const isHot = m === hovered;
        data.cur += ((isHot ? 1 : 0) - data.cur) * Math.min(1, dt * 10);
        const dimTarget = !anyHover || isHot ? 1 : 0.45;
        data.dim += (dimTarget - data.dim) * Math.min(1, dt * 8);
        const pop = 1 + data.cur * 0.08;
        const worldY = tilt.position.y + m.position.y;

        // Spiral helix twist
        m.rotation.y = data.baseAngle + worldY * 0.05;

        // Cone taper: top ring wider for the dynamic tornado cylinder look
        const coneN = Math.min(1, Math.max(0, (worldY + VIS + FADE) / (2 * (VIS + FADE))));
        const funnel = 0.65 + 0.45 * coneN;
        m.scale.set(funnel * pop, pop, funnel * pop);

        const op = Math.min(1, Math.max(0, (VIS + FADE - Math.abs(worldY)) / FADE));
        const mat = m.material as THREE.MeshBasicMaterial;
        mat.opacity = op;
        m.visible = op > 0.02;
        mat.color.setScalar(mat.userData.base * data.dim);
      }

      renderer.render(scene, camera);
    }

    canvas.style.cursor = 'grab';
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      ro.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerenter', onPointerEnter);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      sharedGeo.dispose();
      roundTex.dispose();
      mats.forEach((m) => m.dispose());
      texCache.forEach((t) => t.dispose());
      renderer.dispose();
      if (spinRef) spinRef.current = null;
    };
  }, [items, spinRef]);

  return (
    <div className="funnels__barrel h-full w-full" ref={wrapRef}>
      <canvas className="funnels__barrel-gl" ref={canvasRef} aria-label="3D interactive cylinder carousel" />
      <div className="funnels__barrel-label" ref={labelRef} aria-hidden="true">
        <span className="funnels__barrel-label-cat" />
        <span className="funnels__barrel-label-title" />
      </div>

      <div className="funnels__barrel-hint pointer-events-none" aria-hidden="true">
        <span>Drag to rotate cylinder &middot; click a card to open</span>
      </div>

      {/* Accessible fallback */}
      <ul className="sr-only">
        {items.map((it) => (
          <li key={it.id}>
            <button type="button" onClick={() => onOpen(it)}>
              Open {it.title} ({it.category})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
