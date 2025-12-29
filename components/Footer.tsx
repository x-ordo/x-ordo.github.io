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
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center border-2 border-black bg-[#22c55e] text-sm font-bold">
                JP
              </span>
              <span className="font-semibold text-black">Jed Park</span>
            </div>
            <p className="text-sm text-black/60 max-w-xs leading-relaxed">
              AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 풀스택 개발자입니다.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black/70 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-black/70 hover:text-black transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-black/40">
            © 2025 Jed Park. All rights reserved.
          </p>
          <p className="text-xs text-black/40">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
