import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryMeta, projects } from "../../../data/projects";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
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

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const meta = categoryMeta[project.category];

  return (
    <div className="px-6 pb-24 text-white">
      <section className="mx-auto max-w-4xl space-y-6">
        <Link
          href="/projects"
          className="text-xs uppercase tracking-[0.4em] text-white/50"
        >
          ← Back to Projects
        </Link>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div
            className={`h-1.5 w-full rounded-full bg-gradient-to-r ${meta.color}`}
          />
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-white/50">
            {meta.label}
          </p>
          <h1 className="font-display mt-4 text-4xl text-white">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-white/70">{project.summary}</p>
          <p className="mt-6 text-sm text-white/70">{project.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h2 className="font-display text-xl text-white">Highlights</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {project.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h2 className="font-display text-xl text-white">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 ? (
              <div className="mt-6 space-y-2 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/70 hover:text-white"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
