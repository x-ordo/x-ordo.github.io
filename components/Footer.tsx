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
    <footer className="bg-white border-t-2 border-black py-20 px-4 md:px-8">
      <div className="system-grid w-full border-black bg-black gap-1px">
        {/* Brand */}
        <div className="col-span-12 md:col-span-6 bg-white p-10 md:p-16 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#00ff00] text-lg font-black shadow-[4px_4px_0_0_#000]">
                JP
              </span>
              <span className="text-2xl font-black uppercase tracking-tighter">Jed Park</span>
            </div>
            <p className="text-lg font-bold text-black max-w-sm leading-tight">
              AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 Sovereign Hacker입니다.
            </p>
          </div>
          <div className="mt-20">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">© 2026 SVRGN_ARCHITECT</p>
          </div>
        </div>

        {/* Navigation & Connect */}
        <div className="col-span-12 md:col-span-6 bg-white grid grid-cols-2">
          <div className="p-10 md:p-16 border-r border-black">
            <p className="text-label mb-8">Navigation</p>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-black uppercase hover:text-[#00aa00] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-10 md:p-16">
            <p className="text-label mb-8">Connect</p>
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm font-black uppercase hover:text-[#00aa00] transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-2 p-10 border-t border-black bg-[#fafafa]">
             <p className="text-[10px] font-mono text-gray-400">
                STABLE_BUILD_RELEASE_2026 // BUILT_WITH_NEXTJS_16 // POWERED_BY_AI
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}