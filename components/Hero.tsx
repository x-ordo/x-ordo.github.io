"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic import for client-side only
const SnakeGame = dynamic(() => import("./ui/SnakeGame"), { ssr: false });

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="system-grid relative z-10">

        {/* Left: Main Content - Bold Typography */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="mb-12 md:mb-14">
            <span className="inline-block px-3 py-1 rounded bg-[#171a20] text-[#00ff00] text-xs font-mono font-bold uppercase tracking-widest mb-6">
              Sovereign Hacker
            </span>
            <h1 className="text-display mb-8">
              Build.<br />
              <span className="text-[#00ff00]">Ship.</span><br />
              <span className="text-[#171a20]/30">Profit.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#3e3e3e] font-medium leading-[1.8] max-w-lg">
              AI 제품과 자동화 시스템을 설계합니다.<br/>
              <span className="text-[#171a20] font-bold">자율성</span>과 <span className="text-[#171a20] font-bold">수익성</span>을 갖춘 경제적 기계.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="btn-system btn-primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="mailto:parkdavid31@gmail.com" className="btn-system btn-ghost">
              Contact
            </a>
          </div>
        </div>

        {/* Right: Snake Game */}
        <div className="col-span-12 lg:col-span-5 mt-16 lg:mt-0 flex flex-col items-center justify-center">
          <div className="p-6 md:p-8 rounded-2xl bg-[#fafafa] border border-[#e5e5e5]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00cc00]">
                Mini Game
              </span>
              <span className="text-[10px] font-mono text-[#9ca3af]">
                Easter Egg
              </span>
            </div>
            <SnakeGame />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-[432px]">
            <div className="text-center p-3 rounded-xl bg-[#f5f5f5]">
              <div className="text-2xl font-black text-[#171a20]">20+</div>
              <div className="text-[10px] font-mono uppercase text-[#9ca3af]">Projects</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-[#f5f5f5]">
              <div className="text-2xl font-black text-[#171a20]">5Y</div>
              <div className="text-[10px] font-mono uppercase text-[#9ca3af]">Experience</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-[#f5f5f5]">
              <div className="text-2xl font-black text-[#00cc00]">AI</div>
              <div className="text-[10px] font-mono uppercase text-[#9ca3af]">Focus</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
