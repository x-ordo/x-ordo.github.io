export interface Metric {
  value: number;
  suffix?: string;
  labelKey: "products" | "years" | "ventures" | "users";
}

export const metrics: Metric[] = [
  { value: 47, suffix: "+", labelKey: "products" },
  { value: 8, suffix: "+", labelKey: "years" },
  { value: 3, suffix: "", labelKey: "ventures" },
  { value: 100, suffix: "K+", labelKey: "users" },
];
