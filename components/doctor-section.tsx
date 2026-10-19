import Image from "next/image";
import ClinicImageMark from "@/components/clinic-image-mark";
import { ArrowRight } from "lucide-react";

export default function DoctorSection() {
  return (
    <section
      className="bg-white py-[92px] max-[820px]:py-[58px] max-[520px]:py-[48px]"
      id="praticien"
    >
      <div className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.82fr_1.18fr] items-center gap-[7%] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-8 max-[520px]:w-[calc(100%_-_36px)]">
        <div className="relative min-h-[430px] overflow-hidden rounded-[26px] bg-[#e8edf4] shadow-[0_24px_58px_rgba(28,51,87,.13)] max-[820px]:min-h-[360px] max-[520px]:min-h-[270px]">
          <Image
            className="object-cover"
            src="/images/dental-room.webp"
            alt="Espace de consultation de la clinique dentaire"
            fill
            sizes="(max-width: 820px) 100vw, 42vw"
          />
          <ClinicImageMark className="top-4 left-4" />
          <span className="absolute right-4 bottom-4 rounded-full border border-white/75 bg-white/95 px-4 py-2.5 text-[9px] font-bold tracking-[0.12em] text-[#24344f] shadow-[0_5px_18px_rgba(17,32,55,.1)]">
            UN ESPACE DE CONSULTATION
          </span>
        </div>

        <div className="max-w-[680px]">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-[#657894] uppercase">
            <span className="h-[2px] w-7 bg-clinic" aria-hidden="true" />
            03 — Le praticien &amp; son approche
          </p>
          <h2 className="mb-6 text-[clamp(42px,4.1vw,60px)] leading-[1.03] font-medium tracking-[-0.065em] text-[#141a25] max-[520px]:text-[40px]">
            La confiance commence
            <br className="max-[520px]:hidden" /> par une{" "}
            <span className="text-clinic">rencontre.</span>
          </h2>
          <p className="mb-4 max-w-[640px] text-[16px] leading-[1.8] text-[#202938] max-[520px]:text-[14px]">
            Fort de 30 ans d’expérience, le Dr Khair propose une prise en charge
            complète et personnalisée, couvrant dix disciplines dentaires, des
            soins courants aux soins pédiatriques, en passant par la chirurgie
            orale, l’implantologie et l’évaluation des urgences dentaires.
          </p>
          <p className="max-w-[640px] text-[16px] leading-[1.8] text-[#202938] max-[520px]:text-[14px]">
            À chaque étape, votre praticien prend le temps d’évaluer votre
            situation et de vous expliquer les possibilités de prise en charge.
          </p>

          <a
            href="#rendez-vous"
            className="group mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#9fb5d5] text-[13px] font-semibold text-[#213654] transition-colors hover:border-clinic hover:text-clinic focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic"
          >
            Préparer votre première visite
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={16}
              aria-hidden="true"
            />
          </a>

          <div className="mt-7 flex items-center gap-4 border-t border-[#e5ebf3] pt-5">
            <strong className="text-[38px] leading-none font-semibold tracking-[-0.06em] text-clinic">
              30<span className="text-[24px]">+</span>
            </strong>
            <span className="flex flex-col gap-1 text-[10px] font-bold tracking-[0.13em] text-[#33445f] uppercase">
              Années d’expérience
              <span className="text-[11px] font-normal tracking-normal text-[#7b8798] normal-case">
                Une pratique construite dans la durée
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
