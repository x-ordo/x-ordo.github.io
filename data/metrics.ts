export interface Metric {
  value: number;
  suffix?: string;
  labelKey: "projects" | "engineering" | "startup" | "ventures";
}

export const metrics: Metric[] = [
  { value: 36, suffix: "+", labelKey: "projects" },      // 완료 프로젝트
  { value: 3, suffix: "년", labelKey: "engineering" },   // 엔지니어링 경력
  { value: 2, suffix: "년", labelKey: "startup" },       // 창업 운영
  { value: 4, suffix: "개", labelKey: "ventures" },      // 운영 사업체
];
