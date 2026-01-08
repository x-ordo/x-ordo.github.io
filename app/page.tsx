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

      {/* Featured Projects Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#e5e5e5]">
        <div className="system-grid w-full max-w-[1400px] border-r border-[#e5e5e5]">
          
          {/* Section Header */}
          <div className="col-span-12 p-6 md:p-10 border-b border-[#e5e5e5] flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-label block mb-4">Selected Works</span>
              <h2 className="text-2xl md:text-3xl font-medium">
                Building Economic Machines
              </h2>
              <p className="mt-4 text-gray-500">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
                기술적 난제를 해결하고 실제 비즈니스 가치를 창출한 사례들을 소개합니다.
              </p>
            </div>
            
            <Link href="/projects" className="btn-system whitespace-nowrap">
              View All Projects
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          {/* Project Grid - Masonry-ish feel via CSS Grid */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project) => (
              <div key={project.slug} className="border-b border-[#e5e5e5] md:border-r last:border-r-0 lg:[&:nth-child(3n)]:border-r-0">
                 {/* Removing border from ProjectCard since the wrapper handles it in this grid context, 
                     but ProjectCard has its own hover effects. Let's adjust ProjectCard slightly to fill. */}
                <div className="h-full p-6 md:p-8 hover:bg-gray-50 transition-colors duration-200">
                   <ProjectCard project={project} compact />
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}