export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "생태계와 아키텍처",
    lead: "여섯 개 제품은 각각 독립적으로 동작하며, 오픈 프로토콜과 선택적 공유 컨트롤 플레인을 통해 연합형 스위트를 구성합니다. 공유하는 것은 아이덴티티와 권한, 프로토콜이며 업무 로직은 아닙니다.",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "가치 사슬 루프",
    lead: "창작과 학습이 디바이스 연결과 데이터 통찰로 이어지고, 이어서 영상 보안과 원격 운영으로, 마지막에는 에이전트와 사람이 동등하게 정산하는 단계에 이릅니다.",
    steps: [
      {
        stage: "창작",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "역량, Artifact, 교육 콘텐츠",
      },
      {
        stage: "연결",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "디바이스 온보딩, 텔레메트리, Incident, Safety Kernel",
      },
      {
        stage: "통찰",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "리포트, 대시보드, 내보내기, embed",
      },
      {
        stage: "감시",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "영상 이벤트, 경보 상태, 확인 처리",
      },
      {
        stage: "제어",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "원격 세션, 녹화, 감사",
      },
      {
        stage: "수익",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "작업, Receipt, 원장 정산",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "공유 플랫폼",
    lead: "컨트롤 플레인은 선택 사항이고 제품 플레인은 자율성을 유지합니다. 중앙 서비스가 멈추면 각 제품은 manifest에 선언된 대로 축소 동작하며, Casbin이 우회되는 일은 없습니다.",
    spineLabel: "CONTROL PLANE",
    unitsLabel: "CAPABILITY UNITS",
    items: [
      {
        title: "Identity(OIDC)",
        description:
          "여섯 브랜드를 위한 하나의 OIDC 로그인 표면이며, 제품마다 자체 로고와 문구를 유지합니다.",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "중앙 Entitlement",
        description:
          "플랜, Trial, License, 시트, 청구를 한곳에서 관리하며 상업적 권한은 JWT에 넣지 않습니다.",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "리소스 ACL(PAL)",
        description: "리소스 단위 ACL은 각 제품에 남고, permissions는 리소스와 함께 전달됩니다.",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "AI 게이트웨이",
        description: "다중 벤더 모델 라우팅, 키 볼트, 사용량 계측.",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "Notification",
        description: "공유 메일·알림 모듈과 통일된 발신 아이덴티티.",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "공유 패키지",
        description:
          "아이덴티티·ACL·권한 클라이언트는 npm 패키지로 배포하며, 저장소 간 소스 참조는 하지 않습니다.",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "통합 매트릭스",
    lead: "제품 간 통합은 OIDC, HTTP, MQTT, 버전이 있는 이벤트만 사용합니다. 런타임 import나 업무 스키마 공유는 없습니다.",
    allowedHeading: "허용",
    forbiddenHeading: "금지",
    allowed: [
      "OIDC 아이덴티티 페더레이션",
      "HTTP REST export / embed",
      "MQTT / CloudEvents",
      "명시적 연결 레코드(암묵적 join 불가)",
    ],
    forbidden: [
      "제품 간 런타임 import(file: 경로, 상대 제품 소스 직접 참조)",
      "업무 스키마 공유 / 업무 데이터베이스 공유",
      "다른 제품의 JWT를 리소스 인가에 재사용",
      "상업적 권한을 JWT에 담기",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "통일된 오류 시맨틱",
    lead: "HTTP 상태 코드의 의미를 제품 간에 통일해 오케스트레이션과 감사를 쉽게 합니다.",
    items: [
      {
        code: "401",
        label: "아이덴티티",
        description: "AuthN 실패. 아이덴티티 장애 시에도 익명 접근으로 축소되지 않습니다.",
      },
      {
        code: "402",
        label: "권한",
        description: "상업적 권한 부족(Trial 만료, 플랜 미포함, 쿼터 소진).",
      },
      {
        code: "403",
        label: "리소스 ACL",
        description: "Casbin 거부. License가 리소스 권한을 우회하는 일은 없습니다.",
      },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "오픈 프로토콜 목록",
    lead: "우선 오픈 표준으로 통합해 종속성과 이전 비용을 줄입니다.",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "제품 자율성(강제 제약)",
    lead: "각 제품이 자체 데이터베이스와 마이그레이션, Casbin 정책, 릴리스 주기를 보유합니다. 형제 제품이 모두 중단된 상태에서도 기동하고 readiness를 통과해야 합니다.",
    boundaries: [
      "각 제품이 자체 데이터베이스와 마이그레이션, Casbin 정책, 릴리스 주기를 보유한다",
      "형제 제품이 모두 중단된 상태에서도 기동하고 readiness를 통과한다",
    ],
  },
};
