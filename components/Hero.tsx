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
    <section className="px-6 pt-10 pb-12 md:px-10 md:pt-14 md:pb-16 lg:px-12 lg:pt-16 lg:pb-20 relative overflow-hidden">
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
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Badge with decrypt effect */}
        <div className="mb-8 md:mb-10">
          <span className="badge badge-primary scale-110 origin-left animate-pulse-neon">
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
        <h1 className="text-[2.5rem] font-black leading-[1.05] tracking-tight text-black mb-6 md:text-6xl lg:text-8xl md:mb-8">
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
        <p className="text-base text-black/70 leading-relaxed mb-8 max-w-md md:text-xl md:mb-10 md:max-w-2xl lg:text-2xl font-medium">
          LLM 기반 서비스 설계부터 자동화 파이프라인까지,
          <br className="hidden md:block" />
          실제 운영 가능한 솔루션을 구축합니다.
        </p>

        {/* Skills with hover effect */}
        <div className="flex flex-wrap gap-3 mb-8 md:gap-4 md:mb-12">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="brutal-tag text-xs md:text-sm py-2 px-4 hover:scale-110 transition-transform duration-200 hover:bg-[#00ff00] hover:shadow-[4px_4px_0_#000]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 mb-12 sm:flex-row sm:gap-6 md:mb-16">
          <Link href="/projects" className="brutal-btn w-full sm:w-auto group py-4 px-8 text-base">
            <ShinyText text="대표 프로젝트 보기" speed={3} />
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="brutal-btn-outline w-full sm:w-auto py-4 px-8 text-base font-bold uppercase tracking-widest hover:bg-black hover:text-white">
            협업 문의하기
          </Link>
        </div>

        {/* Stats with CountUp animation */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:gap-6 md:overflow-visible">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="flex-shrink-0 w-32 p-4 border-3 border-black bg-white md:w-auto md:flex-1 md:p-6 hover:shadow-[8px_8px_0_#000] hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className={`h-2 w-10 ${item.color} mb-3 md:w-14 md:mb-4`} />
              <p className="text-2xl font-black text-black md:text-3xl lg:text-4xl tracking-tighter">
                {typeof item.value === "number" ? (
                  <CountUp to={item.value} suffix={item.suffix} duration={2 + index * 0.3} />
                ) : (
                  item.value
                )}
              </p>
              <p className="text-[11px] font-bold text-black/40 uppercase tracking-widest mt-2 md:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack with animation */}
        <div className="mt-8 p-6 border-3 border-black bg-black text-white md:mt-12 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shiny-text_3s_linear_infinite]" />
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4 md:text-xs relative z-10">
            Expertise
          </p>
          <div className="flex flex-wrap gap-3 relative z-10">
            {["Next.js", "Python", "LangChain", "Go", "Rust", "AWS", "Supabase"].map((tech, i) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-[11px] font-bold bg-white/10 border border-white/20 md:px-4 md:py-2 md:text-sm hover:bg-[#00ff00] hover:text-black hover:border-[#00ff00] hover:-translate-y-1 transition-all duration-200"
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
