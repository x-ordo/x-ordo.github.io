"use client";

import React from "react";
import Link from "next/link";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <div className="h-full flex flex-col justify-between p-8 bg-white rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#0066ff]/10">
        
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="inline-block px-3 py-1 rounded-md bg-gray-50 text-[11px] font-semibold uppercase tracking-wider text-[#8b95a1]">
              {project.category.replace("-", " ")}
            </span>
            {project.featured && (
              <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-[#191f28] group-hover:text-[#0066ff] transition-colors">
            {project.name}
          </h3>
          
          <p className="text-[17px] text-[#4e5968] leading-relaxed mb-8 font-normal">
            {project.summary}
          </p>
        </div>

        <div className="pt-6 mt-auto">
          {/* Tech Stack - Clean Pills */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#f2f4f6] text-[13px] font-medium text-[#4e5968]">
                 {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
               <span className="px-3 py-1.5 rounded-lg bg-[#f2f4f6] text-[13px] font-medium text-[#8b95a1]">
                 +{project.stack.length - 4}
               </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}
