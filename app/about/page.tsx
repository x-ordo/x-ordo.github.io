"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">

        {/* Header */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            {t.about.badge}
          </span>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] break-keep">
              {t.about.title}
            </h1>
            <p className="text-xs text-amber-600 font-mono font-bold break-keep mt-1">
              {t.about.titleDescription}
            </p>
            <p className="text-sm md:text-base text-[#3e3e3e] font-bold break-keep mt-2">
              {t.about.subtitle}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {t.about.keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-[2px_2px_0_#f59e0b] text-center"
              >
                <span className="text-2xl md:text-3xl font-black text-amber-600 block">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-amber-900 block mt-1">
                  {metric.label}
                </span>
                <span className="text-[10px] text-amber-600/70 block">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-[#5c5e62] max-w-3xl break-keep text-justify">
            {t.about.executiveSummary}
          </p>
        </section>

        {/* Core Strengths */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            {t.strengths.badge}
          </span>
          <h2 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] break-keep">
            {t.strengths.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.strengths.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#fafafa] border border-transparent hover:border-amber-400 group cursor-default transition-all"
              >
                <h3 className="text-sm font-black text-[#171a20] mb-1.5 group-hover:text-amber-600 transition-colors break-keep">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5c5e62] break-keep leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            {t.techStack.badge}
          </span>
          <h2 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] break-keep">
            {t.techStack.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.techStack.categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-black text-[#171a20] mb-3 pb-2 border-b-2 border-black/10 break-keep">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="text-xs font-mono font-bold bg-amber-100 text-amber-800 px-2 py-1 rounded hover:bg-amber-500 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            {t.lookingFor.badge}
          </span>
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] break-keep">
              {t.lookingFor.title}
            </h2>
            <p className="text-xs md:text-sm text-[#5c5e62] break-keep mt-2 text-justify">{t.lookingFor.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {t.lookingFor.items.map((item, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-lg border-2 border-amber-300 bg-white hover:bg-amber-50 hover:border-amber-400 shadow-[2px_2px_0_#d97706] hover:shadow-[3px_3px_0_#d97706] transition-all cursor-default"
              >
                <h3 className="text-sm font-black text-[#171a20] mb-1.5 break-keep">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5c5e62] group-hover:text-amber-900/70 break-keep leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="ds-section-padded border-b-2 border-black/10">
          <ExperienceTimeline showTitle={true} />
        </section>

        {/* Engineering Philosophy */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            Engineering Philosophy
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] break-keep text-justify">{t.about.philosophySubtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {t.about.philosophyItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-2 border-amber-700 shadow-[2px_2px_0_#92400e] hover:shadow-[3px_3px_0_#92400e] transition-all cursor-default"
              >
                <h3 className="text-xs font-black text-white mb-1.5 break-keep">
                  {item.principle}
                </h3>
                <p className="text-xs text-amber-100 break-keep leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Failure & Verification */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            {t.about.failureTitle}
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] break-keep text-justify">{t.about.failureSubtitle}</p>
          <div className="space-y-4">
            {t.about.failureLessons.map((lesson, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-lg bg-[#fafafa] border-l-4 border-[#f59e0b] hover:bg-white hover:shadow-md transition-all cursor-default"
              >
                <h3 className="text-sm font-black text-[#171a20] mb-1.5 break-keep">
                  {lesson.title}
                </h3>
                <p className="text-xs text-[#5c5e62] mb-2 break-keep leading-relaxed text-justify">
                  {lesson.story}
                </p>
                <p className="text-xs font-bold text-[#f59e0b] break-keep">
                  {lesson.lesson}
                </p>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 border-2 border-amber-600 shadow-[3px_3px_0_#92400e]">
            <p className="text-sm font-black text-white break-keep">
              &quot;{t.about.failureRule}&quot;
            </p>
          </div>
        </section>

        {/* Leadership & Conflict */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            {t.about.leadershipTitle}
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] break-keep">{t.about.leadershipSubtitle}</p>
          <div className="space-y-2">
            {t.about.leadershipItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-3 rounded-lg bg-[#fafafa] border-l-4 border-[#3b82f6] hover:bg-white hover:shadow-md transition-all cursor-default"
              >
                <p className="text-xs text-[#3e3e3e] font-medium break-keep leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Operating Rhythm */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            {t.about.rhythmTitle}
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] break-keep">{t.about.rhythmSubtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {t.about.rhythmItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-3 rounded-lg bg-[#fafafa] text-center border border-transparent hover:border-amber-400 hover:bg-white hover:shadow-[2px_2px_0_#f59e0b] transition-all cursor-default"
              >
                <span className="text-xs font-mono font-black text-amber-600 block mb-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-xs text-[#3e3e3e] font-medium break-keep">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Hiring Info */}
        <section className="ds-section-padded border-b-2 border-black/10 flex flex-col gap-4">
          <span className="ds-badge">
            채용 관련 정보
          </span>
          <h2 className="text-lg md:text-xl lg:text-2xl font-black text-[#171a20] break-keep">
            Hiring Info
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "희망 포지션", value: "Senior Full-Stack Engineer" },
              { label: "근무 형태", value: "정규직 · 원격 가능" },
              { label: "입사 가능일", value: "즉시 가능" },
              { label: "비자 상태", value: "내국인 (병역필)" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#fafafa] border border-transparent hover:border-amber-400 group cursor-default transition-all"
              >
                <span className="text-xs font-mono font-bold text-amber-600/70 block mb-1.5">
                  {item.label}
                </span>
                <p className="text-sm font-black text-[#171a20] break-keep">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Note */}
        <section className="ds-section-padded">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl px-6 md:px-8 py-8 md:py-10 border-2 border-amber-700 shadow-[4px_4px_0_#92400e]">
            <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-mono font-bold text-white border border-white/30 w-fit mx-auto">
                Final Note
              </span>
              <p className="text-sm text-white font-medium break-keep">
                {t.about.finalNote}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="mailto:haspark912@kakao.com"
                  className="px-6 py-3 bg-white text-amber-700 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-[2px_2px_0_#92400e]"
                >
                  {t.hero.ctaSecondary}
                </a>
                <Link
                  href="/resume"
                  className="px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
