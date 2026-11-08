export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title: "AI SaaS 基盤サービスプラットフォーム",
    lead: "統一アカウント、請求とエンタイトルメント、AI ゲートウェイ、通知、共有標準を提供。各製品は単独でも、チェーンとしても届けられます。",
    leadSecondary: "6 つの製品は本プラットフォームで商業落地が検証済みで、ひとつの価値連携チェーンを形成しています。",
    primaryCta: "製品を見る",
    secondaryCta: "セルフホスト構成",
    docs: "開発者ドキュメント",
    diagramAria:
      "コントロールプレーンとパートナー製品プレーンの図です。上段は任意の共有コントロールプレーンで、Identity（OIDC）、Entitlement、lab と記された AI Gateway です。下段はパートナー製品プレーンで、それぞれ独自のデータベースと ACL を持ちます。破線は依存が任意であることを示します。",
    controlPlane: "CONTROL PLANE",
    controlNote: "任意の共有",
    productPlanes: "PRODUCT PLANES",
    productNote: "単独で届けられる",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
    facts: {
    items: [
      { value: "6 製品", label: "商業落地を検証済み" },
      { value: "1 つの基盤", label: "ログイン · 請求 · AI ゲートウェイ" },
      { value: "5 形態", label: "単品からエアギャップまで" },
      { value: "オープンソース", label: "Polyform 非商用" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "すでに一つの価値連携チェーンができている",
    lead: "創造と学習から、デバイス接続とデータ洞察、視覚セキュリティと遠隔運用へ、そしてエージェントと人の決済まで。各製品は単独でも届けられ、つなぐとクローズドループになります。",
    diagramAria:
      "バリューチェーン：BlockyEdu で創り、SyncroBrain で繋ぎ、DataLuminary で見る。VistaCast の監ると VistaRemote の操るが分岐し、DoerFlow の稼ぐへ合流します。ノードをクリックすると該当製品のカードへスクロールします。",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "6 製品。それぞれ単独で届けられる",
  },
  platform: {
    index: "04",
    label: "PLATFORM",
    title: "共有するのはアイデンティティ・権利・プロトコルであり、業務ロジックではありません。",
    lab: "lab",
    cards: [
      {
        id: "identity",
        title: "統合ログイン · Identity",
        body: "製品が接続できる一つの OIDC ログイン。各製品は独自のロゴと文言を保ちます",
        tags: ["Logto", "OIDC", "PKCE"],
        lab: false,
      },
      {
        id: "entitlement",
        title: "中央権利管理 · Entitlement",
        body: "プラン、Trial、License、シート、決済を一元管理します。商用権利は JWT に入れません",
        tags: ["NestJS", "PostgreSQL"],
        lab: false,
      },
      {
        id: "pal",
        title: "リソース権限 · PAL",
        body: "リソース単位の ACL は各製品に残り、permissions はリソースとともに配布されます",
        tags: ["Casbin", "PAL"],
        lab: false,
      },
      {
        id: "aiGateway",
        title: "AI Gateway",
        body: "マルチベンダーのモデル接続、キーボールト、使用量計測（現状 lab、本番投入不可）",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        id: "notification",
        title: "通知",
        body: "共有のメール・通知モジュールと統一された送信者アイデンティティ",
        tags: ["@luminaryworks/notification"],
        lab: false,
      },
      {
        id: "sharedLibs",
        title: "共有ライブラリ",
        body: "アイデンティティ・権限・権利のクライアントとツールは npm パッケージとして配布し、リポジトリ間のソース参照は行いません",
        tags: ["@luminaryworks/*"],
        lab: false,
      },
    ],
    calloutLabel: "統一エラーセマンティクス",
    calloutCodes: "401 アイデンティティ · 402 権利 · 403 リソース ACL",
    emphasis:
      "各製品が自前のデータベース、マイグレーション、Casbin ポリシー、リリースサイクルを持ちます。兄弟製品がすべて停止していても起動し、ready チェックを通過します。",
  },
  deployment: {
    index: "05",
    label: "DEPLOYMENT",
    title: "単体製品から、エアギャップの閉ループまで",
    headers: {
      profile: "profile",
      meaning: "意味",
      composition: "最小構成",
    },
    profiles: [
      {
        name: "standalone",
        meaning: "単一製品を独立してデプロイ・販売",
        composition: "製品プレーン 1 つ + 自前のデータベース",
      },
      {
        name: "control-plane",
        meaning: "共有コントロールプレーンのみ",
        composition: "Identity（+ Auth Gateway）+ Entitlement",
      },
      {
        name: "agent-commerce",
        meaning: "基本の組み合わせループ",
        composition: "VistaCast + SyncroBrain + DoerFlow",
      },
      {
        name: "smart-site",
        meaning: "上位の完全ループ（置き換えではなく追加）",
        composition: "上記 + VistaRemote + DataLuminary（+ BlockyEdu 研修入口）",
      },
      {
        name: "air-gapped",
        meaning: "オフライン / 社内ネットワーク提供",
        composition: "単体または組み合わせ、外向き通信なし。オフライン License、ローカル BYOK",
      },
    ],
    modes:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    cta: "デプロイ方式を見る",
  },
  why: {
    index: "06",
    label: "WHY",
    title: "なぜプラットフォームか",
    items: [
      {
        title: "オープンプロトコル優先",
        body: "統合は OIDC / HTTP / MQTT / イベントのみで行います。製品間のランタイム import を禁止し、ロックインと移行コストを下げます。",
      },
      {
        title: "業務は分離、アイデンティティは統一",
        body: "各製品が自前のデータベースとリソース ACL を持ちます。ログインと商用権利は中央化されるため、体験は一貫しつつ障害は連鎖しません。",
      },
      {
        title: "セルフホストは一級市民",
        body: "顧客自身の IdP、オフライン License、ローカル BYOK、エアギャップは初日から仕様に含まれており、後付けではありません。",
      },
      {
        title: "成熟度を正直に表示",
        body: "ドキュメントとこのサイトでは production / pilot / lab / stub を区別します。コードがあることは、本番で使えることと同義ではありません。",
      },
    ],
  },
  cta: {
    index: "07",
    label: "CTA",
    title: "まず動かし、それから決める",
    lead: "パートナーが提供する場合、対象製品には 7 日間のトライアルがあります。恒久の無料枠はありません。セルフホストでの導入、またはパートナー参加はプラットフォームへメールしてください。",
    startTrial: "トライアルを開始",
    contact: "営業に問い合わせ",
    github: "GitHub",
  },
};
