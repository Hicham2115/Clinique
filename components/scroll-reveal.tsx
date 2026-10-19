"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section, footer");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
