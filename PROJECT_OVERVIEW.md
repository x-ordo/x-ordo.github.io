# 프로젝트 포트폴리오 종합

> 13개 프로젝트를 통해 입증된 풀스택 엔지니어링 역량

---

## 기술 스택 분포

### Frontend
| 기술 | 프로젝트 수 | 대표 프로젝트 |
|------|-------------|--------------|
| Next.js 14-16 | 7 | RaceLab, Interview, Salon Mate, Reporty |
| React 18-19 | 11 | TalkStudio, Coupang Checker, Ansim Golf |
| Flutter | 1 | Some Some |
| Astro 4 | 1 | Pyeongsu Calculator |

### Backend
| 기술 | 프로젝트 수 | 대표 프로젝트 |
|------|-------------|--------------|
| FastAPI (Python) | 4 | CareGuide, CHAGOK, Salon Mate, Diet Coach |
| Next.js API Routes | 5 | RaceLab, Interview, NumnaRoad, Reporty |
| Cloudflare Workers | 1 | Ansim Golf |
| Express | 1 | TalkStudio (선택적) |

### Database
| 기술 | 프로젝트 수 | 용도 |
|------|-------------|------|
| PostgreSQL | 7 | 주요 관계형 데이터 |
| MongoDB | 2 | CareGuide (문서 + 벡터) |
| Qdrant | 2 | CHAGOK, Interview (벡터 검색) |
| DynamoDB | 1 | CHAGOK (메타데이터) |
| Cloudflare D1 | 1 | Ansim Golf (엣지 SQLite) |

### AI/ML
| 기술 | 프로젝트 수 | 용도 |
|------|-------------|------|
| OpenAI GPT-4o | 8 | LLM, 분석, 생성 |
| OpenAI Whisper | 3 | STT (음성→텍스트) |
| Anthropic Claude | 2 | LLM fallback |
| Google Gemini | 1 | Ansim Golf (AI 파싱) |
| Cohere | 1 | RAG 리랭킹 |

---

## 프로젝트 요약 (13개)

| # | 프로젝트 | 카테고리 | 핵심 기술 | 역할 | 상태 |
|---|----------|----------|----------|------|------|
| 1 | **RaceLab** | B2B SaaS | 예측 엔진, TDD, Drizzle ORM | 풀스택 단독 | Production |
| 2 | **CareGuide CKD** | AI Agent | 멀티 에이전트, RAG, Vector Search | 팀 리드 | MVP |
| 3 | **Interview Service** | AI SaaS | SSE 스트리밍, 하이브리드 검색 | 풀스택 단독 | Production |
| 4 | **NumnaRoad** | Automation | Circuit Breaker, eSIM 통합 | 풀스택 단독 | Production |
| 5 | **TalkStudio** | Dev Tools | Spec-First, React 19 | 풀스택 단독 | MVP |
| 6 | **Some Some** | Mobile Game | Flutter, 60fps 렌더링 | 풀스택 단독 | Development |
| 7 | **Salon Mate** | AI Marketing | JWT Auth, Clean Architecture | 풀스택 단독 | Development |
| 8 | **Diet Coach** | AI Health | 음식 DB, AI 페르소나 | 풀스택 단독 | MVP |
| 9 | **Pyeongsu** | Utility | Astro Islands, SSG | 풀스택 단독 | Production |
| 10 | **Ansim Golf** | B2C Platform | D1, Gemini, 에스크로 | 풀스택 단독 | MVP |
| 11 | **CHAGOK** | LegalTech | 증거 파이프라인, AWS Lambda | 풀스택 단독 | 종료 |
| 12 | **Reporty** | B2B SaaS | AES-256, Zero-Trust | 풀스택 단독 | Development |
| 13 | **Coupang Checker** | Analytics | 실시간 모니터링 | 풀스택 단독 | MVP |

---

## 핵심 역량 증명

### 1. RAG 시스템 설계
**적용 프로젝트:** Interview Service, CHAGOK, CareGuide

| 프로젝트 | RAG 구조 | 특징 |
|----------|----------|------|
| Interview | Vector + BM25 + Cohere 리랭킹 | 한국어 문서 청킹, 정확도 >0.7 |
| CHAGOK | 이중 RAG (법률 + 증거) | 케이스별 격리 인덱스 |
| CareGuide | MongoDB Vector + Pinecone | 4,850+ 논문 임베딩 |

### 2. 실시간 스트리밍
**적용 프로젝트:** Interview Service, RaceLab

