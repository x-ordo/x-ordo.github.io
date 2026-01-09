export type Locale = "en" | "ko";

export interface BilingualText {
  en: string;
  ko: string;
}

export interface HeroTranslations {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  gameLabel: string;
  gameHint: string;
  statusLabel: string;
  statusValue: string;
}

export interface ManifestoTranslations {
  badge: string;
  title: string;
  subtitle: string;
  sectors: Array<{
    zone: string;
    problem: string;
    solution: string;
  }>;
}

export interface MetricsTranslations {
  products: string;
  years: string;
  ventures: string;
  users: string;
}

export interface TimelineTranslations {
  badge: string;
  title: string;
}

export interface NavTranslations {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

export interface FooterTranslations {
  bio: string;
  navigation: string;
  connect: string;
  copyright: string;
  builtWith: string;
  status: string;
}

export interface ProjectsPageTranslations {
  badge: string;
  title: string;
  subtitle: string;
  viewAll: string;
  sectionTitle: string;
  sectionSubtitle: string;
}

export interface AboutPageTranslations {
  badge: string;
  title: string;
  subtitle: string;
  capabilitiesTitle: string;
  toolsetTitle: string;
  philosophyTitle: string;
  philosophySubtitle: string;
}

export interface Translations {
  hero: HeroTranslations;
  manifesto: ManifestoTranslations;
  metrics: MetricsTranslations;
  timeline: TimelineTranslations;
  nav: NavTranslations;
  footer: FooterTranslations;
  projects: ProjectsPageTranslations;
  about: AboutPageTranslations;
}
