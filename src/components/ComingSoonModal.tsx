import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ComingSoonModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export const ComingSoonModal = ({
  open,
  onClose,
  title = 'Mobile Apps & Web Systems',
}: ComingSoonModalProps) => {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F5F6] text-[#1B0638]/50 hover:bg-[#E8EAF0] transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Body */}
        <div className="flex flex-col items-center px-8 py-14 text-center">
          {/* Large Coming Soon text */}
          <h1 className="text-[42px] font-black tracking-tight text-[#1B0638] leading-none">
            Coming
          </h1>
          <h1 className="text-[42px] font-black tracking-tight text-[#20C52B] leading-none">
            Soon
          </h1>

          {/* Divider */}
          <div className="my-6 h-px w-16 bg-[#1B0638]/10" />

          {/* Subtitle */}
          <p className="text-[13.5px] leading-relaxed text-[#171A1F]/50">
            {title} — stay tuned.
          </p>
        </div>
      </div>
    </div>
  );
};
