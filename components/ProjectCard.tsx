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
  saas: "bg-[#22c55e]",
  consumer: "bg-[#a855f7]",
  ai: "bg-[#3b82f6]",
  automation: "bg-[#eab308]",
  tools: "bg-[#f97316]",
};

const categoryBorders: Record<string, string> = {
  saas: "group-hover:border-[#22c55e]",
  consumer: "group-hover:border-[#a855f7]",
  ai: "group-hover:border-[#3b82f6]",
  automation: "group-hover:border-[#eab308]",
  tools: "group-hover:border-[#f97316]",
};

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  const meta = categoryMeta[project.category];
  const accentColor = categoryColors[project.category] || "bg-[#22c55e]";
  const borderHover = categoryBorders[project.category] || "group-hover:border-[#22c55e]";

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
      {/* Category Indicator */}
      <div className="flex items-center justify-between mb-4">
        <span className={cn("h-1.5 w-12 rounded-full", accentColor)} />
        {project.featured && (
          <span className="text-[10px] font-semibold text-black/40 uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <p className="text-[11px] font-medium text-black/50 uppercase tracking-wider">
          {meta.label}
        </p>
        <h3 className="mt-2 text-lg font-bold text-black leading-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-black/60 leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {/* Stack */}
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 text-[10px] font-medium text-black/70 bg-black/5 rounded-sm"
            >
              {item}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-medium text-black/40">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-black/10 flex items-center justify-between">
        <span className="text-xs font-medium text-black/50">View project</span>
        <span className="w-6 h-6 flex items-center justify-center bg-black/5 rounded-full transition-all group-hover:bg-black group-hover:text-white">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
