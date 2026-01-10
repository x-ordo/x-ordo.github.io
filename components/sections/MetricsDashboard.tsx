"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useI18n } from "@/lib/i18n";
import { metrics } from "@/data/metrics";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(value); // SSR용 초기값
  const [isClient, setIsClient] = useState(false);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  const animate = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

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

    return () => clearInterval(timer);
  }, [value]);

  useEffect(() => {
    setIsClient(true);
    setCount(0); // 클라이언트에서 0으로 시작

    // 짧은 딜레이 후 IntersectionObserver 설정
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [animate]);

  // SSR에서는 실제 값 표시, 클라이언트에서는 애니메이션 값 표시
  const displayValue = isClient ? count : value;

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
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
