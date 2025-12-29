import Link from "next/link";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">
            Developer & Entrepreneur
          </p>
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            AI로 미래를 설계하고, 비즈니스 가치를 구현합니다.
          </h1>
          <p className="text-lg text-white/70">
            Jed Park은 제품, 시스템, 비즈니스를 연결하는 풀스택 개발자입니다.
            LLM 기반 서비스 설계, 자동화 파이프라인, 데이터 중심 제품을 구축합니다.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <TypeWriter
              texts={[
                "LLM & RAG Specialist",
                "Product-focused Full-Stack",
                "Automation & Integration",
              ]}
            />
          </div>
        </div>
        <div className="relative">
          <div className="animate-float-slow rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Signature Stack
              </p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                2025
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                "LLM Orchestration",
                "Event-driven Systems",
                "Product Analytics",
                "Enterprise Automation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                >
                  <span className="text-sm text-white/80">{item}</span>
                  <span className="text-xs text-white/40">Live</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/0 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
