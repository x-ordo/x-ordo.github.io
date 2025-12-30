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
    <section className="px-4 pt-2 pb-8 md:px-6 md:pt-4 md:pb-16 relative overflow-hidden">
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
      <div className="mx-auto max-w-5xl relative z-10">
        {/* Badge with decrypt effect */}
        <div className="mb-6 md:mb-8">
          <span className="badge badge-primary animate-pulse-neon">
            <DecryptedText
              text="Available"
              speed={60}
              animateOn="view"
              className="font-bold"
            />
            <span className="ml-2 h-2 w-2 rounded-full bg-black animate-pulse" />
          </span>
        </div>

        {/* Main Heading with Glitch + Gradient */}
        <h1 className="text-[2rem] font-black leading-[1.1] tracking-tight text-black mb-4 md:text-5xl lg:text-6xl md:mb-6">
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
        <p className="text-sm text-black/70 leading-relaxed mb-6 max-w-md md:text-base md:mb-8 md:max-w-lg">
          LLM 기반 서비스 설계부터 자동화 파이프라인까지,
          실제 운영 가능한 솔루션을 구축합니다.
        </p>

        {/* Skills with hover effect */}
        <div className="flex flex-wrap gap-2 mb-6 md:gap-3 md:mb-8">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="brutal-tag hover:scale-105 transition-transform duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:gap-4 md:mb-12">
          <Link href="/projects" className="brutal-btn w-full sm:w-auto group">
            <ShinyText text="프로젝트 보기" speed={3} />
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="brutal-btn-outline w-full sm:w-auto">
            연락하기
          </Link>
        </div>

        {/* Stats with CountUp animation */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:gap-4 md:overflow-visible">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="flex-shrink-0 w-28 p-3 border-3 border-black bg-white md:w-auto md:flex-1 md:p-4 hover:shadow-[6px_6px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`h-1.5 w-8 ${item.color} mb-2 md:w-10 md:mb-3`} />
              <p className="text-xl font-black text-black md:text-2xl lg:text-3xl">
                {typeof item.value === "number" ? (
                  <CountUp to={item.value} suffix={item.suffix} duration={2 + index * 0.3} />
                ) : (
                  item.value
                )}
              </p>
              <p className="text-[10px] font-bold text-black/50 uppercase tracking-wider mt-1 md:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack with animation */}
        <div className="mt-6 p-4 border-3 border-black bg-black text-white md:mt-8 md:p-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shiny-text_3s_linear_infinite]" />
          <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest mb-3 md:text-[10px] relative z-10">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Next.js", "Python", "LangChain", "Go", "PostgreSQL"].map((tech, i) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] font-bold bg-white/10 border border-white/30 md:px-3 md:py-1.5 md:text-xs hover:bg-[#00ff00] hover:text-black hover:border-[#00ff00] transition-all duration-200"
                style={{ animationDelay: `${i * 0.1}s` }}
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
