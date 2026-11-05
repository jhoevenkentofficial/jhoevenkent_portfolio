import { partnerLogos } from '../data/partnerLogos';
import type { PartnerLogoShape } from '../data/partnerLogos';

const PartnerLogoMark = ({ shape }: { shape: PartnerLogoShape }) => {
  switch (shape) {
    case 'orbit':
      return <><circle cx="24" cy="24" r="13" /><ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(-35 24 24)" /><circle className="partner-logo__fill" cx="24" cy="24" r="2.5" /></>;
    case 'petal':
      return <><ellipse cx="24" cy="15" rx="6" ry="11" /><ellipse cx="24" cy="33" rx="6" ry="11" /><ellipse cx="15" cy="24" rx="11" ry="6" /><ellipse cx="33" cy="24" rx="11" ry="6" /><circle className="partner-logo__fill" cx="24" cy="24" r="3" /></>;
    case 'grid':
      return <><rect x="7" y="7" width="12" height="12" /><rect x="29" y="7" width="12" height="12" /><rect x="7" y="29" width="12" height="12" /><rect className="partner-logo__fill" x="29" y="29" width="12" height="12" /></>;
    case 'monogram':
      return <><path d="M12 37V11h6l12 16V11h6v26h-6L18 21v16z" /><circle cx="39" cy="11" r="3" /></>;
    case 'rings':
      return <><circle cx="24" cy="24" r="16" /><circle cx="24" cy="24" r="9" /><circle className="partner-logo__fill" cx="24" cy="24" r="2.5" /></>;
    case 'asterisk':
      return <><path d="M24 7v34M9.3 15.5l29.4 17M9.3 32.5l29.4-17" /><circle className="partner-logo__fill" cx="24" cy="24" r="4" /></>;
    case 'arch':
      return <><path d="M9 39V24a15 15 0 0 1 30 0v15M17 39V24a7 7 0 0 1 14 0v15" /><path d="M5 39h38" /></>;
    case 'diamond':
      return <><path d="M24 5 43 24 24 43 5 24z" /><path d="M24 14 34 24 24 34 14 24z" /><circle className="partner-logo__fill" cx="24" cy="24" r="2" /></>;
    case 'columns':
      return <><path d="M8 39V12h7v27M20.5 39V5h7v34M33 39V17h7v22M5 42h38" /></>;
    case 'spark':
      return <><path d="M24 4c2.8 11.2 4.8 13.2 16 16-11.2 2.8-13.2 4.8-16 16-2.8-11.2-4.8-13.2-16-16C19.2 17.2 21.2 15.2 24 4z" /><circle className="partner-logo__fill" cx="38" cy="38" r="4" /></>;
  }
};

const LogoGroup = ({ duplicate = false }: { duplicate?: boolean }) => (
  <div className="partner-marquee__group" aria-hidden="true" data-duplicate={duplicate || undefined}>
    {partnerLogos.map(({ id, shape }) => (
      <svg
        key={id}
        className="partner-logo"
        viewBox="0 0 48 48"
        focusable="false"
      >
        <PartnerLogoMark shape={shape} />
      </svg>
    ))}
  </div>
);

export const PartnerLogoMarquee = () => (
  <div className="partner-marquee" aria-hidden="true">
    <div className="partner-marquee__track">
      <LogoGroup />
      <LogoGroup duplicate />
    </div>
  </div>
);
