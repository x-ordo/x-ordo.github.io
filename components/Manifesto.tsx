"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";

export default function Manifesto() {
  const { t } = useI18n();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-8 md:mb-10">
          <span className="badge-section">
            {t.manifesto.badge}
          </span>
          <h2 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] keep-all mt-3">
            {t.manifesto.title}
          </h2>
          <p className="text-xs md:text-sm text-[#3e3e3e] font-medium max-w-3xl keep-all mt-2">
            {t.manifesto.subtitle}
          </p>
        </div>

        {/* Clean List Layout */}
        <div className="space-y-3">
          {t.manifesto.sectors.map((item, idx) => (
            <div
              key={idx}
              className="group py-4 md:py-5 border-b-2 border-black/5 last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center hover:bg-[#fafafa] transition-all rounded-lg px-4 -mx-4 cursor-default"
            >
              <div className="md:col-span-3">
                <h3 className="text-base md:text-lg font-black text-[#171a20] group-hover:text-[#00cc00] transition-colors keep-all">
                  {item.zone}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-xs md:text-sm text-[#3e3e3e] font-medium keep-all">
                  {item.problem}
                </p>
              </div>
              <div className="md:col-span-3 flex items-center md:justify-end mt-2 md:mt-0">
                <span className="text-xs md:text-sm font-mono font-bold text-[#00cc00] bg-[#00ff00]/10 px-3 py-1.5 rounded-lg border-2 border-[#00cc00]/30 group-hover:bg-[#00ff00] group-hover:text-black group-hover:border-[#00cc00] transition-all">
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
