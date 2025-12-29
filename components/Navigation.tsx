"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-black/[0.08] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16 lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-black bg-[#00ff00] text-sm font-bold text-black transition-all group-hover:shadow-[3px_3px_0_#000] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 lg:h-10 lg:w-10">
            JP
          </span>
          <span className="hidden text-sm font-semibold text-black/85 md:inline">
            Jed Park
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all lg:px-4",
                  isActive
                    ? "text-black"
                    : "text-black/55 hover:text-black"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#00ff00] lg:left-4 lg:right-4" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
