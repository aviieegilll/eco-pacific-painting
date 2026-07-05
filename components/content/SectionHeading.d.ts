import { ReactNode, CSSProperties } from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  /** Use on dark backgrounds (e.g. the navy-900 Projects section) */
  inverse?: boolean;
  style?: CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
