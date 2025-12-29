import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jed Park",
  description: "프로젝트 협업 및 문의를 위한 연락처 페이지입니다.",
};

const focusAreas = [
  "LLM Product Design",
  "B2B SaaS",
  "Automation",
  "RAG Pipelines",
  "Growth & Monetization",
];

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <section className="mb-12">
          <span className="badge badge-secondary mb-4">Contact</span>
          <h1 className="text-3xl font-bold text-black sm:text-4xl leading-tight">
            함께 만들
            <br />
            프로젝트가 있다면
          </h1>
          <p className="mt-6 text-lg text-black/70 leading-relaxed">
            스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을 환영합니다.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="grid gap-4 sm:grid-cols-2 mb-12">
          <div className="card-elevated p-6">
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-2">
              Email
            </p>
            <p className="text-lg font-semibold text-black mb-4">
              parkdavid31@gmail.com
            </p>
            <a
              href="mailto:parkdavid31@gmail.com"
              className="brutal-btn text-sm"
            >
              메일 보내기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <div className="card-elevated p-6">
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-2">
              GitHub
            </p>
            <p className="text-lg font-semibold text-black mb-4">
              github.com/x-ordo
            </p>
            <a
              href="https://github.com/x-ordo"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-outline text-sm"
            >
              프로필 방문
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Focus Areas */}
        <section>
          <div className="card-elevated p-8 bg-[#eab308]/5 border-[#eab308]/20">
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-4">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span key={item} className="brutal-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
