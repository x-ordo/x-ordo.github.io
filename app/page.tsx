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
      <section className="bg-white border-t-2 border-black/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24">

          {/* Section Header */}
          <div className="flex flex-col gap-4 mb-10 md:mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="ds-badge w-fit">
                  {t.projects.badge}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#171a20] leading-tight">
                  {t.projects.title}
                </h2>
                <p className="text-sm md:text-base text-[#5c5e62] font-medium max-w-2xl">
                  {t.projects.subtitle}
                </p>
              </div>

              <Link
                href="/projects"
                className="ds-button ds-button-secondary whitespace-nowrap w-fit"
              >
                {t.projects.viewAll}
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          {/* Project Grid */}
          <div className="ds-grid-3">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
