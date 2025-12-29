import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-white/70 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg text-white">
            Jed Park Portfolio
          </p>
          <p>AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현합니다.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <a
            href="mailto:parkdavid31@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
