import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jed Park",
  description: "프로젝트 협업 및 문의를 위한 연락처 페이지입니다.",
};

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 text-white">
      <section className="mx-auto max-w-3xl space-y-8">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Contact
        </p>
        <h1 className="font-display text-4xl text-white sm:text-5xl">
          함께 만들 프로젝트가 있다면
        </h1>
        <p className="text-lg text-white/70">
          스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을
          환영합니다. 아래 채널로 편하게 연락해주세요.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              Email
            </p>
            <p className="mt-3 text-lg text-white">parkdavid31@gmail.com</p>
            <a
              href="mailto:parkdavid31@gmail.com"
              className="mt-4 inline-flex text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white"
            >
              Send a message →
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              GitHub
            </p>
            <p className="mt-3 text-lg text-white">github.com/x-ordo</p>
            <a
              href="https://github.com/x-ordo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white"
            >
              Visit profile →
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 to-orange-500/5 p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Focus Areas
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
            {[
              "LLM Product Design",
              "B2B SaaS",
              "Automation",
              "RAG Pipelines",
              "Growth & Monetization",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
