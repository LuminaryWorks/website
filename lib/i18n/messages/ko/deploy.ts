export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "배포와 자체 호스팅",
    lead: "단독 판매 가능한 한 제품부터 에어갭 폐쇄 루프까지. 고정된 다섯 가지 프로파일과 역량 모드 매트릭스로 호스팅과 자체 호스팅 두 경로를 모두 지원합니다.",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "다섯 가지 배포 프로파일",
    lead: "시나리오 팩은 독립적인 여러 Compose 프로젝트를 오케스트레이션합니다. 여섯 제품을 하나의 프로젝트로 합치지 않습니다.",
    headers: {
      profile: "profile",
      meaning: "의미",
      minimum: "최소 스택",
      modes: "허용되는 역량 모드",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "단일 제품을 단독으로 판매·운영",
        minimum: "제품 플레인 1개 + 자체 데이터베이스",
        modes: "identity는 자유. entitlement는 off / offline_license 권장. ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "공유 컨트롤 플레인만 배포",
        minimum: "Identity(+ Auth Gateway) + Entitlement",
        modes: "services.identity 선언 필수",
      },
      {
        profile: "agent-commerce",
        meaning: "기본 폐쇄 루프",
        minimum: "VistaCast + SyncroBrain + DoerFlow(+ 선택적 컨트롤 플레인)",
        modes: "세 개의 제품 플레인 모두 필수",
      },
      {
        profile: "smart-site",
        meaning: "상위 완전 루프(agent-commerce 위에 얹음)",
        minimum: "위 구성 + VistaRemote + DataLuminary(+ BlockyEdu 교육 진입점)",
        modes: "BlockyEdu required는 false여야 함",
      },
      {
        profile: "air-gapped",
        meaning: "오프라인 / 사내망 납품",
        minimum: "외부 통신이 없는 단일 제품 또는 번들",
        modes:
          "ai≠central. entitlement∈{off, offline_license}. identity는 external_oidc 권장, local 허용",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "역량 모드 매트릭스",
    lead: "Control Manifest는 모든 모드를 명시적으로 선언합니다. 알 수 없는 버전은 기동을 실패시켜야 합니다.",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "역량",
      modes: "모드",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local(lab, pilot/production에서 거부)",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      {
        capability: "ai",
        modes: "off · central(lab, pilot/production 진입 금지) · local_byok",
      },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "설치 키트",
    lead: "luminaryworks-install은 위저드 방식의 프라이빗 설치를 제공합니다. 제품을 선택하고 도메인과 관리자 계정을 설정한 뒤 인수 검사를 실행합니다. 환경 변수 단계별 안내는 설치 번들과 어긋나지 않도록 문서 사이트에 둡니다.",
    docsLink: "설치 문서 보기",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "에어갭 납품, 오프라인 License, 로컬 BYOK",
    lead: "에어갭 납품은 명세 단계부터의 일급 요건이며 사후 패치가 아닙니다.",
    points: [
      "air-gapped 프로파일은 ai=central을 금지합니다. entitlement는 off 또는 offline_license만 가능합니다.",
      "offline_license는 서명된 라이선스를 로컬에서 검증하며 중앙 Entitlement에 강하게 의존하지 않습니다.",
      "local_byok는 모델 키를 고객 측에 남깁니다. 중앙 AI Platform은 현재 lab이며 운영에 투입해서는 안 됩니다.",
      "identity는 고객 IdP(external_oidc) 사용을 권장합니다. local 디렉터리 모드는 여전히 lab입니다.",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "성숙도 라벨",
    lead: "코드가 있다는 것이 운영 준비를 뜻하지는 않습니다. 문서와 manifest에는 stage 라벨이 있어야 합니다.",
    headers: {
      label: "라벨",
      meaning: "의미",
      wording: "허용되는 표현",
    },
    rows: [
      {
        label: "production",
        meaning: "운영 중, 판매 가능, 회귀 테스트 완비",
        wording: "「정식 제공」",
      },
      { label: "pilot", meaning: "실제 사용자가 있고 범위는 제한적", wording: "「파일럿」" },
      {
        label: "lab",
        meaning: "로컬이나 사내망에서 동작, 운영 강화 없음",
        wording: "「실험 중」",
      },
      {
        label: "stub",
        meaning: "API는 있지만 구현은 자리표시자",
        wording: "「미구현」. 수익화와 계측 금지",
      },
    ],
    callout:
      "ai=central은 현재 lab입니다. AuthN 없음, Entitlement 게이트 없음, /ready 없음. preflight가 pilot/production을 거부합니다.",
  },
  cta: {
    title: "프라이빗 또는 오프라인 납품이 필요하신가요?",
    lead: "공방 영업팀에 연락해 프로파일과 License, 납품 범위를 논의해 보세요.",
    contact: "영업 문의",
  },
};
