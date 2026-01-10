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
      <section className="py-20 md:py-28 bg-[#f9fafb]">
        <div className="system-grid">

          {/* Section Header */}
          <div className="col-span-12 mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10">
              <div className="max-w-2xl">
                <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
                  {t.projects.badge}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#171a20] mb-5">
                  {t.projects.title}
                </h2>
                <p className="text-[#3e3e3e] text-lg md:text-xl leading-[1.7] font-medium">
                  {t.projects.subtitle}
                </p>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-black text-white font-black text-lg md:text-xl uppercase tracking-wider rounded-xl border-4 border-black shadow-[6px_6px_0_#00ff00] hover:bg-[#00ff00] hover:text-black hover:shadow-[8px_8px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#000] transition-all whitespace-nowrap"
              >
                {t.projects.viewAll}
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          {/* Project Grid */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}