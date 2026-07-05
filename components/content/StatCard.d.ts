import { ReactNode } from "react";

export interface StatCardProps {
  icon: ReactNode;
  /** Final number the count-up animation lands on */
  value: number;
  suffix?: string;
  label: string;
}

export function StatCard(props: StatCardProps): JSX.Element;
