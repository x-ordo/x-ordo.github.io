import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 36개 이상의 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen py-20 px-4 md:px-8">
      <div className="system-grid w-full border-black">
        
        {/* Page Header */}
        <div className="col-span-12 p-8 md:p-20 border-b-2 border-black bg-[#fafafa]">
          <span className="text-label inline-block mb-10 border-b-2 border-black">Full Archives</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-[0.9]">
            The <span className="text-[#00cc00]">Intelligence</span> Base
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black max-w-3xl leading-tight">
            AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고 구현했습니다.<br/>
            모든 프로젝트는 실제 비즈니스 임팩트를 목표로 구축되었습니다.
          </p>
        </div>

        {/* Projects with Filter */}
        <div className="col-span-12">
           <CategoryFilter projects={projects} />
        </div>
      </div>
    </div>
  );
}