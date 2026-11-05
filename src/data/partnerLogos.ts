export type PartnerLogoShape =
  | 'orbit'
  | 'petal'
  | 'grid'
  | 'monogram'
  | 'rings'
  | 'asterisk'
  | 'arch'
  | 'diamond'
  | 'columns'
  | 'spark';

export interface PartnerLogo {
  id: string;
  shape: PartnerLogoShape;
}

// Replace these abstract marks with approved partner SVG or PNG assets when available.
export const partnerLogos: PartnerLogo[] = [
  { id: 'mark-01', shape: 'orbit' },
  { id: 'mark-02', shape: 'petal' },
  { id: 'mark-03', shape: 'grid' },
  { id: 'mark-04', shape: 'monogram' },
  { id: 'mark-05', shape: 'rings' },
  { id: 'mark-06', shape: 'asterisk' },
  { id: 'mark-07', shape: 'arch' },
  { id: 'mark-08', shape: 'diamond' },
  { id: 'mark-09', shape: 'columns' },
  { id: 'mark-10', shape: 'spark' },
];
