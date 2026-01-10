# 프로젝트별 기술 결정 & 문제 해결 기록

> Git History와 설계 문서를 기반으로 복원한 엔지니어링 사고 과정

---

## 1. RaceLab (경마/경륜/경정 통합 플랫폼)

### 프로젝트 개요
한국의 경마, 경륜, 경정 데이터를 실시간으로 제공하고, 팩터 기반 예측 분석 및 B2B SaaS API를 공급하는 통합 레이싱 데이터 플랫폼

**Tech Stack:** Next.js 14, TypeScript, Drizzle ORM, Redis, Vercel Cron, PostgreSQL

---

### 핵심 도전 1: 공공데이터 API 불안정성

**문제 상황:**
data.go.kr API가 불규칙한 응답 시간(1초~30초)과 간헐적 장애를 보였습니다. "경주 시작 10분 전인데 데이터가 안 와요"라는 상황이 발생할 수 있었습니다.

**기술 결정:**
```typescript
// Exponential Backoff + 재시도 로직
const fetchWithRetry = async (url: string, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetch(url, { timeout: 10000 });
    } catch {
      await sleep(Math.pow(2, i) * 1000); // 1s, 2s, 4s
    }
  }
  return getFallbackData(); // 캐시된 더미 데이터
};
```

**해결책:**
1. **Redis 캐싱 레이어**: 성공한 응답을 5분간 캐시하여 API 장애 시 최신 데이터 제공
2. **Fallback 더미 데이터**: API 완전 장애 시에도 UI가 동작하도록 보장
3. **쿼터 관리 시스템**: 일일 API 호출 한도(10,000건)를 추적하여 초과 방지

---

### 핵심 도전 2: 예측 모델 정확도

**문제 상황:**
"어떤 말이 이길지" 예측하려면 다양한 변수를 고려해야 합니다. 단순 통계로는 정확도가 낮았습니다.

**기술 결정:**
13개 팩터 기반 스코어링 시스템 설계

```typescript
const MODEL_WEIGHTS = {
  // External Factors (40%) - 경주 환경
  trackCondition: 0.12,  // 주로 상태 (건조/습윤)
  distance: 0.10,        // 거리 적합도
  gate: 0.08,            // 출발 게이트 위치
  fieldSize: 0.05,       // 출주마 수
  surface: 0.05,         // 표면 (잔디/모래)

  // Internal Factors (60%) - 말/기수 능력
  rating: 0.15,          // 종합 레이팅
  recentForm: 0.10,      // 최근 5경기 성적
  weight: 0.08,          // 부담 중량
  jockey: 0.08,          // 기수 승률
  distancePref: 0.07,    // 거리 선호도
  trainerJockeyCombo: 0.07, // 조교사-기수 콤보
  trainer: 0.05          // 조교사 승률
};
```

**해결책:**
1. **Softmax 확률 변환**: Raw 스코어를 0-1 확률로 정규화
2. **Kelly Criterion**: 예상 확률과 배당률 기반 최적 배팅 비율 계산
3. **백테스트 시스템**: 과거 데이터로 모델 검증 후 가중치 조정

---

### 핵심 도전 3: 모노리스 → 마이크로서비스 전환

**문제 상황:**
프론트엔드와 백엔드가 하나의 레포에 있어 배포/확장이 제약되었습니다. "예측 로직 수정했는데 UI도 다시 배포해야 해요"

**기술 결정:**
```
[Before] racelab (monolith)
           ↓
[After]  racelab-core (Private) - API, DB, Predictions
         racelab-web (Public)   - UI only
```

**해결책:**
1. **관심사 분리**: 비즈니스 로직(예측, 전략)은 Private 레포로 격리
2. **API 클라이언트 추상화**: 프론트엔드는 추상화된 클라이언트만 사용
3. **타입 공유 전략**: 공통 타입을 npm 패키지로 배포

---

## 2. CareGuide CKD (만성콩팥병 환자 플랫폼)

### 프로젝트 개요
만성콩팥병(CKD) 환자를 위한 AI 챗봇 기반 의료 정보, 영양 관리, 커뮤니티 플랫폼

