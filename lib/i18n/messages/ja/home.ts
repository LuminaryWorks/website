export const home = {
  hero: {
    eyebrow: "LUMINARYWORKS · 启明工坊",
    title: "独立してデプロイできる 6 つの AI 製品と、共通のアイデンティティ・権利基盤",
    lead: "LuminaryWorks は OIDC、MQTT、REST、WebRTC、ONVIF といったオープンプロトコルの上に、AI ネイティブなオープンエコシステムを構築します。創造と学習、デバイス接続、データ分析、映像セキュリティ、リモート運用、エージェント協働がひとつのバリューチェーンを形成します。各製品は単体でもセルフホストでも提供でき、必要に応じて組み合わせられます。",
    primaryCta: "6 つの製品を見る",
    secondaryCta: "セルフホスト構成",
    docs: "開発者ドキュメント",
    diagramAria:
      "コントロールプレーンと製品プレーンの構成図。上段は任意で共有されるコントロールプレーンで、Identity（OIDC）、Entitlement、および lab と表示された AI Gateway があります。下段は 6 つの製品プレーンで、それぞれが自前のデータベースと ACL を持ちます。コントロールプレーンから製品プレーンへの破線は、依存関係が任意であることを示します。",
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
      { value: "6", label: "単体で販売できる製品" },
      { value: "5", label: "凍結済みのデプロイ形態" },
      { value: "1", label: "共通のログイン・権利レイヤー" },
      { value: "5", label: "系統のオープンプロトコル" },
      { value: "NC", label: "Polyform 非商用ソース" },
    ],
  },
  valueChain: {
    index: "02",
    label: "VALUE CHAIN",
    title: "6 つの製品が、ひとつのバリューチェーンを担う",
    lead: "まず創造と学習から始まり、デバイス接続とデータ分析へ、さらに映像セキュリティとリモート運用へ広がり、最後にエージェントと人間が一緒に決済します。",
    diagramAria:
      "バリューチェーン：BlockyEdu で創り、SyncroBrain で繋ぎ、DataLuminary で見る。VistaCast の監ると VistaRemote の操るが分岐し、DoerFlow の稼ぐへ合流します。ノードをクリックすると該当製品のカードへスクロールします。",
  },
  products: {
    index: "03",
    label: "PRODUCTS",
    title: "各製品は単体で売れる。組み合わせればループが閉じる。",
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
        body: "ひとつの OIDC ログインサービスが 6 ブランドを支え、各製品はロゴと文言を維持します",
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
    title: "なぜ工房なのか",
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
    lead: "対象製品には 7 日間の Trial があります。エコシステム全体で恒久的な無料プランは提供しません。セルフホストやオフライン提供が必要な場合は、工房までご連絡ください。",
    startTrial: "トライアルを開始",
    contact: "営業に問い合わせ",
    github: "GitHub",
  },
};
