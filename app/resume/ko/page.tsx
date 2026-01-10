"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="resume-page bg-[#ffffff] min-h-screen pt-24 pb-20 print:pt-0 print:pb-0">
      <div className="resume-container max-w-[900px] mx-auto px-10 print:px-0 print:max-w-none">

        {/* Header - Notion style */}
        <header className="mb-16 print:mb-10">
          <div className="flex items-start gap-8 mb-8">
            <div className="w-24 h-24 bg-[#f7f7f5] rounded-xl flex items-center justify-center text-4xl flex-shrink-0 print:w-16 print:h-16">
              <span className="text-5xl">👨‍💻</span>
            </div>
            <div className="flex-1 pt-1">
              <h1 className="text-[48px] font-bold text-[#37352f] tracking-tight leading-tight print:text-[28pt]">
                박하성
              </h1>
              <p className="text-[20px] text-[#787774] mt-2 print:text-[12pt]">
                Technical Leader · System Architect · Full-stack (5+ years)
              </p>
            </div>
          </div>

          {/* Contact Pills */}
          <div className="flex flex-wrap gap-3 text-[15px] print:text-[9pt]">
            <span className="px-4 py-2 bg-[#f7f7f5] text-[#37352f] rounded-lg">📍 서울 / 원격 가능</span>
            <a href="tel:010-3980-4154" className="px-4 py-2 bg-[#f7f7f5] text-[#37352f] rounded-lg hover:bg-[#eeeee8] transition-colors">📞 010-3980-4154</a>
            <a href="mailto:haspark912@kakao.com" className="px-4 py-2 bg-[#f7f7f5] text-[#37352f] rounded-lg hover:bg-[#eeeee8] transition-colors">✉️ haspark912@kakao.com</a>
            <span className="px-4 py-2 bg-[#f7f7f5] text-[#37352f] rounded-lg">🔗 x-ordo.github.io</span>
          </div>
        </header>

        {/* Callout - Main Tagline */}
        <section className="mb-14 print:mb-8">
          <div className="flex gap-5 p-6 bg-[#f1f1ef] rounded-xl">
            <span className="text-3xl flex-shrink-0 mt-0.5">💡</span>
            <div>
              <p className="text-[19px] font-semibold text-[#37352f] leading-relaxed print:text-[11pt]">
                엔지니어링 자체를 애정하며, 문제를 구조적으로 해체하고 깊이 사고하는 실행형 엔지니어
              </p>
              <p className="text-[16px] text-[#787774] mt-2 print:text-[10pt]">
                기술을 목적이 아닌 <em className="font-medium">사고의 도구</em>로 사용합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-14 print:mb-8">
          <h2 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-6 print:text-[9pt]">
            Summary
          </h2>
          <div className="text-[17px] text-[#37352f] leading-[2] space-y-5 print:text-[10pt] print:leading-[1.8]">
            <p>
              대용량 데이터 처리, 모바일 애플리케이션, LLM 기반 자동화 시스템을 중심으로 실무 경험을 쌓아온
              <span className="bg-[#fbecdd] px-1.5 py-0.5 rounded font-medium mx-1">5년차 소프트웨어 엔지니어</span>입니다.
            </p>
            <p>
              개발을 단순한 구현 행위로 보지 않습니다. 문제를 정의하고, 그 문제를 구성하는 전제와 구조를 하나씩 분해한 뒤,
              <span className="bg-[#ddedea] px-1.5 py-0.5 rounded font-medium mx-1">지금 이 문제에 정말 필요한 기술은 무엇인지</span>를 고민하는 과정 자체를 엔지니어링의 핵심으로 생각합니다.
            </p>
            <p>
              초기에는 기술적 완성도를 높이는 데 집중했지만, 실제 서비스와 사업을 직접 운영하며
              <span className="bg-[#e8deee] px-1.5 py-0.5 rounded font-medium mx-1">완벽한 기술보다 중요한 것은 타이밍, 유통, 그리고 고객 확보</span>라는 사실을 체감했습니다.
            </p>
            <p>
              최근에는 AI 생산성 도구(Claude, Gemini, ChatGPT)를 적극 활용해
              <span className="bg-[#d3e5ef] px-1.5 py-0.5 rounded font-medium mx-1">아이디어 → 구현 → 테스트 → 검증 → 폐기 또는 고도화</span>의 사이클을 빠르게 반복하고 있습니다.
              총 <span className="font-bold">36개 이상의 프로젝트</span>를 수행했습니다.
            </p>
          </div>
        </section>

        {/* Why I Apply - Moved to top for recruiter visibility */}
        <section className="mb-14 print:mb-8">
          <div className="flex gap-5 p-6 bg-[#fbecdd] rounded-xl">
            <span className="text-3xl flex-shrink-0 mt-0.5">✨</span>
            <div>
              <h3 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-3 print:text-[9pt]">지원 동기</h3>
              <p className="text-[17px] text-[#37352f] leading-[1.9] print:text-[10pt]">
                단순히 주어진 일을 처리하는 역할이 아니라,<br />
                <span className="font-bold">문제를 함께 정의하고 구조를 고민할 수 있는 팀</span>에서 일하고 싶습니다.
              </p>
              <p className="text-[17px] text-[#37352f] leading-[1.9] mt-4 print:text-[10pt]">
                엔지니어가 사고할 수 있고, 그 사고의 깊이가 존중받는 환경이라면<br />
                <span className="font-bold">책임 범위를 가리지 않고 기여할 준비가 되어 있습니다.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-[#e9e9e7] my-14 print:my-8" />

        {/* Experience */}
        <section className="mb-14 print:mb-8">
          <h2 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-8 print:text-[9pt]">
            Experience
          </h2>

          <div className="space-y-12">
            {/* 제타럭스시스템 */}
            <div className="group">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 bg-[#f7f7f5] rounded-xl flex items-center justify-center text-xl flex-shrink-0">🏢</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-[20px] font-bold text-[#37352f] print:text-[11pt]">㈜제타럭스시스템</h3>
                    <span className="text-[15px] text-[#787774] print:text-[9pt]">2021.11 – 2023.05</span>
                  </div>
                  <p className="text-[15px] text-[#787774] mt-1 print:text-[9pt]">소프트웨어 개발자 (주임)</p>
                </div>
              </div>

              <div className="ml-[68px] space-y-4">
                {[
                  { title: "Hadoop 기반 대용량 데이터 처리 파이프라인", desc: "분석 흐름에서 병목이 발생하는 지점을 기준으로 구조를 재정의", badge: null },
                  { title: "YOLO 기반 산불 영상 인식 시스템 (ETRI 연구용역)", desc: "Android Native에서 실시간 영상 처리 성능과 안정성의 균형 조정", badge: null },
                  { title: "모바일 GIS 솔루션 MapJoy GS 인증 대응", desc: "전면 수정보다 최소 침습적 개선 선택", badge: null },
                  { title: "디지털 사이니지 시스템 (Kafka, Go, Kotlin)", desc: "'확장성'보다 '운영 가능성'을 우선 고려", badge: "국가사업" },
                  { title: "지적측량 데이터 통합 시스템", desc: "대용량 공간데이터 처리 및 실시간 동기화 아키텍처 설계", badge: "국가사업" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-[16px] print:text-[9pt]">
                    <span className="text-[#787774] flex-shrink-0 text-lg">•</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[#37352f] font-semibold">{item.title}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded print:text-[7pt]">
                            🏛️ {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[#787774] text-[15px] mt-1 leading-relaxed print:text-[8pt]">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 p-5 bg-[#f7f7f5] rounded-xl mt-6 text-[15px] print:text-[8pt]">
                  <span className="flex-shrink-0 text-lg">💭</span>
                  <p className="text-[#37352f] italic leading-relaxed">
                    이 시기에 <span className="font-semibold not-italic">기술적 정답과 현실적 해답은 다를 수 있다</span>는 것을 깊이 체감했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 애즈금융서비스 */}
            <div className="group">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 bg-[#f7f7f5] rounded-xl flex items-center justify-center text-xl flex-shrink-0">🏦</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-[20px] font-bold text-[#37352f] print:text-[11pt]">애즈금융서비스 (GA)</h3>
                    <span className="text-[15px] text-[#787774] print:text-[9pt]">2023.05 – 2023.11 (6개월)</span>
                  </div>
                  <p className="text-[15px] text-[#787774] mt-1 print:text-[9pt]">현장 UX 리서치 · 고객 의사결정 구조 분석</p>
                </div>
              </div>

              <div className="ml-[68px] space-y-3">
                {[
                  "보험 GA 영업 현장에서 고객 의사결정 흐름과 설득 구조 관찰",
                  "기술적으로 단순해 보이는 문제가 현장에서 해결되지 않는 이유 체감",
                  "'사용자가 왜 이 기능을 쓰지 않는가'를 먼저 고민하게 된 계기",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-[16px] text-[#37352f] leading-relaxed print:text-[9pt]">
                    <span className="text-[#787774] flex-shrink-0 text-lg">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 라비인터내셔널 */}
            <div className="group">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 bg-[#f7f7f5] rounded-xl flex items-center justify-center text-xl flex-shrink-0">🚀</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-[20px] font-bold text-[#37352f] print:text-[11pt]">라비인터내셔널</h3>
                    <span className="text-[15px] text-[#787774] print:text-[9pt]">2023.11 – 2026.01</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded print:text-[7pt]">
                      사업 정리 완료
                    </span>
                  </div>
                  <p className="text-[15px] text-[#787774] mt-1 print:text-[9pt]">대표 / 개인사업자 → 정규직 전환 희망</p>
                </div>
              </div>

              <div className="ml-[68px] space-y-3">
                {[
                  "온라인 마케팅 자동화 프로그램 직접 개발 및 운영",
                  "수산물 판매, 해외 구매대행 자동화 등 다양한 실험 진행",
                  "모든 과정(기획, 개발, 영업, 운영, 철수)을 직접 경험",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-[16px] text-[#37352f] leading-relaxed print:text-[9pt]">
                    <span className="text-[#787774] flex-shrink-0 text-lg">•</span>
                    <span>{item}</span>
                  </div>
                ))}

                <div className="flex gap-4 p-5 bg-[#f7f7f5] rounded-xl mt-6 text-[15px] print:text-[8pt]">
                  <span className="flex-shrink-0 text-lg">💭</span>
                  <p className="text-[#37352f] italic leading-relaxed">
                    여러 실패 경험을 통해 <span className="font-semibold not-italic">실행하지 않으면 아무것도 알 수 없고, 눈으로 본 것조차 절반만 믿어야 한다</span>는 판단 기준을 갖게 되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-[#e9e9e7] my-14 print:my-8" />

        {/* Engineering Leadership */}
        <section className="mb-14 print:mb-8">
          <h2 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-6 print:text-[9pt]">
            Engineering Leadership
          </h2>
          <div className="grid gap-4">
            {[
              {
                icon: "🏗️",
                title: "Architecture-First Thinking",
                detail: "코드 작성 전 시스템을 설계합니다. 모든 프로젝트는 문서화되고 정당화된 아키텍처 결정으로 시작합니다."
              },
              {
                icon: "🔒",
                title: "Security-Conscious Development",
                detail: "CVE 모니터링, Dependabot 자동화, 보안 우선 코드 리뷰를 모든 프로젝트에 적용합니다."
              },
              {
                icon: "📊",
                title: "Risk Management Orientation",
                detail: "Kelly Criterion 포지션 사이징부터 Merkle Tree 데이터 무결성까지 - 모든 도메인에 정량적 리스크 평가를 적용합니다."
              },
              {
                icon: "🔧",
                title: "DevOps Culture Advocate",
                detail: "Conventional commits, semantic versioning, CI/CD 파이프라인, 포괄적 테스트 커버리지를 필수로 적용합니다."
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-[#f7f7f5] rounded-xl print:p-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[#37352f] text-[17px] print:text-[10pt]">{item.title}</h3>
                  <p className="text-[15px] text-[#787774] mt-2 leading-relaxed print:text-[9pt]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Culture Evidence */}
        <section className="mb-14 print:mb-8">
          <h2 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-6 print:text-[9pt]">
            Engineering Culture Evidence
          </h2>
          <div className="border-2 border-[#e9e9e7] rounded-xl overflow-hidden">
            {[
              { metric: "PRs Merged (ArbQuant)", value: "40+", context: "Conventional Commit 표준" },
              { metric: "Test Coverage (HwpBridge)", value: "80%+", context: "Rust Workspace + Integration Tests" },
              { metric: "Issue Triage", value: "P0/P1/P2", context: "우선순위 기반 이슈 관리" },
              { metric: "Security Posture", value: "Active", context: "CVE 패칭, Dependabot 자동화" },
              { metric: "Documentation", value: "RUNBOOK + DR", context: "프로덕션 런북, 재해 복구 문서" },
            ].map((row, idx, arr) => (
              <div key={idx} className={`flex ${idx !== arr.length - 1 ? 'border-b-2 border-[#e9e9e7]' : ''}`}>
                <div className="w-52 sm:w-56 flex-shrink-0 px-5 py-4 bg-[#f7f7f5] text-[15px] font-semibold text-[#37352f] print:text-[9pt] print:w-40">
                  {row.metric}
                </div>
                <div className="flex-1 px-5 py-4 text-[15px] print:text-[9pt]">
                  <span className="font-bold text-[#2eaadc]">{row.value}</span>
                  <span className="text-[#787774] ml-3">{row.context}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-[#e9e9e7] my-14 print:my-8" />

        {/* Projects */}
        <section className="mb-14 print:mb-8">
          <h2 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-8 print:text-[9pt]">
            Key Projects & Technical Decisions
          </h2>

          <div className="grid gap-5">
            {[
              { icon: "💹", name: "ArbQuant - 암호화폐 차익거래 시스템", problem: "개인 트레이딩에서 기관급 리스크 관리 구현 가능한가?", solution: "Kelly Criterion + Almgren-Chriss + Walk-Forward 백테스트로 정량적 리스크 관리" },
              { icon: "🛡️", name: "Reporty (Project Iron Dome) - 직장 괴롭힘 리스크 관리", problem: "양측 모두 기록 조작 동기가 있을 때 증거 무결성 보장", solution: "Merkle Tree + SHA-256 해시 체인으로 암호학적 변조 탐지" },
              { icon: "🦀", name: "HwpBridge - Rust HWP 파서", problem: "한국 정부/기업 문서가 AI 도구에서 접근 불가", solution: "MCP 서버 + 80%+ 테스트 커버리지 + Semantic Versioning으로 프로덕션급 구현" },
              { icon: "⛳", name: "Ansim Golf - 골프장 자동화", problem: "시니어 운영자가 복잡한 UI를 탐색할 수 없음", solution: "시니어 친화적 UI + Edge 아키텍처로 정산 수작업 80% 감소" },
              { icon: "🔮", name: "Soul Lab - 토스 운세 미니앱", problem: "소비자 앱에도 프로덕션급 운영이 필요", solution: "RUNBOOK + DISASTER_RECOVERY 문서화, 1,260개 결정론적 템플릿" },
              { icon: "⚖️", name: "CHAGOK - AI 법률 보조 서비스", problem: "법률 영역에서 '자동화'가 어디까지 허용되는가", solution: "Human-in-the-loop + 이중 RAG로 할루시네이션 최소화" },
              { icon: "📝", name: "콘텐츠 자동 생성 시스템", problem: "생성 품질보다 중요한 것은 일관성과 운영 비용", solution: "역할 분리된 멀티 에이전트 구조로 11개+ 플랫폼 통합" },
            ].map((project, idx) => (
              <div key={idx} className="p-5 bg-[#f7f7f5] rounded-xl hover:bg-[#f1f1ef] transition-colors print:p-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{project.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[17px] font-bold text-[#37352f] mb-3 print:text-[10pt]">{project.name}</h4>
                    <div className="space-y-2.5 text-[15px] print:text-[9pt]">
                      <div className="flex gap-3">
                        <span className="text-[#9b9a97] flex-shrink-0 w-14 font-medium">고민</span>
                        <span className="text-[#37352f] leading-relaxed">{project.problem}</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-[#2eaadc] flex-shrink-0 w-14 font-bold">해결</span>
                        <span className="text-[#37352f] font-semibold leading-relaxed">{project.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[15px] text-[#2eaadc] font-medium mt-6 hover:underline print:hidden"
          >
            전체 프로젝트 보기 →
          </Link>
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-[#e9e9e7] my-14 print:my-8" />

        {/* Skills - CTO-Oriented Table */}
        <section className="mb-14 print:mb-8">
          <h2 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-6 print:text-[9pt]">
            Technical Competencies
          </h2>

          <div className="border-2 border-[#e9e9e7] rounded-xl overflow-hidden">
            {[
              { category: "System Architecture", skills: "Event-driven (NATS JetStream), CQRS, Merkle Trees, Multi-cloud failover" },
              { category: "Backend / Infra", skills: "Go, Rust, Python/FastAPI, Node.js, AWS, Cloudflare Workers, Fly.io" },
              { category: "Frontend / Mobile", skills: "Next.js, React, TypeScript, Flutter, Kotlin, Android" },
              { category: "Data & Analytics", skills: "TimescaleDB, PostgreSQL, Qdrant, Redis, Walk-Forward Backtest" },
              { category: "AI / LLM", skills: "LangChain, RAG, MCP Server, Multi-Agent, PII Detection" },
              { category: "DevOps & Security", skills: "CI/CD, Dependabot, CVE 모니터링, Semantic Versioning, 80%+ Coverage" },
              { category: "Risk Management", skills: "Kelly Criterion, Almgren-Chriss, Z-Score Signals, Correlation Risk" },
            ].map((row, idx, arr) => (
              <div key={idx} className={`flex ${idx !== arr.length - 1 ? 'border-b-2 border-[#e9e9e7]' : ''}`}>
                <div className="w-48 sm:w-52 flex-shrink-0 px-5 py-4 bg-[#f7f7f5] text-[15px] font-semibold text-[#37352f] print:text-[9pt] print:w-36">
                  {row.category}
                </div>
                <div className="flex-1 px-5 py-4 text-[15px] text-[#37352f] leading-relaxed print:text-[9pt]">
                  {row.skills}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Style */}
        <section className="mb-14 print:mb-8">
          <h2 className="text-[13px] font-bold text-[#9b9a97] uppercase tracking-[0.1em] mb-6 print:text-[9pt]">
            일하는 방식과 가치관
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🧠", text: "엔지니어링은 깊은 사고에서 시작된다고 믿습니다" },
              { icon: "✂️", text: "복잡한 문제일수록 먼저 단순화합니다" },
              { icon: "🎯", text: "충돌을 피하지 않되, 반드시 결과로 수렴시킵니다" },
              { icon: "⭐", text: "기술은 고통이자 즐거움이며, 평가받을 때 비로소 완성된다고 생각합니다" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-[#f7f7f5] rounded-xl text-[15px] print:text-[9pt]">
                <span className="flex-shrink-0 text-lg">{item.icon}</span>
                <span className="text-[#37352f] leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 bg-[#37352f] rounded-2xl text-center print:hidden">
          <p className="text-[19px] font-bold text-white mb-6">
            함께 문제를 풀어갈 준비가 되어 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:haspark912@kakao.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#37352f] text-[15px] font-bold rounded-xl hover:bg-[#f7f7f5] transition-colors"
            >
              ✉️ 이메일 보내기
            </a>
            <a
              href="tel:010-3980-4154"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white text-[15px] font-bold rounded-xl hover:bg-white hover:text-[#37352f] transition-colors"
            >
              📞 전화하기
            </a>
          </div>
        </section>

        {/* Language Toggle */}
        <div className="mt-10 text-center print:hidden">
          <Link
            href="/resume/en"
            className="text-[15px] text-[#2eaadc] font-medium hover:underline"
          >
            🌐 View English Resume (Hacker Style)
          </Link>
        </div>

        {/* Print hint */}
        <div className="mt-4 text-center text-[14px] text-[#9b9a97] print:hidden">
          <p>이 페이지는 인쇄용으로 최적화되어 있습니다. (Ctrl/Cmd + P)</p>
        </div>

      </div>
    </div>
  );
}
