export interface ExperienceEntry {
  year: string;
  title: { en: string; ko: string };
  company?: string;
  description: { en: string; ko: string };
  type: "founder" | "project" | "milestone";
}

export const experiences: ExperienceEntry[] = [
  {
    year: "2024",
    title: { en: "NumnaRoad", ko: "NumnaRoad" },
    company: "Founder",
    description: {
      en: "24/7 eSIM auto-provisioning platform with Stripe integration",
      ko: "24/7 eSIM 자동 발급 플랫폼, Stripe 결제 연동",
    },
    type: "founder",
  },
  {
    year: "2024",
    title: { en: "CHAGOK", ko: "CHAGOK" },
    company: "Founder",
    description: {
      en: "AI paralegal for divorce litigation with multimodal evidence analysis",
      ko: "이혼 소송 AI 파라리걸, 멀티모달 증거 분석",
    },
    type: "founder",
  },
  {
    year: "2024",
    title: { en: "Sentinel (Auditx)", ko: "Sentinel (Auditx)" },
    company: "Founder",
    description: {
      en: "AI smart contract security orchestrator",
      ko: "AI 스마트컨트랙트 보안 오케스트레이터",
    },
    type: "founder",
  },
  {
    year: "2023",
    title: { en: "AI Product Development", ko: "AI 제품 개발" },
    description: {
      en: "Started building LLM-powered products and automation systems",
      ko: "LLM 기반 제품 및 자동화 시스템 개발 시작",
    },
    type: "milestone",
  },
  {
    year: "2022",
    title: { en: "Full-Stack Development", ko: "풀스택 개발" },
    description: {
      en: "Enterprise backend systems, API development, infrastructure",
      ko: "엔터프라이즈 백엔드 시스템, API 개발, 인프라 구축",
    },
    type: "project",
  },
  {
    year: "2020",
    title: { en: "Started Coding Journey", ko: "개발 여정 시작" },
    description: {
      en: "First lines of code, web development fundamentals",
      ko: "첫 코드 작성, 웹 개발 기초 학습",
    },
    type: "milestone",
  },
];
