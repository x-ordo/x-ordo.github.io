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
    <div className="space-y-8 md:space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 pb-5 md:pb-8 border-b-2 border-black/10">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "px-2.5 py-1.5 md:px-4 md:py-2.5 text-[10px] md:text-sm font-bold uppercase tracking-wider transition-all border-2",
            active === "all"
              ? "border-black bg-black text-white shadow-[2px_2px_0_#00ff00] md:shadow-[3px_3px_0_#00ff00]"
              : "border-black/20 text-black/60 hover:text-black hover:border-black"
          )}
        >
          All
          <span className="ml-1.5 md:ml-2 text-[9px] md:text-xs opacity-60">{projects.length}</span>
        </button>
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActive(category.key)}
            className={cn(
              "px-2.5 py-1.5 md:px-4 md:py-2.5 text-[10px] md:text-sm font-bold uppercase tracking-wider transition-all border-2",
              active === category.key
                ? "border-black bg-black text-white shadow-[2px_2px_0_#00ff00] md:shadow-[3px_3px_0_#00ff00]"
                : "border-black/20 text-black/60 hover:text-black hover:border-black"
            )}
          >
            {category.label}
            <span className="ml-1.5 md:ml-2 text-[9px] md:text-xs opacity-60">{category.count}</span>
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-xs md:text-sm text-black/50 font-semibold">
        {filtered.length}개 프로젝트
      </p>

      {/* Project Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
