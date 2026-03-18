import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <div
      className={[
        "border border-black/10 bg-white shadow-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: Props) {
  return (
    <div className={["border-b border-black/10 p-6", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

export function CardBody({ children, className }: Props) {
  return (
    <div className={["p-6", className].filter(Boolean).join(" ")}>{children}</div>
  );
}

