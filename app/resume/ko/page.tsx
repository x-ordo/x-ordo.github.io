"use client";

import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="resume-page bg-white min-h-screen print:bg-white">
      <div className="resume-container max-w-[800px] mx-auto px-4 py-6 print:px-6 print:py-4 print:max-w-none">

        {/* ========== 이력서 제목 ========== */}
        <header className="text-center mb-6 print:mb-4">
          <h1 className="text-2xl font-bold tracking-[0.5em] text-gray-900 print:text-[20pt]">
            이 력 서
          </h1>
        </header>

        {/* ========== 인적사항 + 증명사진 ========== */}
        <section className="mb-5 print:mb-3">
          <table className="w-full border-collapse border-2 border-gray-800">
            <tbody>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm font-bold text-center w-24 print:text-[9pt] print:py-1">
                  성 명
                </td>
                <td className="border border-gray-400 px-3 py-1.5 text-sm print:text-[9pt] print:py-1" colSpan={2}>
                  박하성
                </td>
                <td className="border border-gray-400 px-2 py-2 text-center align-middle w-[150px] print:w-[130px]" rowSpan={5}>
                  <div className="w-[130px] h-[170px] mx-auto border border-gray-300 overflow-hidden print:w-[115px] print:h-[150px]">
                    <Image
                      src="/images/profile-photo.jpg"
                      alt="증명사진"
                      width={130}
                      height={170}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm font-bold text-center print:text-[9pt] print:py-1">
                  생년월일
                </td>
                <td className="border border-gray-400 px-3 py-1.5 text-sm print:text-[9pt] print:py-1" colSpan={2}>
                  1999년 01월 20일
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm font-bold text-center print:text-[9pt] print:py-1">
                  연락처
                </td>
                <td className="border border-gray-400 px-3 py-1.5 text-sm print:text-[9pt] print:py-1" colSpan={2}>
                  010-3980-4154
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm font-bold text-center print:text-[9pt] print:py-1">
                  이메일
                </td>
                <td className="border border-gray-400 px-3 py-1.5 text-sm print:text-[9pt] print:py-1" colSpan={2}>
                  parkdavid31@gmail.com
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm font-bold text-center print:text-[9pt] print:py-1">
                  주 소
                </td>
                <td className="border border-gray-400 px-3 py-1.5 text-sm print:text-[9pt] print:py-1" colSpan={2}>
                  서울특별시 중랑구 동일로 146길 40
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 학력사항 ========== */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-base font-bold text-gray-900 mb-1.5 border-b-2 border-gray-800 pb-1 print:text-[11pt]">
            학력사항
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-36 print:text-[8pt]">기간</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center print:text-[8pt]">학교명</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-24 print:text-[8pt]">전공</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-16 print:text-[8pt]">졸업</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2006.03 ~ 2012.02</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">상명초등학교</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">-</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">졸업</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2012.03 ~ 2015.02</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">월계중학교</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">-</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">졸업</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2015.03 ~ 2018.02</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">배재고등학교</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">-</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">졸업</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2024.03 ~ 현재</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">한국방송통신대학교</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">AI학과</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">휴학</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 병역사항 ========== */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-base font-bold text-gray-900 mb-1.5 border-b-2 border-gray-800 pb-1 print:text-[11pt]">
            병역사항
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-36 print:text-[8pt]">복무기간</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center print:text-[8pt]">군별</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-16 print:text-[8pt]">계급</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-20 print:text-[8pt]">제대구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2019.06 ~ 2021.01</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">육군</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">병장</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">만기전역</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 경력사항 ========== */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-base font-bold text-gray-900 mb-1.5 border-b-2 border-gray-800 pb-1 print:text-[11pt]">
            경력사항
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-36 print:text-[8pt]">근무기간</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center print:text-[8pt]">회사명</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-24 print:text-[8pt]">부서/직급</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-28 print:text-[8pt]">담당업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2021.11 ~ 2023.05</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">㈜제타럭스시스템</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">개발팀/주임</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">소프트웨어 개발</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2023.05 ~ 2023.11</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">애즈금융서비스</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">-</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">현장 UX 리서치</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2023.11 ~ 2026.01</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">라비인터내셔널</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">대표</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">사업 운영</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 기술 및 역량 ========== */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-base font-bold text-gray-900 mb-1.5 border-b-2 border-gray-800 pb-1 print:text-[11pt]">
            기술 및 역량
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <tbody>
              {[
                { category: "백엔드", skills: "Go, Rust, Python/FastAPI, Node.js, Spring Boot" },
                { category: "프론트엔드", skills: "React, Next.js, TypeScript, Flutter, Android" },
                { category: "데이터", skills: "PostgreSQL, TimescaleDB, Redis, Qdrant, Hadoop, Kafka" },
                { category: "AI/LLM", skills: "LangChain, RAG, MCP Server, Multi-Agent" },
                { category: "DevOps", skills: "AWS, CI/CD, Docker, Git Flow" },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-400 px-2 py-1 text-sm font-bold bg-gray-100 w-24 print:text-[8pt]">{row.category}</td>
                  <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">{row.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ========== 자격증 ========== */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-base font-bold text-gray-900 mb-1.5 border-b-2 border-gray-800 pb-1 print:text-[11pt]">
            자격증
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-32 print:text-[8pt]">취득일</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center print:text-[8pt]">자격증명</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-32 print:text-[8pt]">발급기관</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2020.08</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">자동차정비기능사</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">한국산업인력공단</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2023.04</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">SQLD (SQL 개발자)</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">한국데이터산업진흥원</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 어학 ========== */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-base font-bold text-gray-900 mb-1.5 border-b-2 border-gray-800 pb-1 print:text-[11pt]">
            어학
          </h2>
          <table className="w-full border-collapse border-2 border-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-24 print:text-[8pt]">언어</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-32 print:text-[8pt]">자격/등급</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center w-28 print:text-[8pt]">취득일</th>
                <th className="border border-gray-400 px-2 py-1 text-sm font-bold text-center print:text-[8pt]">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">독일어</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">telc B1</td>
                <td className="border border-gray-400 px-2 py-1 text-sm text-center print:text-[8pt]">2018.09.21</td>
                <td className="border border-gray-400 px-2 py-1 text-sm print:text-[8pt]">일상 회화 가능</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ========== 자기소개서 ========== */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-base font-bold text-gray-900 mb-1.5 border-b-2 border-gray-800 pb-1 print:text-[11pt]">
            자기소개서
          </h2>
          <div className="border-2 border-gray-800 p-5 print:p-4">
            <div className="text-[14px] leading-[2] text-gray-800 break-keep print:text-[10pt] print:leading-[1.8]" style={{ textWrap: 'pretty' }}>

              <p className="mb-4 print:mb-2">
                웹과 백엔드를 중심으로 실무 개발을 수행해 온 소프트웨어 엔지니어입니다.
                3년간의 엔지니어링 실무 경험과 2년간의 창업·운영 경험을 통해, 기술 구현과 실제 문제 해결 사이의 간극을 반복적으로 마주하며 일해왔습니다.
              </p>

              <p className="mb-4 print:mb-2">
                엔지니어링을 단순한 구현 작업으로 보지 않습니다.
                문제를 마주했을 때 곧바로 기술을 적용하기보다, 이 문제가 정말 기술의 문제인지, 구조적으로 병목이 발생하는 지점은 어디인지, 현재 팀과 제품 단계에서 감당 가능한 해법은 무엇인지를 먼저 분해하고 정리하는 과정을 엔지니어링의 핵심으로 생각합니다.
              </p>

              <p className="mb-4 print:mb-2">
                초기 커리어에서는 기술적 완성도와 성능 개선에 집중했습니다.
                Hadoop 기반 대용량 데이터 처리 파이프라인에서 병목 구간을 분석해 처리량을 3배 개선했고, Kafka + Go 기반 실시간 스트리밍 시스템으로 1,000대 이상의 디바이스 동시 연결을 처리했습니다.
                YOLO 기반 산불 영상 인식 시스템(ETRI 연구용역)에서는 Android 환경에서 30fps 실시간 처리를 달성했습니다.
              </p>

              <p className="mb-4 print:mb-2">
                이후 직접 사업을 운영하며, 기술적으로 올바른 선택이 항상 사업적으로 유효한 선택은 아니라는 점을 배웠습니다.
                완성도 높은 시스템이라도 유통, 타이밍, 고객 확보가 뒷받침되지 않으면 무의미해질 수 있다는 사실을 경험했고, 그 이후로는 기술 선택 시 운영 가능성, 비용 구조, 팀의 유지 가능성을 함께 고려하게 되었습니다.
              </p>

              <p className="mb-4 print:mb-2">
                최근에는 LLM 기반 도구와 자동화 기술을 적극적으로 활용하고 있습니다.
                Claude, Gemini, ChatGPT 등의 AI 생산성 도구를 개발 과정에 통합해 아이디어에서 프로토타입, 테스트, 검증, 유지 또는 폐기의 사이클을 짧게 반복하고 있으며, 이를 통해 36개 이상의 프로젝트를 설계·구현·운영 단계까지 직접 경험했습니다.
              </p>

              <p className="mb-4 print:mb-2">
                구체적으로 LangChain 기반 RAG 파이프라인을 구축해 13,000건 이상의 의료 데이터를 처리하는 AI 건강관리 플랫폼을 개발했고, MCP 서버를 직접 구현해 한글 문서(HWP) 파싱 도구를 오픈소스로 공개했습니다.
                법률 도메인에서는 이중 RAG + Human-in-the-loop 구조로 증거 정리 시간을 70% 단축하는 시스템을 설계했습니다.
              </p>

              <p className="mb-4 print:mb-2">
                Git Flow, Conventional Commits, PR 기반 코드 리뷰를 통한 협업에 익숙합니다.
                개인 프로젝트에서도 40+ PRs Merged, 80%+ 테스트 커버리지, Dependabot 자동화를 적용하며 프로덕션 수준의 품질 기준을 유지하고 있습니다.
              </p>

              <p>
                보수적인 판단을 하되 실행은 빠르게, 새로운 시대의 기술을 받아들이되 맹신하지 않는 엔지니어로서, 속도감 있는 팀에서 실제로 도움이 되는 선택을 반복적으로 만들어내는 역할로 기여하고자 합니다.
              </p>

            </div>
          </div>
        </section>

        {/* ========== 작성일 ========== */}
        <section className="text-center mt-6 print:mt-4">
          <p className="text-sm text-gray-600 print:text-[9pt]">
            위의 사항은 사실과 다름없음을 확인합니다.
          </p>
          <p className="text-sm text-gray-600 mt-1 print:text-[9pt]">
            {new Date().getFullYear()}년 {String(new Date().getMonth() + 1).padStart(2, '0')}월 {String(new Date().getDate()).padStart(2, '0')}일
          </p>
          <p className="text-base font-bold text-gray-900 mt-3 print:text-[11pt]">
            작성자: 박 하 성 (인)
          </p>
        </section>

      </div>
    </div>
  );
}
