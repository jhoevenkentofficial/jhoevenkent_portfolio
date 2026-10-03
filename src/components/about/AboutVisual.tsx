import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutWorkspaceVisual = () => (
  <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[16px] border border-[#EEEBE3] bg-[#0F1F38] p-4 sm:p-5">
    <div className="flex items-center gap-1.5 px-1 pb-3">
      <i className="block h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <i className="block h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <i className="block h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      <span className="ml-2 truncate text-[11px] font-medium text-white/50">brightweb — workspace</span>
    </div>
    <div className="grid flex-1 grid-cols-5 gap-3">
      <div className="col-span-3 flex flex-col rounded-[12px] bg-[#131f38] p-3 ring-1 ring-white/10">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">code editor</p>
        <pre className="mt-2 font-mono text-[10.5px] leading-[1.7]">
          <code><span className="text-[#7dd3fc]">const</span> <span className="text-white">product</span> <span className="text-white/50">=</span> <span className="text-[#7dd3fc]">await</span> <span className="text-white">brightweb.</span><span className="text-[#a5b4fc]">build</span><span className="text-white/70">({'{'}</span></code>
          <br /><code><span className="text-white/60">  problem:</span> <span className="text-[#86efac]">'real workflow'</span><span className="text-white/60">,</span></code>
          <br /><code><span className="text-white/60">  stack:</span> <span className="text-white">[</span><span className="text-[#86efac]">'react', 'node'</span><span className="text-white">]</span><span className="text-white/60">,</span></code>
          <br /><code><span className="text-white/60">  ship:</span> <span className="text-[#7dd3fc]">true</span></code>
          <br /><code><span className="text-white/70">{'}'})</span></code>
        </pre>
        <div className="mt-3 flex gap-1.5">
          <span className="rounded-md bg-[#1D64D8] px-2 py-1 text-[9.5px] font-bold text-white">Deploy</span>
          <span className="rounded-md bg-white/10 px-2 py-1 text-[9.5px] font-semibold text-white/70">Preview</span>
        </div>
        <div className="mt-auto flex items-center gap-2 pt-3">
          <span className="h-1.5 flex-1 rounded-full bg-white/10" />
          <span className="h-1.5 w-12 rounded-full bg-[#22C55E]" />
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-3">
        <div className="rounded-[12px] bg-white p-3">
          <p className="text-[10.5px] font-bold text-[#0F1F38]">HireNova</p>
          <p className="text-[9px] text-[#6b7482]">18 new applicants</p>
          <div className="mt-2 h-8 rounded-md bg-[#E8EFFC]" />
          <div className="mt-1.5 flex gap-1">
            <span className="h-4 flex-1 rounded bg-[#0F1F38]" />
            <span className="h-4 w-8 rounded bg-[#1D64D8]" />
          </div>
        </div>
        <div className="rounded-[12px] bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10.5px] font-bold text-[#0F1F38]">BrightWeb</p>
            <span className="rounded-full bg-[#E7F4EA] px-1.5 py-0.5 text-[8px] font-bold text-[#159947]">Live</span>
          </div>
          <div className="mt-2 flex h-9 items-end gap-1">
            {[40, 70, 50, 90, 65, 80, 95].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm bg-[#1D64D8]" style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }} />
            ))}
          </div>
        </div>
        <Link to="/work" className="group mt-auto flex items-center justify-between rounded-[12px] bg-white/10 px-3 py-2.5 text-white ring-1 ring-white/10 transition-colors hover:bg-white/15">
          <span className="text-[10.5px] font-bold">IPSNSU · IP Filing</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  </div>
);
