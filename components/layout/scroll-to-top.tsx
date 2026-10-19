"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis((instance) => {
    setIsVisible((visible) => {
      const shouldShow = instance.scroll > 500;
      return visible === shouldShow ? visible : shouldShow;
    });
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (lenis) {
      lenis.scrollTo(0, {
        duration: reduceMotion ? 0 : 1.1,
        immediate: reduceMotion,
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      aria-label="Revenir en haut de la page"
      className={`fixed right-6 bottom-6 z-[60] grid size-12 place-items-center rounded-full border border-white/25 bg-[#2765e8] text-white shadow-[0_8px_28px_rgba(15,40,90,.28)] transition-[opacity,transform,background-color] duration-300 hover:scale-105 hover:bg-[#1250d1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2765e8] max-[520px]:right-4 max-[520px]:bottom-4 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      disabled={!isVisible}
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <ArrowUp aria-hidden="true" size={20} strokeWidth={2.2} />
    </button>
  );
}
