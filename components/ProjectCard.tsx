"use client";

import Link from "next/link";
import type { Project } from "../types/project";
import { categoryMeta } from "../data/projects";
import { cn } from "../lib/utils";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

const categoryColors: Record<string, string> = {
  saas: "bg-[#00ff00]",
  consumer: "bg-[#ff00ff]",
  ai: "bg-[#00ffff]",
  automation: "bg-[#ffff00]",
  tools: "bg-[#ff6600]",
};

const categoryBorders: Record<string, string> = {
  saas: "group-hover:border-[#00ff00]",
  consumer: "group-hover:border-[#ff00ff]",
  ai: "group-hover:border-[#00ffff]",
  automation: "group-hover:border-[#ffff00]",
  tools: "group-hover:border-[#ff6600]",
};

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  const meta = categoryMeta[project.category];
  const accentColor = categoryColors[project.category] || "bg-[#00ff00]";
  const borderHover = categoryBorders[project.category] || "group-hover:border-[#00ff00]";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col bg-white border-2 border-black/10 transition-all duration-200",
        "hover:border-2 hover:shadow-[6px_6px_0_#0a0a0a] hover:-translate-x-1 hover:-translate-y-1",
        borderHover,
        compact ? "p-5" : "p-6"
      )}
    >
      {/* Header: Category Indicator + Featured Badge */}
      <div className="flex items-center justify-between mb-5">
        <span className={cn("h-1.5 w-10 rounded-full", accentColor)} />
        {project.featured && (
          <span className="text-[10px] font-semibold text-black/35 uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Category Label */}
        <p className="text-[10px] font-medium text-black/45 uppercase tracking-wider mb-2">
          {meta.label}
        </p>

        {/* Project Name */}
        <h3 className="text-base font-bold text-black leading-snug mb-3 lg:text-lg">
          {project.name}
        </h3>

        {/* Summary */}
        <p className="text-sm text-black/55 leading-relaxed line-clamp-2 mb-5">
          {project.summary}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-[10px] font-medium text-black/65 bg-black/[0.04] rounded-sm"
            >
              {item}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2.5 py-1 text-[10px] font-medium text-black/35">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-black/[0.08] flex items-center justify-between">
        <span className="text-xs font-medium text-black/45">View project</span>
        <span className="w-7 h-7 flex items-center justify-center bg-black/[0.04] rounded-full transition-all group-hover:bg-black group-hover:text-white">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
