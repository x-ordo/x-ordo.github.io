import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div className="text-black">
      <Hero />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              label: "프로젝트",
              value: "21+",
              detail: "AI · SaaS · 자동화 제품",
              accent: "bg-[#00ff00]",
            },
            {
              label: "핵심 역량",
              value: "LLM",
              detail: "RAG, 에이전트, 오케스트레이션",
              accent: "bg-[#ff00ff]",
            },
            {
              label: "운영 집중",
              value: "Scale",
              detail: "실서비스와 수익화 중심",
              accent: "bg-[#00ffff]",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-4 border-black bg-white p-6 hover:shadow-[8px_8px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className={`h-2 w-16 ${item.accent} mb-4`} />
              <p className="text-xs font-bold uppercase tracking-wider text-black/60">
                {item.label}
              </p>
              <p className="mt-3 text-4xl font-black uppercase text-black">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-black/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b-4 border-black pb-6 mb-10">
            <div>
              <div className="inline-block border-4 border-black bg-[#00ff00] px-4 py-2 mb-4">
                <p className="text-xs font-bold uppercase tracking-wider">
                  Featured
                </p>
              </div>
              <h2 className="text-3xl font-black uppercase text-black">
                대표 프로젝트
              </h2>
              <p className="mt-3 max-w-xl text-sm text-black/70">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트를
                선별했습니다.
              </p>
            </div>
            <Link
              href="/projects"
              className="brutal-btn-outline px-6 py-3 text-xs font-bold uppercase tracking-wider"
            >
              View All →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
