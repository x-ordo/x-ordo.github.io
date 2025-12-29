import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 21개 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 pb-24 pt-8">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <span className="badge badge-secondary mb-4">Portfolio</span>
          <h1 className="text-3xl font-bold text-black sm:text-4xl">
            프로젝트
          </h1>
          <p className="mt-3 text-black/60 max-w-xl">
            AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고 구현했습니다.
          </p>
        </div>

        {/* Projects */}
        <CategoryFilter projects={projects} />
      </section>
    </div>
  );
}
