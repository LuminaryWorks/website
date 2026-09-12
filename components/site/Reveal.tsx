/**
 * 区块入场容器：纯 CSS，无 JS、无 IntersectionObserver。
 *
 * 设计决策（spec/website-design.md §1 P5「动效最小」+ 变更记录）：
 * 不做滚动触发隐藏。滚动触发的 `opacity: 0` 会在 observer 未触发、打印、
 * 全页截图、恢复滚动位置等情况下把内容藏掉，收益远小于风险。
 * 这里只在首次绘制时做一次 240ms 淡入，动画结束后恒为可见；
 * `prefers-reduced-motion: reduce` 时完全不播放。
 */
import type { ReactNode } from "react";
import styles from "./Reveal.module.scss";

export function Reveal({ children }: { children: ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}
