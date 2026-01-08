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
      <div className="h-full flex flex-col justify-between p-2">
        
        {/* Top: Header */}
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="text-[9px] font-black uppercase tracking-wider text-black bg-[#00ff00] border-2 border-black px-2 py-1 shadow-[2px_2px_0_0_#000]">
              {project.category.replace("-", "_")}
            </span>
            {project.featured && (
              <span className="w-3 h-3 bg-black border-2 border-[#00ff00] rounded-full animate-pulse"></span>
            )}
          </div>
          
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-[#00aa00] transition-colors leading-none">
            {project.name}
          </h3>
          
          <p className="text-xs font-bold text-gray-500 leading-snug mb-8 line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Bottom: Metrics & Stack */}
        <div className="space-y-6">
          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-black group-hover:bg-[#00ff0005] transition-colors p-2">
              <div>
                <span className="block text-[8px] font-black text-gray-400 uppercase mb-1">Role_ID</span>
                <span className="text-[11px] font-black text-black uppercase">{project.metrics.role}</span>
              </div>
              <div>
                <span className="block text-[8px] font-black text-gray-400 uppercase mb-1">Impact_Score</span>
                <span className="text-[11px] font-black text-[#00aa00] uppercase">{project.metrics.impact}</span>
              </div>
            </div>
          )}

          {/* Tech Stack - Minimal Text List */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-black text-gray-400 p-2 pt-0">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech}>
                 // {tech.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
}