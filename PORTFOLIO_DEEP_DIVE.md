# 🧠 프로젝트 개발 사고 과정 및 문제 해결 (Engineering Thought Process)

이 문서는 **Git Commit History**와 **설계 문서의 변경 이력(History)**을 정밀 분석하여, 개발자가 프로젝트를 진행하며 부딪혔던 **구체적인 난관**과 이를 해결하기 위해 **어떤 의사결정(Decision Making)**을 내렸는지 복원한 "사고 과정의 기록"입니다.

---

## 1. NumnaRoad (넘나로드)
> **"노코드(No-Code)의 한계를 코드로 극복하고, 인프라 비용을 '0원'으로 만든 집요함"**

### 🔍 Git History로 본 결정적 순간들

**Phase 1: 빠른 검증을 위한 n8n 도입과 그 한계**
- **Log:** `feat: implement n8n automation workflows` (2025-12-02)
- **사고 과정:** "초기에는 개발 속도가 생명이다. 복잡한 주문 로직을 직접 짜는 대신 n8n으로 외부 API를 엮어서 빠르게 런칭하자."
- **직면한 문제:** 주문 트래픽이 발생하자 n8n 웹훅이 간헐적으로 유실되거나 타임아웃이 발생했습니다. "주문했는데 QR이 안 와요"라는 고객 클레임이 발생했고, 디버깅을 위해 n8n 로그를 뒤지는 비효율이 발생했습니다.

**Phase 2: "Inline Fulfillment"로의 코드 마이그레이션**
- **Log:** `feat: Week 1 migration - n8n removal, inline fulfillment, TDD tests` (2025-12-24)
- **전환 결정:** "핵심 비즈니스 로직(주문 처리)을 블랙박스(외부 툴)에 의존하는 건 위험하다. 직접 제어 가능한 코드로 가져오자."
- **해결책:** Vercel Serverless API로 로직을 완전히 이관하고, 상태 기계(State Machine)를 도입하여 주문 상태를 명확히 관리했습니다. 특히 `TDD tests` 커밋에서 볼 수 있듯, 테스트 주도 개발로 안정성을 확보했습니다.

**Phase 3: 비용 최적화를 향한 여정**
- **Log:** `docs: update architecture to v3.1 - Oracle Cloud migration` (2025-12-28)
- **문제 인식:** "트래픽도 적은데 DB 비용으로 매달 $5씩 나가는 게 아깝다. 초기 비용을 0원으로 만들 수 없을까?"
- **해결책:** 
    1. **Oracle Cloud Free Tier** VM을 활용해 서버 비용 제거.
    2. **Cloudflare Tunnel**을 도입해 고정 IP나 복잡한 포트 포워딩 없이 외부에서 내부 DB에 안전하게 접속.
- **의의:** 기술적인 오버엔지니어링처럼 보일 수 있지만, **"Burn Rate 최소화"**라는 스타트업의 생존 본능이 반영된 의사결정입니다.

---

## 2. CHAGOK (차곡)
> **"복잡도와의 싸움: 아키텍처 단순화와 TDD 기반의 견고한 백엔드"**

### 🔍 Git History로 본 결정적 순간들

**Phase 1: 아키텍처 대수술 (System Overhaul)**
- **Log:** `feat: Complete System Overhaul – AWS Infra, Docs, Dependencies & Cleanup` (2025-11-19)
- **사고 과정:** "기존의 파편화된 구조로는 확장이 어렵다. AWS 인프라와 의존성을 한 번에 정리하는 대수술이 필요하다."
- **해결책:** 단순한 리팩토링이 아니라 인프라 레벨까지 포함한 전체 시스템 재설계를 감행했습니다. `refactor(project): finalize folder/file structure` 커밋에서 볼 수 있듯, 백엔드/AI워커/프론트엔드의 구조를 명확히 분리하여 유지보수성을 높였습니다.

