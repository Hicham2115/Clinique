import Image from "next/image";
import ClinicImageMark from "@/components/clinic-image-mark";
import { ArrowUpRight, BookOpenText } from "lucide-react";

export default function TrainingSection() {
  return (
    <section className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-2 items-center gap-[7%] py-[74px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-6 max-[820px]:py-[50px] max-[520px]:w-[calc(100%_-_36px)]" id="formation">
      <div className="relative order-2 min-h-[340px] overflow-hidden rounded-clinic bg-[#e8edf4] shadow-[0_16px_40px_rgba(28,51,87,.08)] max-[820px]:order-none max-[820px]:min-h-[300px] max-[520px]:min-h-[235px]"><Image className="object-cover" src="/images/training-room.png" alt="Salle de formation et de rencontres professionnelles" fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-[9px] text-[8px] font-extrabold tracking-[.12em] text-[#172541]"><BookOpenText size={15}/> KHAIR / ESPACE FORMATION</span><ClinicImageMark className="right-4 bottom-4"/></div>
      <div className="order-1 max-[820px]:order-none"><span className="text-[9px] font-extrabold tracking-[.14em] text-[#718097]">TRANSMETTRE & ÉCHANGER</span><h2 className="my-[17px] mb-[21px] text-[clamp(38px,4vw,56px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">Le savoir prend vie<br />quand il se <em className="text-clinic not-italic">partage.</em></h2><p className="max-w-[480px] text-sm leading-[1.8] text-[#697588]">Un espace dédié aux futurs ateliers, rencontres professionnelles et démonstrations : l’occasion de partager les connaissances, de faire découvrir les innovations et d’échanger autour des soins dentaires et de l’imagerie médicale.</p><p className="mt-[18px] text-[11px] text-[#8a95a5]">Programme proposé : thèmes, intervenants et dates à valider par la clinique.</p><a className="mt-[7px] inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-clinic px-5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-[0_8px_24px_rgba(31,78,164,.2)]" href="#contact">Découvrir l’espace formation <ArrowUpRight size={16}/></a></div>
    </section>
  );
}
