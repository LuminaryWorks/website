/**
 * 六产品结构化数据（定稿，不可随意改动）。
 *
 * 依据：MetaRepo `spec/website-design.md` §5「成熟度诚实矩阵」与 `spec/products/index.md`。
 * - 可翻译文案（中文名 / 角色 / 一句话 / 能力 chips）在 `lib/i18n/messages/{zh,en}/products.ts` 的 `items`
 * - 本文件只放结构：代码、英文名、Logo、官网、源码、商业化状态
 *
 * 硬约束：
 * - 六产品均可售（status `sellable`）
 * - `doerflow` 无 Trial；VistaCast / SyncroBrain 当前无 Trial
 * - VistaRemote 官网一律 `remote.vistacast.dev`，禁止 `vistaremote.dev`
 * - 第二个链接用可验证的 GitHub 源码地址，不猜各产品 docs 子域
 */
import {
  BLOCKYEDU_URL,
  DATALUMINARY_URL,
  DOERFLOW_URL,
  SYNCROBRAIN_URL,
  VISTACAST_URL,
  VISTAREMOTE_URL,
} from "./urls";

export type ProductCode =
  | "blockyedu"
  | "syncrobrain"
  | "dataluminary"
  | "vistacast"
  | "vistaremote"
  | "doerflow";

/** `sellable` = 中央目录可售；`preview` = 可配置但不可售、不发 Trial */
export type ProductStatus = "sellable" | "preview";

/** `trial7d` = 7×24h，每用户每产品一次；`none` = 无 Trial */
export type ProductTrial = "trial7d" | "none";

export interface Product {
  code: ProductCode;
  nameEn: string;
  logo: string;
  site: string;
  repo: string;
  status: ProductStatus;
  trial: ProductTrial;
}

/** 顺序即价值链顺序：学+创 → 连 → 看 → 视 → 控 → 赚 */
export const PRODUCTS: readonly Product[] = [
  {
    code: "blockyedu",
    nameEn: "BlockyEdu",
    logo: "/brand/blockyedu-logo.svg",
    site: BLOCKYEDU_URL,
    repo: "https://github.com/BlockyEdu/BlockyEdu",
    status: "sellable",
    trial: "trial7d",
  },
  {
    code: "syncrobrain",
    nameEn: "SyncroBrain",
    logo: "/brand/syncrobrain-logo.svg",
    site: SYNCROBRAIN_URL,
    repo: "https://github.com/SyncroBrain/SyncroBrain",
    status: "sellable",
    trial: "none",
  },
  {
    code: "dataluminary",
    nameEn: "DataLuminary",
    logo: "/brand/dataluminary-logo.svg",
    site: DATALUMINARY_URL,
    repo: "https://github.com/DataLuminary/DataLuminary",
    status: "sellable",
    trial: "trial7d",
  },
  {
    code: "vistacast",
    nameEn: "VistaCast",
    logo: "/brand/vistacast-logo.svg",
    site: VISTACAST_URL,
    repo: "https://github.com/VistaCast/VistaCast",
    status: "sellable",
    trial: "none",
  },
  {
    code: "vistaremote",
    nameEn: "VistaRemote",
    logo: "/brand/vistaremote-logo.svg",
    site: VISTAREMOTE_URL,
    repo: "https://github.com/VistaRemote/VistaRemote",
    status: "sellable",
    trial: "trial7d",
  },
  {
    code: "doerflow",
    nameEn: "DoerFlow",
    logo: "/brand/doerflow-logo.svg",
    site: DOERFLOW_URL,
    repo: "https://github.com/DoerFlow/DoerFlow",
    status: "sellable",
    trial: "none",
  },
] as const;

export function getProduct(code: ProductCode): Product {
  const found = PRODUCTS.find((p) => p.code === code);
  if (!found) throw new Error(`Unknown product: ${code}`);
  return found;
}
