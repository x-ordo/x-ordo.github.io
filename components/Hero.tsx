"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ClickGame = dynamic(() => import("./ui/ClickGame"), { ssr: false });

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="system-grid relative z-10">

        {/* Left: Main Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="mb-8 md:mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-[#00cc00] text-xs font-mono font-bold mb-4">
              System Identity
            </span>
            <h1 className="text-display mb-6 tracking-tight text-[#171a20]">
              Sovereign<br />
              <span className="text-[#00ff00]">Hacker.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#3e3e3e] font-normal leading-[1.6] max-w-lg">
              We build economic machines that operate with <span className="text-[#171a20] font-semibold">autonomy</span> and <span className="text-[#171a20] font-semibold">profitability</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn-system btn-primary">
              View Missions
            </Link>
            <a href="mailto:parkdavid31@gmail.com" className="btn-system btn-ghost">
              Contact Access
            </a>
          </div>
        </div>

        {/* Right: Click Game + Status */}
        <div className="col-span-12 lg:col-span-5 mt-12 lg:mt-0 flex flex-col justify-center gap-4">

          {/* Click Game */}
          <div className="p-5 rounded-2xl bg-[#fafafa]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00]">Mini Game</span>
              <span className="text-[10px] font-mono text-[#9ca3af]">Click Only</span>
            </div>
            <ClickGame />
          </div>

          {/* System Status */}
          <div className="p-5 rounded-2xl bg-[#fafafa] flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5c5e62] mb-1 block">Status</span>
              <h3 className="text-base font-black font-mono uppercase text-[#171a20]">Operational</h3>
            </div>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00cc00]"></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
