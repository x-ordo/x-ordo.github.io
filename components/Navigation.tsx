"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useI18n } from "../lib/i18n";
import LanguageToggle from "./ui/LanguageToggle";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-[#f2f4f6] py-0"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171a20] text-[#00ff00] transition-transform group-hover:scale-105 group-hover:bg-[#00ff00] group-hover:text-[#171a20]">
            <span className="text-[12px] font-black">JP</span>
          </div>
          <span className="text-[15px] font-bold text-[#171a20] tracking-tight group-hover:text-[#00cc00] transition-colors">
            Jed Park
          </span>
        </Link>

        {/* Desktop Nav Links + Language Toggle */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[14px] font-mono font-bold uppercase tracking-widest transition-colors",
                  isActive
                    ? "text-[#00cc00]"
                    : "text-[#171a20]/60 hover:text-[#171a20]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-2 pl-4 border-l border-[#e5e7eb]">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile: Language Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-gray-100 text-[#191f28] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#f2f4f6] shadow-xl py-4 px-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors",
                    isActive
                      ? "bg-green-50 text-[#00cc00]"
                      : "text-[#4e5968] hover:bg-gray-50 hover:text-[#191f28]"
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
