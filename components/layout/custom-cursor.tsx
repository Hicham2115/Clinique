"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>("[data-custom-cursor]");
    if (!cursor) return;

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");
    };
    const updateTarget = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;
      cursor.classList.toggle("is-hovering", Boolean(event.target.closest("a, button, input, select, textarea, summary, [role='button']")));
    };
    const hide = () => cursor.classList.remove("is-visible");

    document.addEventListener("pointermove", move);
    document.addEventListener("pointerover", updateTarget);
    document.addEventListener("pointerout", updateTarget);
    document.addEventListener("pointerleave", hide);

    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", updateTarget);
      document.removeEventListener("pointerout", updateTarget);
      document.removeEventListener("pointerleave", hide);
    };
  }, []);

  return <span aria-hidden="true" className="custom-cursor" data-custom-cursor />;
}
