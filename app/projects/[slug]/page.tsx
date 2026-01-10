import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryMeta, projects } from "../../../data/projects";

const categoryColors: Record<string, string> = {
  "b2b-saas": "bg-[#00ff00]",
  "b2c-consumer": "bg-[#ff00ff]",
  "ai-agent": "bg-[#00ffff]",
  automation: "bg-[#ffff00]",
  "developer-tools": "bg-[#ff6600]",
  analytics: "bg-[#6600ff]",
  experimental: "bg-[#ff0066]",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found | Jed Park",
    };
  }

  return {
    title: `${project.name} | Jed Park`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const meta = categoryMeta[project.category];
  const accentColor = categoryColors[project.category] || "bg-[#00ff00]";

  return (
    <div className="px-6 md:px-8 lg:px-12 pb-24 md:pb-36 lg:pb-48">
      <div className="mx-auto max-w-7xl">

        {/* Back Button - Large, Prominent, Interactive */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-4 px-6 py-4 mb-12 md:mb-16
                     bg-black text-white font-black text-base md:text-lg uppercase tracking-widest
                     border-4 border-black shadow-[6px_6px_0_#00ff00]
                     hover:bg-[#00ff00] hover:text-black hover:shadow-[8px_8px_0_#000]
                     active:translate-x-1 active:translate-y-1 active:shadow-[4px_4px_0_#000]
                     transition-all duration-150 cursor-pointer select-none"
        >
          <svg
            className="w-6 h-6 transition-transform group-hover:-translate-x-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Projects</span>
        </Link>

        {/* Header */}
        <section className="mb-16 md:mb-24">
          {/* Category Badge */}
          <div className="flex items-center gap-5 mb-8 md:mb-10">
            <span className={`h-3 w-24 md:w-32 ${accentColor} border-3 border-black shadow-[4px_4px_0_#000]`} />
            <span className="text-sm md:text-base font-black text-black/60 uppercase tracking-[0.15em]">
              {meta.label}
            </span>
          </div>

          {/* Project Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.05] tracking-tight mb-8 md:mb-12">
            {project.name}
          </h1>

          {/* Summary - Large for Senior Readability */}
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black/85 leading-[1.6] mb-12 md:mb-16 max-w-4xl">
            {project.summary}
          </p>

          {/* Metrics Cards - Clear, Big Numbers */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
              {project.metrics.duration && (
                <div className="group bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#00ff00] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default">
                  <div className="text-xs md:text-sm font-black text-black/40 uppercase tracking-widest mb-3">
                    Duration
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-black">
                    {project.metrics.duration}
                  </div>
                </div>
              )}
              {project.metrics.role && (
                <div className="group bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#00ff00] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default">
                  <div className="text-xs md:text-sm font-black text-black/40 uppercase tracking-widest mb-3">
                    Role
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-black">
                    {project.metrics.role}
                  </div>
                </div>
              )}
              {project.metrics.impact && (
                <div className="group bg-[#00ff00] border-4 border-black p-6 md:p-8 shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default">
                  <div className="text-xs md:text-sm font-black text-black/60 uppercase tracking-widest mb-3">
                    Impact
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-black">
                    {project.metrics.impact}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Project Intent / Motivation */}
          {project.intent && (
            <div className="bg-white border-4 border-black p-8 md:p-12 mb-12 md:mb-16 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#00ff00] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <h3 className="text-sm md:text-base font-black text-black/50 uppercase tracking-[0.2em] mb-6 md:mb-8 pb-4 border-b-3 border-black/10 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-[#00ff00] flex items-center justify-center text-lg">💡</span>
                Project Motivation
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl text-black/90 leading-[1.7] font-semibold">
                {project.intent}
              </p>
            </div>
          )}

          {/* Detailed Description */}
          <div className="max-w-4xl">
            <h3 className="text-sm md:text-base font-black text-black/40 uppercase tracking-[0.15em] mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Detailed Description
            </h3>
            <p className="text-lg md:text-xl text-black/70 leading-[1.9] font-medium">
              {project.description}
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] lg:gap-16">

          {/* Left Column: Highlights */}
          <div className="space-y-10">
            <div className="bg-white border-4 border-black p-8 md:p-10 lg:p-12 shadow-[8px_8px_0_#000]">
              <h2 className="text-sm md:text-base font-black text-black/40 uppercase tracking-[0.15em] mb-10 md:mb-12 pb-4 border-b-3 border-black/10 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00ff00] border-2 border-black flex items-center justify-center text-lg">✓</span>
                Technical Highlights
              </h2>
              <ul className="space-y-6 md:space-y-8">
                {project.highlights.map((item, index) => (
                  <li
                    key={item}
                    className="group flex gap-5 md:gap-6 p-4 md:p-5 -mx-4 md:-mx-5 rounded-lg hover:bg-[#00ff00]/10 transition-colors cursor-default"
                  >
                    <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black text-[#00ff00] border-3 border-black shadow-[3px_3px_0_#00ff00] text-base md:text-lg font-black group-hover:shadow-[4px_4px_0_#000] group-hover:bg-[#00ff00] group-hover:text-black transition-all">
                      {index + 1}
                    </span>
                    <span className="text-base md:text-lg lg:text-xl text-black/85 font-semibold leading-[1.6] pt-2">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Links */}
          <div className="space-y-8 md:space-y-10">

            {/* Tech Stack */}
            <div className="bg-white border-4 border-black p-8 md:p-10 shadow-[8px_8px_0_#000]">
              <h2 className="text-sm md:text-base font-black text-black/40 uppercase tracking-[0.15em] mb-8 md:mb-10 pb-4 border-b-3 border-black/10 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-lg">⚡</span>
                Tech Stack
              </h2>

              {project.techStackMap ? (
                <div className="space-y-8 md:space-y-10">
                  {Object.entries(project.techStackMap).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-sm md:text-base font-black text-black/60 uppercase tracking-widest mb-4 md:mb-5 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#00ff00] border border-black rounded-full" />
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2.5 md:gap-3">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="text-sm md:text-base font-bold py-2.5 px-4 md:px-5 bg-white border-3 border-black shadow-[3px_3px_0_#000] hover:bg-[#00ff00] hover:shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default select-none"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-sm md:text-base font-bold py-2.5 px-4 md:px-5 bg-white border-3 border-black shadow-[3px_3px_0_#000] hover:bg-[#00ff00] hover:shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default select-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* External Links - Big, Clickable Buttons */}
            {project.links && project.links.length > 0 && (
              <div className="bg-black border-4 border-black p-8 md:p-10 shadow-[8px_8px_0_#00ff00]">
                <h2 className="text-sm md:text-base font-black text-white/50 uppercase tracking-[0.15em] mb-8 md:mb-10 pb-4 border-b-2 border-white/20 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#00ff00] text-black flex items-center justify-center text-lg">🔗</span>
                  <span className="text-white">Links</span>
                </h2>
                <div className="flex flex-col gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 p-5 md:p-6
                                 bg-white/5 border-3 border-white/30
                                 hover:bg-[#00ff00] hover:border-[#00ff00]
                                 active:translate-x-1 active:translate-y-1
                                 transition-all duration-150 cursor-pointer"
                    >
                      <span className="text-base md:text-lg font-black uppercase tracking-wider text-white group-hover:text-black">
                        {link.label}
                      </span>
                      <svg
                        className="w-6 h-6 text-white/60 group-hover:text-black transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Status Badge */}
            {project.status && (
              <div className={`p-6 md:p-8 border-4 border-black shadow-[6px_6px_0_#000] ${
                project.status === '운영중' ? 'bg-[#00ff00]' :
                project.status === '개발중' ? 'bg-[#ffff00]' :
                'bg-white'
              }`}>
                <div className="text-xs md:text-sm font-black text-black/50 uppercase tracking-widest mb-2">
                  Status
                </div>
                <div className="text-xl md:text-2xl font-black text-black flex items-center gap-3">
                  {project.status === '운영중' && <span className="w-3 h-3 bg-black rounded-full animate-pulse"></span>}
                  {project.status === '개발중' && <span className="w-3 h-3 bg-black rounded-full animate-bounce"></span>}
                  {project.status}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 md:mt-28 pt-12 border-t-4 border-black/10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 px-8 py-5
                       bg-black text-white font-black text-lg md:text-xl uppercase tracking-widest
                       border-4 border-black shadow-[8px_8px_0_#00ff00]
                       hover:bg-[#00ff00] hover:text-black hover:shadow-[10px_10px_0_#000]
                       active:translate-x-1 active:translate-y-1 active:shadow-[4px_4px_0_#000]
                       transition-all duration-150 cursor-pointer select-none"
          >
            <svg
              className="w-7 h-7 transition-transform group-hover:-translate-x-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>View All Projects</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
