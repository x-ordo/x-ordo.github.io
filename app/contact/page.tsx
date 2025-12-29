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
    <div className="px-6 pt-10 pb-24 lg:pt-14 lg:pb-32">
      <div className="mx-auto max-w-3xl">
        {/* Page Header */}
        <section className="mb-14 lg:mb-16">
          <span className="badge badge-secondary mb-4">Contact</span>
          <h1 className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl leading-tight">
            함께 만들
            <br />
            프로젝트가 있다면
          </h1>
          <p className="mt-6 text-base text-black/60 leading-[1.75] lg:text-lg lg:mt-8">
            스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을 환영합니다.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="grid gap-5 sm:grid-cols-2 mb-14 lg:mb-16">
          <div className="card-elevated p-6 lg:p-7">
            <p className="text-[11px] font-semibold text-black/40 uppercase tracking-wider mb-3">
              Email
            </p>
            <p className="text-base font-semibold text-black mb-5 lg:text-lg">
              parkdavid31@gmail.com
            </p>
            <a href="mailto:parkdavid31@gmail.com" className="brutal-btn text-sm">
              메일 보내기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <div className="card-elevated p-6 lg:p-7">
            <p className="text-[11px] font-semibold text-black/40 uppercase tracking-wider mb-3">
              GitHub
            </p>
            <p className="text-base font-semibold text-black mb-5 lg:text-lg">
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
          <div className="card-elevated p-6 lg:p-8 bg-[#ffff00]/[0.06] border-[#ffff00]/30">
            <p className="text-[11px] font-semibold text-black/40 uppercase tracking-wider mb-5">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2.5">
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
