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
  const { t, locale } = useI18n();

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.resume, href: `/resume/${locale}` },
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
            <span className="text-[12px] font-black">HP</span>
          </div>
          <span className="text-[15px] font-bold text-[#171a20] tracking-tight group-hover:text-[#00cc00] transition-colors">
            Haseong Park
          </span>
        </Link>

        {/* Desktop Nav Links + Social + Language Toggle */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            // Handle resume page special case (matches /resume, /resume/ko, /resume/en)
            const isActive = item.href.startsWith("/resume")
              ? pathname.startsWith("/resume")
              : pathname === item.href;
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

          {/* Social Icons & CTA */}
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-[#e5e7eb]">
            <a
              href="https://github.com/x-ordo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#f7f7f5] text-[#5c5e62] hover:bg-[#171a20] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:haspark912@kakao.com"
              className="px-4 py-2 rounded-lg bg-[#00cc00] text-white text-[13px] font-bold hover:bg-[#00aa00] transition-colors"
            >
              Contact
            </a>
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
              // Handle resume page special case (matches /resume, /resume/ko, /resume/en)
              const isActive = item.href.startsWith("/resume")
                ? pathname.startsWith("/resume")
                : pathname === item.href;
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
