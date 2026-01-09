"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n";
import MetricsDashboard from "./sections/MetricsDashboard";
import ExperienceTimeline from "./sections/ExperienceTimeline";

const ClickGame = dynamic(() => import("./ui/ClickGame"), { ssr: false });

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
            <h1 className="text-display mb-4 tracking-tight text-[#171a20]">
              {t.hero.title}<br />
              <span className="text-[#00ff00]">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-base md:text-lg text-[#3e3e3e] font-normal leading-[1.7] max-w-lg">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="mb-6">
            <MetricsDashboard />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn-system btn-primary">
              {t.hero.ctaPrimary}
            </Link>
            <a href="mailto:parkdavid31@gmail.com" className="btn-system btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right: Timeline + Game + Status */}
        <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0 flex flex-col justify-center gap-4">

          {/* Experience Timeline (condensed) */}
          <div className="p-5 rounded-2xl bg-[#fafafa] hidden lg:block">
            <ExperienceTimeline limit={4} />
          </div>

          {/* Click Game */}
          <div className="p-5 rounded-2xl bg-[#fafafa]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00]">
                {t.hero.gameLabel}
              </span>
              <span className="text-[10px] font-mono text-[#9ca3af]">{t.hero.gameHint}</span>
            </div>
            <ClickGame />
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
