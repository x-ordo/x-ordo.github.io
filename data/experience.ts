export interface ExperienceEntry {
  year: string;
  title: { en: string; ko: string };
  company?: string;
  description: { en: string; ko: string };
  type: "founder" | "project" | "milestone" | "work";
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
      en: "AI paralegal for divorce litigation with multimodal evidence analysis (~95% complete)",
      ko: "이혼 소송 AI 파라리걸, 멀티모달 증거 분석 (~95% 완료)",
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
    year: "2023-2026",
    title: { en: "Ravi International", ko: "Ravi International" },
    company: "Founder / Operator",
    description: {
      en: "Marketing automation, review platforms, seafood e-commerce, cross-border tools",
      ko: "마케팅 자동화, 리뷰 플랫폼, 수산물 이커머스, 크로스보더 도구",
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
    title: { en: "GA Field Experience", ko: "GA 영업 현장 경험" },
    company: "Ads Financial Service",
    description: {
      en: "Studied distribution mechanics, incentive structures, sales psychology in insurance GA",
      ko: "보험 GA에서 유통 구조, 인센티브 체계, 영업 심리 학습",
    },
    type: "work",
  },
  {
    year: "2021-2023",
    title: { en: "Zetalux Systems", ko: "Zetalux Systems" },
    company: "Software Engineer",
    description: {
      en: "Hadoop data pipelines, YOLO wildfire detection, Android GIS (MapJoy), Kafka streaming",
      ko: "Hadoop 데이터 파이프라인, YOLO 산불 감지, Android GIS (MapJoy), Kafka 스트리밍",
    },
    type: "work",
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
