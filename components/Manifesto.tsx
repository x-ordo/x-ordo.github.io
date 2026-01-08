"use client";

import React from "react";

export default function Manifesto() {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-[#e5e5e5]">
      <div className="system-grid w-full max-w-[1400px] border-r border-[#e5e5e5]">
        
        {/* Header */}
        <div className="col-span-12 p-6 md:p-10 border-b border-[#e5e5e5]">
          <span className="text-label block mb-4">Target Sector Analysis</span>
          <h2 className="text-2xl md:text-3xl font-medium max-w-2xl">
            Identifying High-Entropy Zones
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            우리는 시장의 혼돈(Chaos)과 비효율이 극대화된 영역에서 기회를 찾습니다.
            정보 비대칭을 해소하고 복잡성을 자동화하여 수익 모델을 만듭니다.
          </p>
        </div>

        {/* Table Header */}
        <div className="hidden md:block col-span-3 p-4 bg-[#f9f9f9] border-b border-[#e5e5e5] text-xs font-bold uppercase text-gray-500">
          Zone
        </div>
        <div className="hidden md:block col-span-5 p-4 bg-[#f9f9f9] border-b border-[#e5e5e5] text-xs font-bold uppercase text-gray-500">
          The Problem (Chaos)
        </div>
        <div className="hidden md:block col-span-4 p-4 bg-[#f9f9f9] border-b border-[#e5e5e5] text-xs font-bold uppercase text-gray-500">
          The Solution (Order)
        </div>

        {/* Row 1 */}
        <div className="col-span-12 md:col-span-3 p-6 border-b border-[#e5e5e5] font-bold">
          Financial Services
        </div>
        <div className="col-span-12 md:col-span-5 p-6 border-b border-[#e5e5e5] text-gray-600">
          Intentionally complex & slow processes designed to hide fees.
        </div>
        <div className="col-span-12 md:col-span-4 p-6 border-b border-[#e5e5e5] bg-blue-50/50">
          <span className="text-accent font-mono text-xs block mb-1">STRATEGY:</span>
          Arbitrage & Simplification
        </div>

        {/* Row 2 */}
        <div className="col-span-12 md:col-span-3 p-6 border-b border-[#e5e5e5] font-bold">
          Regulatory Tech
        </div>
        <div className="col-span-12 md:col-span-5 p-6 border-b border-[#e5e5e5] text-gray-600">
          Manual compliance nightmares and fear-driven inefficiencies.
        </div>
        <div className="col-span-12 md:col-span-4 p-6 border-b border-[#e5e5e5] bg-blue-50/50">
          <span className="text-accent font-mono text-xs block mb-1">STRATEGY:</span>
          Automated "Check-the-box" Robots
        </div>

        {/* Row 3 */}
        <div className="col-span-12 md:col-span-3 p-6 border-b border-[#e5e5e5] font-bold">
          Legacy Industries
        </div>
        <div className="col-span-12 md:col-span-5 p-6 border-b border-[#e5e5e5] text-gray-600">
          "We've always done it this way" mentality. Paper-based workflows.
        </div>
        <div className="col-span-12 md:col-span-4 p-6 border-b border-[#e5e5e5] bg-blue-50/50">
          <span className="text-accent font-mono text-xs block mb-1">STRATEGY:</span>
          Digital Transformation (Zero to One)
        </div>
        
        {/* Row 4 */}
        <div className="col-span-12 md:col-span-3 p-6 border-b border-[#e5e5e5] font-bold">
          Platform Economy
        </div>
        <div className="col-span-12 md:col-span-5 p-6 border-b border-[#e5e5e5] text-gray-600">
          High fees and locked gates preventing direct customer access.
        </div>
        <div className="col-span-12 md:col-span-4 p-6 border-b border-[#e5e5e5] bg-blue-50/50">
          <span className="text-accent font-mono text-xs block mb-1">STRATEGY:</span>
          Direct Access & Bypass
        </div>

      </div>
    </section>
  );
}