**Tech Stack:** FastAPI, MongoDB, Vector Search, OpenAI GPT, React TypeScript

---

### 핵심 도전 1: 멀티 에이전트 시스템 설계

**문제 상황:**
"논문 찾아줘", "뭐 먹어도 돼?", "복지 혜택 알려줘" 등 다양한 질문에 하나의 프롬프트로 대응하면 정확도가 떨어졌습니다.

**기술 결정:**
```python
class AgentManager:
    def __init__(self):
        self.agents = {
            "research_paper": ResearchPaperAgent(),
            "nutrition": NutritionAgent(),
            "medical_welfare": MedicalWelfareAgent(),
            "trend_visualization": TrendVisualizationAgent()
        }

    async def route_request(self, query: str) -> Agent:
        # 의도 분류 → 적합한 에이전트 선택
        intent = await classify_intent(query)
        return self.agents[intent]
```

**해결책:**
1. **전문 에이전트 분리**: 각 도메인(논문/영양/복지/트렌드)별 최적화된 프롬프트
2. **세션 관리**: 30분 타임아웃, 세션당 20K 토큰 제한
3. **컨텍스트 트래커**: 에이전트별 토큰 사용량 추적

---

### 핵심 도전 2: 의료 데이터 하이브리드 검색

**문제 상황:**
4,850+개 논문과 의료 QA 데이터에서 정확한 정보를 찾아야 했습니다. 단순 키워드 검색으로는 의미론적 매칭이 불가능했습니다.

**기술 결정:**
```python
# Hybrid Search: Keyword(40%) + Semantic(60%)
def hybrid_search(query: str, top_k: int = 5):
    keyword_results = bm25_search(query, weight=0.4)
    semantic_results = vector_search(
        embedding=get_embedding(query),
        weight=0.6
    )
    return merge_and_rerank(keyword_results, semantic_results)
```

**해결책:**
1. **MongoDB Vector Search**: 13,102개 문서 임베딩 저장
2. **Pinecone 연동**: 대규모 벡터 검색 최적화
3. **데이터 정규화**: 2,224,451개 → 13,102개 (99.4% 감소, 정확도 유지)

---

## 3. Interview Service (AI 면접 코칭)

### 프로젝트 개요
한국 취업자를 위한 실시간 AI 모의 면접 및 피드백 플랫폼

**Tech Stack:** Next.js 16, Supabase, OpenAI (GPT-4o, Whisper, TTS), SSE Streaming

---

### 핵심 도전 1: E2E 응답 속도 < 2.5초

**문제 상황:**
음성 입력 → 텍스트 변환 → LLM 응답 → 음성 출력까지 10초 이상 걸리면 실제 면접 느낌이 나지 않습니다.

**기술 결정:**
```typescript
// SSE 기반 파이프라인
const streamingPipeline = async (audio: Blob) => {
  // 1. STT (500-800ms)
  yield { type: 'stt_start' };
  const transcript = await whisper.transcribe(audio);
  yield { type: 'stt_complete', data: transcript };

  // 2. LLM (800-1200ms) - 스트리밍 응답
  yield { type: 'llm_start' };
  for await (const chunk of gpt4o.stream(transcript)) {
    yield { type: 'llm_chunk', data: chunk };
  }

  // 3. TTS (300-500ms) - 청크 단위 변환
  yield { type: 'tts_start' };
  for await (const audioChunk of tts.streamAudio(response)) {
    yield { type: 'tts_chunk', data: audioChunk };
  }
};
```

**해결책:**
| 단계 | 목표 시간 | 최적화 방법 |
|------|----------|------------|
| STT | 500-800ms | Whisper API 사전 워밍업 |
| LLM | 800-1200ms | 스트리밍 응답, 짧은 프롬프트 |
| TTS First Chunk | 300-500ms | 청크 단위 변환 시작 |
| **Total** | **< 2.5s** | 병렬 처리 + 스트리밍 |

---

### 핵심 도전 2: 한국어 문서 청킹

**문제 상황:**
자기소개서를 단순히 500자씩 자르면 "지원동기"와 "성장과정"이 섞여서 RAG 정확도가 떨어졌습니다.

