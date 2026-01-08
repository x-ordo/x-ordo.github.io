"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      {/* Main Grid Container */}
      <div className="system-grid w-full max-w-[1400px] border-b border-r border-[#e5e5e5]">
        
        {/* Row 1: Header / Status */}
        <div className="col-span-12 md:col-span-8 p-6 md:p-10 border-r border-[#e5e5e5]">
          <div className="flex items-center justify-between mb-8">
            <span className="text-label">System Identity</span>
            <span className="flex items-center gap-2 text-xs font-mono text-[#00cc00]">
              <span className="w-2 h-2 rounded-full bg-[#00cc00] animate-pulse"></span>
              ONLINE
            </span>
          </div>
          <h1 className="text-display mb-6">
            Jed Park
            <br />
            <span className="text-gray-400">Sovereign Hacker</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            비즈니스의 본질을 파악해 지속 가능한 시스템을 만듭니다.<br/>
            단순한 코딩이 아닌, 자본과 가치의 흐름을 설계하는<br/>
            <strong>Economic Engineer</strong>입니다.
          </p>
          
          <div className="mt-12 flex gap-4">
            <Link href="/projects" className="btn-system">
              View Projects
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a href="mailto:parkdavid31@gmail.com" className="btn-system bg-white !text-black hover:bg-black hover:!text-white">
              Contact Signal
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 bg-[#f9f9f9] p-6 md:p-10 border-r border-[#e5e5e5]">
          <span className="text-label block mb-8">Live Metrics</span>
          
          <div className="space-y-8 font-mono text-sm">
            <div>
              <p className="text-gray-400 mb-1">Total Projects</p>
              <p className="text-3xl font-medium">36+</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Focus Area</p>
              <p className="text-xl">B2B SaaS / Agents</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Current Status</p>
              <p className="text-xl">Building Monopolies</p>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <p className="text-[10px] uppercase text-gray-400 mb-2">Recent Commit</p>
              <p className="text-xs truncate">feat: update sovereign hacker profile</p>
            </div>
          </div>
        </div>

        {/* Row 2: Manifesto Summary (Integrated) */}
        <div className="col-span-12 p-6 md:p-10 border-t border-[#e5e5e5]">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <span className="text-label">The Code</span>
                </div>
                <div className="col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-2">
                        <span className="text-accent font-bold">01</span>
                        <h3 className="font-bold text-sm">Monopoly First</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            경쟁은 패자를 위한 것.<br/>틈새 시장을 독점합니다.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-accent font-bold">02</span>
                        <h3 className="font-bold text-sm">Pragmatism</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            투박한 UI라도<br/>돈을 벌면 아름답습니다.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-accent font-bold">03</span>
                        <h3 className="font-bold text-sm">The Fixer</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            비즈니스의 비효율을 찾아<br/>자동화로 해결합니다.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-accent font-bold">04</span>
                        <h3 className="font-bold text-sm">Sovereignty</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            지속 가능한 자립 시스템을<br/>구축합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}