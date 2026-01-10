"use client";

import Link from "next/link";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import ProjectCard from "../components/ProjectCard";
import GitHubStats from "../components/sections/GitHubStats";
import { featuredProjects } from "../data/projects";
import { useI18n } from "../lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="bg-white min-h-screen">
      <Hero />

      <Manifesto />

      {/* GitHub Stats Section */}
      <GitHubStats />

      {/* Featured Projects Section */}
      <section className="py-12 md:py-16 bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">

          {/* Section Header */}
          <div className="mb-8 md:mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
              <div className="max-w-2xl">
                <span className="badge-section">
                  {t.projects.badge}
                </span>
                <h2 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] keep-all mt-3">
                  {t.projects.title}
                </h2>
                <p className="text-xs md:text-sm text-[#3e3e3e] font-medium keep-all mt-2">
                  {t.projects.subtitle}
                </p>
              </div>

              <Link
                href="/projects"
                className="btn-senior btn-senior-secondary whitespace-nowrap"
              >
                {t.projects.viewAll}
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}