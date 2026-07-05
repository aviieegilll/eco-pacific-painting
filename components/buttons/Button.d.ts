import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  /** Visual style — matches .btn-primary / .btn-secondary / .btn-light / .btn-outline-navy */
  variant?: "primary" | "secondary" | "light" | "outline-navy";
  size?: "md" | "sm";
  /** Renders the liquid paint-drip SVG fused to the bottom edge. Reserve for the four
   * approved CTAs only: Get Free Quote, Call Now, Learn More About Us, View All Services. */
  drip?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
