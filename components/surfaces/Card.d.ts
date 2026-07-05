import { ReactNode, CSSProperties } from "react";

export interface CardProps {
  children: ReactNode;
  /** surface = solid white card w/ hover-lift (.surface-card); glass = frosted panel (.glass-card) */
  variant?: "surface" | "glass";
  hoverLift?: boolean;
  padding?: string;
  style?: CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
