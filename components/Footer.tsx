import Link from "next/link";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/x-ordo" },
  { label: "Email", href: "mailto:parkdavid31@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-[1000px] px-8 py-20 md:px-16 md:py-24 lg:px-0 lg:py-32">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-20 lg:gap-24">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
              <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center border-2 border-black bg-[#00ff00] text-xs md:text-sm font-black">
                JP
              </span>
              <span className="text-sm md:text-base font-bold text-black">Jed Park</span>
            </div>
            <p className="text-xs md:text-sm text-black/60 max-w-xs leading-relaxed">
              AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 풀스택 개발자입니다.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] md:text-[11px] font-bold text-black/50 uppercase tracking-wider mb-4 md:mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-2 md:gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs md:text-sm font-semibold text-black/60 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[9px] md:text-[11px] font-bold text-black/50 uppercase tracking-wider mb-4 md:mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-2 md:gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-xs md:text-sm font-semibold text-black/60 hover:text-black transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t-2 border-black/10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-3">
          <p className="text-[10px] md:text-xs text-black/50 font-semibold">
            © 2025 Jed Park. All rights reserved.
          </p>
          <p className="text-[10px] md:text-xs text-black/50 font-semibold">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
