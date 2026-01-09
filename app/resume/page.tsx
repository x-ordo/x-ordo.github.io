"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-[#e5e7eb]">
          <h1 className="text-3xl md:text-4xl font-black text-[#171a20] mb-2">
            박하성
          </h1>
          <p className="text-lg md:text-xl text-[#5c5e62] font-medium mb-6">
            소프트웨어 엔지니어 · 풀스택 (5년차)
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#3e3e3e]">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#00cc00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              서울 / 원격 가능
            </span>
            <a href="tel:010-3980-4154" className="flex items-center gap-1.5 hover:text-[#00cc00] transition-colors">
              <svg className="w-4 h-4 text-[#00cc00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              010-3980-4154
            </a>
            <a href="mailto:haspark912@kakao.com" className="flex items-center gap-1.5 hover:text-[#00cc00] transition-colors">
              <svg className="w-4 h-4 text-[#00cc00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              haspark912@kakao.com
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#3e3e3e] mt-3">
            <Link href="/" className="flex items-center gap-1.5 hover:text-[#00cc00] transition-colors">
              <svg className="w-4 h-4 text-[#00cc00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              x-ordo.github.io
            </Link>
            <a href="https://github.com/x-ordo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00cc00] transition-colors">
              <svg className="w-4 h-4 text-[#00cc00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              github.com/x-ordo
            </a>
          </div>
        </header>

        {/* 한 줄 요약 */}
        <section className="mb-10">
          <div className="p-6 rounded-xl bg-[#171a20]">
            <p className="text-lg md:text-xl font-bold text-white mb-2">
              기술·사업·유통을 함께 이해하는 실행형 소프트웨어 엔지니어
            </p>
            <p className="text-sm text-gray-400">
              완성도보다 <span className="text-[#00ff00] font-medium">시장 선점, 고객 확보, 실행 속도</span>를 우선합니다.
            </p>
          </div>
        </section>

        {/* 간단 소개 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
            간단 소개
          </h2>
          <div className="text-[15px] text-[#3e3e3e] leading-[1.8] space-y-4">
            <p>
              대용량 데이터 처리, 모바일 앱, LLM 기반 자동화 시스템을 중심으로 실무 경험을 쌓아온 <strong className="text-[#171a20]">5년차 소프트웨어 엔지니어</strong>입니다.
            </p>
            <p>
              단순 구현에 머무르지 않고, <strong className="text-[#171a20]">이 기술이 실제로 쓰이는가 / 돈을 벌어오는가</strong>를 기준으로 설계·개발해 왔습니다.
              개발 이후 영업, 운영, 고객 응대까지 직접 경험하며 <strong className="text-[#171a20]">제품의 성패는 기술보다 유통·타이밍·집중도에 달려 있다</strong>는 것을 체감했습니다.
            </p>
            <blockquote className="pl-4 border-l-4 border-[#00cc00] text-[#5c5e62] italic">
              &ldquo;시장에서 이기는 것은 완벽한 제품이 아니라<br />
              초기에 유통·주의·주도권을 잡는 것이다.&rdquo;
            </blockquote>
            <p>
              최근에는 AI 생산성 도구(Claude, Gemini, ChatGPT/Codex)를 적극 활용해
              <strong className="text-[#171a20]"> 빠르게 만들고 → 검증하고 → 버리거나 고도화하는 개발 루프</strong>를 운영 중입니다.
            </p>
            <p>
              총 <strong className="text-[#171a20]">36개 이상의 프로젝트</strong>를 설계·개발했으며,
              이혼 전문 변호사용 AI 법률 보조 서비스, 콘텐츠 자동화 시스템, 골프 레슨 플랫폼 등은
              <strong className="text-[#171a20]"> 실사용을 전제로 90% 이상 완성된 상태</strong>입니다.
            </p>
            <p>
              개발자가 직접 고객을 만나 설명하고 설득해야 한다고 믿으며,
              <strong className="text-[#171a20]"> 영업·커뮤니케이션을 부담스러워하지 않는 개발자</strong>입니다.
            </p>
          </div>
        </section>

        {/* 경력 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
            경력
          </h2>

          {/* 제타럭스시스템 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-base font-bold text-[#171a20]">㈜제타럭스시스템</h3>
              <span className="text-sm text-[#5c5e62]">2021.11 – 2023.05</span>
            </div>
            <p className="text-sm text-[#00cc00] font-medium mb-3">소프트웨어 개발자 (주임)</p>
            <ul className="text-[15px] text-[#3e3e3e] leading-[1.8] space-y-2">
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>Hadoop 기반 대용량 데이터 처리 파이프라인 구축 (Python 데이터 정제, 리눅스 서버 다수 노드 운영)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>YOLO 기반 산불 영상 인식 시스템 개발 (ETRI 연구용역) - Android Native 영상 인식 앱 개발</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>모바일 GIS 솔루션 <em>MapJoy</em> GS 인증 대응</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>디지털 사이니지 시스템 전반 개발 (Kafka 영상 스트리밍, Golang 백엔드, Android Kotlin 클라이언트)</span>
              </li>
            </ul>
            <p className="text-sm text-[#5c5e62] mt-3 italic">
              → 기술적 완성도보다 &apos;이 구조가 정말 필요한가&apos;를 고민하게 된 계기
            </p>
          </div>

          {/* 애즈금융서비스 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-base font-bold text-[#171a20]">애즈금융서비스 (GA)</h3>
              <span className="text-sm text-[#5c5e62]">약 6개월</span>
            </div>
            <p className="text-sm text-[#00cc00] font-medium mb-3">현장 영업 구조 이해 목적 근무</p>
            <ul className="text-[15px] text-[#3e3e3e] leading-[1.8] space-y-2">
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>보험 GA 영업 구조, 수수료 체계, 설득 흐름 실무 경험</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>고객 상담 및 제안 과정 직접 참여</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>문서 관리·고객 이력·상품 비교 과정의 비효율 분석</span>
              </li>
            </ul>
            <p className="text-sm text-[#5c5e62] mt-3 italic">
              → 금융/보험 서비스는 기술보다 구조·컴플라이언스가 성패를 좌우함을 학습
            </p>
          </div>

          {/* 라비인터내셔널 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-base font-bold text-[#171a20]">라비인터내셔널</h3>
              <span className="text-sm text-[#5c5e62]">2023.11 – 2026.01</span>
            </div>
            <p className="text-sm text-[#00cc00] font-medium mb-3">대표 / 개인사업자</p>
            <ul className="text-[15px] text-[#3e3e3e] leading-[1.8] space-y-2">
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>자영업자 대상 리뷰·체험단 관리 시스템 개발·운영</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>온라인 마케팅 자동화 프로그램 직접 개발 및 매출 창출</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>수산물 판매 사이트 운영</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>중국·일본 사이트 크롤링 기반 구매대행 자동화 운영</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00cc00]">•</span>
                <span>개발, 영업, 제휴, 고객 응대 전반 직접 수행</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 개인 프로젝트 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
            개인 프로젝트
          </h2>
          <p className="text-sm text-[#5c5e62] mb-4">2018.01 – 현재 · 총 36개 이상 프로젝트 설계·개발·운영</p>

          <div className="grid gap-3">
            <div className="p-4 rounded-lg bg-[#fafafa] border-l-4 border-[#00ff00]">
              <h4 className="text-sm font-bold text-[#171a20]">CHAGOK</h4>
              <p className="text-sm text-[#5c5e62]">이혼 전문 변호사용 AI 파라리걸 & 증거 관리 시스템</p>
            </div>
            <div className="p-4 rounded-lg bg-[#fafafa] border-l-4 border-[#00ff00]">
              <h4 className="text-sm font-bold text-[#171a20]">NumnaRoad</h4>
              <p className="text-sm text-[#5c5e62]">24/7 eSIM 자동 발급 플랫폼</p>
            </div>
            <div className="p-4 rounded-lg bg-[#fafafa] border-l-4 border-[#00ff00]">
              <h4 className="text-sm font-bold text-[#171a20]">TEE:UP</h4>
              <p className="text-sm text-[#5c5e62]">프리미엄 골프 레슨 매칭 플랫폼</p>
            </div>
            <div className="p-4 rounded-lg bg-[#fafafa] border-l-4 border-[#3b82f6]">
              <h4 className="text-sm font-bold text-[#171a20]">콘텐츠 자동화 시스템</h4>
              <p className="text-sm text-[#5c5e62]">콘텐츠 자동 생성·퍼블리싱 멀티 에이전트 시스템</p>
            </div>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#00cc00] mt-4 hover:underline"
          >
            전체 프로젝트 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>

        {/* 기술 스택 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
            기술 스택
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-[#5c5e62] mb-2">Backend / Infra</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "Go", "Node.js", "AWS", "Linux", "Apache Kafka"].map(skill => (
                  <span key={skill} className="text-xs font-mono font-medium bg-[#171a20] text-[#00ff00] px-3 py-1.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#5c5e62] mb-2">Frontend / Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Flutter", "Kotlin", "Android Native"].map(skill => (
                  <span key={skill} className="text-xs font-mono font-medium bg-[#171a20] text-[#00ff00] px-3 py-1.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#5c5e62] mb-2">AI / LLM</h3>
              <div className="flex flex-wrap gap-2">
                {["LLM 업무 자동화", "Function Calling", "LoRA/SFT", "멀티 에이전트"].map(skill => (
                  <span key={skill} className="text-xs font-mono font-medium bg-[#171a20] text-[#00ff00] px-3 py-1.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 학력 & 자격 */}
        <section className="mb-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
                학력
              </h2>
              <div className="text-[15px] text-[#3e3e3e]">
                <p className="font-medium">한국방송통신대학교</p>
                <p className="text-sm text-[#5c5e62]">AI 전공 (재학) · 2022.03 –</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
                자격증 / 언어
              </h2>
              <ul className="text-[15px] text-[#3e3e3e] space-y-1">
                <li>자동차정비기능사 (2020)</li>
                <li>SQLD (2023)</li>
                <li>telc B1 (2018)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 일하는 방식 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
            일하는 방식 & 가치관
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "완벽보다 실행을 중시합니다",
              "기술은 문제 해결을 위한 수단일 뿐입니다",
              "행동하지 않는 사람과는 일하지 않습니다",
              "충돌은 피하지 않되, 결과를 만드는 방향을 선호합니다"
            ].map((value, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#fafafa] flex items-center gap-3">
                <span className="text-[#00cc00] font-bold">{String(idx + 1).padStart(2, '0')}</span>
                <p className="text-sm text-[#3e3e3e]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 지원 동기 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#171a20] mb-4 pb-2 border-b border-[#e5e7eb]">
            지원 동기
          </h2>
          <div className="text-[15px] text-[#3e3e3e] leading-[1.8] space-y-4">
            <p>
              단순히 코드만 작성하는 역할이 아니라,
              <strong className="text-[#171a20]"> 기술·운영·시장 관점에서 문제를 함께 풀 수 있는 팀</strong>을 찾고 있습니다.
            </p>
            <p>
              창업자와 직접 소통하며,
              불편하고 낡았지만 반드시 개선되어야 할 문제를 다루는 환경이라면
              <strong className="text-[#171a20]"> 책임 범위를 가리지 않고 기여하고 싶습니다.</strong>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-6 md:px-10 bg-[#171a20] rounded-2xl text-center">
          <p className="text-lg font-bold text-white mb-6">
            함께 문제를 풀어갈 준비가 되어 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:haspark912@kakao.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff00] text-[#171a20] font-bold rounded-lg hover:bg-[#00cc00] transition-colors"
            >
              이메일 보내기
            </a>
            <a
              href="tel:010-3980-4154"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00ff00] text-[#00ff00] font-bold rounded-lg hover:bg-[#00ff00] hover:text-[#171a20] transition-colors"
            >
              전화하기
            </a>
          </div>
        </section>

        {/* Print / Download hint */}
        <div className="mt-8 text-center text-sm text-[#9ca3af]">
          <p>이 페이지는 인쇄용으로 최적화되어 있습니다. (Ctrl/Cmd + P)</p>
        </div>

      </div>
    </div>
  );
}
