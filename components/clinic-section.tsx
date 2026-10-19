import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";

export default function ClinicSection() {
  return (
    <section className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.94fr_1.06fr] items-center gap-[5.5%] pt-[84px] pb-[72px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-6 max-[820px]:pt-[56px] max-[820px]:pb-[52px] max-[520px]:w-[calc(100%_-_36px)]" id="clinique">
      <div>
        <span className="text-[9px] font-extrabold tracking-[.14em] text-[#718097]">01 — LE LIEU</span>
        <h2 className="my-4 mb-5 text-[clamp(39px,4.2vw,61px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">Un accueil qui<br />vous met <em className="text-clinic not-italic">à l’aise.</em></h2>
        <div className="grid gap-3"><p className="m-0 max-w-[580px] text-[16px] leading-[1.8] text-[#202938] max-[520px]:text-[14px]">L’accueil, les espaces de soins et l’imagerie : découvrez l’univers de la clinique avant votre première visite.</p>
        <p className="m-0 max-w-[580px] text-[16px] leading-[1.8] text-[#202938] max-[520px]:text-[14px]">Accueil chaleureux, écoute attentive, expertise médicale et suivi personnalisé : tout est pensé pour une expérience sereine, fluide et rassurante, où la qualité des soins s’accompagne d’une véritable attention humaine.</p></div>
        <a className="mt-2 inline-flex items-center gap-2.5 border-b border-[#8096bc] pb-[3px] text-[13px] font-bold text-[#17243b] [&_svg]:transition-transform hover:[&_svg]:translate-x-1" href="#contact">Nous trouver <ArrowRight size={16} /></a>
      </div>
      <div className="relative min-h-[340px] overflow-hidden rounded-clinic bg-[#e8edf4] shadow-[0_16px_40px_rgba(28,51,87,.08)] max-[820px]:min-h-[300px] max-[520px]:min-h-[235px]">
        <Image className="object-cover" src="/images/clinic-reception.png" alt="La réception lumineuse de la Clinique Dentaire Khair" fill sizes="(max-width: 760px) 100vw, 55vw" />
        <div className="absolute right-[18px] bottom-[17px] left-[18px] flex w-fit items-center gap-3 rounded-[13px] bg-white/95 px-[17px] py-[11px] pl-[11px] shadow-[0_7px_20px_rgba(17,32,55,.11)]"><span className="grid size-[35px] place-items-center rounded-[10px] bg-[#eef4ff]"><Image alt="" aria-hidden="true" className="h-auto w-[27px]" height={210} src="/images/clinic-mark.png" width={408} /></span><p className="m-0 flex flex-col gap-1"><small className="text-[8px] font-extrabold tracking-[.12em] text-[#748196]">BIENVENUE CHEZ KHAIR</small><b className="text-xs">Un espace pensé autour de vous.</b></p></div>
      </div>
      <div className="col-span-full -mt-1 flex items-center gap-8 border-t border-line pt-4 text-xs text-[#526072] max-[820px]:col-auto max-[820px]:mt-0 max-[820px]:flex-wrap max-[820px]:gap-x-6 max-[820px]:gap-y-3 max-[520px]:items-start max-[520px]:flex-col"><div className="inline-flex items-center gap-[9px]"><Heart className="text-clinic" size={19}/><span>Écoute attentive</span></div><div className="inline-flex items-center gap-[9px]"><span className="size-[7px] rounded-full bg-clinic"/><span>Espaces apaisants</span></div><div className="inline-flex items-center gap-[9px]"><span className="size-[7px] rounded-full bg-clinic"/><span>Suivi personnalisé</span></div></div>
    </section>
  );
}
