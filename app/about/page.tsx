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
    <div className="px-5 pt-12 pb-24 md:px-8 md:pt-20 md:pb-36 lg:pt-24 lg:pb-48">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <section className="mb-16 md:mb-24 lg:mb-32">
          <span className="badge badge-primary mb-6 md:mb-8 scale-110 origin-left">About</span>
          <h1 className="text-3xl font-black text-black sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            기술과 비즈니스를
            <br />
            연결하는 개발자
          </h1>
          <p className="mt-8 text-sm md:text-lg text-black/70 max-w-2xl leading-relaxed md:leading-[1.8] font-medium lg:text-xl lg:mt-12">
            AI/ML 기반 솔루션을 설계하고, 복잡한 비즈니스 문제를 제품으로 구현합니다.
            <br className="hidden md:block" />
            실용적인 관점으로 시스템을 설계하고 운영합니다.
          </p>
        </section>

        {/* Capabilities */}
        <section className="mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-xs md:text-sm font-bold text-black/50 uppercase tracking-widest mb-8 md:mb-12">
            Core Capabilities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
            {capabilities.map((item) => (
              <div key={item.title} className="card-elevated p-6 md:p-8 lg:p-10 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-5">{item.title}</h3>
                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-xs md:text-sm font-bold text-black/50 uppercase tracking-widest mb-8 md:mb-12">
            Tech Stack
          </h2>
          <div className="card-elevated p-6 md:p-10 lg:p-12">
            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:gap-16">
              {techStack.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm md:text-base font-bold text-black mb-5 md:mb-6 uppercase tracking-wide">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5 md:gap-3">
                    {group.items.map((item) => (
                      <span key={item} className="brutal-tag text-xs md:text-sm py-2 px-3 md:py-2.5 md:px-4">
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
          <div className="card-elevated p-6 md:p-10 lg:p-12 bg-[#00ff00]/10 border-[#00ff00]">
            <h2 className="text-xs md:text-sm font-bold text-black/50 uppercase tracking-widest mb-6 md:mb-8">
              Philosophy
            </h2>
            <p className="text-xl md:text-2xl font-black text-black leading-snug md:leading-relaxed lg:text-3xl tracking-tight">
              실용적인 AI 응용, 사용자 중심 설계, 지속적 학습
            </p>
            <p className="mt-6 text-sm md:text-base text-black/70 leading-relaxed md:mt-8 lg:mt-10 font-medium">
              기술을 통해 실질적인 비즈니스 가치를 만드는 데 집중합니다.
              <br className="hidden md:block" />
              복잡한 문제를 단순하게 풀고, 확장 가능한 시스템을 구축합니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
