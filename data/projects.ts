import type { Project, ProjectCategory } from "../types/project";

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; description: string; color: string }
> = {
  "b2b-saas": {
    label: "B2B SaaS / Enterprise",
    description: "엔터프라이즈 워크플로우를 자동화하는 고신뢰 시스템",
    color: "from-blue-500 to-cyan-500",
  },
  "b2c-consumer": {
    label: "B2C Consumer Apps",
    description: "대규모 사용자를 위한 소비자 제품과 경험 설계",
    color: "from-green-500 to-emerald-500",
  },
  "ai-agent": {
    label: "AI / Agent Systems",
    description: "LLM 오케스트레이션과 멀티에이전트 플랫폼",
    color: "from-purple-500 to-pink-500",
  },
  automation: {
    label: "Automation & Integration",
    description: "결제, 공급망, 파트너 API를 연결하는 자동화",
    color: "from-yellow-500 to-orange-500",
  },
  "developer-tools": {
    label: "Developer Tools",
    description: "개발 생산성과 문서 파이프라인을 위한 도구",
    color: "from-slate-400 to-slate-600",
  },
  analytics: {
    label: "Analytics & Tools",
    description: "데이터 기반 의사결정을 돕는 분석 제품",
    color: "from-red-500 to-rose-500",
  },
  experimental: {
    label: "Experimental",
    description: "새로운 사용자 경험을 실험하는 프로토타입",
    color: "from-indigo-500 to-violet-500",
  },
};

