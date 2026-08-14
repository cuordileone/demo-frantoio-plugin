"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Opt-in smooth scroll. Call this once near the app root (e.g. in a client
 * layout wrapper) only on projects that confirmed scroll-storytelling
 * during brainstorming — see docs/MOTION-DESIGN.md in the web-studio hub.
 * Not called anywhere in this template by default.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
