 import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "light";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: never;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  solid: "bg-light-primary text-white",
  outline: "border bg-white border-dark-secondary text-dark-secondary",
  light: "bg-light text-light-primary",
};

// Roll-in duplicate's color once it slides into view — matches each
// variant's existing hover intent (outline used to invert to solid gold,
// solid/light just needed a legible accent tone).
const rollHoverTextStyles: Record<ButtonVariant, string> = {
  solid: "text-white",
  outline: "text-dark-secondary",
  light: "text-light-primary",
};

export function Button({ children, variant = "solid", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium font-body transition-colors duration-200";
  const styles = `${base} ${variantStyles[variant]} ${className}`;

  // Vertical rolling text: two stacked identical labels inside an
  // overflow-hidden mask. On hover the stack translates up by exactly
  // one line height, revealing the duplicate label from below.
  const rollingContent = (
    <span className="group relative block h-[1.25em] overflow-hidden">
      <span className="flex flex-col transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        <span className="block h-[1.25em] leading-[1.25em]">{children}</span>
        <span className={`block h-[1.25em] leading-[1.25em] ${rollHoverTextStyles[variant]}`}>
          {children}
        </span>
      </span>
    </span>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={`${styles} group`}>
        {rollingContent}
      </Link>
    );
  }

  return (
    <button className={`${styles} group`} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {rollingContent}
    </button>
  );
}