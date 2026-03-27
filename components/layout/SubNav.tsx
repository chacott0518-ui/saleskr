"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubNavProps {
  items: { label: string; href: string }[];
  activeItem?: string;
}

export default function SubNav({ items, activeItem }: SubNavProps) {
  const pathname = usePathname();
  const current = activeItem ?? pathname;

  return (
    <div className="sticky top-[72px] z-40 border-b border-brand-border bg-brand-bg">
      <nav
        className="hide-scrollbar mx-auto flex max-w-6xl items-center justify-center gap-0 overflow-x-auto px-6"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item) => {
          const isActive = current === item.href;
          return (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className={`whitespace-nowrap px-5 py-3 text-sm transition-colors duration-200 md:px-8 ${
                  isActive
                    ? "border-b-2 border-blue font-semibold text-blue"
                    : "font-normal text-brand-muted hover:text-brand-text"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
