"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import MetricsDashboard from "./sections/MetricsDashboard";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 w-full">

        {/* Main Hero Content */}
        <div className="flex flex-col gap-8 md:gap-12">

          {/* Top: Badge + Title Block */}
          <div className="flex flex-col gap-6">
            <span className="ds-badge w-fit">
              {t.hero.badge}
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#171a20] leading-[1.1]">
                {t.hero.title}<br />
                <span className="text-[#00ff00] drop-shadow-[0_0_20px_rgba(0,255,0,0.3)]">{t.hero.titleAccent}</span>
              </h1>

              <p className="text-sm md:text-base text-[#5c5e62] font-bold max-w-xl">
                {t.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Middle: Value Proposition + Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

            {/* Left: Value Proposition */}
            <div className="flex flex-col gap-5">
              <div className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-[#171a20] to-[#2a2d32] border-2 border-black shadow-[4px_4px_0_#00ff00]">
                <p className="text-sm md:text-base text-white font-bold leading-relaxed">
                  {t.hero.valueProposition}
                </p>
              </div>

              <p className="text-xs md:text-sm text-[#5c5e62] font-medium leading-relaxed">
                {t.hero.executiveSummary}
              </p>
            </div>

            {/* Right: Key Highlights */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">
                {t.hero.highlightsLabel}
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "🏛️", text: t.hero.highlight1, color: "from-blue-500/10 to-blue-600/5 border-blue-500/20" },
                  { icon: "🚀", text: t.hero.highlight2, color: "from-purple-500/10 to-purple-600/5 border-purple-500/20" },
                  { icon: "🤖", text: t.hero.highlight3, color: "from-green-500/10 to-green-600/5 border-green-500/20" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r ${item.color} border hover:scale-[1.02] transition-transform cursor-default`}
                  >
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span className="text-xs md:text-sm text-[#3e3e3e] font-medium leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: Metrics + CTA + Status */}
          <div className="flex flex-col gap-6">

            {/* Metrics Dashboard */}
            <MetricsDashboard />

            {/* CTA Buttons + Status */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
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

              {/* Status Indicator */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#171a20] border border-[#00ff00]/30">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00cc00]"></span>
                </div>
                <span className="text-xs font-mono font-bold text-[#00ff00]">
                  {t.hero.statusValue}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
