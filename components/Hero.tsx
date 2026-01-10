"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import MetricsDashboard from "./sections/MetricsDashboard";
import ExperienceTimeline from "./sections/ExperienceTimeline";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="ds-py-section min-h-[80vh] flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Main Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-4">
              <span className="ds-badge">
                {t.hero.badge}
              </span>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#171a20] keep-all mt-3">
                {t.hero.title}<br />
                <span className="text-[#00ff00]">{t.hero.titleAccent}</span>
              </h1>

              <p className="text-xs md:text-sm text-[#5c5e62] font-bold keep-all mt-2">
                {t.hero.subtitle}
              </p>

              {/* Value Proposition */}
              <div className="text-sm md:text-base text-[#171a20] font-bold max-w-2xl keep-all mt-4">
                <span>{t.hero.valueProposition}</span>
              </div>

              <p className="text-xs md:text-sm text-[#5c5e62] font-medium max-w-xl keep-all">
                {t.hero.executiveSummary}
              </p>
            </div>

            {/* Metrics Dashboard */}
            <div className="ds-mt-component">
              <MetricsDashboard />
            </div>

            {/* CTA Buttons */}
            <div className="ds-button-group-lg">
              <Link href="/resume" className="ds-button ds-button-primary">
                {t.hero.ctaPrimary}
              </Link>
              <Link href="/projects" className="ds-button ds-button-outline">
                {t.hero.ctaPortfolio}
              </Link>
              <a href="mailto:haspark912@kakao.com" className="ds-button ds-button-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right: Timeline + Key Highlights + Status */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 flex flex-col justify-center gap-4">

            {/* Experience Timeline (condensed) */}
            <div className="ds-card hidden lg:block">
              <ExperienceTimeline limit={4} />
            </div>

            {/* Key Highlights */}
            <div className="ds-card">
              <span className="ds-badge">
                {t.hero.highlightsLabel}
              </span>
              <div className="space-y-2.5 mt-3">
                {[
                  { icon: "🏛️", text: t.hero.highlight1 },
                  { icon: "🚀", text: t.hero.highlight2 },
                  { icon: "🤖", text: t.hero.highlight3 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <span className="text-xs text-[#3e3e3e] font-medium keep-all leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="p-3 md:p-4 rounded-lg bg-[#171a20] border-2 border-black shadow-[2px_2px_0_#00ff00] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                  {t.hero.statusLabel}
                </span>
                <h3 className="text-xs md:text-sm font-black font-mono uppercase text-[#00ff00] mt-0.5">
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
      </div>
    </section>
  );
}
