"use client";

import { useEffect, useState, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { metrics } from "@/data/metrics";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  // 항상 실제 값으로 시작 (SSR과 hydration 모두에서)
  const [count, setCount] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 이미 애니메이션했으면 스킵
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          // 뷰포트에 들어오면 애니메이션 시작
          setHasAnimated(true);

          // 잠시 0으로 리셋 후 애니메이션
          setCount(0);

          let start = 0;
          const duration = 1200;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function MetricsDashboard() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-4 px-3 md:px-4 bg-[#171a20] rounded-lg border-2 border-black shadow-[2px_2px_0_#00ff00]">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <div className="text-lg md:text-xl font-black text-[#00ff00] font-mono">
            <AnimatedNumber value={metric.value} suffix={metric.suffix} />
          </div>
          <div className="text-[10px] md:text-[11px] font-mono text-white/60 uppercase tracking-wider mt-1">
            {t.metrics[metric.labelKey]}
          </div>
        </div>
      ))}
    </div>
  );
}
