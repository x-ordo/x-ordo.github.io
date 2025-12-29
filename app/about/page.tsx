import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jed Park",
  description: "Jed Park의 개발 철학과 핵심 역량을 소개합니다.",
};

const capabilities = [
  {
    title: "Product Thinking",
    description: "문제 정의부터 시장 검증까지 제품의 전체 흐름을 설계합니다.",
  },
  {
    title: "LLM Orchestration",
    description: "RAG, 에이전트, 멀티모달 파이프라인을 서비스에 통합합니다.",
  },
  {
    title: "Automation",
    description: "파트너 API와 결제, 운영 플로우를 자동화해 비용을 절감합니다.",
  },
  {
    title: "Execution",
    description: "실서비스 배포, 성장, 운영을 동시에 고려한 실행력을 중시합니다.",
  },
];

const techStack = [
  {
    title: "Languages",
    items: ["Go", "Java", "Kotlin", "TypeScript", "Python"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Gin", "Fiber", "FastAPI", "Next.js"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "AI/ML",
    items: ["OpenAI", "LangChain", "LangGraph", "LlamaIndex", "Upstage"],
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <section className="mb-16">
          <span className="badge badge-primary mb-4">About</span>
          <h1 className="text-3xl font-bold text-black sm:text-4xl leading-tight">
            기술과 비즈니스를
            <br />
            연결하는 개발자
          </h1>
          <p className="mt-6 text-lg text-black/70 max-w-2xl leading-relaxed">
            AI/ML 기반 솔루션을 설계하고, 복잡한 비즈니스 문제를 제품으로 구현합니다.
            실용적인 관점으로 시스템을 설계하고 운영합니다.
          </p>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-6">
            Core Capabilities
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="card-elevated p-6"
              >
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-6">
            Tech Stack
          </h2>
          <div className="card-elevated p-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {techStack.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-black mb-3">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="brutal-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <div className="card-elevated p-8 bg-[#22c55e]/5 border-[#22c55e]/20">
            <h2 className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-4">
              Philosophy
            </h2>
            <p className="text-xl font-semibold text-black leading-relaxed">
              실용적인 AI 응용, 사용자 중심 설계, 지속적 학습
            </p>
            <p className="mt-4 text-sm text-black/60 leading-relaxed">
              기술을 통해 실질적인 비즈니스 가치를 만드는 데 집중합니다.
              복잡한 문제를 단순하게 풀고, 확장 가능한 시스템을 구축합니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
