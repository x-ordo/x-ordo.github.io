"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import MetricsDashboard from "./sections/MetricsDashboard";
import ExperienceTimeline from "./sections/ExperienceTimeline";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="system-grid relative z-10">

        {/* Left: Main Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="mb-6 md:mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-[#00cc00] text-xs font-mono font-bold mb-4">
              {t.hero.badge}
            </span>
            <h1 className="text-display mb-2 tracking-tight text-[#171a20]">
              {t.hero.title}<br />
              <span className="text-[#00ff00]">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-sm md:text-base text-[#5c5e62] font-medium mb-4">
              {t.hero.subtitle}
            </p>

            {/* Value Proposition - Recruiter-focused */}
            <div className="text-lg md:text-xl text-[#171a20] font-medium leading-relaxed max-w-2xl mb-4">
              <span>{t.hero.valueProposition}</span>
            </div>

            <p className="text-base text-[#5c5e62] font-normal leading-[1.7] max-w-xl">
              {t.hero.executiveSummary}
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="mb-6">
            <MetricsDashboard />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/resume" className="btn-system btn-primary">
              {t.hero.ctaPrimary}
            </Link>
            <Link href="/projects" className="btn-system btn-ghost">
              {t.hero.ctaPortfolio}
            </Link>
            <a href="mailto:haspark912@kakao.com" className="btn-system btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right: Timeline + Key Highlights + Status */}
        <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0 flex flex-col justify-center gap-4">

          {/* Experience Timeline (condensed) */}
          <div className="p-5 rounded-2xl bg-[#fafafa] hidden lg:block">
            <ExperienceTimeline limit={4} />
          </div>

          {/* Key Highlights - Replacing Click Game */}
          <div className="p-5 rounded-2xl bg-[#fafafa]">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
              {t.hero.highlightsLabel}
            </span>
            <div className="space-y-3">
              {[
                { icon: "🏛️", text: t.hero.highlight1 },
                { icon: "🚀", text: t.hero.highlight2 },
                { icon: "🤖", text: t.hero.highlight3 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <span className="text-sm text-[#3e3e3e] leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="p-5 rounded-2xl bg-[#fafafa] flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5c5e62] mb-1 block">
                {t.hero.statusLabel}
              </span>
              <h3 className="text-base font-black font-mono uppercase text-[#171a20]">
                {t.hero.statusValue}
              </h3>
            </div>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00cc00]"></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
