import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 25개 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 pb-24 text-black">
      <section className="mx-auto max-w-6xl space-y-6">
        <div className="inline-block border-4 border-black bg-[#00ffff] px-4 py-2">
          <p className="text-xs font-bold uppercase tracking-wider">
            Portfolio
          </p>
        </div>
        <h1 className="text-4xl font-black uppercase text-black sm:text-5xl">
          21개 프로젝트
        </h1>
        <p className="max-w-2xl text-sm text-black/70 border-l-4 border-black pl-4">
          AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고
          구현했습니다.
        </p>
      </section>
      <section className="mx-auto mt-12 max-w-6xl">
        <CategoryFilter projects={projects} />
      </section>
    </div>
  );
}
