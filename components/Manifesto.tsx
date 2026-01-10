"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";

export default function Manifesto() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="system-grid">

        {/* Header */}
        <div className="col-span-12 mb-12 md:mb-16">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.manifesto.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#171a20] mb-5 tracking-tight">
            {t.manifesto.title}
          </h2>
          <p className="text-[#3e3e3e] max-w-3xl leading-[1.8] text-lg md:text-xl font-medium">
            {t.manifesto.subtitle}
          </p>
        </div>

        {/* Clean List Layout */}
        <div className="col-span-12 flex flex-col gap-4 md:gap-5">
          {t.manifesto.sectors.map((item, idx) => (
            <div
              key={idx}
              className="group py-6 md:py-8 border-b-4 border-black/5 last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center hover:bg-[#fafafa] transition-all rounded-xl px-6 -mx-6 cursor-default"
            >
              <div className="md:col-span-3">
                <h3 className="text-xl md:text-2xl font-black text-[#171a20] group-hover:text-[#00cc00] transition-colors">
                  {item.zone}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[#3e3e3e] leading-[1.8] text-base md:text-lg font-medium">
                  {item.problem}
                </p>
              </div>
              <div className="md:col-span-3 flex items-center md:justify-end mt-3 md:mt-0">
                <span className="text-sm md:text-base font-mono font-bold text-[#00cc00] bg-[#00ff00]/10 px-5 py-3 rounded-xl border-2 border-[#00cc00]/30 group-hover:bg-[#00ff00] group-hover:text-black group-hover:border-[#00cc00] transition-all">
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
