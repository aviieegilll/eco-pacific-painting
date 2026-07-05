export interface LoadingScreenProps {
  /** Controls mount — production shows this for ~2.2s on first paint then hides it */
  visible?: boolean;
}

export function LoadingScreen(props: LoadingScreenProps): JSX.Element | null;
