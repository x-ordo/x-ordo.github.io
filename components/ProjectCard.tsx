"use client";

import React from "react";
import Link from "next/link";
import { Project, ProjectStatus } from "../types/project";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const statusStyles: Record<ProjectStatus, { bg: string; text: string; dot?: string }> = {
  "운영중": { bg: "bg-green-100", text: "text-green-800", dot: "bg-green-500 animate-pulse" },
  "종료": { bg: "bg-gray-100", text: "text-gray-600" },
  "개발중": { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500 animate-bounce" },
  "아카이브": { bg: "bg-amber-100", text: "text-amber-700" },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = project.status ? statusStyles[project.status] : null;

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <div className="ds-card-bordered h-full flex flex-col justify-between shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_0_#00ff00] hover:-translate-x-0.5 hover:-translate-y-0.5">

        <div>
          {/* Header: Category + Status + Featured */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="inline-block px-2 py-1 rounded bg-[#f5f5f5] text-xs font-mono font-bold uppercase tracking-wider text-[#5c5e62]">
                {project.category.replace("-", " ")}
              </span>
              {project.status && (
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${status?.bg} ${status?.text}`}>
                  {status?.dot && <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>}
                  {project.status}
                </span>
              )}
            </div>
            {project.featured && (
              <span className="flex items-center gap-1.5 px-2 py-1 bg-[#00ff00]/10 rounded">
                <span className="w-2 h-2 bg-[#00cc00] rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-[#00aa00] uppercase">Featured</span>
              </span>
            )}
          </div>

          {/* Project Name */}
          <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-2 text-[#171a20] group-hover:text-[#00cc00] transition-colors leading-tight keep-all">
            {project.name}
          </h3>

          {/* Summary - Readable */}
          <p className="text-xs md:text-sm text-[#3e3e3e] font-medium mb-3 keep-all line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Impact Metric - Highlighted */}
          {project.metrics?.impact && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#00ff00]/15 rounded-lg text-xs md:text-sm font-bold text-[#008800] mb-3 border border-[#00cc00]/20 keep-all">
              <span className="text-sm">📊</span>
              {project.metrics.impact}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack */}
        <div className="pt-3 mt-auto border-t border-black/5">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded bg-[#171a20] text-[#00ff00] text-xs font-mono font-bold group-hover:bg-[#00cc00] group-hover:text-black transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 rounded bg-[#f5f5f5] text-xs font-bold text-[#8b95a1]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}
