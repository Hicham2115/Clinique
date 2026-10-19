import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/smooth-scroll";
import CustomCursor from "@/components/layout/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinique Dentaire Khair | Casablanca",
  description:
    "Une approche attentive de la santé bucco-dentaire à Casablanca. Découvrez les soins, l’imagerie et l’équipe de la Clinique Dentaire Khair.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
