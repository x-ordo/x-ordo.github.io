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
    <footer className="bg-white border-t border-[#f2f4f6] py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-28">

          {/* Brand Column */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#171a20] text-[#00ff00] shadow-md">
                <span className="text-sm font-black">JP</span>
              </div>
              <span className="text-xl font-bold text-[#171a20] tracking-tight">Jed Park</span>
            </div>
            <p className="text-base md:text-[17px] leading-[1.8] text-[#3e3e3e] mb-10 font-normal">
              AI/ML 기반 솔루션을 설계하고<br/>비즈니스 가치를 구현하는<br/><span className="text-[#171a20] font-semibold">Sovereign Hacker</span>입니다.
            </p>
            <p className="text-sm text-[#5c5e62] font-medium font-mono uppercase tracking-wider">
              © 2026 Jed Park.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="text-sm font-bold text-[#171a20] mb-7 font-mono uppercase tracking-widest">Navigation</h4>
              <nav className="flex flex-col gap-5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base text-[#3e3e3e] hover:text-[#00cc00] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#171a20] mb-7 font-mono uppercase tracking-widest">Connect</h4>
              <div className="flex flex-col gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-base text-[#3e3e3e] hover:text-[#00cc00] transition-colors font-medium"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Subtle Tech Badge */}
        <div className="mt-20 md:mt-24 pt-8 border-t border-[#f2f4f6] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
           <p className="text-[12px] font-medium text-[#8b95a1]">
              Built with Next.js 16 & Tailwind
           </p>
           <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[12px] font-medium text-[#8b95a1]">All Systems Operational</span>
           </div>
        </div>

      </div>
    </footer>
  );
}