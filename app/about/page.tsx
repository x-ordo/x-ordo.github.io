"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white min-h-screen pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Header - Senior Readable */}
        <div className="py-20 md:py-28 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.about.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#171a20] mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#3e3e3e] font-bold mb-10 leading-[1.5]">
            {t.about.subtitle}
          </p>
          <p className="text-lg md:text-xl text-[#5c5e62] leading-[1.9] max-w-3xl">
            {t.about.executiveSummary}
          </p>
        </div>

        {/* Core Strengths */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.strengths.badge}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#171a20] mb-10">
            {t.strengths.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {t.strengths.items.map((item, idx) => (
              <div
                key={idx}
                className="group p-7 md:p-8 rounded-2xl bg-[#fafafa] border-3 border-transparent hover:border-[#00cc00] hover:bg-white hover:shadow-[6px_6px_0_#00ff00] transition-all cursor-default"
              >
                <h3 className="text-lg md:text-xl font-black text-[#171a20] mb-3 group-hover:text-[#00cc00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-[#5c5e62] leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.techStack.badge}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#171a20] mb-10">
            {t.techStack.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {t.techStack.categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-base md:text-lg font-black text-[#171a20] mb-5 pb-3 border-b-3 border-black/10">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {category.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="text-sm md:text-base font-mono font-bold bg-[#171a20] text-[#00ff00] px-4 py-2.5 rounded-lg hover:bg-[#00ff00] hover:text-black transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.lookingFor.badge}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#171a20] mb-3">
            {t.lookingFor.title}
          </h2>
          <p className="text-lg md:text-xl text-[#5c5e62] mb-10">{t.lookingFor.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {t.lookingFor.items.map((item, idx) => (
              <div
                key={idx}
                className="group p-7 md:p-8 rounded-2xl border-4 border-[#171a20] bg-white hover:bg-[#00ff00] hover:border-[#00ff00] shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all cursor-default"
              >
                <h3 className="text-lg md:text-xl font-black text-[#171a20] mb-3">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-[#5c5e62] group-hover:text-black/70 leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <ExperienceTimeline showTitle={true} />
        </div>

        {/* Engineering Philosophy */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            Engineering Philosophy
          </span>
          <p className="text-lg md:text-xl text-[#5c5e62] mb-10">{t.about.philosophySubtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {t.about.philosophyItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-7 md:p-8 rounded-2xl bg-[#171a20] hover:bg-black border-4 border-black shadow-[4px_4px_0_#00ff00] hover:shadow-[6px_6px_0_#00ff00] transition-all cursor-default"
              >
                <h3 className="text-base md:text-lg font-black text-[#00ff00] mb-3">
                  {item.principle}
                </h3>
                <p className="text-base text-gray-300 leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Failure & Verification */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.about.failureTitle}
          </span>
          <p className="text-lg md:text-xl text-[#5c5e62] mb-10">{t.about.failureSubtitle}</p>
          <div className="space-y-5 md:space-y-6 mb-10">
            {t.about.failureLessons.map((lesson, idx) => (
              <div
                key={idx}
                className="group p-7 md:p-8 rounded-2xl bg-[#fafafa] border-l-[6px] border-[#f59e0b] hover:bg-white hover:shadow-lg transition-all cursor-default"
              >
                <h3 className="text-lg md:text-xl font-black text-[#171a20] mb-3">
                  {lesson.title}
                </h3>
                <p className="text-base md:text-lg text-[#5c5e62] mb-4 leading-[1.7]">
                  {lesson.story}
                </p>
                <p className="text-base md:text-lg font-bold text-[#f59e0b]">
                  {lesson.lesson}
                </p>
              </div>
            ))}
          </div>
          <div className="p-8 md:p-10 rounded-2xl bg-[#171a20] border-4 border-black shadow-[6px_6px_0_#00ff00]">
            <p className="text-lg md:text-xl font-black text-[#00ff00] leading-[1.8]">
              &quot;{t.about.failureRule}&quot;
            </p>
          </div>
        </div>

        {/* Leadership & Conflict */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.about.leadershipTitle}
          </span>
          <p className="text-lg md:text-xl text-[#5c5e62] mb-10">{t.about.leadershipSubtitle}</p>
          <div className="space-y-4 md:space-y-5">
            {t.about.leadershipItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 md:p-7 rounded-xl bg-[#fafafa] border-l-[6px] border-[#3b82f6] hover:bg-white hover:shadow-lg transition-all cursor-default"
              >
                <p className="text-base md:text-lg text-[#3e3e3e] leading-[1.8] font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Rhythm */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            {t.about.rhythmTitle}
          </span>
          <p className="text-lg md:text-xl text-[#5c5e62] mb-10">{t.about.rhythmSubtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5">
            {t.about.rhythmItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 md:p-6 rounded-xl bg-[#fafafa] text-center border-3 border-transparent hover:border-[#00cc00] hover:bg-white hover:shadow-[4px_4px_0_#00ff00] transition-all cursor-default"
              >
                <span className="text-sm md:text-base font-mono font-black text-[#00cc00] block mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-sm md:text-base text-[#3e3e3e] font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Info */}
        <div className="py-16 md:py-20 border-b-4 border-black/10">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-6 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            채용 관련 정보
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#171a20] mb-10">
            Hiring Info
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { label: "희망 포지션", value: "Senior Full-Stack Engineer" },
              { label: "근무 형태", value: "정규직 · 원격 가능" },
              { label: "입사 가능일", value: "즉시 가능" },
              { label: "비자 상태", value: "내국인 (병역필)" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-7 md:p-8 rounded-2xl bg-[#fafafa] border-3 border-transparent hover:border-[#00cc00] hover:bg-white hover:shadow-[4px_4px_0_#00ff00] transition-all cursor-default"
              >
                <span className="text-sm md:text-base font-mono font-bold text-[#9ca3af] block mb-3">
                  {item.label}
                </span>
                <p className="text-lg md:text-xl font-black text-[#171a20]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <div className="py-20 md:py-28 bg-[#171a20] rounded-3xl mt-16 md:mt-20 -mx-6 md:-mx-8 px-8 md:px-12 border-4 border-black shadow-[8px_8px_0_#00ff00]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
              Final Note
            </span>
            <p className="text-xl md:text-2xl text-white leading-[1.9] font-medium mb-12">
              {t.about.finalNote}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:haspark912@kakao.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00cc00] text-black font-black text-lg uppercase tracking-wider rounded-xl border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all"
              >
                {t.hero.ctaSecondary}
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-black text-lg uppercase tracking-wider rounded-xl border-4 border-black shadow-[4px_4px_0_#00ff00] hover:shadow-[6px_6px_0_#00ff00] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#00ff00] transition-all"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
