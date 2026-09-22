export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 启明工坊",
    title: "독립적으로 배포하는 여섯 개의 AI 제품, 하나의 공유 아이덴티티·권한 기반",
    lead: "LuminaryWorks는 OIDC, MQTT, REST, WebRTC, ONVIF 같은 오픈 프로토콜 위에 AI 네이티브 오픈 생태계를 만듭니다. 창작과 학습, 디바이스 연결, 데이터 통찰, 영상 보안, 원격 운영, 에이전트 협업이 하나의 가치 사슬을 이룹니다. 모든 제품은 단독으로도 자체 호스팅으로도 제공되며, 필요할 때 조합됩니다.",
    primaryCta: "여섯 개 제품 살펴보기",
    secondaryCta: "자체 호스팅 배포",
    docs: "개발자 문서",
    diagramAria:
      "컨트롤 플레인과 제품 플레인 구성도. 위쪽은 선택적으로 공유되는 컨트롤 플레인으로 Identity(OIDC), Entitlement, 그리고 lab으로 표시된 AI Gateway가 있습니다. 아래쪽은 여섯 개의 제품 플레인이며 각각 자체 데이터베이스와 ACL을 가집니다. 컨트롤 플레인에서 제품 플레인으로 이어지는 점선은 해당 의존성이 선택 사항임을 뜻합니다.",
    controlPlane: "CONTROL PLANE",
    controlNote: "선택적 공유",
    productPlanes: "PRODUCT PLANES",
    productNote: "각각 자체 데이터베이스와 ACL",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "개별 판매 가능한 제품" },
      { value: "5", label: "고정된 배포 프로파일" },
      { value: "1", label: "공유 아이덴티티·권한 계층" },
      { value: "5", label: "계열의 오픈 프로토콜" },
      { value: "NC", label: "Polyform 비상업 소스" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "여섯 개 제품이 하나의 가치 사슬을 나눠 맡습니다",
    lead: "먼저 창작과 학습에서 시작해 디바이스와 데이터 통찰로, 이어서 영상 보안과 원격 운영으로 확장되고, 마지막에 에이전트와 사람이 함께 정산합니다.",
    diagramAria:
      "가치 사슬: BlockyEdu로 창작하고 SyncroBrain으로 연결하며 DataLuminary로 통찰합니다. VistaCast의 감시와 VistaRemote의 제어가 갈라져 나와 DoerFlow의 수익으로 합류합니다. 노드를 클릭하면 해당 제품 카드로 이동합니다.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "제품마다 단독으로 팔리고, 함께 모이면 루프가 닫힙니다.",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "공유하는 것은 아이덴티티와 권한, 프로토콜이며 업무 로직은 아닙니다.",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "통합 로그인 · Identity",
        body: "하나의 OIDC 로그인 서비스가 여섯 브랜드를 지원하며, 제품마다 자체 로고와 문구를 유지합니다",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "중앙 권한 · Entitlement",
        body: "플랜, Trial, License, 시트, 결제를 중앙에서 관리하며 상업적 권한은 JWT에 넣지 않습니다",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "리소스 권한 · PAL",
        body: "리소스 단위 ACL은 각 제품에 남고, permissions는 리소스와 함께 전달됩니다",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI Gateway",
        body: "다중 벤더 모델 연결, 키 볼트, 사용량 계측(현재 lab, 운영 투입 불가)",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "알림",
        body: "공유 메일·알림 모듈과 통일된 발신 아이덴티티",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "공유 라이브러리",
        body: "아이덴티티·권한·권리 클라이언트와 도구는 npm 패키지로 배포하며, 저장소 간 소스 참조는 하지 않습니다",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "통일된 오류 시맨틱",
    calloutCodes: "401 아이덴티티 · 402 권한 · 403 리소스 ACL",
    emphasis:
      "각 제품이 자체 데이터베이스와 마이그레이션, Casbin 정책, 릴리스 주기를 보유합니다. 형제 제품이 모두 꺼져 있어도 기동하고 ready 검사를 통과합니다.",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "단일 제품부터 에어갭 폐쇄 루프까지",
    headers: {
      profile: "profile",
      meaning: "의미",
      composition: "최소 구성",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "단일 제품을 독립 배포·판매",
        composition: "제품 플레인 1개 + 자체 데이터베이스",
      },
      {
        name: "control-plane",
        meaning: "공유 컨트롤 플레인만 배포",
        composition: "Identity(+ Auth Gateway) + Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "기본 조합 루프",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "상위 완전 루프(대체가 아니라 추가)",
        composition: "위 구성 + VistaRemote + DataLuminary(+ BlockyEdu 교육 진입점)",
      },
      {
        name: "air-gapped",
        meaning: "오프라인 / 사내망 납품",
        composition: "단일 제품 또는 조합, 외부 통신 없음. 오프라인 License, 로컬 BYOK",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "배포 방식 보기",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "왜 공방인가",
    items: [
      {
        title: "오픈 프로토콜 우선",
        body: "통합은 OIDC / HTTP / MQTT / 이벤트만 사용합니다. 제품 간 런타임 import를 금지해 종속성과 이전 비용을 낮춥니다.",
      },
      {
        title: "업무는 분리, 아이덴티티는 통합",
        body: "각 제품이 자체 데이터베이스와 리소스 ACL을 보유합니다. 로그인과 상업적 권한은 중앙화되어 경험은 일관되지만 장애는 연쇄되지 않습니다.",
      },
      {
        title: "자체 호스팅은 일급 기능",
        body: "고객 IdP, 오프라인 License, 로컬 BYOK, 에어갭은 첫날부터 명세에 있었고 나중에 덧붙인 것이 아닙니다.",
      },
      {
        title: "성숙도를 정직하게 표기",
        body: "문서와 이 사이트는 production / pilot / lab / stub을 구분합니다. 코드가 있다는 것이 운영 준비를 뜻하지는 않습니다.",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "먼저 돌려 보고, 그다음에 결정하세요",
    lead: "해당 제품에는 7일 Trial이 있습니다. 생태계 전체에 영구 무료 플랜은 없습니다. 자체 호스팅이나 오프라인 납품이 필요하면 공방으로 연락해 주세요.",
    startTrial: "트라이얼 시작",
    contact: "영업 문의",
    github: "GitHub",
  },
};