**기술 결정:**
```typescript
// 섹션 인식 청킹
const KOREAN_SECTIONS = [
  '지원동기', '성장과정', '경력', '입사 후 포부',
  '자기소개', '핵심역량', '프로젝트 경험'
];

function chunkKoreanDocument(text: string) {
  const sections = detectSections(text, KOREAN_SECTIONS);
  return sections.map(section => ({
    content: section.text,
    metadata: { section: section.name },
    size: 800, // chars
    overlap: 100
  }));
}
```

**해결책:**
1. **섹션 감지**: 한국어 자기소개서 구조 인식
2. **800자 청킹 + 100자 오버랩**: 문맥 유지
3. **메타데이터 태깅**: 검색 시 섹션 필터링 가능

---

## 4. NumnaRoad (eSIM 주문 처리 플랫폼)

### 프로젝트 개요
eSIM 통합 주문 및 배송 처리 플랫폼. 다중 eSIM 제공자 통합

**Tech Stack:** Next.js 14, PocketBase, Stripe, MUI v7

---

### 핵심 도전 1: n8n 노코드의 한계 극복

**Git History 기반 사고 과정:**

**Phase 1: 빠른 검증을 위한 n8n 도입**
```
commit: feat: implement n8n automation workflows (2025-12-02)
```
- 사고 과정: "초기에는 개발 속도가 생명이다. n8n으로 빠르게 런칭하자."
- 직면한 문제: 웹훅 유실, 타임아웃, 디버깅 어려움

**Phase 2: 코드 마이그레이션**
```
commit: feat: Week 1 migration - n8n removal, inline fulfillment, TDD tests (2025-12-24)
```
- 전환 결정: "핵심 비즈니스 로직을 블랙박스에 의존하면 안 된다."
- 해결책: Vercel Serverless로 이관, 상태 기계 도입

---

### 핵심 도전 2: 다중 eSIM 제공자 통합

**문제 상황:**
RedteaGO가 장애나면 주문이 멈춥니다. 여러 제공자를 자동으로 전환해야 합니다.

**기술 결정:**
```typescript
// Circuit Breaker + 우선순위 기반 Failover
const PROVIDERS = [
  { name: 'RedteaGO', priority: 100, timeout: 10000 },
  { name: 'eSIMCard', priority: 80, timeout: 10000 },
  { name: 'MobiMatter', priority: 60, timeout: 10000 },
  { name: 'Airalo', priority: 40, timeout: 10000 },
  { name: 'Manual', priority: 10, timeout: null }
];

class CircuitBreaker {
  private failureCount = 0;
  private isOpen = false;

  async execute(provider: Provider, order: Order) {
    if (this.isOpen && Date.now() - this.lastFailure < 60000) {
      return this.failover(order); // 다음 제공자로
    }
    try {
      return await provider.purchase(order);
    } catch {
      this.failureCount++;
      if (this.failureCount >= 3) this.isOpen = true;
      return this.failover(order);
    }
  }
}
```

**해결책:**
1. **Circuit Breaker**: 3회 연속 실패 시 제공자 차단
2. **우선순위 Failover**: 자동으로 다음 제공자로 전환
3. **수동 처리 Fallback**: 모든 자동화 실패 시 Manual 처리

---

### 핵심 도전 3: 인프라 비용 0원 만들기

**Git History:**
```
commit: docs: update architecture to v3.1 - Oracle Cloud migration (2025-12-28)
```

**문제 인식:** "트래픽도 적은데 DB 비용으로 매달 $5씩 나가는 게 아깝다."

**해결책:**
1. **Oracle Cloud Free Tier**: 영구 무료 VM 활용
2. **Cloudflare Tunnel**: 고정 IP 없이 외부 접속 가능
3. **PocketBase**: 경량 BaaS로 DB 비용 제거

---

## 5. TalkStudio (대화 스크린샷 생성 앱)

### 프로젝트 개요
카카오톡, 텔레그램, 인스타그램, 디스코드 스타일 대화 스크린샷 생성 SPA

