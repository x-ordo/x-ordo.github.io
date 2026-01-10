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
      <div className="h-full flex flex-col justify-between p-8 md:p-10 bg-white rounded-2xl border-4 border-black/10 shadow-[4px_4px_0_rgba(0,0,0,0.05)] hover:border-[#00cc00] hover:shadow-[8px_8px_0_#00ff00] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">

        <div>
          {/* Header: Category + Status + Featured */}
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="inline-block px-4 py-2 rounded-lg bg-[#f5f5f5] text-sm md:text-base font-mono font-bold uppercase tracking-wider text-[#5c5e62]">
                {project.category.replace("-", " ")}
              </span>
              {project.status && (
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold ${status?.bg} ${status?.text}`}>
                  {status?.dot && <span className={`w-2 h-2 rounded-full ${status.dot}`}></span>}
                  {project.status}
                </span>
              )}
            </div>
            {project.featured && (
              <span className="flex items-center gap-2 px-3 py-1.5 bg-[#00ff00]/10 rounded-lg">
                <span className="w-3 h-3 bg-[#00cc00] rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-[#00aa00] uppercase">Featured</span>
              </span>
            )}
          </div>

          {/* Project Name - Large and Bold */}
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-5 text-[#171a20] group-hover:text-[#00cc00] transition-colors leading-tight">
            {project.name}
          </h3>

          {/* Summary - Readable */}
          <p className="text-base md:text-lg text-[#3e3e3e] leading-[1.8] mb-5 font-medium">
            {project.summary}
          </p>

          {/* Impact Metric - Highlighted */}
          {project.metrics?.impact && (
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-[#00ff00]/15 rounded-xl text-base md:text-lg font-bold text-[#008800] mb-5 border-2 border-[#00cc00]/20">
              <span className="text-xl">📊</span>
              {project.metrics.impact}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack */}
        <div className="pt-6 mt-auto border-t-3 border-black/5">
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-[#171a20] text-[#00ff00] text-sm md:text-base font-mono font-bold group-hover:bg-[#00cc00] group-hover:text-black transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-4 py-2 rounded-lg bg-[#f5f5f5] text-base font-bold text-[#8b95a1]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}
