import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="px-6 pt-24 pb-32 md:px-12 md:pt-32 md:pb-48 lg:px-20 lg:pt-40 lg:pb-64 border-t-8 border-black bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex flex-col gap-8 mb-16 pb-12 border-b-4 border-black/10 md:flex-row md:items-end md:justify-between md:gap-12 lg:mb-20 lg:pb-16">
            <div className="space-y-4 md:space-y-6 max-w-3xl">
              <span className="badge badge-primary scale-125 origin-left shadow-[6px_6px_0_#000]">Featured Work</span>
              <h2 className="text-3xl font-black text-black md:text-5xl lg:text-6xl tracking-tighter pt-4">
                대표 프로젝트
              </h2>
              <p className="text-base md:text-xl lg:text-2xl text-black/70 leading-relaxed font-black">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
                <br className="hidden md:block" />
                비즈니스 가치를 창출하고 기술적 난제를 해결한 사례들을 소개합니다.
              </p>
            </div>
            <Link href="/projects" className="brutal-btn-outline self-start md:self-end hover:bg-black hover:text-white transition-all hover:scale-105 hover:-translate-y-2 py-5 px-10 text-lg font-black">
              전체 프로젝트 보기
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-12">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
