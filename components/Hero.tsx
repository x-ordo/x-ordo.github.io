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
    <section className="relative overflow-hidden pt-[15vh] pb-[20vh] md:pt-[20vh] md:pb-[25vh]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 relative z-10">
        {/* Minimal Badge */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 border-b-2 border-black/10 pb-2">
            Independent Developer & Strategist
          </span>
        </div>

        {/* Editorial Heading */}
        <h1 className="text-5xl font-black leading-[0.9] tracking-tighter text-black mb-12 md:text-8xl lg:text-[10rem] max-w-4xl">
          AI로 비즈니스
          <br />
          <span className="text-[#00ff00]">가치를 만듭니다</span>
        </h1>

        {/* Large, Airy Description */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-start">
          <div className="space-y-8">
            <p className="text-xl md:text-3xl font-bold leading-tight tracking-tight text-black/80">
              LLM 기반 서비스 설계부터 자동화 파이프라인까지,
              실제 운영 가능한 솔루션을 구축합니다.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row">
              <Link href="/projects" className="group inline-flex items-center gap-4 text-base font-black uppercase tracking-widest border-b-4 border-black pb-2 hover:text-[#00ff00] hover:border-[#00ff00] transition-all">
                View Work
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Minimal Stats */}
          <div className="grid grid-cols-2 gap-8 border-l-2 border-black/5 pl-8 md:pl-16">
            {highlights.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-3xl md:text-5xl font-black tracking-tighter">
                  {item.value}{item.suffix}
                </p>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
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
