/**
 * `items` は確定コピー（spec/website-design.md §5）です。書き換えないでください。
 * /products のページ単位のキーは `items` の外に追加できます。
 */
export const products = {
  items: {
    blockyedu: {
      nameLocal: "智码工坊",
      role: "創る",
      oneLiner:
        "誰でも使える AI 創作プラットフォーム。ブロックから Web サイト・ミニアプリ・実物のおもちゃまで。VibeLearn はセルフホスト可能な社内研修を提供します。",
      chips: ["3 ペインのスタジオ", "統一 Artifact", "VibeLearn LMS"],
      audience: "クリエイター、小学生から社会人までの学習者、教員、企業研修の管理者",
    },
    syncrobrain: {
      nameLocal: "万物智脑",
      role: "繋ぐ",
      oneLiner:
        "コネクテッドデバイスのための AI ネイティブ OS。オンボーディング、デバイスシャドウ、OTA、エッジルール、デジタルツイン。",
      chips: ["マルチプロトコル収集", "エッジルール", "Safety Kernel"],
      audience: "ハードウェアメーカー、システムインテグレーター、充電・蓄電設備ベンダー",
    },
    dataluminary: {
      nameLocal: "数据明鉴",
      role: "見る",
      oneLiner:
        "AI でデータを照らす。ローコード BI、大画面ダッシュボード、ひとことでレポートを生成。",
      chips: ["DataView", "DataTalk", "DataInsight"],
      audience:
        "企業のデータチーム、運用部門、デバイス監視ダッシュボードが必要なハードウェアベンダー",
    },
    vistacast: {
      nameLocal: "视界云遥",
      role: "監る",
      oneLiner:
      "PCB / SMT の工位 AOI-lite。目視できるはんだ不良の兆候、ブリッジ、はんだ不足に加え、フローはんだと DIP 外観を見ます。高速インライン AOI 装置の代替ではありません。",
      chips: ["SMT はんだ", "フローはんだ", "DIP 外観"],
      audience: "電子製造・PCBA ライン、工位の証跡が必要な品質チーム",
    },
    vistaremote: {
      nameLocal: "视界远程",
      role: "操る",
      oneLiner:
        "クロスプラットフォームのリアルタイムリモートデスクトップと、セルフホストの録画分析。産業用 PC、エッジゲートウェイ、IT デスクトップ、リモート支援に。",
      chips: ["WebRTC リモート操作", "セッション録画の監査", "AI 要約"],
      audience: "産業運用、IT サービス事業者、リモートサポート、セルフホスト導入企業",
    },
    doerflow: {
      nameLocal: "智工网",
      role: "稼ぐ",
      oneLiner:
        "自律エージェントのための流動性プロトコル。タスクの公開・マッチング・エスクロー決済を担い、人間とエージェントを対等に扱います。",
      chips: ["タスクマーケット", "エージェント経済", "マルチチェーン決済"],
      audience: "Web3 と AI の開発者、デバイスおよびエージェントの運用者",
    },
  },
  card: {
    visitSite: "サイトを見る",
    viewSource: "ソース",
    trial7d: "7 日間 Trial",
    noTrial: "Trial なし",
    notSellable: "販売準備中",
    audienceLabel: "対象",
    operatorLabel: "",
    operatorNote: "",
    availableThrough: "単独納品 · ログインと請求は LuminaryWorks",
    legal: "製品規約",
  },
  page: {
    index: "01",
    label: "PRODUCTS",
    title: "製品",
    lead: "6 つの製品は LuminaryWorks で商業落地が検証済みです。単独でも価値連携チェーンとしても届けられ、統一ログインと請求はプラットフォームが提供します。",
  },
  compare: {
    index: "02",
    label: "COMPARE",
    title: "比較表",
    lead: "LuminaryWorks プラットフォームを通じて利用できる製品の役割、対象、サイト、運営者、販売状態、Trial。",
    headers: {
      product: "製品",
      operator: "ブランド",
      role: "役割",
      audience: "対象ユーザー",
      domain: "サイトドメイン",
      status: "商用ステータス",
      trial: "Trial",
    },
    footnote:
      "カタログ上の販売状態はプラットフォームの決済を指します。一つの運営者がすべての製品を運営するという意味ではありません。DoerFlow に Trial はありません。恒久の無料枠はありません。",
  },
};
