"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="resume-page bg-[#ffffff] min-h-screen print:pt-0 print:pb-0">
      <div className="resume-container max-w-[900px] mx-auto px-6 md:px-10 print:px-0 print:max-w-none">

        {/* ========== HEADER ========== */}
        <header className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <div className="flex items-start gap-5 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f7f7f5] rounded-xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 border-2 border-black/5 print:w-12 print:h-12">
              <span>👨‍💻</span>
            </div>
            <div className="flex-1 pt-0.5">
              <h1 className="text-xl md:text-2xl font-black text-[#171a20] tracking-tight leading-tight print:text-[18pt]">
                박하성
              </h1>
              <p className="text-xs md:text-sm text-[#5c5e62] mt-1.5 font-bold print:text-[9pt]">
                Full-Stack Engineer · 3년 엔지니어링 + 2년 창업 운영
              </p>
            </div>
          </div>

          {/* Contact Pills */}
          <div className="flex flex-wrap gap-2 text-xs print:text-[7pt]">
            <span className="px-2.5 py-1 bg-[#f7f7f5] text-[#171a20] rounded-md font-bold border border-black/5">📍 서울 / 원격 가능</span>
            <a href="tel:010-3980-4154" className="px-2.5 py-1 bg-[#f7f7f5] text-[#171a20] rounded-md font-bold border border-black/5 hover:bg-blue-100 hover:border-blue-400 transition-all">📞 010-3980-4154</a>
            <a href="mailto:haspark912@kakao.com" className="px-2.5 py-1 bg-[#f7f7f5] text-[#171a20] rounded-md font-bold border border-black/5 hover:bg-blue-100 hover:border-blue-400 transition-all">✉️ haspark912@kakao.com</a>
            <span className="px-2.5 py-1 bg-[#f7f7f5] text-[#171a20] rounded-md font-bold border border-black/5">🔗 x-ordo.github.io</span>
          </div>
        </header>

        {/* ========== CALLOUT ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4">
          <div className="flex gap-3 p-4 md:p-5 bg-blue-50 rounded-lg border border-blue-200">
            <span className="text-xl flex-shrink-0">💡</span>
            <div>
              <p className="text-sm md:text-base font-black text-[#171a20] leading-[1.6] print:text-[9pt]">
                엔지니어링 자체를 애정하며, 문제를 구조적으로 해체하고 깊이 사고하는 실행형 엔지니어
              </p>
              <p className="text-xs md:text-sm text-[#5c5e62] mt-2 font-medium print:text-[8pt]">
                기술을 목적이 아닌 <em className="font-black not-italic text-blue-600">사고의 도구</em>로 사용합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ========== SUMMARY ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            Summary
          </h2>
          <div className="text-xs md:text-sm text-[#3e3e3e] leading-[1.8] space-y-4 break-keep print:text-[8pt] print:leading-[1.7]" style={{ textWrap: 'pretty' }}>
            <p>
              대용량 데이터 처리, 모바일 애플리케이션, LLM 기반 자동화 시스템을 중심으로 실무 경험을 쌓아온 <span className="bg-[#fbecdd] px-1 py-0.5 rounded font-black mx-0.5 border border-orange-200 whitespace-nowrap">3년 엔지니어링 + 2년 창업 운영 경험의 소프트웨어 엔지니어</span>입니다.
            </p>
            <p>
              개발을 단순한 구현 행위로 보지 않습니다. 문제를 정의하고, 그 문제를 구성하는 전제와 구조를 하나씩 분해한 뒤, <span className="bg-[#ddedea] px-1 py-0.5 rounded font-black mx-0.5 border border-green-200 whitespace-nowrap">지금 이 문제에 정말 필요한 기술은 무엇인지</span>를 고민하는 과정 자체를 엔지니어링의 핵심으로 생각합니다.
            </p>
            <p>
              초기에는 기술적 완성도를 높이는 데 집중했지만, 실제 서비스와 사업을 직접 운영하며 <span className="bg-[#e8deee] px-1 py-0.5 rounded font-black mx-0.5 border border-purple-200 whitespace-nowrap">완벽한 기술보다 중요한 것은 타이밍, 유통, 그리고 고객 확보</span>라는 사실을 체감했습니다.
            </p>
            <p>
              최근에는 AI 생산성 도구(Claude, Gemini, ChatGPT)를 적극 활용해 <span className="bg-[#d3e5ef] px-1 py-0.5 rounded font-black mx-0.5 border border-blue-200 whitespace-nowrap">아이디어 → 구현 → 테스트 → 검증 → 폐기 또는 고도화</span>의 사이클을 빠르게 반복하고 있습니다. 총 <span className="font-black text-blue-600">36개 이상의 프로젝트</span>를 수행했습니다.
            </p>
          </div>
        </section>

        {/* ========== KEY METRICS ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            Key Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { value: "36+", label: "프로젝트", sub: "설계→구현→운영" },
              { value: "2건", label: "국가사업 수행", sub: "ETRI, 디지털사이니지" },
              { value: "80%+", label: "테스트 커버리지", sub: "HwpBridge, ArbQuant" },
              { value: "40+", label: "PR Merged", sub: "Conventional Commits" },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-[#f7f7f5] rounded-lg border border-black/5 text-center hover:border-blue-400 transition-all cursor-default">
                <span className="text-lg md:text-xl font-black text-blue-600 block print:text-[11pt]">{item.value}</span>
                <span className="text-xs font-black text-[#171a20] block mt-0.5 print:text-[7pt]">{item.label}</span>
                <span className="text-[10px] text-[#9b9a97] block print:text-[6pt]">{item.sub}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { value: "70%", label: "증거정리 단축", project: "CHAGOK" },
              { value: "90%", label: "오탐률 감소", project: "Sentinel" },
              { value: "<10초", label: "주문처리", project: "NumnaRoad" },
              { value: "<2.5초", label: "E2E 응답", project: "면접코치" },
              { value: "1,200+", label: "DAU", project: "Soul Lab" },
              { value: "$0", label: "인프라 비용", project: "NumnaRoad" },
            ].map((item, idx) => (
              <div key={idx} className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-center cursor-default">
                <span className="text-sm font-black text-white block print:text-[8pt]">{item.value}</span>
                <span className="text-[10px] text-blue-100 block print:text-[6pt]">{item.label}</span>
                <span className="text-[9px] text-blue-200 block print:text-[5pt]">{item.project}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========== WHY I APPLY ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4">
          <div className="flex gap-3 p-4 md:p-5 bg-[#fbecdd] rounded-lg border border-orange-300/50">
            <span className="text-xl flex-shrink-0">✨</span>
            <div>
              <h3 className="ds-badge !text-[#d97706] !border-[#d97706]">
                지원 동기
              </h3>
              <p className="ds-mt-element text-xs md:text-sm text-[#3e3e3e] leading-[1.8] font-medium break-keep print:text-[8pt]" style={{ textWrap: 'pretty' }}>
                2년간 창업을 경험하며 빠른 실행력을 키웠지만, 동시에
                <span className="font-black text-[#171a20]"> 함께 고민하고 성장할 팀원의 소중함</span>을 깨달았습니다.
              </p>
              <p className="text-xs md:text-sm text-[#3e3e3e] leading-[1.8] mt-3 font-medium break-keep print:text-[8pt]" style={{ textWrap: 'pretty' }}>
                단순히 주어진 일을 처리하는 역할이 아니라,
                <span className="font-black text-[#171a20]"> 제품의 방향성을 함께 정의하고 구조적으로 문제를 해결</span>할 수 있는 팀에서 기여하고 싶습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ========== DIVIDER ========== */}
        <hr className="border-t-2 border-black/10 ds-mt-section print:mt-6" />

        {/* ========== EXPERIENCE ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            Experience
          </h2>

          <div className="flex flex-col gap-12">
            {/* 제타럭스시스템 */}
            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#f7f7f5] rounded-lg flex items-center justify-center text-lg flex-shrink-0 border border-black/5">🏢</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-sm md:text-base font-black text-[#171a20] print:text-[9pt]">㈜제타럭스시스템</h3>
                    <span className="text-xs text-[#5c5e62] font-bold print:text-[7pt]">2021.11 – 2023.05</span>
                  </div>
                  <p className="text-xs text-[#5c5e62] mt-0.5 font-medium print:text-[7pt]">소프트웨어 개발자 (주임) · 7인 개발팀</p>
                </div>
              </div>

              <div className="ml-0 md:ml-12 ds-mt-component space-y-3">
                {/* 협업 환경 */}
                <div className="flex flex-wrap gap-1.5 text-[10px] print:text-[6pt]">
                  <span className="px-2 py-0.5 bg-[#e8deee] text-purple-700 rounded font-bold">Git Flow</span>
                  <span className="px-2 py-0.5 bg-[#d3e5ef] text-blue-700 rounded font-bold">코드 리뷰</span>
                  <span className="px-2 py-0.5 bg-[#ddedea] text-green-700 rounded font-bold">주간 기술 공유</span>
                  <span className="px-2 py-0.5 bg-[#fbecdd] text-orange-700 rounded font-bold">Jira 스프린트</span>
                </div>

                {[
                  { title: "Hadoop 기반 대용량 데이터 처리 파이프라인", desc: "시니어 개발자와 페어 프로그래밍으로 병목 분석 → 처리량 3배 개선", badge: null, metric: "처리량 3x" },
                  { title: "YOLO 기반 산불 영상 인식 시스템 (ETRI 연구용역)", desc: "ETRI 연구원과 주간 미팅, Android 실시간 영상 처리 30fps 달성", badge: null, metric: "30fps" },
                  { title: "모바일 GIS 솔루션 MapJoy GS 인증 대응", desc: "QA팀과 협업, 47개 GS인증 필수항목 통과", badge: null, metric: "GS인증" },
                  { title: "디지털 사이니지 시스템 (Kafka, Go, Kotlin)", desc: "백엔드 2인 협업, 1,000+ 디바이스 동시 스트리밍", badge: "국가사업", metric: "1,000+ 디바이스" },
                  { title: "지적측량 데이터 통합 시스템", desc: "PM과 아키텍처 설계, 100만+ 필지 데이터 실시간 동기화", badge: "국가사업", metric: "100만+ 필지" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-xs print:text-[7pt]">
                    <span className="text-blue-500 flex-shrink-0 font-black">•</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[#171a20] font-bold">{item.title}</span>
                        {item.badge && (
                          <span className="text-[10px] font-black text-blue-700 border-b border-blue-700 print:text-[6pt]">
                            🏛️ {item.badge}
                          </span>
                        )}
                        {item.metric && (
                          <span className="text-[10px] font-black text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded print:text-[6pt]">
                            📊 {item.metric}
                          </span>
                        )}
                      </div>
                      <p className="text-[#5c5e62] text-[11px] md:text-xs mt-0.5 leading-[1.6] font-medium print:text-[6pt]">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-2 p-3 bg-[#f7f7f5] rounded-lg mt-5 mb-4 text-xs border-l-3 border-blue-500 print:text-[6pt]">
                  <span className="flex-shrink-0">💭</span>
                  <p className="text-[#3e3e3e] italic leading-[1.6] font-medium">
                    이 시기에 <span className="font-black not-italic text-[#171a20]">기술적 정답과 현실적 해답은 다를 수 있다</span>는 것을 깊이 체감했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 애즈금융서비스 */}
            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#f7f7f5] rounded-lg flex items-center justify-center text-lg flex-shrink-0 border border-black/5">🏦</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-sm md:text-base font-black text-[#171a20] print:text-[9pt]">애즈금융서비스 (GA)</h3>
                    <span className="text-xs text-[#5c5e62] font-bold print:text-[7pt]">2023.05 – 2023.11 (6개월)</span>
                  </div>
                  <p className="text-xs text-[#5c5e62] mt-0.5 font-medium print:text-[7pt]">현장 UX 리서치 · 고객 의사결정 구조 분석</p>
                </div>
              </div>

              <div className="ml-0 md:ml-12 ds-mt-component space-y-2.5">
                {[
                  "보험 GA 영업 현장에서 고객 의사결정 흐름과 설득 구조 관찰",
                  "기술적으로 단순해 보이는 문제가 현장에서 해결되지 않는 이유 체감",
                  "'사용자가 왜 이 기능을 쓰지 않는가'를 먼저 고민하게 된 계기",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-xs text-[#3e3e3e] leading-[1.6] font-medium print:text-[7pt]">
                    <span className="text-blue-500 flex-shrink-0 font-black">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 라비인터내셔널 */}
            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#f7f7f5] rounded-lg flex items-center justify-center text-lg flex-shrink-0 border border-black/5">🚀</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-sm md:text-base font-black text-[#171a20] print:text-[9pt]">라비인터내셔널</h3>
                    <span className="text-xs text-[#5c5e62] font-bold print:text-[7pt]">2023.11 – 2026.01</span>
                    <span className="text-[10px] font-black text-gray-500 border-b border-gray-400 print:text-[6pt]">
                      사업 정리 완료
                    </span>
                  </div>
                  <p className="text-xs text-[#5c5e62] mt-0.5 font-medium print:text-[7pt]">대표 / 개인사업자 → 정규직 전환 희망</p>
                </div>
              </div>

              <div className="ml-0 md:ml-12 ds-mt-component space-y-2.5">
                {[
                  "온라인 마케팅 자동화 프로그램 직접 개발 및 운영",
                  "수산물 판매, 해외 구매대행 자동화 등 다양한 실험 진행",
                  "모든 과정(기획, 개발, 영업, 운영, 철수)을 직접 경험",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-xs text-[#3e3e3e] leading-[1.6] font-medium print:text-[7pt]">
                    <span className="text-blue-500 flex-shrink-0 font-black">•</span>
                    <span>{item}</span>
                  </div>
                ))}

                <div className="flex gap-2 p-3 bg-[#f7f7f5] rounded-lg mt-5 text-xs border-l-3 border-[#f59e0b] print:text-[6pt]">
                  <span className="flex-shrink-0">💭</span>
                  <p className="text-[#3e3e3e] italic leading-[1.6] font-medium">
                    여러 실패 경험을 통해 <span className="font-black not-italic text-[#171a20]">실행하지 않으면 아무것도 알 수 없고, 눈으로 본 것조차 절반만 믿어야 한다</span>는 판단 기준을 갖게 되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== DIVIDER ========== */}
        <hr className="border-t-2 border-black/10 ds-mt-section print:mt-6" />

        {/* ========== ENGINEERING LEADERSHIP ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            Engineering Leadership
          </h2>
          <div className="grid gap-3">
            {[
              {
                icon: "🤝",
                title: "Collaboration & Communication",
                detail: "코드 리뷰 문화, 주간 기술 공유, 명확한 PR 템플릿을 통해 팀 내 지식 전파와 코드 품질을 동시에 추구합니다."
              },
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
              <div key={idx} className="group flex gap-3 p-3 md:p-4 bg-[#f7f7f5] rounded-lg border border-transparent hover:border-blue-400 transition-all print:p-2 cursor-default">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-[#171a20] text-xs md:text-sm group-hover:text-blue-600 transition-colors print:text-[8pt]">{item.title}</h3>
                  <p className="text-[11px] md:text-xs text-[#5c5e62] mt-1 leading-[1.6] font-medium print:text-[7pt]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== ENGINEERING CULTURE EVIDENCE ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            Engineering Culture Evidence
          </h2>
          <div className="border border-black/10 rounded-lg overflow-hidden">
            {[
              { metric: "PRs Merged (ArbQuant)", value: "40+", context: "Conventional Commit 표준" },
              { metric: "Test Coverage (HwpBridge)", value: "80%+", context: "Rust Workspace + Integration Tests" },
              { metric: "Issue Triage", value: "P0/P1/P2", context: "우선순위 기반 이슈 관리" },
              { metric: "Security Posture", value: "Active", context: "CVE 패칭, Dependabot 자동화" },
              { metric: "Documentation", value: "RUNBOOK + DR", context: "프로덕션 런북, 재해 복구 문서" },
            ].map((row, idx, arr) => (
              <div key={idx} className={`flex ${idx !== arr.length - 1 ? 'border-b border-black/10' : ''}`}>
                <div className="w-36 sm:w-44 flex-shrink-0 px-3 py-2 bg-[#f7f7f5] text-[11px] md:text-xs font-black text-[#171a20] print:text-[7pt] print:w-28">
                  {row.metric}
                </div>
                <div className="flex-1 px-3 py-2 text-[11px] md:text-xs print:text-[7pt]">
                  <span className="font-black text-blue-600">{row.value}</span>
                  <span className="text-[#5c5e62] ml-2 font-medium">{row.context}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== DIVIDER ========== */}
        <hr className="border-t-2 border-black/10 ds-mt-section print:mt-6" />

        {/* ========== PROJECTS ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            Key Projects & Technical Decisions
          </h2>

          <div className="grid gap-3">
            {[
              { icon: "🏥", name: "CareGuide CKD - AI 건강관리 플랫폼", problem: "복잡한 의료 도메인에서 팀 협업으로 정확도 확보", solution: "4인 팀 리드 · 도메인별 에이전트 설계 · 하이브리드 검색으로 13,000+ 의료 데이터 RAG 구축", team: "팀 리드 (4인)", metric: "13,000+ 데이터" },
              { icon: "💹", name: "ArbQuant - 암호화폐 차익거래 시스템", problem: "개인 트레이딩에서 기관급 리스크 관리 구현 가능한가?", solution: "Kelly Criterion + Almgren-Chriss + Walk-Forward 백테스트 · 40+ PRs Merged", team: null, metric: "일평균 0.3% α" },
              { icon: "🛡️", name: "Reporty - 직장 괴롭힘 리스크 관리", problem: "양측 모두 기록 조작 동기가 있을 때 증거 무결성 보장", solution: "AES-256-GCM + Merkle Tree + SHA-256 해시 체인 · 10,000+ 판례 RAG", team: null, metric: "Zero-Trust" },
              { icon: "🦀", name: "HwpBridge - Rust HWP 파서", problem: "한국 정부/기업 문서가 AI 도구에서 접근 불가", solution: "MCP 서버 + Semantic Versioning + Dependabot 자동화", team: null, metric: "80%+ 커버리지" },
              { icon: "⛳", name: "Ansim Golf - 골프장 자동화", problem: "시니어 운영자가 복잡한 UI를 탐색할 수 없음", solution: "시니어 친화적 UI + Edge 아키텍처 (50ms 이하 응답)", team: null, metric: "정산 80% ↓" },
              { icon: "⚖️", name: "CHAGOK - AI 법률 보조 서비스", problem: "법률 영역에서 '자동화'가 어디까지 허용되는가", solution: "Human-in-the-loop + 이중 RAG · 67개 테스트 케이스", team: null, metric: "증거정리 70% ↓" },
              { icon: "🎙️", name: "면접코치 - AI 실시간 모의면접", problem: "음성 입력→LLM→음성 출력 지연으로 몰입감 저하", solution: "SSE 스트리밍 파이프라인 · 하이브리드 검색 + Cohere 리랭킹", team: null, metric: "E2E <2.5초" },
            ].map((project, idx) => (
              <div key={idx} className="group p-3 md:p-4 bg-[#f7f7f5] rounded-lg border border-transparent hover:border-blue-400 transition-all print:p-2 cursor-default">
                <div className="flex items-start gap-2.5">
                  <span className="text-lg flex-shrink-0">{project.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <h4 className="text-xs md:text-sm font-black text-[#171a20] group-hover:text-blue-600 transition-colors print:text-[8pt]">{project.name}</h4>
                      {project.team && (
                        <span className="text-[10px] font-black text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded print:text-[6pt]">
                          👥 {project.team}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5 mt-2 text-[11px] md:text-xs print:text-[7pt]">
                      <div className="flex gap-2">
                        <span className="text-[#9b9a97] flex-shrink-0 w-8 font-black">고민</span>
                        <span className="text-[#3e3e3e] leading-[1.5] font-medium">{project.problem}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-blue-600 flex-shrink-0 w-8 font-black">해결</span>
                        <span className="text-[#171a20] font-bold leading-[1.5]">{project.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-black ds-mt-element px-3 py-2 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all print:hidden"
          >
            전체 프로젝트 보기 →
          </Link>
        </section>

        {/* ========== DIVIDER ========== */}
        <hr className="border-t-2 border-black/10 ds-mt-section print:mt-6" />

        {/* ========== SKILLS ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            Technical Competencies
          </h2>

          <div className="border border-black/10 rounded-lg overflow-hidden">
            {[
              { category: "System Architecture", skills: "Event-driven (NATS JetStream), CQRS, Merkle Trees, Multi-cloud failover" },
              { category: "Backend / Infra", skills: "Go, Rust, Python/FastAPI, Node.js, AWS, Cloudflare Workers, Fly.io" },
              { category: "Frontend / Mobile", skills: "Next.js, React, TypeScript, Flutter, Kotlin, Android" },
              { category: "Data & Analytics", skills: "TimescaleDB, PostgreSQL, Qdrant, Redis, Walk-Forward Backtest" },
              { category: "AI / LLM", skills: "LangChain, RAG, MCP Server, Multi-Agent, PII Detection" },
              { category: "DevOps & Security", skills: "CI/CD, Dependabot, CVE 모니터링, Semantic Versioning, 80%+ Coverage" },
              { category: "Risk Management", skills: "Kelly Criterion, Almgren-Chriss, Z-Score Signals, Correlation Risk" },
            ].map((row, idx, arr) => (
              <div key={idx} className={`flex ${idx !== arr.length - 1 ? 'border-b border-black/10' : ''}`}>
                <div className="w-32 sm:w-40 flex-shrink-0 px-3 py-2 bg-[#f7f7f5] text-[11px] md:text-xs font-black text-[#171a20] print:text-[7pt] print:w-24">
                  {row.category}
                </div>
                <div className="flex-1 px-3 py-2 text-[11px] md:text-xs text-[#3e3e3e] leading-[1.6] font-medium print:text-[7pt]">
                  {row.skills}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== WORK STYLE ========== */}
        <section className="ds-section-padded print:pt-4 print:pb-4 flex flex-col gap-4">
          <h2 className="ds-badge">
            일하는 방식과 가치관
          </h2>

          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { icon: "🧠", text: "엔지니어링은 깊은 사고에서 시작된다고 믿습니다" },
              { icon: "✂️", text: "복잡한 문제일수록 먼저 단순화합니다" },
              { icon: "🎯", text: "충돌을 피하지 않되, 반드시 결과로 수렴시킵니다" },
              { icon: "⭐", text: "기술은 고통이자 즐거움이며, 평가받을 때 비로소 완성된다고 생각합니다" },
            ].map((item, idx) => (
              <div key={idx} className="group flex gap-2 p-3 bg-[#f7f7f5] rounded-lg text-[11px] md:text-xs border border-transparent hover:border-blue-400 transition-all print:text-[7pt] cursor-default">
                <span className="flex-shrink-0 text-base">{item.icon}</span>
                <span className="text-[#3e3e3e] leading-[1.6] font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="ds-section-padded print:hidden">
          <div className="p-5 md:p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center border-2 border-blue-700 shadow-[3px_3px_0_#1e40af]">
            <p className="text-sm md:text-base font-black text-white mb-4">
              함께 문제를 풀어갈 준비가 되어 있습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="mailto:haspark912@kakao.com"
                className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-[2px_2px_0_#1e40af]"
              >
                ✉️ 이메일 보내기
              </a>
              <a
                href="tel:010-3980-4154"
                className="px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
              >
                📞 전화하기
              </a>
            </div>
          </div>
        </section>

        {/* ========== LANGUAGE TOGGLE ========== */}
        <div className="ds-mt-component text-center print:hidden">
          <Link
            href="/resume/en"
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-black px-3 py-2 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
          >
            🌐 View English Resume (Hacker Style)
          </Link>
        </div>

        {/* ========== PRINT HINT ========== */}
        <div className="ds-mt-element text-center text-[10px] text-[#9b9a97] font-medium print:hidden">
          <p>이 페이지는 인쇄용으로 최적화되어 있습니다. (Ctrl/Cmd + P)</p>
        </div>

      </div>
    </div>
  );
}
