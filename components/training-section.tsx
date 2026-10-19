import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const partnershipSteps = [
  [
    "01",
    "Prévention",
    "Étudier des actions de sensibilisation et d’information adaptées aux collaborateurs.",
  ],
  [
    "02",
    "Parcours dédié",
    "Prévoir un point de contact et des modalités de rendez-vous définies dans une convention.",
  ],
  [
    "03",
    "Relation durable",
    "Construire une collaboration sans partage de données médicales avec l’employeur.",
  ],
] as const;

export default function TrainingSection() {
  return (
    <section
      className="px-[4.5vw] py-[88px] max-[820px]:px-[22px] max-[820px]:py-[56px] max-[520px]:px-[18px]"
      id="formation"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[.92fr_1.08fr] overflow-hidden rounded-[30px] bg-white shadow-[0_28px_80px_rgba(24,42,70,.13)] max-[900px]:grid-cols-1 max-[520px]:rounded-[22px]">
        <div className="bg-white">
          <div className="relative aspect-square overflow-hidden bg-[#d8e1ec]">
            <Image
              className="object-cover object-center"
              src="/images/training-workshop-khair.webp"
              alt="Formation de dentistes dans un espace de la Clinique Dentaire Khair à Casablanca"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#101b2c]/15 via-transparent to-[#101b2c]/25" />
            <span className="absolute top-7 left-7 inline-flex items-center gap-2 rounded-full border border-white/65 bg-white/90 px-4 py-3 text-[9px] font-extrabold tracking-[.14em] text-[#172541] shadow-sm max-[520px]:top-4 max-[520px]:left-4 max-[520px]:px-3 max-[520px]:py-[10px]">
              <BookOpenText size={15} aria-hidden="true" /> KHAIR / ESPACE
              FORMATION
            </span>
          </div>

          <div className="p-8 max-[1100px]:p-7 max-[520px]:p-5">
            <span className="inline-flex items-center gap-3 text-[9px] font-extrabold tracking-[.17em] text-[#718097]">
              <span className="h-px w-7 bg-clinic" aria-hidden="true" />
              TRANSMETTRE &amp; ÉCHANGER
            </span>
            <h2 className="my-4 text-[clamp(32px,3.1vw,43px)] leading-[1.03] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[32px]">
              Le savoir prend vie quand il se{" "}
              <em className="text-clinic not-italic">partage.</em>
            </h2>
            <p className="text-[13px] leading-[1.7] text-[#354154]">
              Un espace dédié aux futurs ateliers, rencontres professionnelles
              et démonstrations : l’occasion de partager les connaissances, de
              faire découvrir les innovations et d’échanger autour des soins
              dentaires et de l’imagerie médicale.
            </p>
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#e5eaf1] pt-4 max-[520px]:flex-col max-[520px]:items-start">
              <p className="max-w-[230px] text-[11px] leading-[1.6] text-[#8994a4]">
                Programme proposé : thèmes, intervenants et dates à valider par
                la clinique.
              </p>
              <a
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-full bg-clinic px-5 text-[12px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-clinic-dark focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clinic"
                href="#contact"
              >
                Découvrir l’espace <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center bg-[#17243b] px-10 py-12 text-white max-[1100px]:px-8 max-[520px]:px-5 max-[520px]:py-9">
          <span
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4d83ff] via-[#8db2ff] to-transparent"
            aria-hidden="true"
          />
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-white/70 uppercase">
            <span className="h-[2px] w-7 bg-[#7fa5ff]" aria-hidden="true" />
            Partenariats entreprises
          </p>
          <h2 className="mb-5 max-w-[580px] text-[clamp(36px,3.5vw,52px)] leading-[1.02] font-medium tracking-[-.07em] text-white max-[520px]:text-[36px]">
            Le bien-être de vos équipes commence aussi par le{" "}
            <em className="text-[#8fb0ff] not-italic">sourire.</em>
          </h2>
          <p className="mb-7 max-w-[570px] text-[15px] leading-[1.7] text-white/75">
            Un parcours dédié aux directions RH et aux entreprises souhaitant
            étudier une collaboration avec la clinique.
          </p>

          <div className="mb-6 flex items-center gap-3 border-b border-white/15 pb-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#9bb9ff]">
              <HeartHandshake size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-[.14em] text-[#c5d2e8] uppercase">
                Un parcours pour les équipes
              </p>
              <p className="mt-1 text-[13px] text-white/65">
                Les étapes d’une collaboration
              </p>
            </div>
          </div>

          <div className="relative">
            {partnershipSteps.map(([number, title, description]) => (
              <article
                className="relative grid grid-cols-[38px_1fr] gap-3 py-3 first:pt-0 last:pb-1"
                key={number}
              >
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#7598e2]/45 bg-[#263b60] text-[10px] font-bold tracking-[.06em] text-[#c0d2ff]">
                  {number}
                </span>
                {number !== "03" && (
                  <span
                    className="absolute top-9 bottom-[-5px] left-[15px] w-px bg-[#7598e2]/35"
                    aria-hidden="true"
                  />
                )}
                <div>
                  <h3 className="mb-1 pt-1 text-[15px] font-semibold tracking-[-.02em] text-white">
                    {title}
                  </h3>
                  <p className="text-[12px] leading-[1.6] text-[#d1d9e7]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-[14px] bg-white/8 px-4 py-3 text-[11px] leading-[1.55] text-[#d8e2f1]">
            <ShieldCheck
              size={17}
              className="mt-0.5 shrink-0 text-[#9bb9ff]"
              aria-hidden="true"
            />
            <p>
              Aucune donnée médicale n’est partagée avec l’employeur. Aucun
              partenariat existant n’est présumé.
            </p>
          </div>

          <a
            href="#contact"
            className="group mt-6 inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-clinic px-5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1250d1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Échanger sur une collaboration
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
