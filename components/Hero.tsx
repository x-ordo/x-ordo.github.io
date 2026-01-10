"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import MetricsDashboard from "./sections/MetricsDashboard";
import ExperienceTimeline from "./sections/ExperienceTimeline";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="system-grid relative z-10">

        {/* Left: Main Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="mb-10 md:mb-12">
            <span className="inline-block px-4 py-2 rounded-lg bg-[#00ff00]/10 text-[#00cc00] text-sm md:text-base font-mono font-black uppercase tracking-wider mb-6 border-2 border-[#00cc00]/30">
              {t.hero.badge}
            </span>
            <h1 className="text-display mb-4 tracking-tight text-[#171a20]">
              {t.hero.title}<br />
              <span className="text-[#00ff00]">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-base md:text-lg text-[#5c5e62] font-bold mb-6">
              {t.hero.subtitle}
            </p>

            {/* Value Proposition - Recruiter-focused */}
            <div className="text-xl md:text-2xl text-[#171a20] font-bold leading-[1.6] max-w-2xl mb-6">
              <span>{t.hero.valueProposition}</span>
            </div>

            <p className="text-lg md:text-xl text-[#5c5e62] font-medium leading-[1.8] max-w-xl">
              {t.hero.executiveSummary}
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="mb-10">
            <MetricsDashboard />
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00cc00] text-black font-black text-lg md:text-xl uppercase tracking-wider rounded-xl border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#000] transition-all"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-black text-lg md:text-xl uppercase tracking-wider rounded-xl border-4 border-black shadow-[6px_6px_0_#00ff00] hover:bg-[#00ff00] hover:shadow-[8px_8px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#000] transition-all"
            >
              {t.hero.ctaPortfolio}
            </Link>
            <a
              href="mailto:haspark912@kakao.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-black text-white font-black text-lg md:text-xl uppercase tracking-wider rounded-xl border-4 border-black shadow-[6px_6px_0_#00ff00] hover:bg-[#00ff00] hover:text-black hover:shadow-[8px_8px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#000] transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right: Timeline + Key Highlights + Status */}
        <div className="col-span-12 lg:col-span-5 mt-14 lg:mt-0 flex flex-col justify-center gap-5">

          {/* Experience Timeline (condensed) */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#fafafa] border-3 border-transparent hover:border-[#00cc00] hover:shadow-[4px_4px_0_#00ff00] transition-all hidden lg:block">
            <ExperienceTimeline limit={4} />
          </div>

          {/* Key Highlights - Replacing Click Game */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#fafafa] border-3 border-transparent hover:border-[#00cc00] hover:shadow-[4px_4px_0_#00ff00] transition-all">
            <span className="text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 block">
              {t.hero.highlightsLabel}
            </span>
            <div className="space-y-5">
              {[
                { icon: "🏛️", text: t.hero.highlight1 },
                { icon: "🚀", text: t.hero.highlight2 },
                { icon: "🤖", text: t.hero.highlight3 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="text-base md:text-lg text-[#3e3e3e] leading-[1.7] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#171a20] border-4 border-black shadow-[4px_4px_0_#00ff00] flex items-center justify-between">
            <div>
              <span className="text-sm md:text-base font-mono font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                {t.hero.statusLabel}
              </span>
              <h3 className="text-lg md:text-xl font-black font-mono uppercase text-[#00ff00]">
                {t.hero.statusValue}
              </h3>
            </div>
            <div className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#00cc00]"></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
