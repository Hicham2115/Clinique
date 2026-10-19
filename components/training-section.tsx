import Image from "next/image";
import { ArrowUpRight, BookOpenText } from "lucide-react";

export default function TrainingSection() {
  return (
    <section className="relative mx-auto w-[min(100%_-_9vw,1280px)] py-[100px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:py-[64px] max-[520px]:w-[calc(100%_-_36px)] max-[520px]:py-12" id="formation">
      <div className="relative min-h-[490px] overflow-hidden rounded-[30px] bg-[#e7edf6] max-[820px]:min-h-0 max-[820px]:overflow-visible max-[820px]:rounded-[22px]">
        <div className="absolute inset-0 max-[820px]:relative max-[820px]:h-[390px] max-[520px]:h-[260px] max-[820px]:overflow-hidden max-[820px]:rounded-[22px]">
          <Image className="object-cover object-center" src="/images/training-workshop-khair.png" alt="Formation de dentistes dans un espace de la Clinique Dentaire Khair à Casablanca" fill sizes="(max-width: 820px) 100vw, 92vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101b2c]/65 via-[#101b2c]/20 to-transparent max-[820px]:bg-gradient-to-t max-[820px]:from-[#101b2c]/45 max-[820px]:via-transparent" />
          <span className="absolute top-7 right-7 inline-flex items-center gap-2 rounded-full border border-white/65 bg-white/90 px-4 py-3 text-[9px] font-extrabold tracking-[.14em] text-[#172541] shadow-sm max-[520px]:top-4 max-[520px]:right-4 max-[520px]:px-3 max-[520px]:py-[10px]"><BookOpenText size={15}/> KHAIR / ESPACE FORMATION</span>
        </div>

        <div className="relative z-10 flex min-h-[490px] items-center px-[7%] py-14 max-[820px]:min-h-0 max-[820px]:-mt-12 max-[820px]:px-5 max-[820px]:py-0 max-[820px]:pb-5">
          <div className="w-full max-w-[620px] rounded-[24px] border border-white/70 bg-white/95 p-7 shadow-[0_24px_70px_rgba(13,31,61,.18)] backdrop-blur-sm max-[520px]:rounded-[19px] max-[520px]:p-6">
            <span className="inline-flex items-center gap-3 text-[9px] font-extrabold tracking-[.17em] text-[#718097]"><span className="h-px w-7 bg-clinic"/> TRANSMETTRE & ÉCHANGER</span>
            <h2 className="my-4 text-[clamp(34px,3.4vw,45px)] leading-[1.02] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:my-4 max-[520px]:text-[34px]">Le savoir prend vie quand il se <em className="text-clinic not-italic">partage.</em></h2>
            <p className="text-[13px] leading-[1.7] text-[#354154] max-[520px]:text-[13px]">Un espace dédié aux futurs ateliers, rencontres professionnelles et démonstrations : l’occasion de partager les connaissances, de faire découvrir les innovations et d’échanger autour des soins dentaires et de l’imagerie médicale.</p>
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#e5eaf1] pt-4 max-[520px]:mt-5 max-[520px]:flex-col max-[520px]:items-start">
              <p className="max-w-[230px] text-[11px] leading-[1.6] text-[#8994a4]">Programme proposé : thèmes, intervenants et dates à valider par la clinique.</p>
              <a className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-full bg-clinic px-5 text-[12px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-[0_8px_24px_rgba(31,78,164,.2)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clinic" href="#contact">Découvrir l’espace <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </div>
      </div>
      <span aria-hidden="true" className="absolute bottom-7 left-0 hidden -rotate-90 origin-bottom-left text-[8px] font-extrabold tracking-[.2em] text-[#9aa5b4] min-[821px]:block">KHAIR · TRANSMISSION DU SAVOIR</span>
    </section>
  );
}
