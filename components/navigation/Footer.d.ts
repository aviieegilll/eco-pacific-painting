export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
  services?: string[];
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
}

export function Footer(props: FooterProps): JSX.Element;
