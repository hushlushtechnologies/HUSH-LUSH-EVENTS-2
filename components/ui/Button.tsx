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
  solid:
    "bg-light-primary text-white hover:opacity-90",
  outline:
    "border bg-white border-dark-secondary text-dark-secondary hover:bg-light-primary hover:text-white",
 light: "bg-light text-light-primary hover:bg-light-card",
};

export function Button({ children, variant = "solid", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium font-body transition-colors duration-200";
  const styles = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}