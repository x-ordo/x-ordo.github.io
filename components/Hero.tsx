import Link from "next/link";

const skills = [
  "LLM Orchestration",
  "RAG Systems",
  "Full-Stack",
  "Automation",
];

const highlights = [
  { label: "Projects", value: "21+", desc: "AI, SaaS, Automation" },
  { label: "Focus", value: "LLM", desc: "RAG, Agents, Pipelines" },
  { label: "Goal", value: "Scale", desc: "Production & Revenue" },
];

export default function Hero() {
  return (
    <section className="relative px-6 pt-4 pb-20 lg:pt-6 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* Top Badge */}
        <div className="mb-10 flex items-center gap-3">
          <span className="badge badge-primary">Available for hire</span>
          <span className="h-2 w-2 rounded-full bg-[#00ff00] animate-pulse" />
        </div>

        {/* Main Content - 60:40 ratio */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Heading */}
            <h1 className="text-[2.5rem] font-bold leading-[1.15] text-black sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
              AI로 비즈니스
              <br />
              <span className="relative inline-block mt-1">
                가치를 만듭니다
                <span className="absolute -bottom-1 left-0 h-3 w-full bg-[#00ff00]/30 -z-10" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-base text-black/65 max-w-md leading-[1.75] lg:text-lg lg:max-w-lg">
              제품, 시스템, 비즈니스를 연결하는 풀스택 개발자입니다.
              LLM 기반 서비스 설계부터 자동화 파이프라인까지,
              실제 운영 가능한 솔루션을 구축합니다.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="brutal-tag">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/projects" className="brutal-btn">
                프로젝트 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="brutal-btn-outline">
                연락하기
              </Link>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="flex flex-col gap-5">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card-elevated p-5 flex items-center gap-5 lg:p-6"
              >
                <div className="flex-shrink-0 w-16 lg:w-20">
                  <span className="text-2xl font-bold text-black lg:text-3xl">
                    {item.value}
                  </span>
                </div>
                <div className="flex-1 border-l-2 border-black/10 pl-5">
                  <p className="text-[11px] font-semibold text-black/45 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-black/75 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Signature Stack Card */}
            <div className="p-5 border-2 border-black bg-black text-white transition-all duration-200 hover:shadow-[6px_6px_0_#00ff00] hover:-translate-x-1 hover:-translate-y-1 lg:p-6">
              <p className="text-[11px] font-semibold text-white/45 uppercase tracking-wider mb-4">
                Signature Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Python", "LangChain", "PostgreSQL", "Go"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium bg-white/10 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
