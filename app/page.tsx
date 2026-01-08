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
      <section className="py-20 px-4 md:px-8 border-t border-black">
        <div className="system-grid w-full border-r border-black">
          
          {/* Section Header */}
          <div className="col-span-12 p-6 md:p-12 border-b border-black flex flex-col md:flex-row md:items-end justify-between gap-8 bg-[#fafafa]">
            <div className="max-w-2xl">
              <span className="text-label block mb-4 border-b-2 border-black w-fit">Selected Works</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Economic <span className="text-[#00cc00]">Machines</span>
              </h2>
              <p className="mt-4 text-lg font-bold text-black leading-tight">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.<br/>
                기술적 난제를 해결하고 실제 비즈니스 가치를 창출한 사례들을 소개합니다.
              </p>
            </div>
            
            <Link href="/projects" className="btn-system whitespace-nowrap bg-black text-[#00ff00] border-black hover:bg-[#00ff00] hover:text-black">
              View All Projects
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          {/* Project Grid - Masonry-ish feel via CSS Grid */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project) => (
              <div key={project.slug} className="border-b border-black md:border-r last:border-r-0 lg:[&:nth-child(3n)]:border-r-0">
                 {/* Wrapper for hover effect */}
                <div className="h-full p-6 md:p-8 hover:bg-[#00ff0008] transition-colors duration-200">
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