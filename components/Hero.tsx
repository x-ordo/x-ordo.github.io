"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 bg-white">
      <div className="system-grid w-full border-b border-black">
        
        {/* Row 1: Left - Identity */}
        <div className="col-span-12 md:col-span-8 p-6 md:p-12 border-r border-black flex flex-col justify-between min-h-[50vh]">
          <div>
            <div className="flex items-center justify-between mb-12">
              <span className="text-label border-b-2 border-black pb-1">System Identity</span>
              <span className="flex items-center gap-2 text-[10px] font-black text-black">
                <span className="w-2.5 h-2.5 bg-[#00ff00] border border-black animate-pulse"></span>
                SVRGN_HKR_ONLINE
              </span>
            </div>
            
            <h1 className="text-display mb-8">
              JED PARK
              <br />
              <span className="bg-[#00ff00] px-2">SOVEREIGN</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold leading-tight max-w-2xl text-black">
              비즈니스의 본질을 파악해<br/>
              지속 가능한 시스템을 만듭니다.
            </p>
          </div>
          
          <div className="mt-16 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-system">
              View Missions
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round"/></svg>
            </Link>
            <a href="mailto:parkdavid31@gmail.com" className="btn-system bg-white">
              Establish Uplink
            </a>
          </div>
        </div>

        {/* Row 1: Right - Metrics */}
        <div className="col-span-12 md:col-span-4 bg-[#f0f0f0] p-6 md:p-12 flex flex-col justify-between border-t md:border-t-0 border-black">
          <span className="text-label block mb-12">Live Telemetry</span>
          
          <div className="space-y-10 font-black">
            <div className="border-l-4 border-[#00ff00] pl-4">
              <p className="text-[10px] text-gray-500 uppercase mb-1">Total Assets</p>
              <p className="text-5xl tracking-tighter">36+</p>
            </div>
            <div className="border-l-4 border-[#00ff00] pl-4">
              <p className="text-[10px] text-gray-500 uppercase mb-1">Focus Sector</p>
              <p className="text-2xl uppercase">B2B SaaS / AI</p>
            </div>
            <div className="border-l-4 border-[#00ff00] pl-4">
              <p className="text-[10px] text-gray-500 uppercase mb-1">Current Modus</p>
              <p className="text-2xl uppercase">Monopolizing</p>
            </div>
          </div>

          <div className="pt-10 mt-10 border-t-2 border-black/10">
            <p className="text-[9px] uppercase font-bold text-gray-400 mb-2">Kernel Version</p>
            <p className="text-[10px] font-mono break-all opacity-60">SH_v5.0_STABLE_BUILD_2026</p>
          </div>
        </div>

        {/* Row 2: Directives */}
        <div className="col-span-12 p-6 md:p-12 border-t border-black bg-black text-white">
            <div className="grid md:grid-cols-4 gap-12">
                <div className="col-span-1">
                    <span className="text-label text-[#00ff00] border-[#00ff00]">The Directives</span>
                </div>
                <div className="col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="space-y-3">
                        <span className="text-[#00ff00] font-black text-xl">01</span>
                        <h3 className="font-black text-sm uppercase tracking-tighter">Monopoly</h3>
                        <p className="text-[11px] text-gray-400 leading-snug">
                            경쟁은 패자를 위한 것.<br/>틈새를 찾아 독점한다.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <span className="text-[#00ff00] font-black text-xl">02</span>
                        <h3 className="font-black text-sm uppercase tracking-tighter">Pragmatism</h3>
                        <p className="text-[11px] text-gray-400 leading-snug">
                            투박한 UI라도<br/>현금흐름을 만들면 아름답다.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <span className="text-[#00ff00] font-black text-xl">03</span>
                        <h3 className="font-black text-sm uppercase tracking-tighter">The Fixer</h3>
                        <p className="text-[11px] text-gray-400 leading-snug">
                            비즈니스 비효율을 찾아<br/>자동화 시스템으로 치환한다.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <span className="text-[#00ff00] font-black text-xl">04</span>
                        <h3 className="font-black text-sm uppercase tracking-tighter">Agency</h3>
                        <p className="text-[11px] text-gray-400 leading-snug">
                            의존성을 제거하고<br/>자립 가능한 주권을 구축한다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
