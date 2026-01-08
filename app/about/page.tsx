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
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="system-grid w-full border-black">

        {/* Header */}
        <div className="col-span-12 p-8 md:p-16 lg:p-20 border-b-2 border-black bg-[#fafafa]">
          <span className="text-label inline-block mb-8 md:mb-10 border-b-2 border-black">About The Architect</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-8 md:mb-12 leading-[0.95]">
            Bridging <span className="text-[#00cc00]">Tech</span> & <span className="text-[#00cc00]">Business</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-black max-w-3xl leading-[1.6]">
            AI/ML 기반 솔루션을 설계하고, 복잡한 비즈니스 문제를 제품으로 구현합니다.<br/>
            실용적인 관점으로 시스템을 설계하고 운영합니다.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="col-span-12 p-8 md:p-16 lg:p-20 border-b-2 border-black">
          <h2 className="text-label mb-10 md:mb-14">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-2 border-black">
            {capabilities.map((item) => (
              <div key={item.title} className="bg-white p-8 md:p-10 flex flex-col justify-between hover:bg-[#00ff0005] transition-colors">
                <h3 className="text-lg md:text-xl font-black uppercase mb-5 md:mb-6">{item.title}</h3>
                <p className="text-sm md:text-base font-bold text-gray-600 leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-12 p-8 md:p-16 lg:p-20 border-b-2 border-black bg-[#f0f0f0]">
          <h2 className="text-label mb-10 md:mb-14">Authorized Toolset</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
            {techStack.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm md:text-base font-black uppercase mb-5 md:mb-6 border-b-2 border-black pb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="text-[11px] md:text-xs font-black bg-black text-[#00ff00] px-3 py-2 border-2 border-black shadow-[3px_3px_0_0_#000]">
                      {item.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="col-span-12 p-8 md:p-16 lg:p-24 bg-black text-white">
          <h2 className="text-label text-[#00ff00] border-[#00ff00] mb-10 md:mb-12">Philosophy</h2>
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-[1.15] mb-10 md:mb-12">
              Pragmatic AI. <br/>
              User-Centric Architecture. <br/>
              Continuous Sovereignty.
            </p>
            <p className="text-base md:text-lg lg:text-xl font-bold text-gray-400 leading-[1.75]">
              기술을 통해 실질적인 비즈니스 가치를 만드는 데 집중합니다.
              복잡한 문제를 단순하게 풀고, 확장 가능한 시스템을 구축합니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}