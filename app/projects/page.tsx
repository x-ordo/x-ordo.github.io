import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 36개 이상의 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="system-grid w-full border-black">

        {/* Page Header */}
        <div className="col-span-12 p-6 md:p-10 border-b-2 border-black bg-[#fafafa]">
          <span className="badge-section">
            Full Archives
          </span>
          <h1 className="heading-section text-[#171a20] keep-all">
            The <span className="text-[#00cc00]">Intelligence</span> Base
          </h1>
          <p className="text-sm md:text-base font-bold text-black max-w-3xl mb-2 keep-all">
            AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고 구현했습니다.
          </p>
          <p className="text-xs md:text-sm text-[#5c5e62] max-w-3xl keep-all">
            모든 프로젝트는 실제 비즈니스 임팩트를 목표로 구축되었습니다.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="px-4 py-2.5 bg-black text-white rounded-lg border-2 border-black shadow-[2px_2px_0_#00ff00]">
              <span className="text-lg md:text-xl font-black text-[#00ff00]">{projects.length}+</span>
              <span className="text-xs font-bold ml-2">Projects</span>
            </div>
            <div className="px-4 py-2.5 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#000]">
              <span className="text-lg md:text-xl font-black text-[#00cc00]">{projects.filter(p => p.featured).length}</span>
              <span className="text-xs font-bold ml-2">Featured</span>
            </div>
            <div className="px-4 py-2.5 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#000]">
              <span className="text-lg md:text-xl font-black text-[#00cc00]">7</span>
              <span className="text-xs font-bold ml-2">Categories</span>
            </div>
          </div>
        </div>

        {/* Projects with Filter */}
        <div className="col-span-12 mt-6 md:mt-8 px-4 md:px-6">
          <CategoryFilter projects={projects} />
        </div>
      </div>
    </div>
  );
}
