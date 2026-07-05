import { CSSProperties } from "react";

export interface ImagePlaceholderProps {
  label?: string;
  ratio?: "square" | "video" | "portrait" | "wide";
  /** CSS gradient override, e.g. "linear-gradient(...)" — matches the per-project placeholderHue values in the source */
  gradient?: string;
  style?: CSSProperties;
}

export function ImagePlaceholder(props: ImagePlaceholderProps): JSX.Element;
