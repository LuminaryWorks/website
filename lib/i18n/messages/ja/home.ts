export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · PLATFORM",
    title:
      "ログイン、請求、AI アクセスのためのプラットフォーム。パートナー製品は独立したままです。",
    lead: "LuminaryWorks は、統一アカウント、請求とエンタイトルメント、AI ゲートウェイ、通知、共有標準を提供します。DataLuminary、BlockyEdu、VistaRemote、VistaCast、DoerFlow、SyncroBrain はパートナー製品です。それぞれ自らのチームまたは事業体が運営し、独自のドメインと規約を持ち、LuminaryWorks プラットフォームを通じて利用できます。",
    primaryCta: "パートナー製品を見る",
    secondaryCta: "セルフホスト構成",
    docs: "開発者ドキュメント",
    diagramAria:
      "コントロールプレーンとパートナー製品プレーンの図です。上段は任意の共有コントロールプレーンで、Identity（OIDC）、Entitlement、lab と記された AI Gateway です。下段はパートナー製品プレーンで、それぞれ独自のデータベースと ACL を持ちます。破線は依存が任意であることを示します。",
    controlPlane: "CONTROL PLANE",
    controlNote: "任意の共有",
    productPlanes: "PRODUCT PLANES",
    productNote: "各製品が自前のデータベースと ACL を持つ",
    identity: "Identity",
    identityProto: "OIDC",
    entitlement: "Entitlement",
    aiGateway: "AI Gateway",
    lab: "lab",
  },
  facts: {
    items: [
      { value: "6", label: "掲載中のパートナー製品" },
      { value: "5", label: "凍結済みのデプロイ形態" },
      { value: "1", label: "共通のログイン・権利レイヤー" },
      { value: "5", label: "系統のオープンプロトコル" },
      { value: "NC", label: "Polyform 非商用ソース" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "一つの価値連鎖に並ぶパートナー製品",
    lead: "これらのパートナー製品は順に組み合わせできます。創造と学習、デバイスとデータ洞察、視覚セキュリティと遠隔運用、そしてエージェントと人の決済です。各段階は別々に運営されます。",
    diagramAria:
      "バリューチェーン：BlockyEdu で創り、SyncroBrain で繋ぎ、DataLuminary で見る。VistaCast の監ると VistaRemote の操るが分岐し、DoerFlow の稼ぐへ合流します。ノードをクリックすると該当製品のカードへスクロールします。",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "各パートナー製品は、独自のサイトと運営者を持ちます。",
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
        body: "パートナー製品向けの一つの OIDC ログイン。各製品は独自のロゴ、文言、運営者を保ちます",
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
