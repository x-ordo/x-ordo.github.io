"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";

export default function Manifesto() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="system-grid">

        {/* Header */}
        <div className="col-span-12 mb-8 md:mb-12">
          <span className="text-label text-[#00cc00] mb-2 block">{t.manifesto.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171a20] mb-3 tracking-tight">
            {t.manifesto.title}
          </h2>
          <p className="text-[#3e3e3e] max-w-2xl leading-[1.7] text-base md:text-lg">
            {t.manifesto.subtitle}
          </p>
        </div>

        {/* Clean List Layout */}
        <div className="col-span-12 flex flex-col">
          {t.manifesto.sectors.map((item, idx) => (
            <div
              key={idx}
              className="group py-4 md:py-5 border-b border-[#f2f4f6] last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center hover:bg-[#fafafa] transition-colors rounded-lg px-4 -mx-4"
            >
              <div className="md:col-span-3">
                <h3 className="text-lg md:text-xl font-bold text-[#171a20] group-hover:text-[#00cc00] transition-colors">
                  {item.zone}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[#3e3e3e] leading-[1.75] text-base md:text-[17px]">
                  {item.problem}
                </p>
              </div>
              <div className="md:col-span-3 flex items-center md:justify-end mt-2 md:mt-0">
                <span className="text-[12px] md:text-[13px] font-mono font-medium text-[#00cc00] bg-green-50 px-4 py-2.5 rounded-full">
                  {item.solution}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
