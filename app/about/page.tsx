"use client";

import { useI18n } from "@/lib/i18n";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white min-h-screen pb-12 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="py-16 md:py-24 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.about.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#171a20] mb-4">
            {t.about.title}
          </h1>
          <p className="text-lg md:text-xl text-[#5c5e62] font-medium mb-8">
            {t.about.subtitle}
          </p>
          <p className="text-base md:text-lg text-[#3e3e3e] leading-[1.8] max-w-3xl">
            {t.about.executiveSummary}
          </p>
        </div>

        {/* Core Strengths */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.strengths.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171a20] mb-8">
            {t.strengths.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.strengths.items.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#fafafa] hover:bg-[#f5f5f5] transition-colors">
                <h3 className="text-base font-bold text-[#171a20] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5c5e62]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.techStack.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171a20] mb-8">
            {t.techStack.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.techStack.categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="text-xs font-mono font-medium bg-[#171a20] text-[#00ff00] px-3 py-1.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.lookingFor.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171a20] mb-2">
            {t.lookingFor.title}
          </h2>
          <p className="text-base text-[#5c5e62] mb-8">{t.lookingFor.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {t.lookingFor.items.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border-2 border-[#171a20] hover:bg-[#fafafa] transition-colors">
                <h3 className="text-base font-bold text-[#171a20] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5c5e62]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <ExperienceTimeline showTitle={true} />
        </div>

        {/* Engineering Philosophy */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.about.philosophyTitle}
          </span>
          <p className="text-base text-[#5c5e62] mb-8">{t.about.philosophySubtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.philosophyItems.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#171a20] text-white">
                <h3 className="text-sm font-bold text-[#00ff00] mb-2">{item.principle}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Failure & Verification */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.about.failureTitle}
          </span>
          <p className="text-base text-[#5c5e62] mb-8">{t.about.failureSubtitle}</p>
          <div className="space-y-4 mb-8">
            {t.about.failureLessons.map((lesson, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#fafafa] border-l-4 border-[#f59e0b]">
                <h3 className="text-base font-bold text-[#171a20] mb-2">{lesson.title}</h3>
                <p className="text-sm text-[#5c5e62] mb-3">{lesson.story}</p>
                <p className="text-sm font-medium text-[#f59e0b]">{lesson.lesson}</p>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-xl bg-[#171a20]">
            <p className="text-base font-bold text-[#00ff00] leading-[1.7]">
              &quot;{t.about.failureRule}&quot;
            </p>
          </div>
        </div>

        {/* Leadership & Conflict */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.about.leadershipTitle}
          </span>
          <p className="text-base text-[#5c5e62] mb-8">{t.about.leadershipSubtitle}</p>
          <div className="space-y-3">
            {t.about.leadershipItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#fafafa] border-l-4 border-[#3b82f6]">
                <p className="text-sm text-[#3e3e3e] leading-[1.7]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Rhythm */}
        <div className="py-12 md:py-16 border-b border-[#f2f4f6]">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-4 block">
            {t.about.rhythmTitle}
          </span>
          <p className="text-base text-[#5c5e62] mb-8">{t.about.rhythmSubtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {t.about.rhythmItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#fafafa] text-center">
                <span className="text-xs font-mono font-bold text-[#00cc00] block mb-1">{String(idx + 1).padStart(2, '0')}</span>
                <p className="text-xs text-[#3e3e3e]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <div className="py-16 md:py-24 bg-[#171a20] rounded-2xl mt-12 md:mt-16 -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00] mb-6 block">
              Final Note
            </span>
            <p className="text-lg md:text-xl text-white leading-[1.8] font-medium">
              {t.about.finalNote}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="mailto:haspark912@kakao.com" className="btn-system btn-primary">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
