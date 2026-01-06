import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="pt-[15vh] pb-[20vh] border-t-2 border-black/5 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0">
          {/* Section Header */}
          <div className="flex flex-col gap-12 mb-24 md:flex-row md:items-end md:justify-between lg:mb-32">
            <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 border-b-2 border-black/10 pb-2">
                Selected Works
              </span>
              <h2 className="text-4xl font-black text-black md:text-6xl tracking-tighter pt-4">
                대표 프로젝트
              </h2>
              <p className="text-lg md:text-xl text-black/60 leading-relaxed font-medium">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
                비즈니스 가치를 창출하고 기술적 난제를 해결한 사례들을 소개합니다.
              </p>
            </div>
            <Link href="/projects" className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest border-b-4 border-black pb-2 hover:text-[#00ff00] hover:border-[#00ff00] transition-all">
              All Projects
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-20">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
