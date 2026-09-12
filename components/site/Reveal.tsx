"use client";

import { type ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from "./Reveal.module.scss";

type Phase = "static" | "hidden" | "visible";

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (!vh) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < vh && rect.bottom > 0;
    if (inViewport) {
      return;
    }

    setPhase("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const className = [
    styles.root,
    phase === "hidden" ? styles.revealHidden : "",
    phase === "visible" ? styles.revealVisible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
