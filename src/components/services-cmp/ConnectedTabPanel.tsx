import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const connectedTabPanelClasses =
  "min-[901px]:relative min-[901px]:z-[3] min-[901px]:-mt-px min-[901px]:rounded-b-[15px] min-[901px]:bg-qmax-grey min-[901px]:px-10 min-[901px]:pt-8 min-[901px]:pb-10 min-[901px]:shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] min-[901px]:[clip-path:inset(0_-40px_-40px_-40px)]";

interface ConnectedTabPanelProps {
  children: ReactNode;
  className?: string;
}

export function ConnectedTabPanel({
  children,
  className,
}: ConnectedTabPanelProps) {
  return (
    <div className={cn(connectedTabPanelClasses, className)}>{children}</div>
  );
}
