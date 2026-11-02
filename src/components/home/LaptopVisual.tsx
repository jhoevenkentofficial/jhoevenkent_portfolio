import { Briefcase, LayoutDashboard, Sparkles } from 'lucide-react';

const icons = [LayoutDashboard, Briefcase, Sparkles];
const cards = ['Web Applications', 'Business Systems', 'AI & Automation'];

export const LaptopVisual = () => (
  <div className="relative mx-auto w-full max-w-[520px]">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-6 rounded-[28px]"
      style={{
        background:
          'radial-gradient(420px 260px at 60% 40%, rgba(32,197,43,0.14), transparent 70%)',
      }}
    />
    <div className="relative">
      <div className="overflow-hidden rounded-[14px] border border-[#1B0638]/10 bg-white shadow-[0_24px_60px_-30px_rgba(23,26,31,0.4)]">
        <div className="flex items-center gap-2 border-b border-[#1B0638]/10 bg-[#F4F5F6] px-4 py-2.5">
          <span className="flex gap-1.5">
            <i className="block h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </span>
          <span className="ml-2 hidden flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-[#171A1F]/65 ring-1 ring-[#1B0638]/10 sm:block">
            brightweb — business dashboard
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-bold text-[#1B0638]">BrightWeb Dashboard</p>
            <span className="rounded-full bg-[#1B0638] px-2.5 py-1 text-[10px] font-semibold text-white">
              Live
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-[10px] bg-[#1B0638]/10 p-2"><p className="text-[13px] font-bold text-[#1B0638]">12</p><p className="text-[9.5px] text-[#171A1F]/75">Websites</p></div>
            <div className="rounded-[10px] bg-[#20C52B]/10 p-2"><p className="text-[13px] font-bold text-[#1B0638]">8</p><p className="text-[9.5px] text-[#171A1F]/75">Systems</p></div>
            <div className="rounded-[10px] bg-[#171A1F]/10 p-2"><p className="text-[13px] font-bold text-[#1B0638]">24</p><p className="text-[9.5px] text-[#171A1F]/75">Automations</p></div>
          </div>
          <div className="mt-2 rounded-[10px] border border-[#1B0638]/10 bg-[#F4F5F6] p-2.5">
            <div className="flex h-[52px] items-end gap-1.5">
              {[38, 62, 45, 78, 56, 88, 70, 96, 64, 82].map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-[#20C52B]" style={{ height: `${h}%`, opacity: 0.4 + i * 0.06 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[10px] w-[112%] -translate-x-[5.5%] rounded-b-[12px] bg-[#171A1F]/20" />
    </div>
    {cards.map((c, i) => {
      const I = icons[i];
      const pos =
        i === 0
          ? '-left-3 top-[14%] lg:-left-8'
          : i === 1
            ? '-right-3 top-[40%] lg:-right-8'
            : '-left-2 bottom-[6%] lg:-left-6';
      return (
        <div key={c} className={`pointer-events-none absolute hidden sm:block ${pos}`}>
          <div className="flex items-center gap-2.5 rounded-[12px] border border-[#1B0638]/10 bg-white/95 py-2 pl-2 pr-4 shadow-[0_12px_28px_-16px_rgba(23,26,31,0.35)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#20C52B]/10 text-[#20C52B]">
              <I className="h-4 w-4" strokeWidth={1.9} />
            </span>
            <span className="text-[12.5px] font-bold text-[#1B0638]">{c}</span>
          </div>
        </div>
      );
    })}
    <div className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
      {cards.map((c, i) => {
        const I = icons[i];
        return (
          <span key={c} className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-[12px] font-semibold text-[#1B0638]">
            <I className="h-3.5 w-3.5 text-[#20C52B]" />{c}
          </span>
        );
      })}
    </div>
  </div>
);
