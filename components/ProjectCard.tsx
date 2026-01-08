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
      <div className="h-full flex flex-col justify-between p-4">
        
        {/* Top: Header */}
        <div>
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] font-black uppercase tracking-wider text-black bg-[#00ff00] border-2 border-black px-3 py-1.5 shadow-[3px_3px_0_0_#000]">
              {project.category.replace("-", "_")}
            </span>
            {project.featured && (
              <span className="w-4 h-4 bg-black border-2 border-[#00ff00] rounded-full animate-pulse"></span>
            )}
          </div>
          
          <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter group-hover:text-[#00aa00] transition-colors leading-[0.9]">
            {project.name}
          </h3>
          
          <p className="text-sm font-bold text-gray-600 leading-relaxed mb-10 line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Bottom: Metrics & Stack */}
        <div className="space-y-8">
          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-6 pt-8 border-t-2 border-black group-hover:bg-[#00ff0008] transition-colors p-4">
              <div>
                <span className="block text-[10px] font-black text-gray-400 uppercase mb-2">Role_ID</span>
                <span className="text-[12px] font-black text-black uppercase">{project.metrics.role}</span>
              </div>
              <div>
                <span className="block text-[10px] font-black text-gray-400 uppercase mb-2">Impact_Score</span>
                <span className="text-[12px] font-black text-[#00aa00] uppercase">{project.metrics.impact}</span>
              </div>
            </div>
          )}

          {/* Tech Stack - Minimal Text List */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-black text-gray-400 p-4 pt-0">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="hover:text-black transition-colors">
                 // {tech.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
}