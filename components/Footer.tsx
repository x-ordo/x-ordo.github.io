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
    <footer className="bg-white border-t border-[#f2f4f6] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24">
          
          {/* Brand Column */}
          <div className="flex-1 max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#191f28] text-white shadow-md">
                <span className="text-sm font-bold">JP</span>
              </div>
              <span className="text-xl font-bold text-[#191f28] tracking-tight">Jed Park</span>
            </div>
            <p className="text-[17px] leading-relaxed text-[#4e5968] mb-8 font-normal">
              AI/ML 기반 솔루션을 설계하고<br/>비즈니스 가치를 구현하는<br/><span className="text-[#191f28] font-semibold">Sovereign Hacker</span>입니다.
            </p>
            <p className="text-sm text-[#8b95a1] font-medium">
              © 2026 Jed Park. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-12 md:gap-20">
            <div>
              <h4 className="text-sm font-semibold text-[#191f28] mb-6">Navigation</h4>
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[15px] text-[#4e5968] hover:text-[#0066ff] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#191f28] mb-6">Connect</h4>
              <div className="flex flex-col gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[15px] text-[#4e5968] hover:text-[#0066ff] transition-colors font-medium"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Subtle Tech Badge */}
        <div className="mt-20 pt-8 border-t border-[#f2f4f6] flex justify-between items-center">
           <p className="text-[11px] font-medium text-[#8b95a1]">
              Built with Next.js 16 & Tailwind
           </p>
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[11px] font-medium text-[#8b95a1]">All Systems Operational</span>
           </div>
        </div>

      </div>
    </footer>
  );
}