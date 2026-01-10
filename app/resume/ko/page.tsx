"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="resume-page bg-[#ffffff] min-h-screen pt-24 pb-20 print:pt-0 print:pb-0">
      <div className="resume-container max-w-[1000px] mx-auto px-8 md:px-12 print:px-0 print:max-w-none">

        {/* Header - Senior Friendly */}
        <header className="mb-20 print:mb-10">
          <div className="flex items-start gap-8 md:gap-10 mb-10">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-[#f7f7f5] rounded-2xl flex items-center justify-center text-5xl md:text-6xl flex-shrink-0 border-4 border-black/5 print:w-16 print:h-16">
              <span>👨‍💻</span>
            </div>
            <div className="flex-1 pt-2">
              <h1 className="text-5xl md:text-6xl font-black text-[#171a20] tracking-tight leading-tight print:text-[28pt]">
                박하성
              </h1>
              <p className="text-xl md:text-2xl text-[#5c5e62] mt-3 font-bold print:text-[12pt]">
                Technical Leader · System Architect · Full-stack (5+ years)
              </p>
            </div>
          </div>

          {/* Contact Pills - Senior Friendly */}
          <div className="flex flex-wrap gap-3 md:gap-4 text-base md:text-lg print:text-[9pt]">
            <span className="px-5 py-3 bg-[#f7f7f5] text-[#171a20] rounded-xl font-bold border-2 border-black/5">📍 서울 / 원격 가능</span>
            <a href="tel:010-3980-4154" className="px-5 py-3 bg-[#f7f7f5] text-[#171a20] rounded-xl font-bold border-2 border-black/5 hover:bg-[#00ff00] hover:border-[#00cc00] transition-all">📞 010-3980-4154</a>
            <a href="mailto:haspark912@kakao.com" className="px-5 py-3 bg-[#f7f7f5] text-[#171a20] rounded-xl font-bold border-2 border-black/5 hover:bg-[#00ff00] hover:border-[#00cc00] transition-all">✉️ haspark912@kakao.com</a>
            <span className="px-5 py-3 bg-[#f7f7f5] text-[#171a20] rounded-xl font-bold border-2 border-black/5">🔗 x-ordo.github.io</span>
          </div>
        </header>

        {/* Callout - Main Tagline */}
        <section className="mb-16 print:mb-8">
          <div className="flex gap-6 p-8 md:p-10 bg-[#00ff00]/10 rounded-2xl border-4 border-[#00cc00]/30">
            <span className="text-4xl flex-shrink-0 mt-1">💡</span>
            <div>
              <p className="text-xl md:text-2xl font-black text-[#171a20] leading-[1.6] print:text-[11pt]">
                엔지니어링 자체를 애정하며, 문제를 구조적으로 해체하고 깊이 사고하는 실행형 엔지니어
              </p>
              <p className="text-lg md:text-xl text-[#5c5e62] mt-3 font-medium print:text-[10pt]">
                기술을 목적이 아닌 <em className="font-black not-italic text-[#00cc00]">사고의 도구</em>로 사용합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16 print:mb-8">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg print:text-[9pt]">
            Summary
          </h2>
          <div className="text-lg md:text-xl text-[#3e3e3e] leading-[2] space-y-6 print:text-[10pt] print:leading-[1.8]">
            <p>
              대용량 데이터 처리, 모바일 애플리케이션, LLM 기반 자동화 시스템을 중심으로 실무 경험을 쌓아온
              <span className="bg-[#fbecdd] px-2 py-1 rounded-lg font-black mx-1 border-2 border-orange-200">5년차 소프트웨어 엔지니어</span>입니다.
            </p>
            <p>
              개발을 단순한 구현 행위로 보지 않습니다. 문제를 정의하고, 그 문제를 구성하는 전제와 구조를 하나씩 분해한 뒤,
              <span className="bg-[#ddedea] px-2 py-1 rounded-lg font-black mx-1 border-2 border-green-200">지금 이 문제에 정말 필요한 기술은 무엇인지</span>를 고민하는 과정 자체를 엔지니어링의 핵심으로 생각합니다.
            </p>
            <p>
              초기에는 기술적 완성도를 높이는 데 집중했지만, 실제 서비스와 사업을 직접 운영하며
              <span className="bg-[#e8deee] px-2 py-1 rounded-lg font-black mx-1 border-2 border-purple-200">완벽한 기술보다 중요한 것은 타이밍, 유통, 그리고 고객 확보</span>라는 사실을 체감했습니다.
            </p>
            <p>
              최근에는 AI 생산성 도구(Claude, Gemini, ChatGPT)를 적극 활용해
              <span className="bg-[#d3e5ef] px-2 py-1 rounded-lg font-black mx-1 border-2 border-blue-200">아이디어 → 구현 → 테스트 → 검증 → 폐기 또는 고도화</span>의 사이클을 빠르게 반복하고 있습니다.
              총 <span className="font-black text-[#00cc00]">36개 이상의 프로젝트</span>를 수행했습니다.
            </p>
          </div>
        </section>

        {/* Why I Apply */}
        <section className="mb-16 print:mb-8">
          <div className="flex gap-6 p-8 md:p-10 bg-[#fbecdd] rounded-2xl border-4 border-orange-300/50">
            <span className="text-4xl flex-shrink-0 mt-1">✨</span>
            <div>
              <h3 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#d97706] mb-5 px-4 py-2 bg-orange-100 border-2 border-orange-300 rounded-lg print:text-[9pt]">
                지원 동기
              </h3>
              <p className="text-lg md:text-xl text-[#3e3e3e] leading-[1.9] font-medium print:text-[10pt]">
                단순히 주어진 일을 처리하는 역할이 아니라,<br />
                <span className="font-black text-[#171a20]">문제를 함께 정의하고 구조를 고민할 수 있는 팀</span>에서 일하고 싶습니다.
              </p>
              <p className="text-lg md:text-xl text-[#3e3e3e] leading-[1.9] mt-5 font-medium print:text-[10pt]">
                엔지니어가 사고할 수 있고, 그 사고의 깊이가 존중받는 환경이라면<br />
                <span className="font-black text-[#171a20]">책임 범위를 가리지 않고 기여할 준비가 되어 있습니다.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t-4 border-black/10 my-16 print:my-8" />

        {/* Experience */}
        <section className="mb-16 print:mb-8">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-10 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg print:text-[9pt]">
            Experience
          </h2>

          <div className="space-y-14">
            {/* 제타럭스시스템 */}
            <div className="group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#f7f7f5] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 border-3 border-black/5 group-hover:border-[#00cc00] group-hover:shadow-[4px_4px_0_#00ff00] transition-all">🏢</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-[#171a20] print:text-[11pt]">㈜제타럭스시스템</h3>
                    <span className="text-lg md:text-xl text-[#5c5e62] font-bold print:text-[9pt]">2021.11 – 2023.05</span>
                  </div>
                  <p className="text-lg md:text-xl text-[#5c5e62] mt-2 font-medium print:text-[9pt]">소프트웨어 개발자 (주임)</p>
                </div>
              </div>

              <div className="ml-0 md:ml-[88px] space-y-5">
                {[
                  { title: "Hadoop 기반 대용량 데이터 처리 파이프라인", desc: "분석 흐름에서 병목이 발생하는 지점을 기준으로 구조를 재정의", badge: null },
                  { title: "YOLO 기반 산불 영상 인식 시스템 (ETRI 연구용역)", desc: "Android Native에서 실시간 영상 처리 성능과 안정성의 균형 조정", badge: null },
                  { title: "모바일 GIS 솔루션 MapJoy GS 인증 대응", desc: "전면 수정보다 최소 침습적 개선 선택", badge: null },
                  { title: "디지털 사이니지 시스템 (Kafka, Go, Kotlin)", desc: "'확장성'보다 '운영 가능성'을 우선 고려", badge: "국가사업" },
                  { title: "지적측량 데이터 통합 시스템", desc: "대용량 공간데이터 처리 및 실시간 동기화 아키텍처 설계", badge: "국가사업" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 text-lg md:text-xl print:text-[9pt]">
                    <span className="text-[#00cc00] flex-shrink-0 text-2xl font-black">•</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[#171a20] font-bold">{item.title}</span>
                        {item.badge && (
                          <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-sm font-black rounded-lg border-2 border-blue-200 print:text-[7pt]">
                            🏛️ {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[#5c5e62] text-base md:text-lg mt-2 leading-[1.7] font-medium print:text-[8pt]">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-5 p-6 md:p-8 bg-[#f7f7f5] rounded-2xl mt-8 text-base md:text-lg border-l-[6px] border-[#00cc00] print:text-[8pt]">
                  <span className="flex-shrink-0 text-2xl">💭</span>
                  <p className="text-[#3e3e3e] italic leading-[1.8] font-medium">
                    이 시기에 <span className="font-black not-italic text-[#171a20]">기술적 정답과 현실적 해답은 다를 수 있다</span>는 것을 깊이 체감했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 애즈금융서비스 */}
            <div className="group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#f7f7f5] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 border-3 border-black/5 group-hover:border-[#00cc00] group-hover:shadow-[4px_4px_0_#00ff00] transition-all">🏦</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-[#171a20] print:text-[11pt]">애즈금융서비스 (GA)</h3>
                    <span className="text-lg md:text-xl text-[#5c5e62] font-bold print:text-[9pt]">2023.05 – 2023.11 (6개월)</span>
                  </div>
                  <p className="text-lg md:text-xl text-[#5c5e62] mt-2 font-medium print:text-[9pt]">현장 UX 리서치 · 고객 의사결정 구조 분석</p>
                </div>
              </div>

              <div className="ml-0 md:ml-[88px] space-y-4">
                {[
                  "보험 GA 영업 현장에서 고객 의사결정 흐름과 설득 구조 관찰",
                  "기술적으로 단순해 보이는 문제가 현장에서 해결되지 않는 이유 체감",
                  "'사용자가 왜 이 기능을 쓰지 않는가'를 먼저 고민하게 된 계기",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 text-lg md:text-xl text-[#3e3e3e] leading-[1.8] font-medium print:text-[9pt]">
                    <span className="text-[#00cc00] flex-shrink-0 text-2xl font-black">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 라비인터내셔널 */}
            <div className="group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#f7f7f5] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 border-3 border-black/5 group-hover:border-[#00cc00] group-hover:shadow-[4px_4px_0_#00ff00] transition-all">🚀</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-[#171a20] print:text-[11pt]">라비인터내셔널</h3>
                    <span className="text-lg md:text-xl text-[#5c5e62] font-bold print:text-[9pt]">2023.11 – 2026.01</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-black rounded-lg border-2 border-gray-200 print:text-[7pt]">
                      사업 정리 완료
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-[#5c5e62] mt-2 font-medium print:text-[9pt]">대표 / 개인사업자 → 정규직 전환 희망</p>
                </div>
              </div>

              <div className="ml-0 md:ml-[88px] space-y-4">
                {[
                  "온라인 마케팅 자동화 프로그램 직접 개발 및 운영",
                  "수산물 판매, 해외 구매대행 자동화 등 다양한 실험 진행",
                  "모든 과정(기획, 개발, 영업, 운영, 철수)을 직접 경험",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 text-lg md:text-xl text-[#3e3e3e] leading-[1.8] font-medium print:text-[9pt]">
                    <span className="text-[#00cc00] flex-shrink-0 text-2xl font-black">•</span>
                    <span>{item}</span>
                  </div>
                ))}

                <div className="flex gap-5 p-6 md:p-8 bg-[#f7f7f5] rounded-2xl mt-8 text-base md:text-lg border-l-[6px] border-[#f59e0b] print:text-[8pt]">
                  <span className="flex-shrink-0 text-2xl">💭</span>
                  <p className="text-[#3e3e3e] italic leading-[1.8] font-medium">
                    여러 실패 경험을 통해 <span className="font-black not-italic text-[#171a20]">실행하지 않으면 아무것도 알 수 없고, 눈으로 본 것조차 절반만 믿어야 한다</span>는 판단 기준을 갖게 되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t-4 border-black/10 my-16 print:my-8" />

        {/* Engineering Leadership */}
        <section className="mb-16 print:mb-8">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg print:text-[9pt]">
            Engineering Leadership
          </h2>
          <div className="grid gap-5 md:gap-6">
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
              <div key={idx} className="group flex gap-5 p-7 md:p-8 bg-[#f7f7f5] rounded-2xl border-3 border-transparent hover:border-[#00cc00] hover:shadow-[4px_4px_0_#00ff00] transition-all print:p-4 cursor-default">
                <span className="text-3xl md:text-4xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-[#171a20] text-xl md:text-2xl group-hover:text-[#00cc00] transition-colors print:text-[10pt]">{item.title}</h3>
                  <p className="text-base md:text-lg text-[#5c5e62] mt-3 leading-[1.8] font-medium print:text-[9pt]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Culture Evidence */}
        <section className="mb-16 print:mb-8">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg print:text-[9pt]">
            Engineering Culture Evidence
          </h2>
          <div className="border-4 border-black/10 rounded-2xl overflow-hidden">
            {[
              { metric: "PRs Merged (ArbQuant)", value: "40+", context: "Conventional Commit 표준" },
              { metric: "Test Coverage (HwpBridge)", value: "80%+", context: "Rust Workspace + Integration Tests" },
              { metric: "Issue Triage", value: "P0/P1/P2", context: "우선순위 기반 이슈 관리" },
              { metric: "Security Posture", value: "Active", context: "CVE 패칭, Dependabot 자동화" },
              { metric: "Documentation", value: "RUNBOOK + DR", context: "프로덕션 런북, 재해 복구 문서" },
            ].map((row, idx, arr) => (
              <div key={idx} className={`flex ${idx !== arr.length - 1 ? 'border-b-4 border-black/10' : ''}`}>
                <div className="w-56 sm:w-64 flex-shrink-0 px-6 py-5 bg-[#f7f7f5] text-base md:text-lg font-black text-[#171a20] print:text-[9pt] print:w-40">
                  {row.metric}
                </div>
                <div className="flex-1 px-6 py-5 text-base md:text-lg print:text-[9pt]">
                  <span className="font-black text-[#00cc00]">{row.value}</span>
                  <span className="text-[#5c5e62] ml-4 font-medium">{row.context}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t-4 border-black/10 my-16 print:my-8" />

        {/* Projects */}
        <section className="mb-16 print:mb-8">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-10 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg print:text-[9pt]">
            Key Projects & Technical Decisions
          </h2>

          <div className="grid gap-6">
            {[
              { icon: "💹", name: "ArbQuant - 암호화폐 차익거래 시스템", problem: "개인 트레이딩에서 기관급 리스크 관리 구현 가능한가?", solution: "Kelly Criterion + Almgren-Chriss + Walk-Forward 백테스트로 정량적 리스크 관리" },
              { icon: "🛡️", name: "Reporty (Project Iron Dome) - 직장 괴롭힘 리스크 관리", problem: "양측 모두 기록 조작 동기가 있을 때 증거 무결성 보장", solution: "Merkle Tree + SHA-256 해시 체인으로 암호학적 변조 탐지" },
              { icon: "🦀", name: "HwpBridge - Rust HWP 파서", problem: "한국 정부/기업 문서가 AI 도구에서 접근 불가", solution: "MCP 서버 + 80%+ 테스트 커버리지 + Semantic Versioning으로 프로덕션급 구현" },
              { icon: "⛳", name: "Ansim Golf - 골프장 자동화", problem: "시니어 운영자가 복잡한 UI를 탐색할 수 없음", solution: "시니어 친화적 UI + Edge 아키텍처로 정산 수작업 80% 감소" },
              { icon: "🔮", name: "Soul Lab - 토스 운세 미니앱", problem: "소비자 앱에도 프로덕션급 운영이 필요", solution: "RUNBOOK + DISASTER_RECOVERY 문서화, 1,260개 결정론적 템플릿" },
              { icon: "⚖️", name: "CHAGOK - AI 법률 보조 서비스", problem: "법률 영역에서 '자동화'가 어디까지 허용되는가", solution: "Human-in-the-loop + 이중 RAG로 할루시네이션 최소화" },
              { icon: "📝", name: "콘텐츠 자동 생성 시스템", problem: "생성 품질보다 중요한 것은 일관성과 운영 비용", solution: "역할 분리된 멀티 에이전트 구조로 11개+ 플랫폼 통합" },
            ].map((project, idx) => (
              <div key={idx} className="group p-7 md:p-8 bg-[#f7f7f5] rounded-2xl border-3 border-transparent hover:border-[#00cc00] hover:shadow-[4px_4px_0_#00ff00] transition-all print:p-4 cursor-default">
                <div className="flex items-start gap-5">
                  <span className="text-3xl md:text-4xl flex-shrink-0">{project.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl md:text-2xl font-black text-[#171a20] mb-4 group-hover:text-[#00cc00] transition-colors print:text-[10pt]">{project.name}</h4>
                    <div className="space-y-4 text-base md:text-lg print:text-[9pt]">
                      <div className="flex gap-4">
                        <span className="text-[#9b9a97] flex-shrink-0 w-16 font-black">고민</span>
                        <span className="text-[#3e3e3e] leading-[1.7] font-medium">{project.problem}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-[#00cc00] flex-shrink-0 w-16 font-black">해결</span>
                        <span className="text-[#171a20] font-bold leading-[1.7]">{project.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-lg md:text-xl text-[#00cc00] font-black mt-8 px-6 py-4 bg-[#00ff00]/10 rounded-xl border-2 border-[#00cc00]/30 hover:bg-[#00ff00] hover:text-black hover:border-[#00cc00] transition-all print:hidden"
          >
            전체 프로젝트 보기 →
          </Link>
        </section>

        {/* Divider */}
        <hr className="border-t-4 border-black/10 my-16 print:my-8" />

        {/* Skills - CTO-Oriented Table */}
        <section className="mb-16 print:mb-8">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg print:text-[9pt]">
            Technical Competencies
          </h2>

          <div className="border-4 border-black/10 rounded-2xl overflow-hidden">
            {[
              { category: "System Architecture", skills: "Event-driven (NATS JetStream), CQRS, Merkle Trees, Multi-cloud failover" },
              { category: "Backend / Infra", skills: "Go, Rust, Python/FastAPI, Node.js, AWS, Cloudflare Workers, Fly.io" },
              { category: "Frontend / Mobile", skills: "Next.js, React, TypeScript, Flutter, Kotlin, Android" },
              { category: "Data & Analytics", skills: "TimescaleDB, PostgreSQL, Qdrant, Redis, Walk-Forward Backtest" },
              { category: "AI / LLM", skills: "LangChain, RAG, MCP Server, Multi-Agent, PII Detection" },
              { category: "DevOps & Security", skills: "CI/CD, Dependabot, CVE 모니터링, Semantic Versioning, 80%+ Coverage" },
              { category: "Risk Management", skills: "Kelly Criterion, Almgren-Chriss, Z-Score Signals, Correlation Risk" },
            ].map((row, idx, arr) => (
              <div key={idx} className={`flex ${idx !== arr.length - 1 ? 'border-b-4 border-black/10' : ''}`}>
                <div className="w-52 sm:w-60 flex-shrink-0 px-6 py-5 bg-[#f7f7f5] text-base md:text-lg font-black text-[#171a20] print:text-[9pt] print:w-36">
                  {row.category}
                </div>
                <div className="flex-1 px-6 py-5 text-base md:text-lg text-[#3e3e3e] leading-[1.7] font-medium print:text-[9pt]">
                  {row.skills}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Style */}
        <section className="mb-16 print:mb-8">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg print:text-[9pt]">
            일하는 방식과 가치관
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              { icon: "🧠", text: "엔지니어링은 깊은 사고에서 시작된다고 믿습니다" },
              { icon: "✂️", text: "복잡한 문제일수록 먼저 단순화합니다" },
              { icon: "🎯", text: "충돌을 피하지 않되, 반드시 결과로 수렴시킵니다" },
              { icon: "⭐", text: "기술은 고통이자 즐거움이며, 평가받을 때 비로소 완성된다고 생각합니다" },
            ].map((item, idx) => (
              <div key={idx} className="group flex gap-5 p-6 md:p-7 bg-[#f7f7f5] rounded-2xl text-base md:text-lg border-3 border-transparent hover:border-[#00cc00] hover:shadow-[4px_4px_0_#00ff00] transition-all print:text-[9pt] cursor-default">
                <span className="flex-shrink-0 text-2xl md:text-3xl">{item.icon}</span>
                <span className="text-[#3e3e3e] leading-[1.7] font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-10 md:p-12 bg-[#171a20] rounded-2xl text-center border-4 border-black shadow-[8px_8px_0_#00ff00] print:hidden">
          <p className="text-2xl md:text-3xl font-black text-white mb-8">
            함께 문제를 풀어갈 준비가 되어 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:haspark912@kakao.com"
              className="inline-flex items-center gap-3 px-8 py-5 bg-[#00cc00] text-black text-lg md:text-xl font-black rounded-xl border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all"
            >
              ✉️ 이메일 보내기
            </a>
            <a
              href="tel:010-3980-4154"
              className="inline-flex items-center gap-3 px-8 py-5 border-4 border-white text-white text-lg md:text-xl font-black rounded-xl hover:bg-white hover:text-black shadow-[4px_4px_0_#00ff00] hover:shadow-[6px_6px_0_#00ff00] transition-all"
            >
              📞 전화하기
            </a>
          </div>
        </section>

        {/* Language Toggle */}
        <div className="mt-12 text-center print:hidden">
          <Link
            href="/resume/en"
            className="inline-flex items-center gap-3 text-lg md:text-xl text-[#00cc00] font-black px-6 py-4 bg-[#00ff00]/10 rounded-xl border-2 border-[#00cc00]/30 hover:bg-[#00ff00] hover:text-black hover:border-[#00cc00] transition-all"
          >
            🌐 View English Resume (Hacker Style)
          </Link>
        </div>

        {/* Print hint */}
        <div className="mt-6 text-center text-base md:text-lg text-[#9b9a97] font-medium print:hidden">
          <p>이 페이지는 인쇄용으로 최적화되어 있습니다. (Ctrl/Cmd + P)</p>
        </div>

      </div>
    </div>
  );
}
