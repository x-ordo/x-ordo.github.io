"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "../types/project";
import { categoryMeta } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { cn } from "../lib/utils";

type CategoryFilterProps = {
  projects: Project[];
};

type FilterKey = ProjectCategory | "all";

export default function CategoryFilter({ projects }: CategoryFilterProps) {
  const [active, setActive] = useState<FilterKey>("all");

  const categories = useMemo(
    () =>
      (Object.keys(categoryMeta) as ProjectCategory[]).map((key) => ({
        key,
        ...categoryMeta[key],
        count: projects.filter((project) => project.category === key).length,
      })),
    [projects]
  );

  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div className="space-y-10">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-black/[0.08]">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "px-4 py-2.5 text-sm font-medium transition-all border-2",
            active === "all"
              ? "border-black bg-black text-white"
              : "border-transparent text-black/55 hover:text-black hover:border-black/15"
          )}
        >
          All
          <span className="ml-2 text-xs opacity-55">{projects.length}</span>
        </button>
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActive(category.key)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium transition-all border-2",
              active === category.key
                ? "border-black bg-black text-white"
                : "border-transparent text-black/55 hover:text-black hover:border-black/15"
            )}
          >
            {category.label}
            <span className="ml-2 text-xs opacity-55">{category.count}</span>
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-sm text-black/45">
        {filtered.length}개 프로젝트
      </p>

      {/* Project Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
