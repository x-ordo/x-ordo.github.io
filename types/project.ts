export type ProjectCategory =
  | "b2b-saas"
  | "b2c-consumer"
  | "ai-agent"
  | "automation"
  | "developer-tools"
  | "analytics"
  | "experimental";

export type ProjectStatus = "운영중" | "종료" | "개발중" | "아카이브";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetrics = {
  duration: string;      // 개발 기간: "2주", "3개월"
  role: string;          // 역할: "단독 개발", "백엔드 리드"
  impact?: string;       // 성과: "처리속도 3배 향상", "MAU 5,000+"
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  intent?: string;        // 프로젝트의 시작 동기 및 방향성
  category: ProjectCategory;
  stack: string[];
  techStackMap?: Record<string, string[]>; // 상세 기술 스택 (e.g. { Frontend: ["React"], Backend: ["Go"] })
  highlights: string[];
  links?: ProjectLink[];
  featured?: boolean;
  metrics?: ProjectMetrics;
  status?: ProjectStatus;  // 프로젝트 상태
};
