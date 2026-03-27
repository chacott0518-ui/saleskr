"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  primary:
    "bg-blue text-white hover:bg-blue-dark",
  secondary:
    "bg-white text-navy hover:bg-brand-bg",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-navy",
} as const;

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
} as const;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", ...rest } = props;

  const classes = [
    "inline-flex items-center justify-center rounded-md font-bold transition-all duration-200 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href != null) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorProps} />
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
}
