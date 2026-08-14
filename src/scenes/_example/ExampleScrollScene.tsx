"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reference pattern for a pinned, scrub-linked scroll scene — see
 * docs/MOTION-DESIGN.md in the web-studio hub for the full rules this
 * follows (scrub timeline, gsap.context() cleanup, prefers-reduced-motion).
 * Not rendered by any page in this template by default: copy this pattern
 * into a real scene component once a project's brainstorming confirms
 * scroll-storytelling, and replace the placeholder box with real content.
 */
export function ExampleScrollScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !boxRef.current) return;

    // xPercent/yPercent center the box independently of x/y, and survive
    // the .to({ x: ... }) tweens below — a plain CSS `transform` would be
    // overwritten by GSAP the first time it touches the transform. Applied
    // unconditionally (even under prefers-reduced-motion) so the box stays
    // centered whether or not the scroll animation runs.
    gsap.set(boxRef.current, { xPercent: -50, yPercent: -50 });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      })
        .to(boxRef.current, { x: 200, rotation: 90, ease: "none" })
        .to(boxRef.current, { scale: 2, ease: "none" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ height: "300vh", position: "relative" }}>
      <div
        ref={boxRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 120,
          height: 120,
          background: "currentColor",
        }}
      />
    </section>
  );
}