**Phase 2: 테스트 주도 개발 (Test-Driven Reliability)**
- **Log:** `test(backend): add comprehensive test suite with 67 test cases` (2025-11-19)
- **문제:** "법률 서비스는 오류가 용납되지 않는다. 어떻게 신뢰성을 보장할까?"
- **해결책:** 기능 구현(`feat`)과 동시에, 혹은 그보다 먼저 67개에 달하는 방대한 테스트 케이스를 작성했습니다. 이는 단순 기능 구현을 넘어 **"검증된 소프트웨어"**를 만들겠다는 의지를 보여줍니다.

**Phase 3: AI 파이프라인의 분리**
- **Log:** `feat: migrate leh-ai-pipeline to ai_worker` (2025-11-19)
- **의사결정:** "무거운 AI 처리 로직이 API 서버에 있으면 응답 속도가 느려진다."
- **해결책:** AI 처리 로직을 별도의 `ai_worker`로 분리하고, 비동기 처리를 도입하여 사용자 경험(Latency)을 최적화했습니다.

---

## 3. TEE:UP (티업)
> **"TDD 사이클의 정석과 분산 시스템의 데이터 정합성 확보"**

### 🔍 Git History로 본 결정적 순간들

**Phase 1: TDD 사이클의 정석 (Red-Green-Refactor)**
- **Log:** 
    - `(frontend): plan 4.1 KakaoTalk integration - RED phase` (2025-11-24)
    - `(frontend): plan 4.1 KakaoTalk integration - GREEN phase`
    - `(frontend): plan 4.1 KakaoTalk integration - REFACTOR phase`
- **관찰:** 커밋 로그 자체가 교과서적인 TDD 사이클을 보여줍니다. 실패하는 테스트를 먼저 작성하고(Red), 기능을 구현하여 통과시키고(Green), 코드를 개선하는(Refactor) 과정을 엄격하게 지켰습니다.
- **의의:** "말만 TDD가 아니라, 실제로 그렇게 짠다"는 것을 증명하는 강력한 증거입니다.

**Phase 2: 보안과 인증 체계 구축**
- **Log:** `feat(backend): Supabase Auth 구현 및 TDD 테스트 - GREEN phase` (2025-11-24)
- **문제:** "사용자 데이터 보호가 최우선이다. 인증 로직을 어떻게 검증할까?"
- **해결책:** Supabase Auth 연동 시에도 TDD를 적용하여, 권한이 없는 사용자의 접근이 차단되는지 확실하게 검증했습니다.

**Phase 3: 프로덕션 이슈 대응**
- **Log:** `fix: 프로덕션 빌드 Critical 버그 수정 및 QA 완료` (2025-11-25)
- **상황:** 배포 직전 치명적인 버그 발견.
- **대처:** 당황하지 않고 핫픽스를 배포한 뒤, `QA 완료` 태그를 달아 품질 검증 절차를 마무리했습니다. 이는 개발자가 운영(Ops) 마인드셋도 갖추고 있음을 보여줍니다.

---

### 📝 총평 (Summary)

커밋 로그를 분석한 결과, 이 개발자는 다음과 같은 특징을 보입니다.

1.  **Problem Solver:** 노코드 툴의 한계를 느끼자마자 코드로 전환하고(`NumnaRoad`), 복잡한 아키텍처를 단순화(`CHAGOK`)하는 결단력이 있습니다.
2.  **Disciplined Developer:** TDD 사이클(`RED` -> `GREEN` -> `REFACTOR`)을 커밋 메시지에 남길 정도로 원칙을 중요시합니다(`TEE:UP`).
3.  **Business Oriented:** 단순히 기술을 쓰는 게 아니라, "비용 0원 만들기"처럼 비즈니스 임팩트를 고려한 기술적 결정을 내립니다.

이 포트폴리오는 성공한 결과물뿐만 아니라, **"실패할 뻔했던 순간들을 기술적 규율(Discipline)과 집요함으로 극복해낸 과정"**을 증명합니다.
