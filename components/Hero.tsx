"use client";

import Link from "next/link";
import GradientText from "./ui/GradientText";
import CountUp from "./ui/CountUp";
import ShinyText from "./ui/ShinyText";
import MagnetLines from "./ui/MagnetLines";
import GlitchText from "./ui/GlitchText";
import DecryptedText from "./ui/DecryptedText";

const skills = ["LLM", "RAG", "Full-Stack", "Automation"];

const highlights = [
  { label: "Projects", value: 21, suffix: "+", color: "bg-[#00ff00]" },
  { label: "Focus", value: "LLM", color: "bg-[#00ffff]" },
  { label: "Goal", value: "Scale", color: "bg-[#ff00ff]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-[10vh] md:pb-[15vh]">
      <div className="relative z-10">
        {/* Minimal Badge */}
        <div className="mb-10 md:mb-14">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/20 border-b border-black/5 pb-1">
            Sovereign Hacker & System Builder
          </span>
        </div>

        {/* Scaled Down Editorial Heading */}
        <h1 className="text-4xl font-black leading-[0.9] tracking-tighter text-black mb-10 md:text-7xl lg:text-[7rem] max-w-3xl">
          세상의 원리를 꿰뚫어
          <br />
          <span className="text-[#00ff00]">시스템을 구축합니다</span>
        </h1>

        {/* Tighter Description Grid */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-start">
          <div className="space-y-6">
            <p className="text-lg md:text-xl font-bold leading-snug tracking-tight text-black/70">
              단순한 기술 구현을 넘어, 자본과 시장의 원리를 이해하고 주체적으로 변화를 만들어냅니다.
              지속 가능한 가치를 창출하는 경제 시스템(Economic Machine)을 설계합니다.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/projects" className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#00ff00] hover:border-[#00ff00] transition-all">
                View Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* More Compact Stats */}
          <div className="grid grid-cols-2 gap-6 border-l border-black/5 pl-6 md:pl-12">
            {highlights.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-2xl md:text-4xl font-black tracking-tighter">
                  {item.value}{item.suffix}
                </p>
                <p className="text-[9px] font-bold text-black/30 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
