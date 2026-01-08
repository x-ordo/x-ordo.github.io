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
      {/* Filter Tabs */}
      <div className="flex flex-wrap border-b-2 border-black bg-black">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "px-4 md:px-6 py-4 md:py-5 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all border-r-2 border-black",
            active === "all"
              ? "bg-[#00ff00] text-black"
              : "bg-black text-white hover:bg-white/10"
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
              "px-4 md:px-6 py-4 md:py-5 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all border-r-2 border-black",
              active === category.key
                ? "bg-[#00ff00] text-black"
                : "bg-black text-white hover:bg-white/10"
            )}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black gap-px border-b-2 border-black">
        {filtered.map((project) => (
          <div key={project.slug} className="bg-white hover:bg-[#00ff0008] transition-colors p-6 md:p-10 lg:p-12">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}