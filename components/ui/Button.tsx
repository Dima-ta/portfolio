import Link from "next/link";
import { ComponentProps } from "react";

type Props = {
  intent?: "primary" | "secondary";
  asChild?: boolean;
} & ComponentProps<"button"> & { children?: React.ReactNode };

export function Button({ intent = "primary", asChild, className = "", children, ...rest }: Props) {
  const classes = `rounded-full px-4 py-2 text-sm font-medium transition ${intent === "primary" ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-slate-100 hover:bg-slate-200" } ${className}`;
  if (asChild) {
    return <span className={classes}>{children}</span>;
  }
  return <button className={classes} {...rest}>{children}</button>;
}
