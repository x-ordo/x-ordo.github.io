import Link from "next/link";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Manifesto />

      {/* Featured Projects Section */}
      <section className="pt-[10vh] pb-[15vh] border-t border-black/5 bg-white">
        <div>
          {/* Section Header */}
          <div className="flex flex-col gap-10 mb-20 md:flex-row md:items-end md:justify-between lg:mb-24">
            <div className="space-y-5 max-w-xl">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/20 border-b border-black/5 pb-1">
                Selected Works
              </span>
              <h2 className="text-3xl font-black text-black md:text-5xl tracking-tighter pt-3">
                대표 프로젝트
              </h2>
              <p className="text-base md:text-lg text-black/60 leading-relaxed font-medium">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
                비즈니스 가치를 창출하고 기술적 난제를 해결한 사례들을 소개합니다.
              </p>
            </div>
            <Link href="/projects" className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#00ff00] hover:border-[#00ff00] transition-all">
              All Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-16">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
