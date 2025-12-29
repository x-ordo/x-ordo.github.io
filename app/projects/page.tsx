import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 28개 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 pb-24 text-white">
      <section className="mx-auto max-w-6xl space-y-6">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">
          Portfolio
        </p>
        <h1 className="font-display text-4xl text-white sm:text-5xl">
          28개 프로젝트
        </h1>
        <p className="max-w-2xl text-sm text-white/70">
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
