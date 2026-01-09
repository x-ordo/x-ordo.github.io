import type { Translations } from "@/types/i18n";

const ko: Translations = {
  hero: {
    badge: "Technical Founder",
    title: "Technical",
    titleAccent: "Founder.",
    subtitle: "실제 문제를 해결하는 제품을 만듭니다. 풀스택 엔지니어에서 창업가로 — AI 제품 개발, 복잡한 워크플로우 자동화, 아이디어를 수익으로 전환합니다.",
    ctaPrimary: "포트폴리오 보기",
    ctaSecondary: "연락하기",
    gameLabel: "반응속도 테스트",
    gameHint: "클릭만",
    statusLabel: "상태",
    statusValue: "빌딩 중",
  },
  manifesto: {
    badge: "핵심 가치",
    title: "문제 영역",
    subtitle: "시장의 비효율은 곧 기회입니다. 복잡성이 높은 영역에 진입하여 실제 가치를 창출하는 솔루션을 구축합니다.",
    sectors: [
      {
        zone: "금융 서비스",
        problem: "숨겨진 수수료와 진입장벽을 만들기 위해 설계된 복잡한 프로세스.",
        solution: "투명한 핀테크",
      },
      {
        zone: "규제 기술",
        problem: "수동 컴플라이언스의 악몽과 두려움 기반의 관료적 오버헤드.",
        solution: "AI 컴플라이언스 자동화",
      },
      {
        zone: "레거시 산업",
        problem: "정적인 워크플로우. 디지털 시대의 종이 기반 시스템.",
        solution: "디지털 트랜스포메이션",
      },
      {
        zone: "플랫폼 경제",
        problem: "높은 수수료와 고객 직접 접근을 막는 잠긴 문.",
        solution: "Direct-to-Consumer",
      },
    ],
  },
  metrics: {
    products: "출시 프로덕트",
    years: "개발 경력",
    ventures: "창업 경험",
    users: "누적 사용자",
  },
  timeline: {
    badge: "여정",
    title: "경험",
  },
  nav: {
    home: "홈",
    about: "소개",
    projects: "프로젝트",
    contact: "연락처",
  },
  footer: {
    bio: "실제 문제를 해결하는 AI 제품을 만드는 Technical Founder입니다.",
    navigation: "네비게이션",
    connect: "연결",
    copyright: "Jed Park",
    builtWith: "Next.js & Tailwind로 제작",
    status: "모든 시스템 정상",
  },
  projects: {
    badge: "주요 작업",
    title: "Economic Machines",
    subtitle: "AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우.",
    viewAll: "전체 보기",
    sectionTitle: "Intelligence Base",
    sectionSubtitle: "AI/ML부터 SaaS, 자동화에서 분석까지 — 실제 비즈니스 임팩트를 위한 제품들.",
  },
  about: {
    badge: "프로필",
    title: "Technical Founder",
    subtitle: "AI/ML 솔루션을 설계하고, 복잡한 비즈니스 문제를 제품으로 구현합니다.",
    capabilitiesTitle: "핵심 역량",
    toolsetTitle: "기술 스택",
    philosophyTitle: "철학",
    philosophySubtitle: "실용적 AI. 사용자 중심 아키텍처. 지속적 실행.",
  },
};

export default ko;
