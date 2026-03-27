"use client";

import { type ReactNode, type CSSProperties } from "react";
import Link from "next/link";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "dark";
  className?: string;
  style?: CSSProperties;
  fullWidth?: boolean;
}

const gradients = {
  primary: {
    default: "linear-gradient(135deg, #1E5FA8 0%, #4A9EFF 100%)",
    hover: "linear-gradient(135deg, #154C8A 0%, #1E5FA8 100%)",
    shadow: "0 8px 25px rgba(30,95,168,0.45), 0 4px 12px rgba(74,158,255,0.3)",
  },
  dark: {
    default: "linear-gradient(135deg, #0A1F44 0%, #1B3A6B 100%)",
    hover: "linear-gradient(135deg, #061528 0%, #0A1F44 100%)",
    shadow: "0 8px 25px rgba(10,31,68,0.5), 0 4px 12px rgba(27,58,107,0.3)",
  },
};

const baseStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  color: "white",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  textDecoration: "none",
  minHeight: "52px",
};

export default function GradientButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
  style = {},
  fullWidth = false,
}: GradientButtonProps) {
  const g = gradients[variant];

  const combinedStyle: CSSProperties = {
    ...baseStyle,
    background: g.default,
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : undefined,
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const el = e.currentTarget as HTMLElement;
    el.style.transform = "translateY(-2px)";
    el.style.boxShadow = g.shadow;
    el.style.background = g.hover;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = "translateY(0px)";
    el.style.boxShadow = "none";
    el.style.background = g.default;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const el = e.currentTarget as HTMLElement;
    el.style.transform = "translateY(0px)";
    el.style.boxShadow = "0 4px 12px rgba(30,95,168,0.3)";
  };

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={className}
        style={combinedStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        <Shimmer />
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={combinedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
    >
      <Shimmer />
      {children}
    </button>
  );
}

function Shimmer() {
  return (
    <span
      className="shimmer-effect pointer-events-none absolute inset-0"
      style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
        transform: "translateX(-100%)",
        transition: "transform 0.4s ease",
      }}
    />
  );
}
