export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
  phone?: string;
  /** true = frosted "glass-nav" state (post-scroll); false = transparent over hero */
  scrolled?: boolean;
}

export function Navbar(props: NavbarProps): JSX.Element;
