"use client";

import Link from "next/link";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";
import { useI18n } from "../lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="bg-white min-h-screen">
      <Hero />

      <Manifesto />

      {/* Featured Projects Section */}
      <section className="py-16 md:py-20 bg-[#f9fafb]">
        <div className="system-grid">

          {/* Section Header */}
          <div className="col-span-12 mb-8 md:mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
              <div className="max-w-xl">
                <span className="text-label text-[#00cc00] mb-2 block">{t.projects.badge}</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#171a20] mb-3">
                  {t.projects.title}
                </h2>
                <p className="text-[#3e3e3e] text-base md:text-lg leading-[1.6]">
                  {t.projects.subtitle}
                </p>
              </div>

              <Link href="/projects" className="btn-system btn-primary whitespace-nowrap">
                {t.projects.viewAll}
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          {/* Project Grid */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}