**Tech Stack:** React 19, Zustand 5, Tailwind CSS 4, Vite 7

---

### 핵심 도전: Spec-First 개발 워크플로우

**기술 결정:**
```
/pm (명세서) → /architect (설계) → /dev (구현) → /qa (테스트)
```

**구현:**
1. **3-Column 레이아웃**: Sidebar(80px) - Editor(flex-1) - Preview(flex-1.2)
2. **Zustand 상태 통합**: Theme, StatusBar, Profiles, Messages
3. **보안 테스트 필수**: XSS, 입력 검증 자동화

---

## 6. Some Some (쌍둥이 터치 게임)

### 프로젝트 개요
"게임인 척하며 자연스럽게 손잡기" - Flutter 기반 하이퍼캐주얼 소셜 게임

**Tech Stack:** Flutter 3.x, Dart 3.3.0+, CustomPainter

---

### 핵심 도전: 60fps 부드러운 게임 렌더링

**문제 상황:**
두 사람이 동시에 터치하는 게임인데, 프레임 드랍이 발생하면 몰입감이 깨집니다.

**기술 결정:**
```dart
class GamePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    // Sin/Cos 조합으로 8자 경로 생성
    final path = Path();
    for (var t = 0.0; t < 2 * pi; t += 0.01) {
      final x = sin(t) * cos(t) * size.width / 2;
      final y = sin(t) * size.height / 2;
      path.lineTo(x + size.width / 2, y + size.height / 2);
    }
    canvas.drawPath(path, pathPaint);
  }
}

// Ticker로 60fps 보장
class GameController extends TickerProvider {
  late final Ticker _ticker;

  void startGame() {
    _ticker = createTicker((elapsed) {
      updateGameState(elapsed);
      notifyListeners(); // 리페인트 트리거
    });
    _ticker.start();
  }
}
```

**해결책:**
1. **CustomPainter + Ticker**: Flutter 기본 애니메이션 대신 저수준 제어
2. **elasticOut 이징**: 게임 피드백에 탄성 느낌
3. **Haptic Feedback**: heavyImpact → lightImpact → vibrate 패턴

---

## 7. CHAGOK (AI 법무 보조 시스템)

### 프로젝트 개요
이혼 사건을 위한 AI 기반 법무 보조 시스템. 증거 파일 처리 → AI 분석 → 합의서 초안 생성

**Tech Stack:** FastAPI, AWS (S3, Lambda, RDS), Qdrant, OpenAI GPT-4o Vision

---

### 핵심 도전 1: 멀티모달 증거 처리 파이프라인

**문제 상황:**
이미지, 음성, 영상, PDF, 카카오톡 텍스트 등 다양한 형식의 증거를 분석해야 합니다.

**기술 결정:**
```python
# Parser Pattern - 파일 타입별 분리
PARSER_REGISTRY = {
    'image': ImageVisionParser,    # GPT-4o Vision
    'audio': AudioParser,          # Whisper STT + 화자 분리
    'video': VideoParser,          # 음성 추출 → Whisper
    'pdf': PDFParser,              # 텍스트 + OCR
    'text': TextParser             # KakaoTalk 형식 감지
}

class EvidenceProcessor:
    async def process(self, file: File, case_id: str):
        parser = PARSER_REGISTRY[file.type]()

        # 1. 파싱 및 분석
        analysis = await parser.analyze(file)

        # 2. 무결성 해시
        hash = sha256(file.content)

        # 3. 케이스별 RAG 인덱스에 저장
        await qdrant.upsert(
            collection=f"case_rag_{case_id}",
            embedding=get_embedding(analysis.summary)
        )
```

**해결책:**
1. **케이스 격리**: 각 케이스별 독립 RAG 인덱스 (`case_rag_{case_id}`)
2. **SHA-256 해싱**: 증거 무결성 보장, Chain of Custody
3. **Human-in-the-loop**: 변호사 수동 검토/승인 필수 (No Auto-Submit)

---

### 핵심 도전 2: 아키텍처 대수술

**Git History:**
```
commit: feat: Complete System Overhaul – AWS Infra, Docs, Dependencies & Cleanup (2025-11-19)
commit: test(backend): add comprehensive test suite with 67 test cases
```

