import { ArrowUpRight, Heart } from "lucide-react";
import CurrentYear from "@/components/current-year";

export default function SiteFooter() {
  return (
    <footer className="bg-night px-[4.5vw] pt-9 pb-4 text-[#eaf0fa]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1.3fr_.9fr_.75fr_.65fr] gap-10 pb-8 max-[820px]:grid-cols-2 max-[820px]:gap-6"><div><a className="inline-flex items-center gap-[10px]" href="#accueil"><span className="grid size-[34px] place-items-center rounded-full border-2 border-clinic text-[13px] font-extrabold text-clinic">K</span><span className="flex flex-col gap-0.5 text-white"><b className="text-lg leading-none tracking-[.16em]">KHAIR</b><small className="text-[8px] font-bold tracking-[.18em]">CLINIQUE DENTAIRE</small></span></a><p className="mt-4 text-sm leading-[1.7] text-[#ccd5e3]">مصحة طب الأسنان خير<br/><span className="text-[10px]">Clinique Dentaire Khair</span></p></div>
        <div className="flex flex-col items-start gap-[11px] text-[11px] leading-[1.55] text-[#d4deed]"><small className="mb-[3px] text-[8px] font-extrabold tracking-[.16em] text-[#93a7c5]">NOUS TROUVER</small><span>Boulevard Panoramique<br/>Casablanca — Maroc</span><a className="inline-flex items-center gap-[5px] transition hover:text-[#91b6ff]" href="https://maps.google.com/?q=Clinique+dentaire+KHAIR+Casablanca" target="_blank" rel="noreferrer">Itinéraire <ArrowUpRight size={14}/></a></div>
        <div className="flex flex-col items-start gap-[11px] text-[11px] leading-[1.55] text-[#d4deed]"><small className="mb-[3px] text-[8px] font-extrabold tracking-[.16em] text-[#93a7c5]">NOUS CONTACTER</small><a className="transition hover:text-[#91b6ff]" href="tel:+212522228746">05 22 22 87 46</a><a className="inline-flex items-center gap-[5px] transition hover:text-[#91b6ff]" href="https://wa.me/212522228746" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14}/></a></div>
        <div className="flex flex-col items-start gap-[11px] text-[11px] leading-[1.55] text-[#d4deed]"><small className="mb-[3px] text-[8px] font-extrabold tracking-[.16em] text-[#93a7c5]">VOTRE PARCOURS</small><a className="transition hover:text-[#91b6ff]" href="#soins">Nos soins</a><a className="transition hover:text-[#91b6ff]" href="#imagerie">Imagerie</a><a className="transition hover:text-[#91b6ff]" href="#contact">Contact</a></div>
      </div>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-white/15 pt-[17px] text-[8px] font-bold tracking-[.12em] text-[#8798b2]"><span>© <CurrentYear/> CLINIQUE DENTAIRE KHAIR</span><span className="flex items-center gap-[7px]">CONÇU AVEC SOIN À CASABLANCA <Heart className="text-[#91b6ff]" size={13}/></span><a className="text-[#cbd6e7]" href="#accueil">HAUT DE PAGE ↑</a></div>
    </footer>
  );
}
