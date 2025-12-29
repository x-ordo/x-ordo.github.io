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
    <section className="relative px-6 pb-24 pt-8">
      <div className="mx-auto max-w-6xl">
        {/* Top Badge */}
        <div className="mb-8 flex items-center gap-3">
          <span className="badge badge-primary">Available for hire</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-[1.1] text-black sm:text-5xl lg:text-[3.5rem]">
              AI로 비즈니스
              <br />
              <span className="relative inline-block">
                가치를 만듭니다
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#22c55e]/30 -z-10" />
              </span>
            </h1>

            <p className="text-lg text-black/70 max-w-lg leading-relaxed">
              제품, 시스템, 비즈니스를 연결하는 풀스택 개발자입니다.
              LLM 기반 서비스 설계부터 자동화 파이프라인까지,
              실제 운영 가능한 솔루션을 구축합니다.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="brutal-tag"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
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

          {/* Right - Stats Cards */}
          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="card-elevated p-6 flex items-center gap-6"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <span className="text-3xl font-bold text-black">{item.value}</span>
                </div>
                <div className="flex-1 border-l-2 border-black/10 pl-6">
                  <p className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-black/80 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Signature Stack */}
            <div className="card-elevated p-6 bg-black text-white">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                Signature Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Python", "LangChain", "PostgreSQL", "Go"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white/10 border border-white/20"
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
