export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "로그인, 청구, AI 액세스를 위한 플랫폼. 파트너 제품은 독립적으로 남습니다.",
    lead: "LuminaryWorks는 통합 계정, 청구와 권한, AI 게이트웨이, 알림, 공유 표준을 제공합니다. DataLuminary, BlockyEdu, VistaRemote, VistaCast, DoerFlow, SyncroBrain은 파트너 제품입니다. 각각 자신의 팀 또는 법인이 운영하고, 자신의 도메인과 약관을 가지며, LuminaryWorks 플랫폼을 통해 이용할 수 있습니다.",
    primaryCta: "파트너 제품 보기",
    secondaryCta: "자체 호스팅 배포",
    docs: "개발자 문서",
    diagramAria:
      "컨트롤 플레인과 파트너 제품 플레인의 그림입니다. 위쪽은 선택적 공유 컨트롤 플레인으로, Identity(OIDC), Entitlement, lab으로 표시된 AI Gateway입니다. 아래쪽은 파트너 제품 플레인이며, 각각 자신의 데이터베이스와 ACL을 가집니다. 점선은 의존성이 선택 사항임을 뜻합니다.",
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
      { value: "6", label: "소개된 파트너 제품" },
      { value: "5", label: "고정된 배포 프로파일" },
      { value: "1", label: "공유 아이덴티티·권한 계층" },
      { value: "5", label: "계열의 오픈 프로토콜" },
      { value: "NC", label: "Polyform 비상업 소스" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "하나의 가치 사슬에 놓인 파트너 제품",
    lead: "이 파트너 제품들은 순서대로 함께 쓸 수 있습니다. 창작과 학습, 장치와 데이터 인사이트, 시각 보안과 원격 운영, 그리고 에이전트와 사람의 정산입니다. 각 단계는 따로 운영됩니다.",
    diagramAria:
      "가치 사슬: BlockyEdu로 창작하고 SyncroBrain으로 연결하며 DataLuminary로 통찰합니다. VistaCast의 감시와 VistaRemote의 제어가 갈라져 나와 DoerFlow의 수익으로 합류합니다. 노드를 클릭하면 해당 제품 카드로 이동합니다.",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "각 파트너 제품은 자신의 사이트와 운영자를 가집니다.",
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
        body: "파트너 제품을 위한 하나의 OIDC 로그인. 각 제품은 자신의 로고, 문구, 운영자를 유지합니다",
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
    title: "왜 플랫폼인가",
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
    lead: "파트너가 제공하는 경우, 해당하는 제품에는 7일 체험이 있습니다. 영구 무료 등급은 없습니다. 자체 호스팅 인도 또는 파트너 참여는 플랫폼으로 메일을 보내 주세요.",
    startTrial: "트라이얼 시작",
    contact: "영업 문의",
    github: "GitHub",
  },
};
