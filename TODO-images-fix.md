# Images missing on Vercel — fix plan

## Problem
Some components reference images via hardcoded URLs like:
- `/src/assets/images/...`

In production builds, Vercel/Vite does not serve `/src/...` as static files, so those images 404.

## What’s wrong in code (confirmed)
- `src/components/Work.tsx` defines `projectImages` using `/src/assets/images/...` string paths.

## Fix options
### Option A (recommended): use Vite imports
- Replace the hardcoded string paths in `Work.tsx` with `import ... from '../assets/images/...';`
- Use the imported URLs in `projectImages`.

### Option B: move images to `public/`
- Move `src/assets/images/*` to `public/images/*` (or subset used by the app)
- Change URLs to `/images/<file>`

## Next step
Implement Option A in `src/components/Work.tsx` (fastest and minimal changes).

