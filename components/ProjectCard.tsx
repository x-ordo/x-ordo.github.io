"use client";

import Link from "next/link";
import type { Project } from "../types/project";
import { categoryMeta } from "../data/projects";
import { cn } from "../lib/utils";
import SpotlightCard from "./ui/SpotlightCard";
import TiltCard from "./ui/TiltCard";
import ShinyText from "./ui/ShinyText";

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

const spotlightColors: Record<string, string> = {
  saas: "rgba(0, 255, 0, 0.15)",
  consumer: "rgba(255, 0, 255, 0.15)",
  ai: "rgba(0, 255, 255, 0.15)",
  automation: "rgba(255, 255, 0, 0.15)",
  tools: "rgba(255, 102, 0, 0.15)",
};

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  const meta = categoryMeta[project.category];
  const accentColor = categoryColors[project.category] || "bg-[#00ff00]";
  const spotlightColor = spotlightColors[project.category] || "rgba(0, 255, 0, 0.15)";

  return (
    <TiltCard tiltAmount={8} scale={1.02} className="h-full">
      <SpotlightCard spotlightColor={spotlightColor} className="h-full">
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            "group flex h-full flex-col bg-white border-3 border-black transition-all duration-150",
            "hover:shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5",
            "md:hover:shadow-[6px_6px_0_#000] md:hover:-translate-x-1 md:hover:-translate-y-1",
            compact ? "p-3 md:p-5" : "p-4 md:p-6"
          )}
        >
      {/* Header: Category Indicator + Featured Badge */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <span className={cn("h-1.5 w-8 md:w-10", accentColor)} />
        {project.featured && (
          <span className="px-2 py-0.5 text-[8px] md:text-[9px] font-bold text-black bg-[#00ff00] border border-black uppercase tracking-wider animate-pulse-neon">
            <ShinyText text="Featured" speed={2} />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Category Label */}
        <p className="text-[9px] md:text-[10px] font-bold text-black/50 uppercase tracking-wider mb-1.5 md:mb-2">
          {meta.label}
        </p>

        {/* Project Name */}
        <h3 className="text-sm md:text-base font-black text-black leading-tight mb-2 md:mb-3 lg:text-lg">
          {project.name}
        </h3>

        {/* Summary */}
        <p className="text-xs md:text-sm text-black/60 leading-relaxed line-clamp-2 mb-3 md:mb-4">
          {project.summary}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-1 md:gap-1.5">
          {project.stack.slice(0, 3).map((item, i) => (
            <span
              key={item}
              className="px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-[10px] font-semibold text-black/70 bg-black/5 border border-black/20 transition-all duration-200 hover:bg-[#00ff00] hover:text-black hover:border-black hover:scale-105"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-[10px] font-semibold text-black/40">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t-2 border-black/10 flex items-center justify-between">
        <span className="text-[10px] md:text-xs font-bold text-black/50 uppercase tracking-wider">
          View
        </span>
        <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center bg-black text-white transition-all group-hover:bg-[#00ff00] group-hover:text-black group-hover:scale-110">
          <svg className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
        </Link>
      </SpotlightCard>
    </TiltCard>
  );
}
