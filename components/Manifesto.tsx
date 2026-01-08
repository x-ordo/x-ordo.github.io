"use client";

import React from "react";

export default function Manifesto() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="system-grid">

        {/* Header */}
        <div className="col-span-12 mb-16 md:mb-24">
          <span className="text-label text-[#00cc00] mb-5 block">Analysis</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#171a20] mb-8 tracking-tight">Target Sectors</h2>
          <p className="text-[#3e3e3e] max-w-2xl leading-[1.8] text-lg md:text-xl font-normal">
            시장의 비효율은 곧 기회입니다. 우리는 복잡성이 높은 영역(High-Entropy Zones)에 진입하여 구조적 문제를 해결합니다.
          </p>
        </div>

        {/* Clean List Layout (TDS Style) */}
        <div className="col-span-12 flex flex-col">

          {[
            {
              zone: "Financial Services",
              problem: "Intentionally complex processes designed to hide extraction fees.",
              solution: "Arbitrage & Simplification"
            },
            {
              zone: "Regulatory Tech",
              problem: "Manual compliance nightmares and fear-driven bureaucratic waste.",
              solution: "Automated Compliance Robots"
            },
            {
              zone: "Legacy Industries",
              problem: "Static workflows. Paper-based systems in a digital era.",
              solution: "Zero-to-One Transformation"
            },
            {
              zone: "Platform Economy",
              problem: "High fees and locked gates preventing direct customer access.",
              solution: "Direct Access & Bypass"
            }
          ].map((item, idx) => (
            <div key={idx} className="group py-8 md:py-10 border-b border-[#f2f4f6] last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-[#fafafa] transition-colors rounded-xl px-5 -mx-5">
              <div className="md:col-span-3">
                <h3 className="text-lg md:text-xl font-bold text-[#171a20] group-hover:text-[#00cc00] transition-colors">{item.zone}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[#3e3e3e] leading-[1.75] text-base md:text-[17px]">{item.problem}</p>
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