| 프로젝트 | 스트리밍 방식 | 타겟 성능 |
|----------|-------------|----------|
| Interview | SSE (STT→LLM→TTS) | E2E < 2.5초 |
| RaceLab | Redis Pub/Sub | 배당률 30초 갱신 |

### 3. 멀티 에이전트 시스템
**적용 프로젝트:** CareGuide CKD

```
AgentManager → ResearchPaper Agent (논문 검색)
            → Nutrition Agent (영양 조언)
            → MedicalWelfare Agent (복지 정보)
            → TrendVisualization Agent (트렌드 대시보드)
```
- 세션당 20K 토큰 제한
- 30분 타임아웃 관리
- 에이전트별 컨텍스트 추적

### 4. 다중 제공자 통합
**적용 프로젝트:** NumnaRoad, Ansim Golf

| 프로젝트 | 통합 대상 | 패턴 |
|----------|----------|------|
| NumnaRoad | eSIM 4개사 (RedteaGO, Airalo 등) | Circuit Breaker + 우선순위 |
| Ansim Golf | 골프장 데이터 + AI 파싱 | KakaoTalk/Excel 자동 입력 |

### 5. 암호화 & 보안
**적용 프로젝트:** Reporty, CHAGOK

| 프로젝트 | 보안 기능 |
|----------|----------|
| Reporty | AES-256-GCM, SHA-256, HMAC 변조 감지 |
| CHAGOK | 증거 무결성 해시, Chain of Custody |

### 6. 게임 엔진
**적용 프로젝트:** Some Some

- Flutter CustomPainter + Ticker로 60fps 보장
- Sin/Cos 조합 8자 경로 생성
- Haptic Feedback 정밀 제어

---

## 개발 방법론

### 공통 원칙
| 원칙 | 설명 | 적용 프로젝트 |
|------|------|--------------|
| **Spec-First** | 명세서 → 설계 → 구현 → 테스트 | RaceLab, TalkStudio, CHAGOK |
| **TDD** | Red → Green → Refactor | 모든 프로젝트 |
| **Clean Architecture** | Controller-Agent-Service 분리 | CHAGOK, Salon Mate, CareGuide |
| **Conventional Commits** | feat/fix/refactor/docs | 모든 프로젝트 |

### 테스트 커버리지
| 도구 | 프로젝트 | 테스트 타입 |
|------|----------|------------|
| Jest | RaceLab, Interview | Unit, API |
| Vitest | TalkStudio, NumnaRoad, Pyeongsu | Unit |
| Playwright | RaceLab, Pyeongsu | E2E |
| pytest | CareGuide, CHAGOK | Backend |

---

## 인프라 & 배포

### 호스팅
| 플랫폼 | 프로젝트 |
|--------|----------|
| Vercel | RaceLab, Interview, Salon Mate, Reporty |
| Cloudflare | Ansim Golf, Pyeongsu |
| AWS | CHAGOK (S3, Lambda, RDS, ECS) |
| Supabase | Interview, Diet Coach |

### 주요 통합
| 서비스 | 용도 | 프로젝트 |
|--------|------|----------|
| Stripe | 결제 | NumnaRoad |
| Toss Payments | 에스크로 | Ansim Golf |
| Resend | 이메일 | NumnaRoad, RaceLab |
| KakaoTalk Alimtalk | 알림 | Ansim Golf, NumnaRoad |

---

## 프로젝트별 핵심 지표

| 프로젝트 | 개발 기간 | 핵심 성과 |
|----------|----------|----------|
| RaceLab | 7주 | 예측 엔진 13팩터, B2B API 4티어 |
| Interview | 4주 | E2E < 2.5초, RAG 정확도 >70% |
| NumnaRoad | 6주 | 주문 처리 < 10초, eSIM 4사 통합 |
| CHAGOK | 3개월 | 증거 정리 70% 단축 |
| CareGuide | 8주 | 13,000+ 의료 데이터 RAG |

---

## 기술적 강점 요약

1. **AI 통합 전문성**: RAG, 멀티 에이전트, LLM 오케스트레이션
2. **실시간 시스템**: SSE 스트리밍, WebSocket, Redis Pub/Sub
3. **보안 아키텍처**: AES-256, Zero-Trust, 증거 무결성
4. **풀스택 역량**: Next.js/React + FastAPI/Node.js + PostgreSQL/MongoDB
5. **개발 규율**: TDD, Spec-First, Clean Architecture

---

*Last Updated: 2026-01-10*
