"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const socials = [
  { label: "GitHub", href: "https://github.com/x-ordo" },
  { label: "Email", href: "mailto:haspark912@kakao.com" },
];

export default function Footer() {
  const { t } = useI18n();

  const links = [
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-[#171a20] border-t-4 border-[#00ff00]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16">

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00ff00] text-[#171a20]">
                <span className="text-sm font-black">HP</span>
              </div>
              <span className="text-lg font-black text-white tracking-tight">Haseong Park</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.footer.bio}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black text-[#00ff00] mb-4 font-mono uppercase tracking-widest">
              {t.footer.navigation}
            </h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#00ff00] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-black text-[#00ff00] mb-4 font-mono uppercase tracking-widest">
              {t.footer.connect}
            </h4>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-gray-400 hover:text-[#00ff00] transition-colors font-medium"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-500 font-mono">
            © 2026 {t.footer.copyright}
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00cc00]"></span>
            </span>
            <span className="text-xs font-mono text-gray-500">{t.footer.status}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
