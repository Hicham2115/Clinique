"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ autoRaf: true, anchors: true, smoothWheel: true, duration: 1.1 }}>
      {children}
    </ReactLenis>
  );
}