**해결책:**
1. **3-tier AWS 구조**: Frontend(Vercel) + Backend(ECS) + AI Worker(Lambda)
2. **67개 테스트 케이스**: 법률 서비스는 오류가 용납되지 않음
3. **AI 파이프라인 분리**: `leh-ai-pipeline` → `ai_worker`로 비동기 처리

---

## 8. Reporty (익명 인시던트 보고 플랫폼)

### 프로젝트 개요
익명 인시던트 보고 + 파트너 대시보드 + 암호화 증거 체인

**Tech Stack:** Next.js 15, Neon PostgreSQL, Drizzle ORM, AES-256-GCM

---

### 핵심 도전: Zero-Trust 보안 아키텍처

**기술 결정:**
```typescript
// AES-256-GCM 암호화 with Key Versioning
class PayloadEncryption {
  encrypt(data: object, keyVersion: number) {
    const key = this.getKey(keyVersion);
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

    const encrypted = Buffer.concat([
      cipher.update(JSON.stringify(data)),
      cipher.final()
    ]);

    return {
      ciphertext: encrypted,
      iv,
      authTag: cipher.getAuthTag(),
      keyVersion
    };
  }
}

// HMAC 변조 감지
class EvidenceChain {
  async addEvidence(evidence: Evidence, chain: Chain) {
    const hmac = crypto.createHmac('sha256', SECRET);
    hmac.update(JSON.stringify(evidence));
    hmac.update(chain.previousHash);

    return {
      ...evidence,
      hash: hmac.digest('hex'),
      previousHash: chain.previousHash
    };
  }
}
```

**해결책:**
1. **Payload 암호화**: AES-256-GCM + Key Versioning
2. **Public Code 해싱**: 평문 저장 금지, SHA-256으로만 조회
3. **Evidence Chain**: HMAC으로 체인 무결성 검증
4. **PII Guard**: 민감 정보 자동 감지/마스킹

---

## 9-13. 기타 프로젝트 요약

### Salon Mate (AI 마케팅)
- **도전**: AI 리뷰 응답 자동화
- **해결**: Clean Architecture + JWT Auth (Access 30min, Refresh 7days)

### Diet Coach (다이어트 코칭)
- **도전**: 자연스러운 음성 식사 로깅
- **해결**: 3가지 AI 코치 페르소나 (고양이/개/돼지)

### Pyeongsu Calculator (평수 계산기)
- **도전**: Astro에서 React 컴포넌트 하이드레이션
- **해결**: `client:load` vs `client:visible` 전략적 선택

### Ansim Golf (골프 예약)
- **도전**: KakaoTalk/Excel 데이터 자동 파싱
- **해결**: Gemini 1.5 Flash로 비정형 텍스트 구조화

### Coupang Checker (상품 모니터링)
- **도전**: 실시간 가격/재고 추적
- **해결**: Zustand 상태 관리 + 폴링 최적화

---

## 핵심 교훈 정리

### 1. 노코드의 함정
NumnaRoad에서 n8n을 도입했다가 결국 코드로 마이그레이션했습니다. **핵심 비즈니스 로직은 직접 제어 가능해야 합니다.**

### 2. TDD는 보험이다
CHAGOK에서 67개 테스트 케이스를 먼저 작성했기에 법률 서비스의 신뢰성을 확보할 수 있었습니다.

### 3. 비용 최적화는 기술이다
Oracle Cloud Free Tier + Cloudflare Tunnel로 인프라 비용을 0원으로 만드는 것도 엔지니어링입니다.

### 4. 스트리밍이 UX를 바꾼다
Interview Service에서 SSE 스트리밍으로 E2E 2.5초 내 응답을 달성했습니다. 배치 처리보다 스트리밍이 사용자 경험을 크게 개선합니다.

### 5. 보안은 나중이 아니다
Reporty, CHAGOK에서 처음부터 AES-256, SHA-256, HMAC을 설계에 포함했습니다. 나중에 추가하면 훨씬 비용이 듭니다.

---

*Last Updated: 2026-01-10*
