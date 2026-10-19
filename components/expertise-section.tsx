import {
  Activity,
  ArrowRight,
  Baby,
  CircleDot,
  Gem,
  Heart,
  PhoneCall,
  Scan,
  Smile,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Image from "next/image";

const disciplines = [
  {
    name: "Dentisterie générale",
    image: "/images/services/general-dentistry.webp",
    imageAlt: "Dentiste réalisant un examen dentaire dans un cabinet lumineux",
    description:
      "Consultations, bilans bucco-dentaires, prévention et soins courants : un premier point de contact pour votre santé dentaire.",
    Icon: Stethoscope,
  },
  {
    name: "Parodontologie",
    image: "/images/services/periodontology.webp",
    imageAlt: "Examen dentaire attentif dans un cabinet moderne",
    description:
      "Un parcours consacré aux gencives et aux tissus qui soutiennent les dents, avec une prise en charge définie après examen.",
    Icon: Heart,
  },
  {
    name: "Endodontie",
    image: "/images/services/endodontics.webp",
    imageAlt:
      "Modèle anatomique d’une dent utilisé pour expliquer les soins endodontiques",
    description:
      "Des soins portant sur l’intérieur de la dent et ses canaux, selon le bilan et les indications du praticien.",
    Icon: Activity,
  },
  {
    name: "Chirurgie orale",
    image: "/images/services/oral-surgery.webp",
    imageAlt:
      "Équipe médicale préparant un soin chirurgical en cabinet dentaire",
    description:
      "Une activité dédiée aux interventions chirurgicales de la bouche, avec une évaluation préalable et un accompagnement du patient.",
    Icon: Syringe,
  },
  {
    name: "Implantologie",
    image: "/images/services/implantology.webp",
    imageAlt:
      "Praticien présentant un modèle d’implant dentaire à une patiente",
    description:
      "L’étude des possibilités de remplacement de dents manquantes par des implants, après évaluation de votre situation.",
    Icon: CircleDot,
  },
  {
    name: "Orthodontie",
    image: "/images/services/orthodontics.webp",
    imageAlt:
      "Praticien expliquant un traitement orthodontique à une jeune patiente",
    description:
      "L’évaluation de l’alignement des dents et des rapports entre les mâchoires, pour construire un parcours adapté.",
    Icon: Smile,
  },
  {
    name: "Dentisterie esthétique",
    image: "/images/services/aesthetic-dentistry.webp",
    imageAlt: "Dentiste et patiente discutant de l’esthétique du sourire",
    description:
      "Un échange autour de l’apparence du sourire et des solutions envisageables, selon vos attentes et le bilan clinique.",
    Icon: Gem,
  },
  {
    name: "Prothèses dentaires",
    image: "/images/services/dental-prosthetics.webp",
    imageAlt: "Prothèse dentaire en céramique examinée en laboratoire",
    description:
      "Des solutions pour restaurer ou remplacer des dents, étudiées avec le praticien en fonction de votre situation.",
    Icon: Scan,
  },
  {
    name: "Dentisterie pédiatrique",
    image: "/images/services/pediatric-dentistry.webp",
    imageAlt:
      "Dentiste accueillant un enfant dans un cabinet dentaire rassurant",
    description:
      "Un accompagnement des enfants autour de la prévention, des consultations et des soins dentaires.",
    Icon: Baby,
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-[#f6f9fe]" id="soins">
      <div className="mx-auto w-[min(100%_-_9vw,1280px)] py-[84px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:py-[58px] max-[520px]:w-[calc(100%_-_36px)] max-[520px]:py-[50px]">
        <div className="mb-8 flex items-end justify-between gap-12 max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-4">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-[#657894] uppercase">
              <span className="h-[2px] w-7 bg-clinic" aria-hidden="true" />
              02 — Nos disciplines
            </p>
            <h2 className="m-0 text-[clamp(42px,4.2vw,62px)] leading-[1.02] font-medium tracking-[-0.065em] text-[#141a25] max-[520px]:text-[40px]">
              Des soins adaptés
              <br />à <span className="text-clinic">vos besoins.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[600px] text-[16px] leading-[1.8] text-[#202938] max-[820px]:max-w-[640px] max-[520px]:text-[14px]">
            Une prise en charge complète pour chaque patient. Votre praticien
            évalue votre situation et vous explique les options après
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-2.5">
          {disciplines.map(
            ({ name, description, image, imageAlt, Icon }, index) => (
              <article
                className="group overflow-hidden rounded-[22px] border border-[#e0e8f4] bg-white shadow-[0_8px_24px_rgba(24,51,91,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#bdd0f5] hover:shadow-[0_20px_46px_rgba(28,57,103,.12)]"
                key={name}
              >
                <div className="relative h-[190px] overflow-hidden bg-[#eaf1fb] max-[520px]:h-[210px]">
                  <Image
                    alt={imageAlt}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    fill
                    sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
                    src={image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14233b]/35 via-transparent to-[#14233b]/5" />
                  <span className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-white/55 bg-white/90 text-[10px] font-semibold tracking-[0.08em] text-[#28416b] shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative min-h-[148px] p-5 pt-[18px] max-[520px]:min-h-0 max-[520px]:p-[18px]">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#f0f5ff] text-clinic transition-colors duration-200 group-hover:bg-[#e5eeff]">
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="m-0 text-[15px] font-semibold tracking-[-0.025em] text-[#17243b]">
                      {name}
                    </h3>
                  </div>
                  <p className="m-0 max-w-[380px] pr-7 text-[14px] leading-[1.75] text-[#202938]">
                    {description}
                  </p>
                  <ArrowRight
                    className="absolute right-5 bottom-5 box-content rounded-full border border-[#e6edf7] p-2 text-[#91a4c3] transition duration-200 group-hover:translate-x-0.5 group-hover:border-[#d4e1fb] group-hover:bg-[#f1f6ff] group-hover:text-clinic"
                    size={15}
                    aria-hidden="true"
                  />
                </div>
              </article>
            ),
          )}
        </div>

        <a
          className="group relative mt-4 flex min-h-[112px] items-center gap-5 overflow-hidden rounded-[22px] border border-[#263b5d] bg-[linear-gradient(110deg,#14233b_0%,#192b48_62%,#20385d_100%)] px-7 py-5 text-white shadow-[0_14px_32px_rgba(20,35,59,.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(20,35,59,.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4168e8] max-[520px]:flex-wrap max-[520px]:items-start max-[520px]:gap-3 max-[520px]:px-4 max-[520px]:py-4"
          href="tel:+212522228746"
        >
          <span className="absolute inset-y-5 left-0 w-[3px] rounded-r-full bg-[#5b86ff]" aria-hidden="true" />
          <span className="grid size-[54px] shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] text-[#a8c4ff] shadow-inner shadow-white/[0.04]">
            <PhoneCall size={21} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="text-[9px] font-bold tracking-[0.16em] text-[#a8c4ff] uppercase">
              Une situation dentaire à évaluer rapidement ?
            </span>
            <strong className="text-[17px] font-semibold tracking-[-0.02em]">
              Urgences dentaires
            </strong>
            <span className="text-[12px] leading-[1.6] text-[#c3cee0]">
              Appelez pour connaître les disponibilités ; le site ne garantit
              pas un accueil permanent.
            </span>
          </span>
          <span className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 text-[12px] font-semibold transition group-hover:border-white/25 group-hover:bg-white/10 max-[520px]:ml-0 max-[520px]:min-h-10 max-[520px]:w-full max-[520px]:basis-full max-[520px]:flex-wrap max-[520px]:justify-center max-[520px]:gap-x-2 max-[520px]:gap-y-1 max-[520px]:px-3 max-[520px]:text-center max-[380px]:text-[11px] max-[380px]:gap-x-1">
            Appeler la clinique
            <span className="text-[#c3cee0]">05 22 22 87 46</span>
            <ArrowRight
              className="text-[#a8c4ff] transition-transform group-hover:translate-x-1"
              size={16}
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </section>
  );
}
