import Link from "next/link";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      
      <Manifesto />

      {/* Featured Projects Section - TDS Style */}
      <section className="py-24 md:py-32 bg-[#f9fafb]">
        <div className="system-grid">
          
          {/* Section Header */}
          <div className="col-span-12 mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-label text-[#00cc00] mb-4 block">Selected Works</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#171a20] mb-6">
                  Economic Machines
                </h2>
                <p className="text-body text-xl text-[#3e3e3e] font-medium leading-relaxed">
                  AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우.<br className="hidden md:block"/>
                  비즈니스 가치를 창출한 핵심 프로젝트입니다.
                </p>
              </div>
              
              <Link href="/projects" className="btn-system btn-primary whitespace-nowrap">
                View All Projects
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          {/* Project Grid - Clean Cards with Gap */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}