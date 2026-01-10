"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="py-8 md:py-12 border-b-2 border-black/10">
          <span className="badge-section">
            {t.about.badge}
          </span>
          <h1 className="heading-section text-[#171a20] keep-all">
            {t.about.title}
          </h1>
          <p className="text-sm md:text-base text-[#3e3e3e] font-bold mb-3 keep-all">
            {t.about.subtitle}
          </p>
          <p className="text-xs md:text-sm text-[#5c5e62] max-w-3xl keep-all">
            {t.about.executiveSummary}
          </p>
        </div>

        {/* Core Strengths */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            {t.strengths.badge}
          </span>
          <h2 className="heading-section text-[#171a20] keep-all">
            {t.strengths.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.strengths.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#fafafa] border border-transparent hover:border-[#00cc00] group cursor-default transition-all"
              >
                <h3 className="text-sm font-black text-[#171a20] mb-1.5 group-hover:text-[#00cc00] transition-colors keep-all">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5c5e62] keep-all leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            {t.techStack.badge}
          </span>
          <h2 className="heading-section text-[#171a20] keep-all">
            {t.techStack.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.techStack.categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-black text-[#171a20] mb-3 pb-2 border-b-2 border-black/10 keep-all">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="text-xs font-mono font-bold bg-[#171a20] text-[#00ff00] px-2 py-1 rounded hover:bg-[#00ff00] hover:text-black transition-colors cursor-default"
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
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            {t.lookingFor.badge}
          </span>
          <h2 className="heading-section text-[#171a20] !mb-2 keep-all">
            {t.lookingFor.title}
          </h2>
          <p className="text-xs md:text-sm text-[#5c5e62] mb-4 keep-all">{t.lookingFor.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-3">
            {t.lookingFor.items.map((item, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-lg border-2 border-[#171a20] bg-white hover:bg-[#00ff00] hover:border-[#00ff00] shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all cursor-default"
              >
                <h3 className="text-sm font-black text-[#171a20] mb-1.5 keep-all">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5c5e62] group-hover:text-black/70 keep-all leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <ExperienceTimeline showTitle={true} />
        </div>

        {/* Engineering Philosophy */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            Engineering Philosophy
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] mb-4 keep-all">{t.about.philosophySubtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {t.about.philosophyItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-lg bg-[#171a20] hover:bg-black border-2 border-black shadow-[2px_2px_0_#00ff00] hover:shadow-[3px_3px_0_#00ff00] transition-all cursor-default"
              >
                <h3 className="text-xs font-black text-[#00ff00] mb-1.5 keep-all">
                  {item.principle}
                </h3>
                <p className="text-xs text-gray-300 keep-all leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Failure & Verification */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            {t.about.failureTitle}
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] mb-4 keep-all">{t.about.failureSubtitle}</p>
          <div className="space-y-4 mb-6">
            {t.about.failureLessons.map((lesson, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-lg bg-[#fafafa] border-l-4 border-[#f59e0b] hover:bg-white hover:shadow-md transition-all cursor-default"
              >
                <h3 className="text-sm font-black text-[#171a20] mb-1.5 keep-all">
                  {lesson.title}
                </h3>
                <p className="text-xs text-[#5c5e62] mb-2 keep-all leading-relaxed">
                  {lesson.story}
                </p>
                <p className="text-xs font-bold text-[#f59e0b] keep-all">
                  {lesson.lesson}
                </p>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-lg bg-[#171a20] border-2 border-black shadow-[3px_3px_0_#00ff00]">
            <p className="text-sm font-black text-[#00ff00] keep-all">
              &quot;{t.about.failureRule}&quot;
            </p>
          </div>
        </div>

        {/* Leadership & Conflict */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            {t.about.leadershipTitle}
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] mb-4 keep-all">{t.about.leadershipSubtitle}</p>
          <div className="space-y-2">
            {t.about.leadershipItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-3 rounded-lg bg-[#fafafa] border-l-4 border-[#3b82f6] hover:bg-white hover:shadow-md transition-all cursor-default"
              >
                <p className="text-xs text-[#3e3e3e] font-medium keep-all leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Rhythm */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            {t.about.rhythmTitle}
          </span>
          <p className="text-xs md:text-sm text-[#5c5e62] mb-4 keep-all">{t.about.rhythmSubtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {t.about.rhythmItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-3 rounded-lg bg-[#fafafa] text-center border border-transparent hover:border-[#00cc00] hover:bg-white hover:shadow-[2px_2px_0_#00ff00] transition-all cursor-default"
              >
                <span className="text-xs font-mono font-black text-[#00cc00] block mb-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-xs text-[#3e3e3e] font-medium keep-all">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Info */}
        <div className="py-8 md:py-10 border-b-2 border-black/10">
          <span className="badge-section">
            채용 관련 정보
          </span>
          <h2 className="heading-section text-[#171a20] keep-all">
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
                className="p-4 rounded-lg bg-[#fafafa] border border-transparent hover:border-[#00cc00] group cursor-default transition-all"
              >
                <span className="text-xs font-mono font-bold text-[#9ca3af] block mb-1.5">
                  {item.label}
                </span>
                <p className="text-sm font-black text-[#171a20] keep-all">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <div className="py-8 md:py-10 bg-[#171a20] rounded-xl mt-10 -mx-4 md:-mx-6 px-6 md:px-8 border-2 border-black shadow-[4px_4px_0_#00ff00]">
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge-section !mb-4">
              Final Note
            </span>
            <p className="text-sm text-white font-medium mb-6 keep-all">
              {t.about.finalNote}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="mailto:haspark912@kakao.com"
                className="btn-senior btn-senior-primary"
              >
                {t.hero.ctaSecondary}
              </a>
              <Link
                href="/resume"
                className="btn-senior bg-white text-black border-2 border-black shadow-[2px_2px_0_#00ff00] hover:shadow-[3px_3px_0_#00ff00] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#00ff00] transition-all"
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
