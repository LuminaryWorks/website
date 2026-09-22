import type { Locale } from "../config";
import type { Messages } from "../types";
import { en } from "./en";
import { es } from "./es";
import { it } from "./it";
import { ja } from "./ja";
import { ko } from "./ko";
import { nl } from "./nl";
import { pt } from "./pt";
import { zhCN } from "./zh-CN";
import { zhTW } from "./zh-TW";

export const MESSAGES: Record<Locale, Messages> = {
  "zh-CN": zhCN,
  en,
  "zh-TW": zhTW,
  es,
  pt,
  nl,
  it,
  ja,
  ko,
};
