export interface SectionProps {
  id: string;
  className?: string;
}

export enum Country {
  France = 'FR',
  Russia = 'RU'
}

export interface NavItem {
  label: string;
  id: string;
}