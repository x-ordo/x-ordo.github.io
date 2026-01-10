import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 36개 이상의 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen pb-16 md:pb-24">
      <div className="system-grid w-full border-black">

        {/* Page Header - Senior Readable */}
        <div className="col-span-12 p-10 md:p-20 lg:p-24 border-b-4 border-black bg-[#fafafa]">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 md:mb-10 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            Full Archives
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-10 md:mb-14 leading-[0.95]">
            The <span className="text-[#00cc00]">Intelligence</span> Base
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black max-w-4xl leading-[1.6]">
            AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고 구현했습니다.
          </p>
          <p className="text-lg md:text-xl text-[#5c5e62] mt-4 max-w-4xl leading-[1.7]">
            모든 프로젝트는 실제 비즈니스 임팩트를 목표로 구축되었습니다.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-10 md:mt-14">
            <div className="px-6 py-4 bg-black text-white rounded-xl border-4 border-black shadow-[4px_4px_0_#00ff00]">
              <span className="text-2xl md:text-3xl font-black text-[#00ff00]">{projects.length}+</span>
              <span className="text-base md:text-lg font-bold ml-2">Projects</span>
            </div>
            <div className="px-6 py-4 bg-white rounded-xl border-4 border-black shadow-[4px_4px_0_#000]">
              <span className="text-2xl md:text-3xl font-black text-[#00cc00]">{projects.filter(p => p.featured).length}</span>
              <span className="text-base md:text-lg font-bold ml-2">Featured</span>
            </div>
            <div className="px-6 py-4 bg-white rounded-xl border-4 border-black shadow-[4px_4px_0_#000]">
              <span className="text-2xl md:text-3xl font-black text-[#00cc00]">7</span>
              <span className="text-base md:text-lg font-bold ml-2">Categories</span>
            </div>
          </div>
        </div>

        {/* Projects with Filter */}
        <div className="col-span-12 mt-10 md:mt-14 px-6 md:px-10">
          <CategoryFilter projects={projects} />
        </div>
      </div>
    </div>
  );
}
