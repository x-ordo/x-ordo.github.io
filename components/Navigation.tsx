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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "glass border-b-2 border-black shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16 md:px-10 md:h-20 lg:h-24">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 md:gap-4">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-black bg-[#00ff00] text-xs font-black text-black transition-all group-hover:shadow-[4px_4px_0_#000] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 md:h-10 md:w-10 md:text-sm lg:h-11 lg:w-11">
            JP
          </span>
          <span className="hidden text-sm font-black text-black md:inline lg:text-base tracking-tight">
            Jed Park
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all lg:px-6 lg:text-base",
                  isActive
                    ? "text-black"
                    : "text-black/50 hover:text-black hover:-translate-y-0.5"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-1 bg-[#00ff00] lg:left-6 lg:right-6" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 border-2 border-black bg-white transition-all hover:shadow-[2px_2px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5"
          aria-label="Toggle menu"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2.5 text-xs font-bold uppercase tracking-wider border-2 transition-all",
                    isActive
                      ? "border-black bg-[#00ff00] text-black shadow-[3px_3px_0_#000]"
                      : "border-transparent text-black/70 hover:border-black hover:bg-black/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
