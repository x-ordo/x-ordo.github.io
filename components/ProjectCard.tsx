"use client";

import React from "react";
import Link from "next/link";
import { Project, ProjectStatus } from "../types/project";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const statusStyles: Record<ProjectStatus, string> = {
  "운영중": "bg-green-100 text-green-800",
  "종료": "bg-gray-100 text-gray-600",
  "개발중": "bg-blue-100 text-blue-800",
  "아카이브": "bg-amber-100 text-amber-700",
};

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <div className="h-full flex flex-col justify-between p-7 md:p-9 bg-white rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#00cc00]/10">

        <div>
          <div className="flex justify-between items-start mb-7">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-block px-3 py-1.5 rounded-md bg-gray-50 text-[11px] font-mono uppercase tracking-widest text-[#5c5e62]">
                {project.category.replace("-", " ")}
              </span>
              {project.status && (
                <span className={`inline-block px-2 py-1 rounded text-[10px] font-medium ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              )}
            </div>
            {project.featured && (
              <span className="w-2.5 h-2.5 bg-[#00cc00] rounded-full animate-pulse"></span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 text-[#171a20] group-hover:text-[#00cc00] transition-colors leading-tight">
            {project.name}
          </h3>

          <p className="text-base md:text-[17px] text-[#3e3e3e] leading-[1.75] mb-4 font-normal">
            {project.summary}
          </p>

          {/* Impact Metric - Highlight business value */}
          {project.metrics?.impact && (
            <div className="px-3 py-2 bg-[#00ff00]/10 rounded-lg text-sm font-medium text-[#00aa00] mb-4">
              📊 {project.metrics.impact}
            </div>
          )}
        </div>

        <div className="pt-6 mt-auto border-t border-[#f2f4f6]">
          {/* Tech Stack - Clean Pills */}
          <div className="flex flex-wrap gap-2.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#f2f4f6] text-[11px] md:text-[12px] font-mono text-[#5c5e62]">
                 {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
               <span className="px-3 py-1.5 rounded-lg bg-[#f2f4f6] text-[12px] md:text-[13px] font-medium text-[#8b95a1]">
                 +{project.stack.length - 4}
               </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}
