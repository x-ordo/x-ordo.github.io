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
      <div className="h-full flex flex-col justify-between">
        
        {/* Top: Header */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-1 rounded-sm group-hover:border-black transition-colors">
              {project.category.replace("-", " ")}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 bg-[#00cc00] rounded-full animate-pulse"></span>
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-8 line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Bottom: Metrics & Stack */}
        <div className="space-y-5">
          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dashed border-gray-200 group-hover:border-gray-300 transition-colors">
              <div>
                <span className="block text-[10px] text-gray-400 uppercase mb-0.5">Role</span>
                <span className="text-xs font-medium text-gray-700">{project.metrics.role}</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase mb-0.5">Impact</span>
                <span className="text-xs font-medium text-black group-hover:text-accent transition-colors">{project.metrics.impact}</span>
              </div>
            </div>
          )}

          {/* Tech Stack - Minimal Text List */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-gray-400 pt-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech}>
                 # {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
}
