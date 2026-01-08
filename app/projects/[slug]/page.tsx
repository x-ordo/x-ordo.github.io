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
    <div className="px-6 md:px-8 lg:px-12 pt-24 md:pt-32 lg:pt-36 pb-24 md:pb-36 lg:pb-48">
      <div className="mx-auto max-w-7xl">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 text-sm font-black text-black/40 hover:text-black transition-all mb-12 md:mb-16 group uppercase tracking-widest"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <section className="mb-20 md:mb-28">
          <div className="flex items-center gap-5 mb-8 md:mb-10">
            <span className={`h-2.5 w-20 md:w-24 ${accentColor} border-2 border-black shadow-[3px_3px_0_#000]`} />
            <span className="text-xs md:text-sm font-black text-black/40 uppercase tracking-[0.2em]">
              {meta.label}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1] tracking-tighter mb-8 md:mb-12">
            {project.name}
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl font-bold text-black/80 leading-[1.5] mb-12 md:mb-16 max-w-4xl tracking-tight">
            {project.summary}
          </p>

          {/* Project Intent / Motivation */}
          {project.intent && (
            <div className="bg-white border-3 border-black p-8 md:p-12 mb-12 md:mb-16 shadow-[10px_10px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <h3 className="text-[10px] md:text-xs font-black text-black/40 uppercase tracking-[0.3em] mb-6 md:mb-8 border-b-2 border-black/5 pb-3">
                Project Motivation & Direction
              </h3>
              <p className="text-base md:text-xl lg:text-2xl text-black/90 leading-[1.6] font-bold tracking-tight">
                {project.intent}
              </p>
            </div>
          )}

          <div className="max-w-4xl">
            <h3 className="text-[10px] md:text-xs font-black text-black/30 uppercase tracking-widest mb-5 md:mb-6">Detailed Description</h3>
            <p className="text-base md:text-lg lg:text-xl text-black/60 leading-[1.8] font-medium">
              {project.description}
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Left Column: Highlights */}
          <div className="space-y-12">
            <div className="card-elevated p-8 md:p-10 lg:p-12 bg-white">
              <h2 className="text-xs font-black text-black/30 uppercase tracking-[0.2em] mb-10 md:mb-12 border-b-2 border-black/5 pb-4">
                Technical Highlights
              </h2>
              <ul className="space-y-6 md:space-y-8">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-5 md:gap-6 text-base md:text-lg lg:text-xl text-black/80 font-bold leading-[1.5]">
                    <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-black text-[#00ff00] border-2 border-black rounded-sm shadow-[3px_3px_0_#000] text-xs md:text-sm font-black">
                      ✓
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Links */}
          <div className="space-y-8 md:space-y-10">
            {/* Tech Stack */}
            <div className="card-elevated p-8 md:p-10 bg-white">
              <h2 className="text-xs font-black text-black/30 uppercase tracking-[0.2em] mb-8 md:mb-10 border-b-2 border-black/5 pb-4">
                Core Stack
              </h2>

              {project.techStackMap ? (
                <div className="space-y-8 md:space-y-10">
                  {Object.entries(project.techStackMap).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-[11px] md:text-xs font-black text-black/50 uppercase tracking-widest mb-4 md:mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2 md:gap-2.5">
                        {items.map((item) => (
                          <span key={item} className="brutal-tag text-[11px] md:text-sm py-2 px-3 md:px-4 hover:bg-[#00ff00] hover:shadow-[4px_4px_0_#000] transition-all">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {project.stack.map((item) => (
                    <span key={item} className="brutal-tag text-[11px] md:text-sm py-2 px-3 md:px-4">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="card-elevated p-8 md:p-10 bg-black text-white border-black shadow-[12px_12px_0_#00ff00]">
                <h2 className="text-xs font-black text-white/30 uppercase tracking-[0.2em] mb-8 md:mb-10 border-b border-white/10 pb-4">
                  External Resources
                </h2>
                <div className="flex flex-col gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 p-4 border-2 border-white/20 hover:border-[#00ff00] hover:bg-[#00ff00]/10 transition-all duration-300"
                    >
                      <span className="text-sm md:text-base font-black uppercase tracking-wider group-hover:text-[#00ff00]">{link.label}</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 text-white/50 group-hover:text-[#00ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}