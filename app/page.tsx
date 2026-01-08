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
      <section className="py-32 md:py-48 px-4 md:px-8 border-t-2 border-black bg-white">
        <div className="system-grid w-full border-r-2 border-black">
          
          {/* Section Header */}
          <div className="col-span-12 p-8 md:p-20 border-b-2 border-black flex flex-col md:flex-row md:items-end justify-between gap-12 bg-[#fafafa]">
            <div className="max-w-3xl">
              <span className="text-label block mb-6 border-b-2 border-black w-fit">Selected Works</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Economic <span className="text-[#00cc00]">Machines</span>
              </h2>
              <p className="mt-6 text-xl font-bold text-black leading-snug">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.<br/>
                기술적 난제를 해결하고 실제 비즈니스 가치를 창출한 사례들을 소개합니다.
              </p>
            </div>
            
            <Link href="/projects" className="btn-system whitespace-nowrap bg-black text-[#00ff00] border-2 border-black hover:bg-[#00ff00] hover:text-black py-5 px-10 text-lg">
              View All Projects
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round"/></svg>
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