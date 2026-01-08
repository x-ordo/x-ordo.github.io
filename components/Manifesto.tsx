"use client";

import React from "react";

export default function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-4 md:px-8 border-t-2 border-black bg-white">
      <div className="system-grid w-full border-black">
        
        {/* Header */}
        <div className="col-span-12 p-8 md:p-20 border-b-2 border-black bg-[#fafafa]">
          <span className="text-label inline-block mb-10 border-b-2 border-black">Target Sector Analysis</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-[0.9]">
            Identifying <span className="text-[#00cc00]">Chaos</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-black max-w-3xl leading-tight">
            우리는 시장의 혼돈과 비효율이 극대화된 영역을 조준합니다.<br/>
            정보 비대칭을 분쇄하고 복잡성을 자동화하여 압도적인 수익 구조를 설계합니다.
          </p>
        </div>

        {/* Table Header */}
        <div className="hidden md:block col-span-3 p-6 bg-black text-[#00ff00] text-sm font-black uppercase border-b-2 border-r-2 border-black">
          Sector_Zone
        </div>
        <div className="hidden md:block col-span-5 p-6 bg-black text-[#00ff00] text-sm font-black uppercase border-b-2 border-r-2 border-black">
          Systemic_Chaos
        </div>
        <div className="hidden md:block col-span-4 p-6 bg-black text-[#00ff00] text-sm font-black uppercase border-b-2 border-black">
          Operational_Order
        </div>

        {/* Row 1 */}
        <div className="col-span-12 md:col-span-3 p-10 md:p-12 border-b-2 border-r-0 md:border-r-2 border-black font-black uppercase text-2xl">
          Financials
        </div>
        <div className="col-span-12 md:col-span-5 p-10 md:p-12 border-b-2 border-r-0 md:border-r-2 border-black font-bold text-gray-700 text-lg leading-relaxed">
          Intentionally complex processes designed to hide extraction fees and maintain information asymmetry.
        </div>
        <div className="col-span-12 md:col-span-4 p-10 md:p-12 border-b-2 border-black bg-[#00ff0008] font-black italic uppercase text-lg">
          <span className="text-[#00aa00] text-[12px] block not-italic mb-2 font-black tracking-widest">COMMAND:</span>
          Arbitrage & Simplification
        </div>

        {/* Row 2 */}
        <div className="col-span-12 md:col-span-3 p-10 md:p-12 border-b-2 border-r-0 md:border-r-2 border-black font-black uppercase text-2xl">
          Reg_Tech
        </div>
        <div className="col-span-12 md:col-span-5 p-10 md:p-12 border-b-2 border-r-0 md:border-r-2 border-black font-bold text-gray-700 text-lg leading-relaxed">
          Manual compliance nightmares and fear-driven bureaucratic waste that cripples operational speed.
        </div>
        <div className="col-span-12 md:col-span-4 p-10 md:p-12 border-b-2 border-black bg-[#00ff0008] font-black italic uppercase text-lg">
          <span className="text-[#00aa00] text-[12px] block not-italic mb-2 font-black tracking-widest">COMMAND:</span>
          Automated Compliance Robots
        </div>

        {/* Row 3 */}
        <div className="col-span-12 md:col-span-3 p-10 md:p-12 border-b-0 md:border-r-2 border-black font-black uppercase text-2xl">
          Legacy_Biz
        </div>
        <div className="col-span-12 md:col-span-5 p-10 md:p-12 border-b-0 md:border-r-2 border-black font-bold text-gray-700 text-lg leading-relaxed">
          Static workflows. Paper-based systems in a digital era. Resistance to inevitable technological evolution.
        </div>
        <div className="col-span-12 md:col-span-4 p-10 md:p-12 border-b-0 border-black bg-[#00ff0008] font-black italic uppercase text-lg">
          <span className="text-[#00aa00] text-[12px] block not-italic mb-2 font-black tracking-widest">COMMAND:</span>
          Zero-to-One Transformation
        </div>
        
      </div>
    </section>
  );
}