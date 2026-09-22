/**
 * `items`는 확정된 카피(spec/website-design.md §5)입니다. 다시 쓰지 마세요.
 * /products 페이지 단위 키는 `items` 밖에 추가할 수 있습니다.
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "창작",
      oneLiner:
        "누구나 쓰는 AI 창작 플랫폼. 블록에서 웹사이트, 미니앱, 실물 장난감까지. VibeLearn은 자체 호스팅이 가능한 기업 교육을 제공합니다.",
      chips: ["3분할 스튜디오", "통합 Artifact", "VibeLearn LMS"],
      audience: "크리에이터, 초등부터 성인까지의 학습자, 교사, 기업 교육 담당자",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "연결",
      oneLiner:
        "연결된 디바이스를 위한 AI 네이티브 운영체제. 온보딩, 디바이스 섀도, OTA, 엣지 규칙, 디지털 트윈.",
      chips: ["다중 프로토콜 수집", "엣지 규칙", "Safety Kernel"],
      audience: "하드웨어 제조사, 시스템 통합업체, 충전·에너지 저장 장비 공급사",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "통찰",
      oneLiner: "AI로 데이터를 비춥니다. 로코드 BI, 대형 화면 대시보드, 한 문장으로 만드는 리포트.",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience: "기업 데이터 팀, 운영 부서, 디바이스 모니터링 대시보드가 필요한 하드웨어 공급사",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "감시",
      oneLiner:
        "물리 공간을 프로그래밍 가능한 영상 이벤트 스트림으로 바꿉니다. 기존 ONVIF/RTSP 카메라를 재활용하고 엣지에서 구조화된 이벤트를 만듭니다.",
      chips: ["ONVIF/RTSP", "방문객 수와 침입 감지", "Webhook 이벤트"],
      audience: "체인 리테일, 물류·창고, 중소 공장, 시설 보안",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "제어",
      oneLiner:
        "크로스플랫폼 실시간 원격 데스크톱과 자체 호스팅 녹화 분석. 산업용 PC, 엣지 게이트웨이, IT 데스크톱, 원격 지원에 적합합니다.",
      chips: ["WebRTC 원격 제어", "세션 녹화 감사", "AI 요약"],
      audience: "산업 운영, IT 서비스 업체, 원격 지원, 자체 호스팅 고객",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "수익",
      oneLiner:
        "자율 에이전트를 위한 유동성 프로토콜. 작업 게시와 매칭, 에스크로 정산을 담당하며 사람과 에이전트를 동등하게 다룹니다.",
      chips: ["작업 마켓플레이스", "에이전트 경제", "멀티체인 정산"],
      audience: "Web3·AI 개발자, 디바이스 및 에이전트 운영자",
    },
  },
  card: {
    visitSite: "사이트 방문",
    viewSource: "소스",
    trial7d: "7일 Trial",
    noTrial: "Trial 없음",
    notSellable: "판매 준비 중",
    audienceLabel: "대상",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "제품 개요",
    lead: "개별 판매가 가능한 여섯 개의 AI 제품. 각 제품이 자체 데이터베이스와 ACL을 보유하며, OIDC와 오픈 프로토콜로 필요할 때 조합됩니다.",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "비교표",
    lead: "역할, 대상 고객, 도메인, 상업화 상태, Trial은 모두 제품 명세에서 가져오며 이 페이지에서 다시 쓰지 않습니다.",
    headers: {
      product: "제품",
      role: "역할",
      audience: "대상 고객",
      domain: "사이트 도메인",
      status: "상업화 상태",
      trial: "Trial",
    },
    footnote:
      "여섯 제품 모두 판매 가능합니다. DoerFlow에는 Trial이 없습니다. 생태계 전체에 영구 무료 플랜은 없습니다.",
  },
};
