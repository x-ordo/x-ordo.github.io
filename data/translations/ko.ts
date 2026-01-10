import type { Translations } from "@/types/i18n";

const ko: Translations = {
  hero: {
    badge: "Sovereign Hacker",
    title: "Sovereign",
    titleAccent: "Hacker.",
    subtitle: "소프트웨어 엔지니어 · 비즈니스 지향 빌더",
    valueProposition: "3년 엔지니어링 + 2년 창업 운영. 국가사업 2건, 4개 사업체, 36개+ 프로젝트를 설계-구현-운영한 Full-Stack Engineer",
    executiveSummary: "문제를 정의하고, 구조를 설계하고, 실행까지 책임집니다. 기술을 목적이 아닌 사고의 도구로 사용합니다.",
    ctaPrimary: "이력서 보기",
    ctaPortfolio: "포트폴리오",
    ctaSecondary: "연락하기",
    highlightsLabel: "핵심 경험",
    highlight1: "국가사업 2건 수행 (디지털 사이니지, 지적측량 데이터)",
    highlight2: "2년간 4개 사업체 운영 (기획→개발→운영 전 과정)",
    highlight3: "AI/LLM 기반 자동화 시스템 다수 구축",
    statusLabel: "상태",
    statusValue: "팀 합류 희망",
  },
  strengths: {
    badge: "핵심 역량",
    title: "제가 가져오는 것",
    items: [
      {
        title: "풀스택 엔지니어링",
        description: "전체 스택에 걸친 시스템 수준의 사고",
      },
      {
        title: "빠른 프로토타이핑",
        description: "실제 제약 조건 하에서의 MVP 실행",
      },
      {
        title: "AI 기반 개발",
        description: "Claude, Gemini, GPT를 활용한 고속 개발",
      },
      {
        title: "제품 중심 사고 (PM/PO)",
        description: "기술 구현 전 '왜 만드는가'를 먼저 질문",
      },
      {
        title: "오너십 마인드",
        description: "직무 범위를 넘어 문제를 소유하는 것이 편함",
      },
    ],
  },
  techStack: {
    badge: "문제 중심",
    title: "기술 스택",
    categories: [
      {
        category: "시스템 아키텍처",
        items: ["Event-driven (NATS JetStream)", "CQRS", "Merkle Trees", "Multi-cloud Failover"],
      },
      {
        category: "백엔드 / 인프라",
        items: ["Go", "Rust", "Python/FastAPI", "Node.js", "AWS", "Cloudflare Workers", "Fly.io"],
      },
      {
        category: "프론트엔드 / 모바일",
        items: ["Next.js", "React", "TypeScript", "Flutter", "Kotlin", "Android"],
      },
      {
        category: "데이터 & 분석",
        items: ["TimescaleDB", "PostgreSQL", "Qdrant", "Redis", "Walk-Forward Backtest"],
      },
      {
        category: "AI / LLM",
        items: ["LangChain", "RAG", "MCP Server", "Multi-Agent", "PII Detection"],
      },
      {
        category: "DevOps & 보안",
        items: ["CI/CD", "Dependabot", "CVE 모니터링", "Semantic Versioning", "80%+ Coverage"],
      },
      {
        category: "리스크 관리",
        items: ["Kelly Criterion", "Almgren-Chriss", "Z-Score Signals", "Correlation Risk"],
      },
    ],
  },
  lookingFor: {
    badge: "찾는 환경",
    title: "이상적인 환경",
    subtitle: "2년간 창업을 경험하며 함께 고민하고 성장할 팀원의 소중함을 깨달았습니다",
    items: [
      {
        title: "창업자 주도 팀",
        description: "주도권이 허용되고 보상받는 신뢰 높은 환경",
      },
      {
        title: "함께 성장하는 문화",
        description: "서로 배우고 피드백을 주고받는 팀",
      },
      {
        title: "실행 에너지",
        description: "충성심, 확신, 행동 편향을 가진 팀",
      },
    ],
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
    projects: "완료 프로젝트",
    engineering: "엔지니어링 경력",
    startup: "창업 운영",
    ventures: "운영 사업체",
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
    resume: "이력서",
  },
  footer: {
    bio: "실제 문제를 해결하는 AI 제품을 만드는 Sovereign Hacker입니다.",
    navigation: "네비게이션",
    connect: "연결",
    copyright: "박하성",
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
    title: "Sovereign Hacker",
    subtitle: "Full-Stack Engineer · 3년 엔지니어링 + 2년 창업 운영",
    titleDescription: "시스템을 End-to-End로 이해하고 실행으로 전환하는 엔지니어",
    executiveSummary: "국가사업 2건 수행, 4개 사업체 설립/운영, 39개 프로젝트 출시. 기술 구현부터 사업 운영까지 End-to-End 경험을 보유한 Full-Stack Engineer입니다. 단순히 코드를 작성하는 것이 아니라, 기술적·운영적·시장 측면의 레버리지 포인트를 식별하고 실행합니다.",
    keyMetrics: [
      { label: "엔지니어링", value: "3년", detail: "풀스택 개발" },
      { label: "창업 운영", value: "2년", detail: "4개 사업체" },
      { label: "프로젝트", value: "39개+", detail: "설계→출시→운영" },
      { label: "국가사업", value: "2건", detail: "수행 완료" },
    ],
    capabilitiesTitle: "핵심 역량",
    toolsetTitle: "기술 스택",
    philosophyTitle: "엔지니어링 철학",
    philosophySubtitle: "빌딩에 대한 접근 방식",
    philosophyItems: [
      {
        principle: "스택 충성 없음",
        description: "문제가 도구를 선택한다",
      },
      {
        principle: "속도 > 완벽",
        description: "빠르게 출시, 더 빠르게 반복",
      },
      {
        principle: "시스템은 복리",
        description: "기능은 쇠퇴하고, 시스템은 지속된다",
      },
      {
        principle: "시장이 테스트",
        description: "시장이 최종 테스트 스위트",
      },
    ],
    vibeCodingTitle: "Vibe Coding 루틴",
    vibeCodingSubtitle: "TDD + SDD + AI Agent를 결합한 나만의 개발 방법론",
    vibeCodingDescription: "Claude Code의 Skills와 Agent를 활용하여 TDD(Test-Driven Development)와 SDD(Schema-Driven Development)를 혼합한 개발 루틴을 운영합니다. 커스텀 템플릿을 지속적으로 업데이트하며 개발 속도와 품질을 동시에 확보합니다.",
    vibeCodingSteps: [
      {
        step: "01. Schema First",
        description: "Zod/TypeScript로 데이터 스키마 정의 → 타입 안정성 확보",
      },
      {
        step: "02. Test Skeleton",
        description: "실패하는 테스트 케이스 작성 → 요구사항 명세화",
      },
      {
        step: "03. AI Agent 위임",
        description: "Claude Code Agent에 구현 위임 → 컨텍스트 기반 코드 생성",
      },
      {
        step: "04. Skill 호출",
        description: "커스텀 Skills로 반복 작업 자동화 (lint, test, deploy)",
      },
      {
        step: "05. Template 진화",
        description: "패턴 발견 시 템플릿화 → 다음 프로젝트에 재사용",
      },
    ],
    failureTitle: "실패 & 검증",
    failureSubtitle: "이론적 교훈이 아닌 실제 실패를 경험했습니다",
    failureLessons: [
      {
        title: "반건조 수산물 제조",
        story: "법인 설립, 브랜딩, 패키징, 냉동 창고 완료 — 공장주 사망과 라인 고장으로 생산 중단.",
        lesson: "매몰 비용을 쫓지 않고 조기 철수",
      },
      {
        title: "블록체인 투자",
        story: "가까운 지인의 블록체인 회사에 2천만원 투자.",
        lesson: "사기. 신뢰하되 검증하라.",
      },
      {
        title: "일본 의류 수입",
        story: "몇 달간의 실행, 시장 신호 제로.",
        lesson: "신호가 없으면 철수",
      },
    ],
    failureRule: "실행이 검증할 때까지 아무것도 실제가 아니다. 관찰만으로는 무가치하다.",
    leadershipTitle: "리더십 & 갈등",
    leadershipSubtitle: "팀 역학을 다루는 방식",
    leadershipItems: [
      "사람을 내보낸 적 있음: 자율성, 측정 가능한 타임라인, 런웨이가 제공됐다. 실행이 없었다. 행동은 협상 불가.",
      "내보내진 적 있음: 검증 부족으로 팀 비전에 대한 불확실성을 표현했다. 의도는 중립; 인식은 불충성.",
      "교훈: 의도는 중요하지 않다. 해석이 중요하다. 이제 정밀하게 소통한다.",
      "저에게 '관계 끊기'란 없다. 갈등은 결과를 만든다. 충성심을 매우 중시한다.",
    ],
    rhythmTitle: "운영 리듬",
    rhythmSubtitle: "영감이 아닌 규율로 움직입니다",
    rhythmItems: [
      "이른 아침 모니터링",
      "체력 훈련",
      "코딩 전 서비스 & 데이터 체크",
      "레버리지가 있는 곳에 AI 위임 태스크",
      "뉴스, 경제, 지정학 스캔",
      "마감까지 실행",
      "밤에 회고 또는 개인 프로젝트",
    ],
    finalNote: "초기 스타트업의 0→1, 성장 단계의 기술 리드, 복잡한 시스템 설계가 필요한 곳에서 가치를 만듭니다. 기술과 비즈니스를 연결하는 엔지니어가 필요하시다면 연락주세요.",
  },
};

export default ko;
