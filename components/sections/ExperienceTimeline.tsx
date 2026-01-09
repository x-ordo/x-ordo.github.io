"use client";

import { useI18n, useBilingualText } from "@/lib/i18n";
import { experiences, type ExperienceEntry } from "@/data/experience";

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast: boolean;
}

function TimelineItem({ entry, isLast }: TimelineItemProps) {
  const getText = useBilingualText();

  const typeColors = {
    founder: "bg-[#00ff00]",
    project: "bg-[#3b82f6]",
    milestone: "bg-[#f59e0b]",
    work: "bg-[#8b5cf6]",
  };

  return (
    <div className="relative flex gap-4 pb-6">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 w-[2px] h-[calc(100%-24px)] bg-[#e5e7eb]" />
      )}

      {/* Dot */}
      <div className={`relative z-10 w-6 h-6 rounded-full ${typeColors[entry.type]} flex items-center justify-center flex-shrink-0`}>
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono font-bold text-[#00cc00]">{entry.year}</span>
          {entry.company && (
            <span className="text-[10px] font-mono text-white bg-[#171a20] px-2 py-0.5 rounded">
              {entry.company}
            </span>
          )}
        </div>
        <h4 className="text-sm font-bold text-[#171a20] mt-1">
          {getText(entry.title)}
        </h4>
        <p className="text-xs text-[#6b7280] mt-0.5 leading-relaxed">
          {getText(entry.description)}
        </p>
      </div>
    </div>
  );
}

interface ExperienceTimelineProps {
  limit?: number;
  showTitle?: boolean;
}

export default function ExperienceTimeline({ limit, showTitle = true }: ExperienceTimelineProps) {
  const { t } = useI18n();
  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences;

  return (
    <div className="w-full">
      {showTitle && (
        <div className="mb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cc00]">
            {t.timeline.badge}
          </span>
          <h3 className="text-lg font-bold text-[#171a20] mt-1">{t.timeline.title}</h3>
        </div>
      )}
      <div className="space-y-0">
        {displayedExperiences.map((entry, index) => (
          <TimelineItem
            key={`${entry.year}-${index}`}
            entry={entry}
            isLast={index === displayedExperiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
