import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-36 lg:px-12 lg:pt-32 lg:pb-48 border-t-4 border-black bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col gap-6 mb-10 pb-8 border-b-3 border-black/10 md:flex-row md:items-end md:justify-between md:gap-8 lg:mb-14 lg:pb-10">
            <div className="space-y-3 md:space-y-4 max-w-2xl">
              <span className="badge badge-primary scale-110 origin-left">Featured Work</span>
              <h2 className="text-2xl font-black text-black md:text-3xl lg:text-4xl tracking-tight">
                대표 프로젝트
              </h2>
              <p className="text-sm md:text-base text-black/70 leading-relaxed font-medium">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
                <br className="hidden md:block" />
                비즈니스 가치를 창출하고 기술적 난제를 해결한 사례들을 소개합니다.
              </p>
            </div>
            <Link href="/projects" className="brutal-btn-outline self-start md:self-end hover:bg-black hover:text-white transition-transform hover:-translate-y-1">
              전체 프로젝트 보기
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
