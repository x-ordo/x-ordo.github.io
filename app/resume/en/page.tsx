"use client";

import Link from "next/link";
import { projects, featuredProjects } from "../../../data/projects";

// Calculate stats from projects data
const stats = {
  totalProjects: projects.length,
  featuredCount: featuredProjects.length,
  aiAgentProjects: projects.filter((p) => p.category === "ai-agent").length,
  b2bSaasProjects: projects.filter((p) => p.category === "b2b-saas").length,
  automationProjects: projects.filter((p) => p.category === "automation").length,
};

// Get unique tech stacks with counts
const stackCounts = projects
  .flatMap((p) => p.stack)
  .reduce((acc, tech) => {
    acc[tech] = (acc[tech] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

const topStacks = Object.entries(stackCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);

export default function ResumeEnPage() {
  return (
    <div className="resume-en bg-[#0a0a0a] min-h-screen pt-24 pb-20 print:pt-8 print:pb-0 print:bg-white">
      <div className="max-w-[900px] mx-auto px-6 sm:px-10 print:px-8 print:max-w-none">

        {/* Terminal Header */}
        <header className="mb-12 print:mb-8">
          {/* Terminal Window Chrome */}
          <div className="bg-[#1a1a2e] rounded-t-lg px-4 py-2 flex items-center gap-2 print:hidden">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            </div>
            <span className="text-[#5c5e62] text-xs font-mono ml-2">~/resume/haseong-park.md</span>
          </div>

          {/* Main Header Content */}
          <div className="bg-[#111318] border border-[#2a2a3e] rounded-b-lg p-6 sm:p-8 print:bg-white print:border-gray-300 print:rounded-lg">
            <div className="flex items-start gap-6">
              {/* Status Indicator */}
              <div className="flex-shrink-0 print:hidden">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-[#00ff00]/30 rounded-lg flex items-center justify-center">
                  <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00cc00]"></span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold font-mono text-[#e0e0e0] tracking-tight print:text-[#171a20] print:text-[24pt]">
                  HASEONG PARK
                </h1>
                <p className="text-[#00cc00] font-mono text-lg mt-1 print:text-[#00cc00] print:text-[12pt]">
                  Software Engineer · Full-Stack · 5 years
                </p>

                {/* Status Badge */}
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-full print:hidden">
                  <span className="w-2 h-2 rounded-full bg-[#00ff00] animate-pulse"></span>
                  <span className="text-[#00ff00] text-xs font-mono uppercase tracking-wider">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Contact as Terminal Commands */}
            <div className="mt-6 font-mono text-sm space-y-1 print:text-[9pt]">
              <div className="text-[#5c5e62]">
                <span className="text-[#00cc00]">$</span> echo <span className="text-[#e0e0e0] print:text-[#171a20]">&quot;haspark912@kakao.com&quot;</span>
              </div>
              <div className="text-[#5c5e62]">
                <span className="text-[#00cc00]">$</span> curl <span className="text-[#e0e0e0] print:text-[#171a20]">https://x-ordo.github.io</span>
              </div>
              <div className="text-[#5c5e62]">
                <span className="text-[#00cc00]">$</span> cat <span className="text-[#e0e0e0] print:text-[#171a20]">location.txt</span> <span className="text-[#787774]"># Seoul, Korea / Remote OK</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="mb-10 print:mb-6">
          <h2 className="font-mono text-sm text-[#5c5e62] mb-4 print:text-[9pt]">
            <span className="text-[#00cc00]">//</span> STATS
          </h2>
          <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-5 font-mono text-sm print:bg-gray-50 print:border-gray-200 print:text-[9pt]">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "projects_completed", value: `${stats.totalProjects}+` },
                { label: "featured_systems", value: stats.featuredCount },
                { label: "ai_agent_builds", value: stats.aiAgentProjects },
                { label: "b2b_enterprise", value: stats.b2bSaasProjects },
                { label: "automation_pipelines", value: stats.automationProjects },
                { label: "test_coverage_avg", value: "80%+" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[#787774]">{idx === 0 ? "├─" : idx === 5 ? "└─" : "├─"}</span>
                  <span className="text-[#5c5e62]">{stat.label}:</span>
                  <span className="text-[#00ff00] font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-10 print:mb-6">
          <h2 className="font-mono text-sm text-[#5c5e62] mb-4 print:text-[9pt]">
            <span className="text-[#00cc00]">//</span> SUMMARY
          </h2>
          <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-5 font-mono text-sm leading-relaxed print:bg-gray-50 print:border-gray-200 print:text-[9pt]">
            <div className="space-y-2 text-[#e0e0e0] print:text-[#171a20]">
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">├─</span>
                <span>5 years building <span className="text-[#00cc00]">data pipelines</span>, <span className="text-[#00cc00]">mobile apps</span>, and <span className="text-[#00cc00]">LLM automation systems</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">├─</span>
                <span>Engineering is <span className="text-[#00cc00]">deep thinking</span>, not just coding. I decompose problems before writing code.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">├─</span>
                <span>Learned that <span className="text-[#00cc00]">timing, distribution, and customers</span> matter more than perfect technology.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">└─</span>
                <span>Daily AI tool user (Claude, Gemini, ChatGPT) - rapid <span className="text-[#00cc00]">idea → build → validate → iterate</span> cycles.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10 print:mb-6">
          <h2 className="font-mono text-sm text-[#5c5e62] mb-4 print:text-[9pt]">
            <span className="text-[#00cc00]">//</span> EXPERIENCE
          </h2>

          <div className="space-y-6">
            {/* Zetalux Systems */}
            <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-5 print:bg-gray-50 print:border-gray-200">
              <div className="font-mono">
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <span className="text-[#00cc00] text-sm">[2021.11-2023.05]</span>
                  <span className="text-[#e0e0e0] font-bold print:text-[#171a20]">Zetalux Systems Co., Ltd.</span>
                  <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded print:bg-blue-100 print:text-blue-800">Gov Projects</span>
                </div>
                <p className="text-[#787774] text-sm mb-3 print:text-[9pt]">role: Software Developer (Senior)</p>
                <div className="text-sm space-y-1.5 print:text-[9pt]">
                  {[
                    { text: "Hadoop data pipeline architecture - redesigned around actual bottlenecks", tag: null },
                    { text: "YOLO-based wildfire detection system (ETRI research project)", tag: "ETRI" },
                    { text: "Mobile GIS solution 'MapJoy' - GS certification compliance", tag: null },
                    { text: "Digital signage streaming system (Kafka, Go, Kotlin)", tag: "National" },
                    { text: "Cadastral survey data integration - real-time sync architecture", tag: "National" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 text-[#e0e0e0] print:text-[#171a20]">
                      <span className="text-[#787774] flex-shrink-0">{idx === 4 ? "└─" : "├─"}</span>
                      <span>{item.text}</span>
                      {item.tag && (
                        <span className="text-xs px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded print:bg-purple-100 print:text-purple-800">{item.tag}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AZ Financial */}
            <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-5 print:bg-gray-50 print:border-gray-200">
              <div className="font-mono">
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <span className="text-[#00cc00] text-sm">[2023.05-2023.11]</span>
                  <span className="text-[#e0e0e0] font-bold print:text-[#171a20]">AZ Financial Services (Insurance GA)</span>
                </div>
                <p className="text-[#787774] text-sm mb-3 print:text-[9pt]">role: Field UX Research · Customer Decision Analysis</p>
                <div className="text-sm space-y-1.5 print:text-[9pt]">
                  {[
                    "Observed customer decision flows and persuasion structures in insurance sales",
                    "Understood why technically simple problems remain unsolved in the field",
                    "Key insight: 'Why don't users use this feature?' comes first",
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 text-[#e0e0e0] print:text-[#171a20]">
                      <span className="text-[#787774] flex-shrink-0">{idx === 2 ? "└─" : "├─"}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ravi International */}
            <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-5 print:bg-gray-50 print:border-gray-200">
              <div className="font-mono">
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <span className="text-[#00cc00] text-sm">[2023.11-2026.01]</span>
                  <span className="text-[#e0e0e0] font-bold print:text-[#171a20]">Ravi International</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-500/20 text-gray-400 rounded print:bg-gray-100 print:text-gray-800">Closed</span>
                </div>
                <p className="text-[#787774] text-sm mb-3 print:text-[9pt]">role: Founder / Solo Developer → Seeking full-time position</p>
                <div className="text-sm space-y-1.5 print:text-[9pt]">
                  {[
                    "Built and operated marketing automation systems from scratch",
                    "E-commerce experiments: seafood sales, overseas purchasing automation",
                    "Full lifecycle experience: planning → dev → sales → ops → shutdown",
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 text-[#e0e0e0] print:text-[#171a20]">
                      <span className="text-[#787774] flex-shrink-0">{idx === 2 ? "└─" : "├─"}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-[#0a0a0a] rounded border border-[#2a2a3e] text-sm text-[#787774] italic print:bg-gray-100 print:border-gray-200 print:text-[8pt]">
                  <span className="text-[#00cc00] not-italic">/*</span> Lesson learned: You can&apos;t know anything without execution. Even what you see, trust only half. <span className="text-[#00cc00] not-italic">*/</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-10 print:mb-6">
          <h2 className="font-mono text-sm text-[#5c5e62] mb-4 print:text-[9pt]">
            <span className="text-[#00cc00]">//</span> FEATURED_PROJECTS <span className="text-[#787774]">// from projects.ts</span>
          </h2>

          <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg overflow-hidden print:bg-gray-50 print:border-gray-200">
            {featuredProjects.slice(0, 7).map((project, idx, arr) => (
              <div
                key={project.slug}
                className={`p-4 font-mono text-sm ${idx !== arr.length - 1 ? "border-b border-[#2a2a3e] print:border-gray-200" : ""}`}
              >
                <div className="flex flex-wrap items-start gap-3">
                  <span className="text-[#787774] flex-shrink-0">{idx === arr.length - 1 ? "└─" : "├─"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-[#00ff00] font-bold">{project.name}</span>
                      <span className="text-[#787774]">│</span>
                      <span className="text-[#e0e0e0] print:text-[#171a20]">{project.summary}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs px-1.5 py-0.5 bg-[#00ff00]/10 text-[#00cc00] rounded">
                          {tech}
                        </span>
                      ))}
                      {project.metrics?.impact && (
                        <span className="text-xs px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded print:bg-yellow-100 print:text-yellow-800">
                          {project.metrics.impact}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#00cc00] font-mono mt-4 hover:underline print:hidden"
          >
            $ ls ./projects --all <span className="text-[#787774]"># View all {stats.totalProjects}+ projects</span>
          </Link>
        </section>

        {/* Tech Stack */}
        <section className="mb-10 print:mb-6">
          <h2 className="font-mono text-sm text-[#5c5e62] mb-4 print:text-[9pt]">
            <span className="text-[#00cc00]">//</span> TECH_STACK
          </h2>

          <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-5 font-mono text-sm print:bg-gray-50 print:border-gray-200 print:text-[9pt]">
            <div className="space-y-3">
              {[
                { category: "Backend", techs: "Go, Rust, Python/FastAPI, Node.js" },
                { category: "Frontend", techs: "Next.js, React, TypeScript, Tailwind CSS" },
                { category: "Mobile", techs: "Flutter, Kotlin, Android Native" },
                { category: "AI/LLM", techs: "LangChain, LangGraph, RAG, MCP Server, Multi-Agent" },
                { category: "Infra", techs: "AWS, Cloudflare Workers, Fly.io, Oracle Cloud" },
                { category: "Data", techs: "PostgreSQL, TimescaleDB, Redis, Qdrant, Supabase" },
              ].map((row, idx, arr) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[#787774] flex-shrink-0">{idx === arr.length - 1 ? "└─" : "├─"}</span>
                  <span className="text-[#00cc00] w-20 flex-shrink-0">{row.category}:</span>
                  <span className="text-[#e0e0e0] print:text-[#171a20]">{row.techs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Technologies by Usage */}
          <div className="mt-4 flex flex-wrap gap-2">
            {topStacks.slice(0, 10).map(([tech, count]) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-[#111318] border border-[#2a2a3e] text-[#e0e0e0] rounded font-mono print:bg-gray-100 print:border-gray-200 print:text-[#171a20]"
              >
                {tech} <span className="text-[#00cc00]">×{count}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Engineering Leadership */}
        <section className="mb-10 print:mb-6">
          <h2 className="font-mono text-sm text-[#5c5e62] mb-4 print:text-[9pt]">
            <span className="text-[#00cc00]">//</span> ENGINEERING_PRINCIPLES
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🏗️", title: "Architecture-First", desc: "Design systems before writing code. Every project starts with documented, justified architecture decisions." },
              { icon: "🔒", title: "Security-Conscious", desc: "CVE monitoring, Dependabot automation, security-first code reviews on every project." },
              { icon: "📊", title: "Risk Management", desc: "Kelly Criterion positioning to Merkle Tree integrity - quantitative risk assessment across all domains." },
              { icon: "🔧", title: "DevOps Culture", desc: "Conventional commits, semantic versioning, CI/CD pipelines, comprehensive test coverage as defaults." },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-4 print:bg-gray-50 print:border-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div className="font-mono">
                    <h3 className="text-[#00cc00] font-bold text-sm">{item.title}</h3>
                    <p className="text-[#787774] text-xs mt-1 leading-relaxed print:text-[8pt]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Philosophy */}
        <section className="mb-10 print:mb-6">
          <h2 className="font-mono text-sm text-[#5c5e62] mb-4 print:text-[9pt]">
            <span className="text-[#00cc00]">//</span> PHILOSOPHY
          </h2>

          <div className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-5 font-mono text-sm print:bg-gray-50 print:border-gray-200 print:text-[9pt]">
            <div className="space-y-2 text-[#e0e0e0] print:text-[#171a20]">
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">├─</span>
                <span>Engineering starts with <span className="text-[#00cc00]">deep thinking</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">├─</span>
                <span>The more complex the problem, the more I <span className="text-[#00cc00]">simplify first</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">├─</span>
                <span>I don&apos;t avoid conflict, but I <span className="text-[#00cc00]">converge to results</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#787774] flex-shrink-0">└─</span>
                <span>Technology is pain and joy - <span className="text-[#00cc00]">only complete when evaluated</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* Why I Apply */}
        <section className="mb-10 print:mb-6">
          <div className="bg-[#00ff00]/5 border border-[#00ff00]/30 rounded-lg p-6 print:bg-green-50 print:border-green-200">
            <h2 className="font-mono text-sm text-[#00cc00] mb-4">
              <span className="text-[#00cc00]">//</span> WHY_I_APPLY
            </h2>
            <div className="font-mono text-[#e0e0e0] space-y-3 print:text-[#171a20]">
              <p className="text-sm leading-relaxed print:text-[10pt]">
                Not looking to just execute tasks. <br />
                <span className="text-[#00ff00] font-bold">I want to define problems and design structures together.</span>
              </p>
              <p className="text-sm leading-relaxed print:text-[10pt]">
                If engineers can think deeply and that depth is respected, <br />
                <span className="text-[#00ff00] font-bold">I&apos;m ready to contribute beyond my designated scope.</span>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111318] border border-[#2a2a3e] rounded-lg p-6 text-center print:hidden">
          <p className="font-mono text-[#e0e0e0] mb-5">
            <span className="text-[#00cc00]">$</span> ./lets_talk --collaboration
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:haspark912@kakao.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00cc00] text-[#0a0a0a] text-sm font-mono font-bold rounded hover:bg-[#00ff00] transition-colors"
            >
              Send Email
            </a>
            <a
              href="tel:010-3980-4154"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#00cc00] text-[#00cc00] text-sm font-mono font-bold rounded hover:bg-[#00cc00] hover:text-[#0a0a0a] transition-colors"
            >
              Call Now
            </a>
          </div>
        </section>

        {/* Language Toggle Hint */}
        <div className="mt-8 text-center print:hidden">
          <Link
            href="/resume/ko"
            className="text-[#5c5e62] text-sm font-mono hover:text-[#00cc00] transition-colors"
          >
            $ locale --switch ko <span className="text-[#787774]"># 한국어 이력서</span>
          </Link>
        </div>

        {/* Print hint */}
        <div className="mt-6 text-center text-[#5c5e62] text-xs font-mono print:hidden">
          <p>Press Ctrl/Cmd + P to print this resume</p>
        </div>

      </div>
    </div>
  );
}
