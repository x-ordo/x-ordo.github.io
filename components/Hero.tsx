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
    <section className="px-8 pt-20 pb-32 md:px-20 md:pt-32 md:pb-48 lg:px-32 lg:pt-48 lg:pb-72 relative overflow-hidden">
      {/* MagnetLines - Desktop Only */}
      <div className="hidden lg:block absolute top-10 right-10 opacity-40 pointer-events-none z-0">
        <MagnetLines
          rows={7}
          columns={7}
          containerSize="280px"
          lineColor="#00ff00"
          lineWidth="2px"
          lineHeight="16px"
          baseAngle={0}
        />
      </div>
      <div className="mx-auto max-w-screen-2xl relative z-10">
        {/* Badge with decrypt effect */}
        <div className="mb-12 md:mb-20">
          <span className="badge badge-primary scale-150 origin-left animate-pulse-neon shadow-[10px_10px_0_#000]">
            <DecryptedText
              text="Available"
              speed={60}
              animateOn="view"
              className="font-bold"
            />
            <span className="ml-4 h-4 w-4 rounded-full bg-black animate-pulse" />
          </span>
        </div>

        {/* Main Heading with Glitch + Gradient */}
        <h1 className="text-[3.5rem] font-black leading-[0.85] tracking-tighter text-black mb-12 md:text-8xl lg:text-[12rem] md:mb-20">
          <GlitchText speed={0.7} enableOnHover className="inline-block">
            AI로 비즈니스
          </GlitchText>
          <br />
          <span className="relative">
            <GradientText
              colors={["#00ff00", "#00ffff", "#ff00ff", "#00ff00"]}
              animationSpeed={5}
              className="font-black"
            >
              가치를 만듭니다
            </GradientText>
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-black/80 leading-[1.3] mb-16 max-w-lg md:text-3xl md:mb-24 md:max-w-5xl lg:text-5xl font-bold tracking-tight">
          LLM 기반 서비스 설계부터 자동화 파이프라인까지,
          <br className="hidden md:block" />
          실제 운영 가능한 솔루션을 구축합니다.
        </p>

        {/* Skills with hover effect */}
        <div className="flex flex-wrap gap-6 mb-20 md:gap-10 md:mb-32">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="brutal-tag text-lg md:text-3xl py-5 px-10 hover:scale-110 transition-transform duration-200 hover:bg-[#00ff00] hover:shadow-[10px_10px_0_#000] font-black"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-8 mb-24 sm:flex-row sm:gap-12 md:mb-40">
          <Link href="/projects" className="brutal-btn w-full sm:w-auto group py-8 px-16 text-2xl md:text-3xl">
            <ShinyText text="대표 프로젝트 보기" speed={3} />
            <svg className="w-10 h-10 transition-transform group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="brutal-btn-outline w-full sm:w-auto py-8 px-16 text-2xl md:text-3xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[10px_10px_0_#000] hover:shadow-[15px_15px_0_#00ff00]">
            협업 문의하기
          </Link>
        </div>

        {/* Stats with CountUp animation */}
        <div className="flex gap-8 overflow-x-auto pb-10 -mx-8 px-8 md:mx-0 md:px-0 md:gap-12 md:overflow-visible">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="flex-shrink-0 w-56 p-10 border-4 border-black bg-white md:w-auto md:flex-1 md:p-12 hover:shadow-[20px_20px_0_#000] hover:-translate-x-4 hover:-translate-y-4 transition-all duration-300"
            >
              <div className={`h-4 w-20 ${item.color} mb-8 md:w-32 md:mb-12 border-3 border-black shadow-[5px_5px_0_#000]`} />
              <p className="text-5xl font-black text-black md:text-6xl lg:text-7xl tracking-tighter">
                {typeof item.value === "number" ? (
                  <CountUp to={item.value} suffix={item.suffix} duration={2 + index * 0.3} />
                ) : (
                  item.value
                )}
              </p>
              <p className="text-sm font-black text-black/40 uppercase tracking-[0.4em] mt-6 md:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack with animation */}
        <div className="mt-20 p-12 border-4 border-black bg-black text-white md:mt-32 md:p-20 relative overflow-hidden shadow-[30px_30px_0_#00ff00]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shiny-text_3s_linear_infinite]" />
          <p className="text-sm font-black text-white/40 uppercase tracking-[0.5em] mb-10 md:text-base relative z-10">
            Technical Expertise
          </p>
          <div className="flex flex-wrap gap-8 relative z-10">
            {["Next.js", "Python", "LangChain", "Go", "Rust", "AWS", "Supabase"].map((tech, i) => (
              <span
                key={tech}
                className="px-8 py-4 text-base font-black bg-white/10 border-2 border-white/20 md:px-10 md:py-5 md:text-2xl hover:bg-[#00ff00] hover:text-black hover:border-[#00ff00] hover:-translate-y-3 transition-all duration-300 shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_0_#000]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
