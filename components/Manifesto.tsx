"use client";

import React from "react";

export default function Manifesto() {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-black bg-white">
      <div className="system-grid w-full border-black">
        
        {/* Header */}
        <div className="col-span-12 p-6 md:p-12 border-b border-black bg-[#fafafa]">
          <span className="text-label inline-block mb-6 border-b-2 border-black">Target Sector Analysis</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Identifying <span className="text-[#00cc00]">Chaos</span>
          </h2>
          <p className="text-lg font-bold text-black max-w-2xl leading-tight">
            우리는 시장의 혼돈과 비효율이 극대화된 영역을 조준합니다.<br/>
            정보 비대칭을 분쇄하고 복잡성을 자동화하여 압도적인 수익 구조를 설계합니다.
          </p>
        </div>

        {/* Table Header */}
        <div className="hidden md:block col-span-3 p-5 bg-black text-[#00ff00] text-xs font-black uppercase border-b border-r border-black">
          Sector_Zone
        </div>
        <div className="hidden md:block col-span-5 p-5 bg-black text-[#00ff00] text-xs font-black uppercase border-b border-r border-black">
          Systemic_Chaos
        </div>
        <div className="hidden md:block col-span-4 p-5 bg-black text-[#00ff00] text-xs font-black uppercase border-b border-black">
          Operational_Order
        </div>

        {/* Row 1 */}
        <div className="col-span-12 md:col-span-3 p-8 border-b border-r border-black font-black uppercase text-xl">
          Financials
        </div>
        <div className="col-span-12 md:col-span-5 p-8 border-b border-r border-black font-bold text-gray-600">
          Intentionally complex processes designed to hide extraction fees.
        </div>
        <div className="col-span-12 md:col-span-4 p-8 border-b border-black bg-[#00ff0010] font-black italic uppercase">
          <span className="text-[#00aa00] text-[10px] block not-italic">COMMAND:</span>
          Arbitrage & Simplification
        </div>

        {/* Row 2 */}
        <div className="col-span-12 md:col-span-3 p-8 border-b border-r border-black font-black uppercase text-xl">
          Reg_Tech
        </div>
        <div className="col-span-12 md:col-span-5 p-8 border-b border-r border-black font-bold text-gray-600">
          Manual compliance nightmares and fear-driven bureaucratic waste.
        </div>
        <div className="col-span-12 md:col-span-4 p-8 border-b border-black bg-[#00ff0010] font-black italic uppercase">
          <span className="text-[#00aa00] text-[10px] block not-italic">COMMAND:</span>
          Automated Compliance Robots
        </div>

        {/* Row 3 */}
        <div className="col-span-12 md:col-span-3 p-8 border-b border-r border-black font-black uppercase text-xl">
          Legacy_Biz
        </div>
        <div className="col-span-12 md:col-span-5 p-8 border-b border-r border-black font-bold text-gray-600">
          Static workflows. Paper-based systems in a digital era.
        </div>
        <div className="col-span-12 md:col-span-4 p-8 border-b border-black bg-[#00ff0010] font-black italic uppercase">
          <span className="text-[#00aa00] text-[10px] block not-italic">COMMAND:</span>
          Zero-to-One Transformation
        </div>
        
      </div>
    </section>
  );
}