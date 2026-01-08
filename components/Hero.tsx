"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-20 bg-white relative overflow-hidden">
      {/* Background Gradient Blur - Restored Green touch */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-green-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="system-grid relative z-10">
        
        {/* Left: Main Content */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-[#00cc00] text-sm font-mono font-bold mb-6">
              System Identity
            </span>
            <h1 className="text-display mb-8 tracking-tight text-[#171a20]">
              Sovereign<br />
              <span className="text-[#00cc00]">Hacker.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#3e3e3e] font-normal leading-relaxed max-w-xl">
              We build economic machines that operate with <span className="text-[#171a20] font-semibold">autonomy</span> and <span className="text-[#171a20] font-semibold">profitability</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="btn-system btn-primary">
              View Missions
            </Link>
            <a href="mailto:parkdavid31@gmail.com" className="btn-system btn-ghost">
              Contact Access
            </a>
          </div>
        </div>

        {/* Right: Philosophy Cards */}
        <div className="col-span-12 lg:col-span-5 mt-16 lg:mt-0 flex flex-col justify-center gap-6">
          
          <div className="p-8 rounded-3xl bg-[#fafafa] hover:bg-[#f2f4f6] transition-colors duration-300">
            <span className="text-label text-[#5c5e62] mb-2">Philosophy</span>
            <h3 className="text-xl font-bold text-[#171a20] mb-2">Zero to One</h3>
            <p className="text-[#3e3e3e] leading-relaxed text-[15px]">
              경쟁하지 않습니다. 독점합니다.<br/>
              남들이 무시하는 시장에서 압도적 우위를 점합니다.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#fafafa] hover:bg-[#f2f4f6] transition-colors duration-300">
             <span className="text-label text-[#5c5e62] mb-2">Methodology</span>
            <h3 className="text-xl font-bold text-[#171a20] mb-2">Pragmatism</h3>
            <p className="text-[#3e3e3e] leading-relaxed text-[15px]">
              가장 아름다운 코드는 돈을 버는 코드입니다.<br/>
              기능적 미학(Functional Aesthetic)을 추구합니다.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#fafafa] hover:bg-[#f2f4f6] transition-colors duration-300 flex items-center justify-between">
             <div>
                <span className="text-label text-[#5c5e62] mb-1">System Status</span>
                <h3 className="text-lg font-black font-mono uppercase text-[#171a20]">Operational</h3>
             </div>
             <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00cc00]"></span>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}