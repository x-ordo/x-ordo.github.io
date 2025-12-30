export type ProjectCategory =
  | "b2b-saas"
  | "b2c-consumer"
  | "ai-agent"
  | "automation"
  | "developer-tools"
  | "analytics"
  | "experimental";

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
  category: ProjectCategory;
  stack: string[];
  highlights: string[];
  links?: ProjectLink[];
  featured?: boolean;
  metrics?: ProjectMetrics;
};
