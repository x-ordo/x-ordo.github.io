import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="px-8 pt-32 pb-48 md:px-20 md:pt-48 md:pb-64 lg:px-32 lg:pt-64 lg:pb-96 border-t-8 border-black bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-screen-2xl">
          {/* Section Header */}
          <div className="flex flex-col gap-12 mb-24 pb-16 border-b-6 border-black/10 md:flex-row md:items-end md:justify-between md:gap-16 lg:mb-32 lg:pb-20">
            <div className="space-y-6 md:space-y-8 max-w-4xl">
              <span className="badge badge-primary scale-150 origin-left shadow-[8px_8px_0_#000]">Featured Work</span>
              <h2 className="text-4xl font-black text-black md:text-7xl lg:text-8xl tracking-tighter pt-8">
                대표 프로젝트
              </h2>
              <p className="text-xl md:text-2xl lg:text-4xl text-black/70 leading-relaxed font-black">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
                <br className="hidden md:block" />
                비즈니스 가치를 창출하고 기술적 난제를 해결한 사례들을 소개합니다.
              </p>
            </div>
            <Link href="/projects" className="brutal-btn-outline self-start md:self-end hover:bg-black hover:text-white transition-all hover:scale-110 hover:-translate-y-3 py-8 px-16 text-2xl font-black">
              전체 프로젝트 보기
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-24">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
