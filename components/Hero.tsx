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
    <section className="px-6 pb-20 md:px-12 md:pb-32 lg:px-20 lg:pb-40 relative overflow-hidden">
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
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Badge with decrypt effect */}
        <div className="mb-8 md:mb-12">
          <span className="badge badge-primary scale-110 origin-left animate-pulse-neon shadow-[4px_4px_0_#000]">
            <DecryptedText
              text="Available"
              speed={60}
              animateOn="view"
              className="font-bold"
            />
            <span className="ml-2 h-2.5 w-2.5 rounded-full bg-black animate-pulse" />
          </span>
        </div>

        {/* Main Heading with Glitch + Gradient */}
        <h1 className="text-[2.5rem] font-black leading-[1] tracking-tighter text-black mb-8 md:text-7xl lg:text-8xl md:mb-10">
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
        <p className="text-lg text-black/80 leading-relaxed mb-10 max-w-md md:text-xl md:mb-12 md:max-w-2xl lg:text-2xl font-bold tracking-tight">
          LLM 기반 서비스 설계부터 자동화 파이프라인까지,
          <br className="hidden md:block" />
          실제 운영 가능한 솔루션을 구축합니다.
        </p>

        {/* Skills with hover effect */}
        <div className="flex flex-wrap gap-3 mb-12 md:gap-4 md:mb-16">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="brutal-tag text-sm md:text-base py-2 px-5 hover:scale-110 transition-transform duration-200 hover:bg-[#00ff00] hover:shadow-[6px_6px_0_#000] font-black"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 mb-16 sm:flex-row sm:gap-6 md:mb-24">
          <Link href="/projects" className="brutal-btn w-full sm:w-auto group py-4 px-10 text-lg">
            <ShinyText text="대표 프로젝트 보기" speed={3} />
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="brutal-btn-outline w-full sm:w-auto py-4 px-10 text-lg font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            협업 문의하기
          </Link>
        </div>

        {/* Stats with CountUp animation */}
        <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:gap-6 md:overflow-visible">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="flex-shrink-0 w-36 p-5 border-4 border-black bg-white md:w-auto md:flex-1 md:p-6 hover:shadow-[10px_10px_0_#000] hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-2.5 w-12 ${item.color} mb-4 md:w-16 md:mb-6 border-2 border-black shadow-[3px_3px_0_#000]`} />
              <p className="text-3xl font-black text-black md:text-4xl lg:text-5xl tracking-tighter">
                {typeof item.value === "number" ? (
                  <CountUp to={item.value} suffix={item.suffix} duration={2 + index * 0.3} />
                ) : (
                  item.value
                )}
              </p>
              <p className="text-[10px] font-black text-black/40 uppercase tracking-[0.3em] mt-3 md:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack with animation */}
        <div className="mt-12 p-6 border-4 border-black bg-black text-white md:mt-16 md:p-10 relative overflow-hidden shadow-[15px_15px_0_#00ff00]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shiny-text_3s_linear_infinite]" />
          <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-6 md:text-xs relative z-10">
            Technical Expertise
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            {["Next.js", "Python", "LangChain", "Go", "Rust", "AWS", "Supabase"].map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 text-xs font-black bg-white/10 border-2 border-white/20 md:px-5 md:py-2.5 md:text-base hover:bg-[#00ff00] hover:text-black hover:border-[#00ff00] transition-all duration-300"
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
