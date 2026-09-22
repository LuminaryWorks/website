export const deploy = {
  page: {
    index: "01",
    label: "DEPLOYMENT",
    title: "デプロイとセルフホスト",
    lead: "単体販売できる 1 製品から、エアギャップの閉ループまで。5 つの凍結済みプロファイルとケーパビリティモードのマトリクスで、ホステッドとセルフホストの両方を支えます。",
  },
  profiles: {
    index: "02",
    label: "PROFILES",
    title: "5 つのデプロイプロファイル",
    lead: "シナリオパックは複数の独立した Compose プロジェクトをオーケストレーションします。6 製品をひとつのプロジェクトに統合することはありません。",
    headers: {
      profile: "profile",
      meaning: "意味",
      minimum: "最小スタック",
      modes: "許可されるケーパビリティモード",
    },
    rows: [
      {
        profile: "standalone",
        meaning: "1 製品を単体で販売・運用",
        minimum: "製品プレーン 1 つ + 自前のデータベース",
        modes: "identity は任意。entitlement は off / offline_license 推奨。ai=off|local_byok",
      },
      {
        profile: "control-plane",
        meaning: "共有コントロールプレーンのみ",
        minimum: "Identity（+ Auth Gateway）+ Entitlement",
        modes: "services.identity の宣言が必須",
      },
      {
        profile: "agent-commerce",
        meaning: "基本の閉ループ",
        minimum: "VistaCast + SyncroBrain + DoerFlow（+ 任意のコントロールプレーン）",
        modes: "3 つの製品プレーンすべてが必須",
      },
      {
        profile: "smart-site",
        meaning: "上位の完全ループ（agent-commerce の上に積む）",
        minimum: "上記 + VistaRemote + DataLuminary（+ BlockyEdu 研修入口）",
        modes: "BlockyEdu の required は false でなければならない",
      },
      {
        profile: "air-gapped",
        meaning: "オフライン / 社内ネットワーク提供",
        minimum: "外向き通信のない単体製品またはバンドル",
        modes:
          "ai≠central。entitlement∈{off, offline_license}。identity は external_oidc 推奨、local も可",
      },
    ],
  },
  capabilities: {
    index: "03",
    label: "CAPABILITIES",
    title: "ケーパビリティモードのマトリクス",
    lead: "Control Manifest はすべてのモードを明示的に宣言します。未知のバージョンは起動を失敗させなければなりません。",
    modesLine:
      "identity=central|external_oidc|local · entitlement=off|shadow_read|enforce|offline_license · ai=off|central|local_byok · notification=none|smtp",
    headers: {
      capability: "ケーパビリティ",
      modes: "モード",
    },
    rows: [
      {
        capability: "identity",
        modes: "central · external_oidc · local（lab、pilot/production では拒否）",
      },
      { capability: "entitlement", modes: "off · shadow_read · enforce · offline_license" },
      {
        capability: "ai",
        modes: "off · central（lab、pilot/production では禁止） · local_byok",
      },
      { capability: "notification", modes: "none · smtp" },
    ],
  },
  installKit: {
    index: "04",
    label: "INSTALL",
    title: "インストールキット",
    lead: "luminaryworks-install はウィザード形式のプライベートインストールを提供します。製品を選び、ドメインと管理者アカウントを設定し、受け入れチェックを実行します。環境変数の手順はインストールバンドルとの乖離を避けるため、ドキュメントサイトに置いています。",
    docsLink: "インストール手順を読む",
  },
  airGapped: {
    index: "05",
    label: "AIR-GAPPED",
    title: "エアギャップ提供、オフライン License、ローカル BYOK",
    lead: "エアギャップ提供は仕様段階からの一級要件であり、後付けのパッチではありません。",
    points: [
      "air-gapped プロファイルは ai=central を禁止します。entitlement は off または offline_license のみです。",
      "offline_license は署名済みライセンスをローカルで検証し、中央 Entitlement に強く依存しません。",
      "local_byok はモデルのキーを顧客側に留めます。中央 AI Platform は現状 lab であり、本番に投入してはいけません。",
      "identity は顧客の IdP（external_oidc）の利用を推奨します。local ディレクトリモードは引き続き lab です。",
    ],
  },
  maturity: {
    index: "06",
    label: "MATURITY",
    title: "成熟度ラベル",
    lead: "コードがあることは、本番で使えることと同義ではありません。ドキュメントと manifest には stage ラベルが必要です。",
    headers: {
      label: "ラベル",
      meaning: "意味",
      wording: "許可される表現",
    },
    rows: [
      {
        label: "production",
        meaning: "本番稼働、販売可能、回帰テスト済み",
        wording: "「一般提供中」",
      },
      { label: "pilot", meaning: "実ユーザーあり、範囲は限定", wording: "「パイロット中」" },
      {
        label: "lab",
        meaning: "ローカルや社内ネットワークで動作、本番向け強化なし",
        wording: "「実験中」",
      },
      {
        label: "stub",
        meaning: "API は存在するが実装はプレースホルダー",
        wording: "「未実装」。収益化・計測は禁止",
      },
    ],
    callout:
      "ai=central は現状 lab です。AuthN なし、Entitlement のゲートなし、/ready なし。preflight が pilot/production を拒否します。",
  },
  cta: {
    title: "プライベート提供やオフライン提供が必要ですか？",
    lead: "工房の営業チームにご連絡ください。プロファイル、License、提供範囲についてご相談いただけます。",
    contact: "営業に問い合わせ",
  },
};
