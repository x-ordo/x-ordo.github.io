"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";

export default function Manifesto() {
  const { t } = useI18n();

  return (
    <section className="bg-[#fafafa] border-t-2 border-black/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-10 md:mb-14">
          <span className="ds-badge w-fit">
            {t.manifesto.badge}
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#171a20] leading-tight">
              {t.manifesto.title}
            </h2>
            <p className="text-sm md:text-base text-[#5c5e62] font-medium max-w-2xl">
              {t.manifesto.subtitle}
            </p>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.manifesto.sectors.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 md:p-6 bg-white rounded-xl border-2 border-black/5 hover:border-[#00cc00]/50 hover:shadow-[4px_4px_0_#00ff00] transition-all cursor-default"
            >
              <div className="flex flex-col gap-4">
                {/* Zone Label */}
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-black text-[#171a20] group-hover:text-[#00cc00] transition-colors">
                    {item.zone}
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#9ca3af]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Problem Description */}
                <p className="text-xs md:text-sm text-[#5c5e62] font-medium leading-relaxed min-h-[3rem]">
                  {item.problem}
                </p>

                {/* Solution Badge */}
                <div className="pt-2 border-t border-black/5">
                  <span className="inline-flex text-xs md:text-sm font-mono font-bold text-[#00cc00] bg-[#00ff00]/10 px-3 py-1.5 rounded-lg border border-[#00cc00]/30 group-hover:bg-[#00ff00] group-hover:text-black group-hover:border-[#00cc00] transition-all">
                    {item.solution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
