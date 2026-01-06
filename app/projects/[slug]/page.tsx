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
    <div className="px-5 pt-12 pb-24 md:px-8 md:pt-20 md:pb-36 lg:pt-24 lg:pb-48">
      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-black transition-colors mb-10 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          BACK TO PROJECTS
        </Link>

        {/* Header */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className={`h-2 w-16 md:w-20 ${accentColor}`} />
            <span className="text-xs md:text-sm font-bold text-black/50 uppercase tracking-widest">
              {meta.label}
            </span>
          </div>
          <h1 className="text-4xl font-black text-black sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6 md:mb-8">
            {project.name}
          </h1>
          <p className="text-lg md:text-2xl font-medium text-black/80 leading-relaxed mb-8 md:mb-10 max-w-3xl">
            {project.summary}
          </p>
          
          {/* Project Intent / Motivation */}
          {project.intent && (
            <div className="bg-black/5 border-l-4 border-black p-6 md:p-8 mb-8 md:mb-10">
              <h3 className="text-xs font-bold text-black/50 uppercase tracking-widest mb-3">Project Intent</h3>
              <p className="text-sm md:text-base text-black/80 leading-relaxed font-medium">
                {project.intent}
              </p>
            </div>
          )}

          <p className="text-sm md:text-base text-black/60 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] lg:gap-12">
          {/* Left Column: Highlights */}
          <div className="space-y-8">
            <div className="card-elevated p-6 md:p-8">
              <h2 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-6">
                Key Highlights
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-4 text-sm md:text-base text-black/80 font-medium">
                    <span className={`text-[${accentColor}] mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-[10px]`}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Links */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="card-elevated p-6 md:p-8">
              <h2 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-6">
                Tech Stack
              </h2>
              
              {project.techStackMap ? (
                <div className="space-y-6">
                  {Object.entries(project.techStackMap).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-[10px] font-bold text-black/60 uppercase tracking-wider mb-3 border-b border-black/10 pb-1">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span key={item} className="brutal-tag text-xs py-1.5 px-2.5">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="brutal-tag text-xs py-1.5 px-2.5">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="card-elevated p-6 md:p-8 bg-black text-white border-black">
                <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">
                  Links
                </h2>
                <div className="flex flex-col gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between gap-2 text-sm font-bold text-white hover:text-[#00ff00] transition-colors p-3 border border-white/20 hover:border-[#00ff00]"
                    >
                      {link.label}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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