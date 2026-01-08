import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 36개 이상의 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen pb-12 md:pb-20">
      <div className="system-grid w-full border-black">

        {/* Page Header */}
        <div className="col-span-12 p-8 md:p-16 lg:p-20 border-b-2 border-black bg-[#fafafa]">
          <span className="text-label inline-block mb-8 md:mb-10 border-b-2 border-black">Full Archives</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-8 md:mb-12 leading-[0.95]">
            The <span className="text-[#00cc00]">Intelligence</span> Base
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-black max-w-3xl leading-[1.6]">
            AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고 구현했습니다.<br/>
            모든 프로젝트는 실제 비즈니스 임팩트를 목표로 구축되었습니다.
          </p>
        </div>

        {/* Projects with Filter */}
        <div className="col-span-12 mt-8 md:mt-12">
           <CategoryFilter projects={projects} />
        </div>
      </div>
    </div>
  );
}