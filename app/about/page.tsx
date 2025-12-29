import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jed Park",
  description: "Jed Park의 개발 철학과 핵심 역량을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          About
        </p>
        <h1 className="font-display text-4xl text-white sm:text-5xl">
          기술과 비즈니스를 연결하는 개발자
        </h1>
        <p className="text-lg text-white/70">
          Jed Park은 AI/ML 기반 솔루션을 설계하고, 복잡한 비즈니스 문제를
          제품으로 구현합니다. 고대의 지혜와 현대 기술을 연결하는 관점으로
          시스템을 설계합니다.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Product Thinking",
              description:
                "문제 정의부터 시장 검증까지 제품의 전체 흐름을 설계합니다.",
            },
            {
              title: "LLM Orchestration",
              description:
                "RAG, 에이전트, 멀티모달 파이프라인을 서비스에 통합합니다.",
            },
            {
              title: "Automation",
              description:
                "파트너 API와 결제, 운영 플로우를 자동화해 비용을 절감합니다.",
            },
            {
              title: "Execution",
              description:
                "실서비스 배포, 성장, 운영을 동시에 고려한 실행력을 중시합니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-display text-xl text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">
            Tech Stack
          </p>
          <h2 className="font-display mt-4 text-3xl text-white">
            Backend · Data · AI
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Languages",
                items: ["Go", "Java", "Kotlin", "TypeScript", "Python"],
              },
              {
                title: "Backend",
                items: ["Spring (Spring Boot)", "Gin", "Fiber", "Echo", "FastAPI"],
              },
              {
                title: "Databases",
                items: [
                  "OracleDB",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "PocketBase",
                  "Supabase",
                ],
              },
              {
                title: "AI",
                items: [
                  "Upstage",
                  "OpenAI",
                  "Gemini",
                  "LangChain",
                  "LangGraph",
                  "LlamaIndex",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className="font-display text-xl text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-black/40 p-8">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">
            Philosophy
          </p>
          <h2 className="font-display mt-4 text-3xl text-white">
            Bridging the mystical with the technological
          </h2>
          <p className="mt-4 text-sm text-white/70">
            실용적인 AI 응용, 사용자 중심 설계, 지속적 학습을 핵심 가치로 삼습니다.
            기술을 통해 실질적인 비즈니스 가치를 만드는 데 집중합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
