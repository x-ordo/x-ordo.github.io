"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="resume-page bg-white min-h-screen pt-24 pb-12 print:pt-0 print:pb-0">
      <div className="resume-container max-w-[720px] mx-auto px-6 print:px-0 print:max-w-none">

        {/* Header - 컴팩트하게 */}
        <header className="mb-8 pb-6 border-b-2 border-[#171a20] print:mb-6 print:pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-[28px] sm:text-[32px] font-black text-[#171a20] tracking-tight print:text-[24pt]">
                박하성
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#5c5e62] font-medium mt-1 print:text-[11pt]">
                소프트웨어 엔지니어 · 풀스택 (5년차)
              </p>
            </div>
            <div className="flex flex-col text-[13px] text-[#3e3e3e] gap-1 print:text-[9pt]">
              <span>서울 / 원격 가능</span>
              <a href="tel:010-3980-4154" className="hover:text-[#00cc00]">010-3980-4154</a>
              <a href="mailto:haspark912@kakao.com" className="hover:text-[#00cc00]">haspark912@kakao.com</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-[12px] text-[#5c5e62] print:text-[8pt]">
            <span>Portfolio: x-ordo.github.io</span>
            <span>GitHub: github.com/x-ordo</span>
          </div>
        </header>

        {/* 한 줄 요약 - 더 심플하게 */}
        <section className="mb-8 print:mb-6">
          <div className="py-4 px-5 bg-[#171a20] print:bg-[#171a20]">
            <p className="text-[15px] sm:text-[16px] font-bold text-white leading-relaxed print:text-[11pt]">
              기술 · 사업 · 유통을 함께 이해하는 실행형 엔지니어
            </p>
            <p className="text-[13px] text-gray-400 mt-1 print:text-[9pt]">
              완성도보다 시장 선점, 고객 확보, 실행 속도를 우선합니다.
            </p>
          </div>
        </section>

        {/* 간단 소개 - 폰트 크기 조정, 줄간격 최적화 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-[15px] font-bold text-[#171a20] mb-3 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
            Summary
          </h2>
          <div className="text-[14px] text-[#3e3e3e] leading-[1.75] space-y-3 print:text-[10pt] print:leading-[1.6]">
            <p>
              대용량 데이터 처리, 모바일 앱, LLM 기반 자동화 시스템 중심의 <strong className="text-[#171a20] font-semibold">5년차 소프트웨어 엔지니어</strong>입니다.
              단순 구현이 아닌 <strong className="text-[#171a20] font-semibold">"실제로 쓰이는가 / 돈을 버는가"</strong>를 기준으로 설계·개발해 왔습니다.
            </p>
            <p>
              영업, 운영, 고객 응대까지 직접 수행하며 <strong className="text-[#171a20] font-semibold">제품의 성패는 기술보다 유통·타이밍·집중도</strong>에 달려 있음을 체감했습니다.
              최근에는 AI 도구(Claude, Gemini, GPT)를 활용해 <strong className="text-[#171a20] font-semibold">빠르게 만들고 → 검증 → 버리거나 고도화</strong>하는 개발 루프를 운영 중입니다.
            </p>
            <p>
              총 <strong className="text-[#171a20] font-semibold">36개 이상의 프로젝트</strong>를 설계·개발했으며,
              개발자가 직접 고객을 만나 설득해야 한다고 믿는 <strong className="text-[#171a20] font-semibold">커뮤니케이션을 두려워하지 않는 개발자</strong>입니다.
            </p>
          </div>
        </section>

        {/* 경력 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-[15px] font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
            Experience
          </h2>

          {/* 제타럭스시스템 */}
          <div className="mb-6 print:mb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-[14px] font-bold text-[#171a20] print:text-[10pt]">㈜제타럭스시스템</h3>
              <span className="text-[12px] text-[#5c5e62] print:text-[9pt]">2021.11 – 2023.05 (1년 6개월)</span>
            </div>
            <p className="text-[12px] text-[#00aa00] font-semibold mb-2 print:text-[9pt]">소프트웨어 개발자 (주임)</p>
            <ul className="text-[13px] text-[#3e3e3e] leading-[1.7] space-y-1.5 print:text-[9pt] print:leading-[1.5]">
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>Hadoop 기반 대용량 데이터 처리 파이프라인 구축 (Python, Linux 다수 노드)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>YOLO 기반 산불 영상 인식 시스템 (ETRI 연구용역) - Android Native 앱</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>모바일 GIS 솔루션 <em className="not-italic font-medium">MapJoy</em> GS 인증 대응</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>디지털 사이니지 시스템 (Kafka 스트리밍, Go 백엔드, Kotlin 클라이언트)</span>
              </li>
            </ul>
          </div>

          {/* 애즈금융서비스 */}
          <div className="mb-6 print:mb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-[14px] font-bold text-[#171a20] print:text-[10pt]">애즈금융서비스 (GA)</h3>
              <span className="text-[12px] text-[#5c5e62] print:text-[9pt]">2022 (약 6개월)</span>
            </div>
            <p className="text-[12px] text-[#00aa00] font-semibold mb-2 print:text-[9pt]">현장 영업 구조 이해 목적</p>
            <ul className="text-[13px] text-[#3e3e3e] leading-[1.7] space-y-1.5 print:text-[9pt] print:leading-[1.5]">
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>보험 GA 영업 구조, 수수료 체계, 설득 흐름 실무 경험</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>금융/보험은 기술보다 구조·컴플라이언스가 성패를 좌우함을 학습</span>
              </li>
            </ul>
          </div>

          {/* 라비인터내셔널 */}
          <div className="mb-2 print:mb-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-[14px] font-bold text-[#171a20] print:text-[10pt]">라비인터내셔널</h3>
              <span className="text-[12px] text-[#5c5e62] print:text-[9pt]">2023.11 – 2026.01</span>
            </div>
            <p className="text-[12px] text-[#00aa00] font-semibold mb-2 print:text-[9pt]">대표 / 개인사업자</p>
            <ul className="text-[13px] text-[#3e3e3e] leading-[1.7] space-y-1.5 print:text-[9pt] print:leading-[1.5]">
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>리뷰·체험단 관리 시스템, 마케팅 자동화 프로그램 개발·운영</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>중국·일본 사이트 크롤링 기반 구매대행 자동화</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00aa00] flex-shrink-0">•</span>
                <span>개발, 영업, 제휴, 고객 응대 전반 직접 수행</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 개인 프로젝트 - 그리드로 컴팩트하게 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-[15px] font-bold text-[#171a20] mb-3 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
            Projects <span className="font-normal text-[#5c5e62]">(36+ total)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:gap-2">
            {[
              { name: "CHAGOK", desc: "이혼 전문 변호사용 AI 파라리걸" },
              { name: "NumnaRoad", desc: "24/7 eSIM 자동 발급 플랫폼" },
              { name: "TEE:UP", desc: "프리미엄 골프 레슨 매칭" },
              { name: "콘텐츠 자동화", desc: "멀티 에이전트 퍼블리싱 시스템" },
            ].map((project) => (
              <div key={project.name} className="py-2.5 px-3.5 bg-[#f8f9fa] border-l-3 border-[#00cc00] print:py-2 print:px-3">
                <h4 className="text-[13px] font-bold text-[#171a20] print:text-[9pt]">{project.name}</h4>
                <p className="text-[12px] text-[#5c5e62] print:text-[8pt]">{project.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#00aa00] mt-3 hover:underline print:hidden"
          >
            전체 프로젝트 보기 →
          </Link>
        </section>

        {/* 기술 스택 - 한 줄로 컴팩트하게 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-[15px] font-bold text-[#171a20] mb-3 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
            Skills
          </h2>

          <div className="space-y-2.5 print:space-y-2">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-[12px] font-bold text-[#5c5e62] w-28 flex-shrink-0 print:text-[9pt]">Backend/Infra</span>
              <span className="text-[13px] text-[#3e3e3e] print:text-[9pt]">Python, FastAPI, Go, Node.js, AWS, Linux, Kafka</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-[12px] font-bold text-[#5c5e62] w-28 flex-shrink-0 print:text-[9pt]">Frontend/Mobile</span>
              <span className="text-[13px] text-[#3e3e3e] print:text-[9pt]">React, Next.js, TypeScript, Flutter, Kotlin, Android</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-[12px] font-bold text-[#5c5e62] w-28 flex-shrink-0 print:text-[9pt]">AI/LLM</span>
              <span className="text-[13px] text-[#3e3e3e] print:text-[9pt]">LLM 업무 자동화, Function Calling, LoRA/SFT, 멀티 에이전트</span>
            </div>
          </div>
        </section>

        {/* 학력 & 자격 - 한 줄로 */}
        <section className="mb-8 print:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:gap-4">
            <div>
              <h2 className="text-[15px] font-bold text-[#171a20] mb-2 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
                Education
              </h2>
              <p className="text-[13px] text-[#3e3e3e] print:text-[9pt]">
                <span className="font-medium">한국방송통신대학교</span> · AI 전공 (재학) · 2022 –
              </p>
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-[#171a20] mb-2 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
                Certifications
              </h2>
              <p className="text-[13px] text-[#3e3e3e] print:text-[9pt]">
                SQLD (2023) · telc B1 독일어 (2018)
              </p>
            </div>
          </div>
        </section>

        {/* 일하는 방식 - 심플하게 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-[15px] font-bold text-[#171a20] mb-3 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
            Work Style
          </h2>
          <div className="flex flex-wrap gap-2 print:gap-1.5">
            {[
              "완벽보다 실행",
              "기술은 수단",
              "행동하지 않는 사람과는 일하지 않음",
              "충돌은 피하지 않되 결과 지향"
            ].map((value, idx) => (
              <span
                key={idx}
                className="text-[12px] text-[#3e3e3e] px-3 py-1.5 bg-[#f8f9fa] border border-[#e5e7eb] rounded print:text-[8pt] print:px-2 print:py-1"
              >
                {value}
              </span>
            ))}
          </div>
        </section>

        {/* 지원 동기 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-[15px] font-bold text-[#171a20] mb-3 pb-2 border-b border-[#e5e7eb] uppercase tracking-wide print:text-[10pt]">
            Why I Apply
          </h2>
          <p className="text-[13px] text-[#3e3e3e] leading-[1.7] print:text-[9pt] print:leading-[1.5]">
            코드만 작성하는 역할이 아니라, <strong className="font-semibold">기술·운영·시장 관점에서 문제를 함께 풀 수 있는 팀</strong>을 찾습니다.
            창업자와 직접 소통하며 불편하지만 반드시 개선되어야 할 문제를 다루는 환경이라면 <strong className="font-semibold">책임 범위를 가리지 않고 기여</strong>하겠습니다.
          </p>
        </section>

        {/* CTA - 인쇄 시 숨김 */}
        <section className="py-8 px-6 bg-[#171a20] rounded-xl text-center print:hidden">
          <p className="text-[15px] font-bold text-white mb-5">
            함께 문제를 풀어갈 준비가 되어 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:haspark912@kakao.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff00] text-[#171a20] text-[13px] font-bold rounded-lg hover:bg-[#00cc00] transition-colors"
            >
              이메일 보내기
            </a>
            <a
              href="tel:010-3980-4154"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#00ff00] text-[#00ff00] text-[13px] font-bold rounded-lg hover:bg-[#00ff00] hover:text-[#171a20] transition-colors"
            >
              전화하기
            </a>
          </div>
        </section>

        {/* Print hint - 인쇄 시 숨김 */}
        <div className="mt-6 text-center text-[12px] text-[#9ca3af] print:hidden">
          <p>이 페이지는 인쇄용으로 최적화되어 있습니다. (Ctrl/Cmd + P)</p>
        </div>

      </div>
    </div>
  );
}