export const projects: Project[] = [
  // ===== B2B SaaS / Enterprise =====
  {
    slug: "chagok",
    name: "CHAGOK",
    summary: "이혼 사건 전용 AI 파라리걸 & 증거 허브",
    description:
      "변호사 소유 AWS S3 내 증거를 AI가 정리·분석·라벨링하고, 소장 초안 후보를 제안합니다. Next.js 대시보드와 FastAPI 백엔드, OpenAI GPT-4o 비전, Qdrant RAG를 활용합니다.",
    category: "b2b-saas",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "AWS S3", "Qdrant", "OpenAI"],
    highlights: [
      "증거 무결성 (SHA-256 + Audit Log)",
      "STT/OCR/요약/라벨링 자동화",
      "법률 지식 RAG + 사건별 증거 RAG",
    ],
    featured: true,
    metrics: {
      duration: "3개월",
      role: "풀스택 단독",
      impact: "증거 정리 시간 70% 단축",
    },
  },
  {
    slug: "salon-mate",
    name: "SalonMate",
    summary: "뷰티/살롱 사장님 AI 마케팅 자동화",
    description:
      "네이버/구글 리뷰 자동 응답, 인스타 포스팅 자동 생성, 마케팅 대시보드를 제공합니다. Next.js 16과 FastAPI, OpenAI GPT-4o를 활용합니다.",
    category: "b2b-saas",
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "OpenAI", "LangChain"],
    highlights: [
      "AI 리뷰 답변 자동 생성",
      "인스타 포스팅 자동화 (사진→캡션→예약)",
      "마케팅 성과 대시보드",
    ],
    metrics: {
      duration: "6주",
      role: "풀스택 단독",
      impact: "리뷰 응답 시간 90% 감소",
    },
  },
  {
    slug: "saegim",
    name: "Saegim",
    summary: "배송/화환/수리 현장 사진 인증 B2B SaaS",
    description:
      "현장 직원이 사진 업로드 시 고객에게 카카오 알림톡/SMS 자동 발송합니다. 관리자 대시보드와 화이트라벨을 지원합니다.",
    category: "b2b-saas",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Clerk", "KakaoTalk"],
    highlights: [
      "Before/After 슬라이더 검증",
      "카카오/SMS 자동 알림",
      "화이트라벨 설정",
    ],
    metrics: {
      duration: "4주",
      role: "풀스택 단독",
      impact: "고객 클레임 40% 감소",
    },
  },
  {
    slug: "auditx",
    name: "Sentinel (Auditx)",
    summary: "AI 스마트컨트랙트 보안 감시 시스템",
    description:
      "Slither, Aderyn, Mythril 같은 정적 분석 센서와 LLM 기반 판단을 결합하여 90% 오탐을 필터링하고 실행 가능한 보안 인사이트를 제공합니다.",
    category: "b2b-saas",
    stack: ["Python", "OpenAI GPT-4o", "Slither", "Mythril", "SQLite", "GitHub Actions"],
    highlights: [
      "LLM 기반 오탐 필터링 (90% 감소)",
      "증거 기반 판정 & 패치 제안",
      "개발자 피드백 기반 지속적 학습",
    ],
    metrics: {
      duration: "2개월",
      role: "AI/백엔드",
      impact: "오탐률 90% 감소",
    },
  },

  // ===== B2C Consumer Apps =====
  {
    slug: "interview-service",
    name: "Interview Service",
    summary: "AI 기반 실시간 모의 면접 & 피드백 플랫폼",
    description:
      "OpenAI GPT 기반 실시간 모의 면접 및 AI 피드백을 제공합니다. 직무별 맞춤 질문과 면접 성과 분석을 지원합니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
    highlights: [
      "실시간 음성 모의 면접",
      "AI 자동 피드백",
      "면접 성과 분석",
    ],
    links: [{ label: "Live Demo", href: "https://interview.sday.me" }],
    featured: true,
    metrics: {
      duration: "3주",
      role: "풀스택 단독",
      impact: "MAU 2,000+",
    },
  },
  {
    slug: "numna-road",
    name: "NumnaRoad",
    summary: "eSIM 전자여행증 판매 플랫폼",
    description:
      "eSIM 상품 검색 & 구매 플랫폼입니다. Next.js 14 App Router, PocketBase 백엔드, Stripe 결제를 활용합니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "TypeScript", "PocketBase", "Stripe", "React Query"],
    highlights: [
      "eSIM 상품 관리",
      "Stripe 결제 연동",
      "자동 이메일 발송 (QR 포함)",
    ],
    featured: true,
    metrics: {
      duration: "4주",
      role: "풀스택 단독",
      impact: "결제 전환율 12%",
    },
  },
  {
    slug: "racelab",
    name: "KRace (레이스랩)",
    summary: "한국 공영경주(경마/경륜/경정) 정보 플랫폼",
    description:
      "경마, 경륜, 경정 실시간 정보를 제공합니다. Next.js 14, Storybook, KSPO 공식 API를 기반으로 합니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Storybook"],
    highlights: [
      "3개 종목 통합 정보",
      "실시간 배당률 & 결과",
      "Storybook 디자인 시스템",
    ],
    links: [{ label: "Live", href: "https://racelab.kr" }],
    metrics: {
      duration: "6주",
      role: "프론트엔드",
      impact: "DAU 500+",
    },
  },
  {
    slug: "onda-coreana",
    name: "OndaCoreana",
    summary: "K-드라마 & K-팝 문화 포털 (스페인어)",
    description:
      "K-드라마, K-팝, 한국 문화 컨텐츠를 라틴아메리카 스페인어권 커뮤니티에 제공합니다. Astro SSG, SEO 최적화, Content Collections를 활용합니다.",
    category: "b2c-consumer",
    stack: ["Astro", "TypeScript", "Tailwind CSS", "MDX", "Cloudflare Pages"],
    highlights: [
      "SSG 기반 SEO 최적화",
      "JSON-LD 스키마 마크업",
      "다국어 지원 (i18n)",
    ],
    links: [{ label: "Live", href: "https://ondacoreana.com" }],
    metrics: {
      duration: "3주",
      role: "풀스택 단독",
      impact: "SEO 1페이지 노출",
    },
  },
  {
    slug: "coupang-keyword-radar",
    name: "Coupang Keyword Radar",
    summary: "쿠팡 최적화 키워드 추천 & 시계열 분석",
    description:
      "네이버 데이터랩 인기 키워드를 시계열로 학습하고 쿠팡 경쟁도를 결합해 미래 유망 키워드 Top 10을 추천합니다. Groq LLM 기반 제품명 제안을 지원합니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "TypeScript", "Groq API", "Supabase", "Tailwind CSS"],
    highlights: [
      "ARIMA/Prophet 시계열 예측",
      "쿠팡 경쟁도 & 가격 지표 반영",
      "Groq LLM 기반 니치 제품명 제안",
    ],
    featured: true,
    metrics: {
      duration: "2주",
      role: "풀스택 단독",
      impact: "예측 정확도 78%",
    },
  },
  {
    slug: "habit-cashback",
    name: "Habit Cashback",
    summary: "습관 인증 → 정산(환급/차감) MVP (토스 WebView)",
    description:
      "토스 Apps in Toss WebView 환경에서 동작하는 습관 인증 및 포인트 정산 서비스입니다. React WebView 프론트엔드와 Go 스텁 API, EXIF 기반 사진 검증을 활용합니다.",
    category: "b2c-consumer",
    stack: ["React", "Vite", "Go", "PostgreSQL", "Docker", "Caddy"],
    highlights: [
      "토스 WebView 환경 최적화",
      "EXIF 기반 사진 인증",
      "자동 정산 워커",
    ],
    metrics: {
      duration: "3주",
      role: "풀스택 단독",
      impact: "MVP 검증 완료",
    },
  },
  {
    slug: "pyeongsu-calculator",
    name: "Pyeongsu Calculator",
    summary: "제곱미터↔평 실시간 변환 계산기",
    description:
      "부동산 평수 계산, 공간 시각화, 예산 추정을 제공합니다. Material 3 디자인, 다크모드, SEO 최적화를 지원합니다.",
    category: "b2c-consumer",
    stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    highlights: [
      "Material 3 디자인 시스템",
      "공간 시각화 (SpaceVisualizer)",
      "실거래가 정보 연동",
    ],
    metrics: {
      duration: "1주",
      role: "풀스택 단독",
      impact: "월 방문 3,000+",
    },
  },
  {
    slug: "relationship-calculator",
    name: "Relationship Calculator",
    summary: "인간관계 ROI 분석 & 공유 카드 생성",
    description:
      "시간/돈/멘탈 손익을 기록하고 사람별 손익을 계산한 뒤 공유 카드(PNG)를 생성합니다. Preact MVP와 코치 기능을 제공합니다.",
    category: "b2c-consumer",
    stack: ["Preact", "TypeScript", "Cloudflare Pages", "Cloudflare Functions"],
    highlights: [
      "주간/월간 손익 리포트",
      "AI 코치 (FREE: 로컬 규칙, PRO: API 호출)",
      "PII 스캔 기반 공유 안전 장치",
    ],
    metrics: {
      duration: "2주",
      role: "풀스택 단독",
      impact: "바이럴 공유 500+",
    },
  },
  {
    slug: "tee-up",
    name: "TEE:UP",
    summary: "프리미엄 골프 레슨 매칭 플랫폼",
    description:
      "골프 프로 프로필 쇼케이스, 검색 & 필터, KakaoTalk 직접 메시징을 제공합니다. Next.js 14와 Supabase 백엔드를 활용합니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "KakaoTalk API"],
    highlights: [
      "프로 프로필 매거진 스타일",
      "분석 대시보드 (KPI, 매출, 리더보드)",
      "KakaoTalk 직접 메시징",
    ],
    metrics: {
      duration: "5주",
      role: "풀스택 단독",
      impact: "프로 등록 50+",
    },
  },
  {
    slug: "landlord-war",
    name: "Landlord War",
    summary: "땅뺏기 경제 시뮬레이션 게임 (Toss WebView)",
    description:
      "토스 플랫폼용 Web3 경제 게임입니다. Vite + React 프론트엔드와 백엔드 템플릿 통합, 멱등성 및 경제 로직 검증을 지원합니다.",
    category: "b2c-consumer",
    stack: ["Vite", "React", "TypeScript", "Toss SDK"],
    highlights: [
      "토스 WebView 최적화",
      "경제 로직 검증",
      "멀티플레이어 시스템",
    ],
    metrics: {
      duration: "4주",
      role: "프론트엔드",
      impact: "토스 심사 통과",
    },
  },
  {
    slug: "soul-lab",
    name: "Soul Lab",
    summary: "토스 운세/궁합 분석 미니앱",
    description:
      "Toss WebView 기반 운세 및 궁합 분석 미니앱입니다. 결정론적 엔진, 50+ 템플릿, 바이럴 언락 시스템을 제공합니다.",
    category: "b2c-consumer",
    stack: ["React", "TypeScript", "Toss Apps in Toss", "Cloudflare Workers"],
    highlights: [
      "결정론적 운세 엔진",
      "바이럴 잠금 해제 (궁합 페어링)",
      "보상형 광고 통합",
    ],
    links: [{ label: "Toss App", href: "intoss://soul-lab" }],
    metrics: {
      duration: "3주",
      role: "풀스택 단독",
      impact: "DAU 1,200+",
    },
  },
  {
    slug: "some-some",
    name: "Some Some (썸썸)",
    summary: "손 터치 기반 스킨십 게임 (Flutter)",
    description:
      "스마트폰 두 사람이 함께 화면을 터치하여 자연스러운 스킨십을 유도하는 하이퍼 캐주얼 게임입니다. Material Design 3, 햅틱 피드백을 지원합니다.",
    category: "b2c-consumer",
    stack: ["Flutter", "Dart", "Material Design 3", "CustomPainter"],
    highlights: [
      "Material Design 3 + Kitsch 톤앤매너",
      "쫀드기 챌린지 (8자 경로 이동)",
      "이심전심 텔레파시 궁합 게임",
    ],
    metrics: {
      duration: "2주",
      role: "모바일 단독",
      impact: "앱스토어 출시",
    },
  },

  // ===== AI / Agent Systems =====
  {
    slug: "talkstudio",
    name: "TalkStudio",
    summary: "AI 대화 생성기 & Discord 연동 플랫폼",
    description:
      "Upstage/OpenAI 기반 AI 대화 생성기입니다. Discord 봇 연동, 실시간 스트리밍, 다양한 페르소나 설정을 지원합니다.",
    category: "ai-agent",
    stack: ["JavaScript", "Python", "Discord.js", "OpenAI", "Upstage API", "Vercel"],
    highlights: [
      "AI 대화 생성 (Upstage/OpenAI)",
      "Discord 봇 연동",
      "58개 배포 이력 (Production/Preview)",
    ],
    links: [{ label: "Live", href: "https://talkstudio.vercel.app" }],
    featured: true,
    metrics: {
      duration: "4주",
      role: "풀스택 단독",
      impact: "Discord 서버 20+ 연동",
    },
  },
  {
    slug: "study-assistant",
    name: "Study Assistant Chatbot",
    summary: "LLM 기반 학습 보조 챗봇",
    description:
      "OpenAI/Claude API를 활용한 요약, Q&A 생성, 문제 생성, 자료 추천 기능을 제공합니다. Streamlit 프론트엔드와 FastAPI 백엔드를 사용합니다.",
    category: "ai-agent",
    stack: ["Streamlit", "FastAPI", "Python", "OpenAI", "Claude API", "LangChain"],
    highlights: [
      "요약 & Q&A 자동 생성",
      "맞춤형 시험 문제 생성",
      "학습 자료 추천",
    ],
    metrics: {
      duration: "2주",
      role: "AI/백엔드",
      impact: "학습 시간 40% 단축",
    },
  },
  {
    slug: "reporty",
    name: "Reporty",
    summary: "AI Studio 기반 보고서 생성 앱",
    description:
      "Google Gemini API 기반 AI 보고서 생성 플랫폼입니다. AI Studio에서 배포 및 로컬 실행이 가능합니다.",
    category: "ai-agent",
    stack: ["React", "Node.js", "Google Gemini API"],
    highlights: [
      "AI Studio 네이티브",
      "Gemini API 기반",
      "로컬 & 클라우드 실행",
    ],
    links: [{ label: "AI Studio", href: "https://ai.studio/apps/drive/1WWe7ryHCM5pvJeYccWZHVfLkmd4zXRSj" }],
    metrics: {
      duration: "1주",
      role: "풀스택 단독",
      impact: "보고서 생성 5분→30초",
    },
  },

  // ===== Automation & Integration =====
  {
    slug: "arbquant",
    name: "ArbQuant",
    summary: "암호화폐 Gray Box 중재 거래 시스템 (Upbit↔Binance)",
    description:
      "한국 & 글로벌 암호화폐 거래소의 교차 차익 거래 기회를 실시간 감지 및 실행합니다. 텔레그램 기반 휴먼-인-더-루프 승인 워크플로우를 제공합니다.",
    category: "automation",
    stack: ["Go", "TimescaleDB", "NATS JetStream", "Redis", "Telegram Bot API", "Docker"],
    highlights: [
      "Gray Box 아키텍처 (휴먼 승인 워크플로우)",
      "KIMP 신호 기반 자동 감지",
      "이중 다리 주문 동시 실행 및 위치 추적",
    ],
    featured: true,
    metrics: {
      duration: "2개월",
      role: "백엔드 단독",
      impact: "일평균 수익률 0.3%",
    },
  },

  // ===== Developer Tools =====
  {
    slug: "hwp-bridge",
    name: "HwpBridge",
    summary: "한글 파일(HWP) Rust 파싱 & MCP 서버",
    description:
      "HWP v5 포맷 파싱 및 Markdown/JSON 변환을 제공합니다. MCP 서버로 Claude Desktop 등 AI 클라이언트에 통합 가능합니다.",
    category: "developer-tools",
    stack: ["Rust", "MCP", "CLI", "Smithery"],
    highlights: [
      "HWP v5 (OLE/CFB) 전문 파싱",
      "MCP 서버 지원 (stdio & HTTP)",
      "Markdown & JSON 출력",
    ],
    metrics: {
      duration: "3주",
      role: "오픈소스 단독",
      impact: "GitHub Stars 50+",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
