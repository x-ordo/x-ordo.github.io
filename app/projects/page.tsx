import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 36개 이상의 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        {/* Page Header */}
        <section className="ds-section-padded border-b-2 border-black bg-[#fafafa] -mx-4 md:-mx-6 px-4 md:px-6 flex flex-col gap-6">
          <span className="ds-badge">
            Full Archives
          </span>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] keep-all">
              The <span className="text-[#00cc00]">Intelligence</span> Base
            </h1>
            <p className="text-sm md:text-base font-bold text-black max-w-3xl keep-all">
              AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고 구현했습니다.
            </p>
            <p className="text-xs md:text-sm text-[#5c5e62] max-w-3xl keep-all">
              모든 프로젝트는 실제 비즈니스 임팩트를 목표로 구축되었습니다.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="px-4 py-3 bg-black text-white rounded-lg border-2 border-black shadow-[2px_2px_0_#00ff00]">
              <span className="text-lg md:text-xl font-black text-[#00ff00]">{projects.length}+</span>
              <span className="text-xs font-bold ml-2">Projects</span>
            </div>
            <div className="px-4 py-3 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#000]">
              <span className="text-lg md:text-xl font-black text-[#00cc00]">{projects.filter(p => p.featured).length}</span>
              <span className="text-xs font-bold ml-2">Featured</span>
            </div>
            <div className="px-4 py-3 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#000]">
              <span className="text-lg md:text-xl font-black text-[#00cc00]">7</span>
              <span className="text-xs font-bold ml-2">Categories</span>
            </div>
          </div>
        </section>

        {/* Projects with Filter */}
        <section className="ds-section-padded">
          <CategoryFilter projects={projects} />
        </section>

      </div>
    </div>
  );
}
