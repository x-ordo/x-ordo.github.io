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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "bg-black/70 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white shadow-lg">
            J
          </span>
          <span className="hidden text-sm uppercase tracking-[0.3em] text-white/70 md:inline">
            Jed Park
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-white/70">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative transition-colors hover:text-white",
                  isActive && "text-white"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-red-500 to-orange-400 transition-transform",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
