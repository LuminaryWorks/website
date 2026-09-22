export const ecosystem = {
  page: {
    index: "01",
    label: "ECOSYSTEM",
    title: "エコシステムとアーキテクチャ",
    lead: "6 つの製品はそれぞれ独立して稼働し、オープンプロトコルと任意の共有コントロールプレーンを通じて連邦型のスイートを構成します。共有するのはアイデンティティ・権利・プロトコルであり、業務ロジックではありません。",
  },
  valueChain: {
    index: "01",
    label: "VALUE CHAIN",
    title: "バリューチェーンのループ",
    lead: "創造と学習がデバイス接続とデータ分析につながり、続いて映像セキュリティとリモート運用へ、最後にエージェントと人間が対等に決済する段階へ至ります。",
    steps: [
      {
        stage: "創る",
        product: "BlockyEdu",
        productLocal: "智码工坊",
        output: "スキル、Artifact、研修コンテンツ",
      },
      {
        stage: "繋ぐ",
        product: "SyncroBrain",
        productLocal: "万物智脑",
        output: "デバイス接続、テレメトリ、Incident、Safety Kernel",
      },
      {
        stage: "見る",
        product: "DataLuminary",
        productLocal: "数据明鉴",
        output: "レポート、ダッシュボード、エクスポート、embed",
      },
      {
        stage: "監る",
        product: "VistaCast",
        productLocal: "视界云遥",
        output: "映像イベント、アラート状態、確認応答",
      },
      {
        stage: "操る",
        product: "VistaRemote",
        productLocal: "视界远程",
        output: "リモートセッション、録画、監査",
      },
      {
        stage: "稼ぐ",
        product: "DoerFlow",
        productLocal: "智工网",
        output: "タスク、Receipt、元帳決済",
      },
    ],
  },
  platform: {
    index: "02",
    label: "PLATFORM",
    title: "共有プラットフォーム",
    lead: "コントロールプレーンは任意で、製品プレーンは自律したままです。中央サービスが停止したときも、各製品は manifest の宣言どおりに縮退し、Casbin が迂回されることはありません。",
    spineLabel: "CONTROL PLANE",
    unitsLabel: "CAPABILITY UNITS",
    items: [
      {
        title: "Identity（OIDC）",
        description:
          "6 ブランドに対してひとつの OIDC ログイン面を提供し、各製品はロゴと文言を維持します。",
        tags: ["Logto", "OIDC", "PKCE"],
      },
      {
        title: "中央 Entitlement",
        description:
          "プラン、Trial、License、シート、請求を一元管理します。商用権利は JWT に入れません。",
        tags: ["NestJS", "PostgreSQL"],
      },
      {
        title: "リソース ACL（PAL）",
        description:
          "リソース単位の ACL は各製品に残り、permissions はリソースとともに配布されます。",
        tags: ["Casbin", "PAL"],
      },
      {
        title: "AI ゲートウェイ",
        description: "マルチベンダーのモデルルーティング、キーボールト、使用量計測。",
        tags: ["lab", "BYOK"],
        lab: true,
      },
      {
        title: "Notification",
        description: "共有のメール・通知モジュールと統一された送信者アイデンティティ。",
        tags: ["@luminaryworks/notification"],
      },
      {
        title: "共有パッケージ",
        description:
          "アイデンティティ・ACL・権利のクライアントは npm パッケージとして配布し、リポジトリ間のソース参照は行いません。",
        tags: ["@luminaryworks/*"],
      },
    ],
  },
  integration: {
    index: "03",
    label: "INTEGRATION",
    title: "統合マトリクス",
    lead: "製品間の統合は OIDC、HTTP、MQTT、バージョン付きイベントのみを使います。ランタイム import や業務スキーマの共有は行いません。",
    allowedHeading: "許可",
    forbiddenHeading: "禁止",
    allowed: [
      "OIDC によるアイデンティティ連携",
      "HTTP REST の export / embed",
      "MQTT / CloudEvents",
      "明示的な紐付けレコード（暗黙の join は不可）",
    ],
    forbidden: [
      "製品間のランタイム import（file: パス、他製品ソースの直接参照）",
      "業務スキーマの共有 / 業務データベースの共有",
      "他製品の JWT をリソース認可に流用すること",
      "商用権利を JWT に埋め込むこと",
    ],
  },
  errors: {
    index: "04",
    label: "ERRORS",
    title: "統一エラーセマンティクス",
    lead: "HTTP ステータスコードの意味を製品間でそろえ、オーケストレーションと監査を容易にします。",
    items: [
      {
        code: "401",
        label: "アイデンティティ",
        description: "AuthN 失敗。アイデンティティ障害時に匿名アクセスへ縮退することはありません。",
      },
      {
        code: "402",
        label: "権利",
        description: "商用権利が不足（Trial 期限切れ、プラン対象外、クォータ枯渇）。",
      },
      {
        code: "403",
        label: "リソース ACL",
        description: "Casbin による拒否。License がリソース権限を迂回することはありません。",
      },
    ],
  },
  protocols: {
    index: "05",
    label: "PROTOCOLS",
    title: "オープンプロトコル一覧",
    lead: "まずオープン標準で統合し、ロックインと移行コストを抑えます。",
    items: ["OIDC", "MQTT", "REST", "WebRTC", "ONVIF"],
  },
  autonomy: {
    index: "06",
    label: "AUTONOMY",
    title: "製品自律性（ハード制約）",
    lead: "各製品が自前のデータベース、マイグレーション、Casbin ポリシー、リリースサイクルを持ちます。兄弟製品がすべて停止していても起動し、readiness を通過しなければなりません。",
    boundaries: [
      "各製品が自前のデータベース、マイグレーション、Casbin ポリシー、リリースサイクルを持つ",
      "兄弟製品がすべて停止していても起動し、readiness を通過する",
    ],
  },
};
