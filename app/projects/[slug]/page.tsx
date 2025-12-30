import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryMeta, projects } from "../../../data/projects";

const categoryColors: Record<string, string> = {
  saas: "bg-[#22c55e]",
  consumer: "bg-[#a855f7]",
  ai: "bg-[#3b82f6]",
  automation: "bg-[#eab308]",
  tools: "bg-[#f97316]",
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
  const accentColor = categoryColors[project.category] || "bg-[#22c55e]";

  return (
    <div className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`h-2 w-12 rounded-full ${accentColor}`} />
            <span className="text-xs font-medium text-black/50 uppercase tracking-wider">
              {meta.label}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-black sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-black/70 leading-relaxed">
            {project.summary}
          </p>
          <p className="mt-4 text-sm text-black/60 leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Highlights */}
          <div className="card-elevated p-6">
            <h2 className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-4">
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-black/70">
                  <span className="text-[#22c55e] mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Links */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h2 className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="brutal-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="card-elevated p-6">
                <h2 className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-4">
                  Links
                </h2>
                <div className="flex flex-col gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-[#22c55e] transition-colors"
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
