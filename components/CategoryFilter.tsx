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
    <div className="w-full">
      {/* Filter Tabs - Senior Friendly with larger touch targets */}
      <div className="category-filter-container pb-6 mb-8 overflow-x-auto">
        <div className="flex gap-3 md:gap-4 min-w-max px-1">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={cn(
              "px-5 md:px-6 py-3 md:py-4 text-sm md:text-base font-black uppercase tracking-wider rounded-xl border-4 transition-all whitespace-nowrap",
              active === "all"
                ? "bg-[#00ff00] text-black border-black shadow-[4px_4px_0_#000]"
                : "bg-white text-black/60 border-black/20 hover:border-black hover:bg-[#fafafa] shadow-[2px_2px_0_#000]"
            )}
          >
            All ({projects.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActive(category.key)}
              className={cn(
                "px-5 md:px-6 py-3 md:py-4 text-sm md:text-base font-black uppercase tracking-wider rounded-xl border-4 transition-all whitespace-nowrap",
                active === category.key
                  ? "bg-[#00ff00] text-black border-black shadow-[4px_4px_0_#000]"
                  : "bg-white text-black/60 border-black/20 hover:border-black hover:bg-[#fafafa] shadow-[2px_2px_0_#000]"
              )}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 md:mb-8">
        <p className="text-base md:text-lg font-bold text-[#5c5e62]">
          Showing <span className="text-[#00cc00] font-black">{filtered.length}</span> projects
          {active !== "all" && (
            <span> in <span className="text-black font-black">{categoryMeta[active].label}</span></span>
          )}
        </p>
      </div>

      {/* Project Grid - Larger cards with better spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filtered.map((project) => (
          <div key={project.slug} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
