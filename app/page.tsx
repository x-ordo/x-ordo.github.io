import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Projects */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="section-header border-b border-black/10 pb-6">
            <div>
              <span className="badge badge-primary mb-4">Featured</span>
              <h2 className="text-2xl font-bold text-black">
                대표 프로젝트
              </h2>
              <p className="mt-2 text-sm text-black/60 max-w-lg">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
              </p>
            </div>
            <Link href="/projects" className="brutal-btn-outline">
              전체 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
