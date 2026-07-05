export interface InputProps {
  as?: "input" | "select" | "textarea";
  type?: "text" | "email" | "tel" | "date";
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  /** Options for `as="select"` */
  options?: string[];
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  id?: string;
}

export function Input(props: InputProps): JSX.Element;
