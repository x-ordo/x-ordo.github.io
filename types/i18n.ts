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
  valueProposition: string;
  executiveSummary: string;
  ctaPrimary: string;
  ctaPortfolio: string;
  ctaSecondary: string;
  highlightsLabel: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  statusLabel: string;
  statusValue: string;
}

export interface CoreStrength {
  title: string;
  description: string;
}

export interface StrengthsTranslations {
  badge: string;
  title: string;
  items: CoreStrength[];
}

export interface TechStackCategory {
  category: string;
  items: string[];
}

export interface TechStackTranslations {
  badge: string;
  title: string;
  categories: TechStackCategory[];
}

export interface LookingForItem {
  title: string;
  description: string;
}

export interface LookingForTranslations {
  badge: string;
  title: string;
  subtitle: string;
  items: LookingForItem[];
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
  projects: string;
  engineering: string;
  startup: string;
  ventures: string;
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
  resume: string;
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

export interface PhilosophyItem {
  principle: string;
  description: string;
}

export interface FailureLesson {
  title: string;
  story: string;
  lesson: string;
}

export interface KeyMetric {
  label: string;
  value: string;
  detail: string;
}

export interface VibeCodingStep {
  step: string;
  description: string;
}

export interface AboutPageTranslations {
  badge: string;
  title: string;
  subtitle: string;
  titleDescription: string;
  executiveSummary: string;
  keyMetrics: KeyMetric[];
  capabilitiesTitle: string;
  toolsetTitle: string;
  philosophyTitle: string;
  philosophySubtitle: string;
  philosophyItems: PhilosophyItem[];
  vibeCodingTitle: string;
  vibeCodingSubtitle: string;
  vibeCodingDescription: string;
  vibeCodingSteps: VibeCodingStep[];
  failureTitle: string;
  failureSubtitle: string;
  failureLessons: FailureLesson[];
  failureRule: string;
  leadershipTitle: string;
  leadershipSubtitle: string;
  leadershipItems: string[];
  rhythmTitle: string;
  rhythmSubtitle: string;
  rhythmItems: string[];
  finalNote: string;
}

export interface Translations {
  hero: HeroTranslations;
  strengths: StrengthsTranslations;
  techStack: TechStackTranslations;
  lookingFor: LookingForTranslations;
  manifesto: ManifestoTranslations;
  metrics: MetricsTranslations;
  timeline: TimelineTranslations;
  nav: NavTranslations;
  footer: FooterTranslations;
  projects: ProjectsPageTranslations;
  about: AboutPageTranslations;
}
