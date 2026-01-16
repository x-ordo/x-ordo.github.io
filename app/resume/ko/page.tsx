"use client";

import Link from "next/link";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="resume-page bg-white min-h-screen print:pt-0 print:pb-0">
      <div className="resume-container max-w-[800px] mx-auto px-4 py-8 print:px-0 print:py-4 print:max-w-none">

        {/* ========== 이력서 제목 ========== */}
        <header className="text-center mb-8 print:mb-4">
          <h1 className="text-3xl font-bold tracking-[0.5em] text-gray-900 print:text-[24pt]">
            이 력 서
          </h1>
        </header>

        {/* ========== 인적사항 + 증명사진 ========== */}
        <section className="mb-6 print:mb-4">
          <table className="w-full border-collapse border-2 border-gray-800">
            <tbody>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-2 text-sm font-bold text-center w-24 print:text-[9pt] print:w-20">
                  성 명
                </td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]" colSpan={2}>
                  박하성
                </td>
                <td className="border border-gray-400 px-3 py-2 text-center align-middle" rowSpan={5}>
                  {/* 증명사진 영역 */}
                  <div className="w-[90px] h-[120px] mx-auto border border-gray-300 overflow-hidden print:w-[80px] print:h-[105px]">
                    <Image
                      src="/images/profile-photo.jpg"
                      alt="증명사진"
                      width={90}
                      height={120}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">
                  생년월일
                </td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]" colSpan={2}>
                  1999년 01월 20일
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">
                  연락처
                </td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]" colSpan={2}>
                  010-3980-4154
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">
                  이메일
                </td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]" colSpan={2}>
                  parkdavid31@gmail.com
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">
                  주 소
                </td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]" colSpan={2}>
                  서울특별시 중랑구 동일로 146길 40 단독
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 학력사항 ========== */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-1 print:text-[12pt]">
            학력사항
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-40 print:text-[9pt] print:w-32">기간</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">학교명</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-28 print:text-[9pt] print:w-24">전공/계열</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-20 print:text-[9pt] print:w-16">졸업구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2006.03 ~ 2012.02</td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">상명초등학교</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">-</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">졸업</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2012.03 ~ 2015.02</td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">월계중학교</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">-</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">졸업</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2015.03 ~ 2018.02</td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">배재고등학교</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">-</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">졸업</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2024.03 ~ 현재</td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">한국방송통신대학교</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">AI학과</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center font-bold text-blue-700 print:text-[9pt]">휴학중</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 병역사항 ========== */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-1 print:text-[12pt]">
            병역사항
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-40 print:text-[9pt] print:w-32">복무기간</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">군별</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-20 print:text-[9pt] print:w-16">계급</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-24 print:text-[9pt] print:w-20">제대구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2019.06 ~ 2021.01</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">육군</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">병장</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">만기전역</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 경력사항 ========== */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-1 print:text-[12pt]">
            경력사항
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-40 print:text-[9pt] print:w-32">근무기간</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">회사명</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-28 print:text-[9pt] print:w-24">부서/직급</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-32 print:text-[9pt] print:w-28">담당업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2021.11 ~ 2023.05</td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">㈜제타럭스시스템</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">개발팀/주임</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">소프트웨어 개발</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2023.05 ~ 2023.11</td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">애즈금융서비스</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">-</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">현장 UX 리서치</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">2023.11 ~ 2026.01</td>
                <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">라비인터내셔널</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">대표</td>
                <td className="border border-gray-400 px-3 py-2 text-sm text-center print:text-[9pt]">사업 운영</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 기술 및 역량 ========== */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-1 print:text-[12pt]">
            기술 및 역량
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center w-36 print:text-[9pt] print:w-28">분류</th>
                <th className="border border-gray-400 px-3 py-2 text-sm font-bold text-center print:text-[9pt]">상세 내용</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "백엔드/인프라", skills: "Go, Rust, Python/FastAPI, Node.js, Spring Boot, AWS, Cloudflare Workers" },
                { category: "프론트엔드/모바일", skills: "React, Next.js, TypeScript, Flutter, Kotlin, Android" },
                { category: "데이터/분석", skills: "PostgreSQL, TimescaleDB, Redis, Qdrant, Hadoop, Kafka" },
                { category: "AI/LLM", skills: "LangChain, RAG, MCP Server, Multi-Agent, Claude/GPT/Gemini" },
                { category: "DevOps/보안", skills: "CI/CD, Docker, Git Flow, CVE 모니터링, Dependabot" },
                { category: "시스템 설계", skills: "Event-driven, CQRS, Merkle Trees, 대용량 데이터 처리" },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-400 px-3 py-2 text-sm font-medium bg-gray-50 print:text-[9pt]">{row.category}</td>
                  <td className="border border-gray-400 px-3 py-2 text-sm print:text-[9pt]">{row.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ========== 자기소개서 ========== */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-gray-800 pb-1 print:text-[12pt]">
            자기소개서
          </h2>
          <div className="border-2 border-gray-800 p-5 print:p-3">
            <div className="text-sm leading-[1.8] text-gray-800 break-keep print:text-[9pt] print:leading-[1.6]" style={{ textWrap: 'pretty' }}>

              {/* 도입 */}
              <p className="mb-5 print:mb-3">
                웹과 백엔드를 중심으로 실무 개발을 수행해 온 소프트웨어 엔지니어 박하성입니다.
                <strong className="text-gray-900"> 3년간의 엔지니어링 실무 경험과 2년간의 창업·운영 경험</strong>을 통해,
                기술 구현과 실제 문제 해결 사이의 간극을 반복적으로 마주하며 일해왔습니다.
              </p>

              {/* 엔지니어링 철학 */}
              <div className="mb-5 print:mb-3">
                <h3 className="text-xs font-bold text-blue-700 mb-2 print:text-[8pt]">엔지니어링 철학</h3>
                <p>
                  엔지니어링을 단순한 구현 작업으로 보지 않습니다. 문제를 마주했을 때 곧바로 기술을 적용하기보다,
                  <strong className="text-gray-900"> 이 문제가 정말 기술의 문제인지, 구조적으로 병목이 발생하는 지점은 어디인지,
                  현재 팀과 제품 단계에서 감당 가능한 해법은 무엇인지</strong>를 먼저 분해하고 정리하는 과정을 엔지니어링의 핵심으로 생각합니다.
                </p>
              </div>

              {/* 기술 역량 */}
              <div className="mb-5 print:mb-3">
                <h3 className="text-xs font-bold text-blue-700 mb-2 print:text-[8pt]">기술 역량 및 프로젝트 경험</h3>
                <p className="mb-3 print:mb-2">
                  초기 커리어에서는 기술적 완성도와 성능 개선에 집중해 왔습니다.
                  <strong className="text-gray-900">Hadoop 기반 대용량 데이터 처리 파이프라인</strong>에서 병목 구간을 분석해 처리량을 3배 개선했고,
                  <strong className="text-gray-900"> Kafka + Go 기반 실시간 스트리밍 시스템</strong>으로 1,000대 이상의 디바이스 동시 연결을 처리했습니다.
                  <strong className="text-gray-900"> YOLO 기반 산불 영상 인식 시스템</strong>(ETRI 연구용역)에서는 Android 환경에서 30fps 실시간 처리를 달성했습니다.
                </p>
                <p>
                  기술 스택 측면에서는 <strong className="text-gray-900">React/Next.js/TypeScript</strong> 기반 프론트엔드 개발을 꾸준히 수행해 왔으며,
                  백엔드에서는 <strong className="text-gray-900">Python(FastAPI), Go, Rust, Java/Kotlin(Spring Boot)</strong> 등 다양한 언어와 프레임워크를 실무에서 사용했습니다.
                  데이터 레이어에서는 <strong className="text-gray-900">PostgreSQL, TimescaleDB, Redis, Qdrant(벡터DB)</strong>를 활용한 설계 경험이 있습니다.
                </p>
              </div>

              {/* 사업 경험에서 배운 점 */}
              <div className="mb-5 print:mb-3">
                <h3 className="text-xs font-bold text-blue-700 mb-2 print:text-[8pt]">사업 운영 경험</h3>
                <p>
                  직접 사업을 운영하며, <strong className="text-gray-900">기술적으로 "올바른 선택"이 항상 사업적으로 "유효한 선택"은 아니라는 점</strong>을 몸으로 배웠습니다.
                  완성도 높은 시스템이라도 유통, 타이밍, 고객 확보가 뒷받침되지 않으면 무의미해질 수 있다는 사실을 경험했고,
                  그 이후로는 기술 선택 시 <strong className="text-gray-900">운영 가능성, 비용 구조, 팀의 유지 가능성</strong>을 함께 고려하게 되었습니다.
                </p>
              </div>

              {/* AI/LLM 활용 */}
              <div className="mb-5 print:mb-3">
                <h3 className="text-xs font-bold text-blue-700 mb-2 print:text-[8pt]">AI/LLM 기술 활용</h3>
                <p className="mb-3 print:mb-2">
                  최근에는 <strong className="text-gray-900">LLM 기반 도구와 자동화 기술</strong>을 적극적으로 활용하고 있습니다.
                  Claude, Gemini, ChatGPT 등의 AI 생산성 도구를 개발 과정에 통합해
                  <strong className="text-gray-900"> 아이디어 → 프로토타입 → 테스트 → 검증 → 유지 또는 폐기</strong>의 사이클을 짧게 반복하고 있으며,
                  이를 통해 <strong className="text-blue-700">36개 이상의 프로젝트</strong>를 설계·구현·운영 단계까지 직접 경험했습니다.
                </p>
                <p className="mb-3 print:mb-2">
                  구체적으로 <strong className="text-gray-900">LangChain 기반 RAG 파이프라인</strong>을 구축해 13,000건 이상의 의료 데이터를 처리하는 AI 건강관리 플랫폼을 개발했고,
                  <strong className="text-gray-900"> MCP(Model Context Protocol) 서버</strong>를 직접 구현해 한글 문서(HWP) 파싱 도구를 오픈소스로 공개했습니다(테스트 커버리지 80%+).
                  법률 도메인에서는 <strong className="text-gray-900">이중 RAG + Human-in-the-loop</strong> 구조로 증거 정리 시간을 70% 단축하는 시스템을 설계했습니다.
                </p>
                <p>
                  AI 역시 만능 도구로 보지 않습니다. 적용 가능한 영역과 그렇지 않은 영역을 구분하고,
                  <strong className="text-gray-900"> Human-in-the-loop, 제한적 자동화, 보조 도구로서의 활용</strong> 등 현실적인 적용 지점을 찾는 데 집중해 왔습니다.
                  특히 법률·금융·헬스케어와 같이 오류 비용이 큰 도메인에서는 이 기준을 엄격하게 적용해 왔습니다.
                </p>
              </div>

              {/* 협업 및 품질 */}
              <div className="mb-5 print:mb-3">
                <h3 className="text-xs font-bold text-blue-700 mb-2 print:text-[8pt]">협업 방식 및 코드 품질</h3>
                <p>
                  <strong className="text-gray-900">Git Flow, Conventional Commits, PR 기반 코드 리뷰</strong>를 통한 협업에 익숙합니다.
                  개인 프로젝트에서도 <strong className="text-gray-900">40+ PRs Merged, 80%+ 테스트 커버리지, Dependabot 자동화, CVE 모니터링</strong>을 적용하며
                  프로덕션 수준의 품질 기준을 유지하고 있습니다. 혼자 문제를 해결하는 데 익숙하지만, 궁극적으로는
                  <strong className="text-gray-900"> 팀이 더 안정적으로, 더 오래 문제를 풀 수 있도록 구조를 정리하는 역할</strong>을 선호합니다.
                </p>
              </div>

              {/* 마무리 */}
              <div className="pt-3 border-t border-gray-300 print:pt-2">
                <p>
                  <strong className="text-gray-900">보수적인 판단을 하되 실행은 빠르게. 새로운 시대의 기술을 받아들이되 맹신하지 않는 엔지니어</strong>로서,
                  속도감 있는 팀에서 실제로 도움이 되는 선택을 반복적으로 만들어내는 역할로 기여하고자 합니다.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========== 작성일 ========== */}
        <section className="text-center mt-8 print:mt-6">
          <p className="text-sm text-gray-600 print:text-[9pt]">
            위의 사항은 사실과 다름없음을 확인합니다.
          </p>
          <p className="text-sm text-gray-600 mt-2 print:text-[9pt]">
            {new Date().getFullYear()}년 {String(new Date().getMonth() + 1).padStart(2, '0')}월 {String(new Date().getDate()).padStart(2, '0')}일
          </p>
          <p className="text-lg font-bold text-gray-900 mt-4 print:text-[12pt]">
            작성자: 박 하 성 (인)
          </p>
        </section>

        {/* ========== FOOTER (인쇄 시 숨김) ========== */}
        <footer className="mt-10 pt-6 border-t border-gray-300 print:hidden">
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:parkdavid31@gmail.com"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              이메일 보내기
            </a>
            <a
              href="tel:010-3980-4154"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-bold rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors text-center"
            >
              전화하기
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/resume/en"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-bold px-4 py-2 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
            >
              View English Resume (Hacker Style)
            </Link>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            이 페이지는 인쇄용으로 최적화되어 있습니다. (Ctrl/Cmd + P)
          </p>
        </footer>

      </div>
    </div>
  );
}
