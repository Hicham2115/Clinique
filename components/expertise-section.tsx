import {
  ArrowUpRight,
  Baby,
  CircleDot,
  Heart,
  Scan,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const disciplines = [
  {
    name: "Dentisterie générale",
    description:
      "Consultations, bilans bucco-dentaires, prévention et soins courants.",
    Icon: Stethoscope,
  },
  {
    name: "Parodontologie",
    description:
      "Prise en charge des gencives et des tissus qui soutiennent les dents.",
    Icon: Heart,
  },
  {
    name: "Endodontie",
    description: "Soins de l’intérieur de la dent et de ses canaux.",
    Icon: CircleDot,
  },
  {
    name: "Chirurgie orale",
    description: "Interventions chirurgicales de la bouche, après évaluation.",
    Icon: Sparkles,
  },
  {
    name: "Implantologie",
    description: "Étude des possibilités de remplacement des dents manquantes.",
    Icon: CircleDot,
  },
  {
    name: "Orthodontie",
    description:
      "Évaluation de l’alignement dentaire et des rapports entre les mâchoires.",
    Icon: Smile,
  },
  {
    name: "Dentisterie esthétique",
    description:
      "Échange sur l’apparence du sourire et les solutions envisageables.",
    Icon: Sparkles,
  },
  {
    name: "Prothèses dentaires",
    description: "Solutions pour restaurer ou remplacer des dents.",
    Icon: Scan,
  },
  {
    name: "Dentisterie pédiatrique",
    description:
      "Prévention, consultations et soins dentaires pour les enfants.",
    Icon: Baby,
  },
];

export default function ExpertiseSection() {
  return (
    <section className="mx-auto w-[min(100%_-_9vw,1280px)] pt-[68px] pb-[76px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:pt-[48px] max-[820px]:pb-[54px] max-[520px]:w-[calc(100%_-_36px)]" id="soins">
      <div className="mb-7 flex items-end justify-between gap-10 max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-3">
        <div>
          <span className="text-[9px] font-extrabold tracking-[.14em] text-[#718097]">02 — NOS DISCIPLINES</span>
          <h2 className="my-4 mb-0 text-[clamp(39px,4.2vw,61px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">
            Des soins adaptés
            <br />à <em className="text-clinic not-italic">vos besoins.</em>
          </h2>
        </div>
        <p className="mb-1 max-w-[445px] text-sm leading-[1.75] text-[#6e7a8c] max-[820px]:max-w-[560px]">
          Une prise en charge complète pour chaque patient. Votre praticien
          évalue votre situation et vous explique les options après
          consultation.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[11px] max-[820px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-2">
        {disciplines.map(({ name, description, Icon }, index) => (
          <article className="relative min-h-[176px] rounded-2xl border border-[#e6ebf2] bg-white p-[22px_21px] transition duration-200 hover:-translate-y-[3px] hover:border-[#bed0f4] hover:shadow-[0_12px_28px_rgba(28,57,103,.09)] max-[520px]:min-h-[145px] max-[520px]:p-[18px]" key={name}>
            <span className="absolute top-[25px] right-[23px] text-[9px] tracking-[.1em] text-[#9ba8ba] max-[520px]:top-5 max-[520px]:right-5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Icon className="mb-4 text-clinic max-[520px]:mb-[10px]" size={24} strokeWidth={1.5} />
            <h3 className="mb-2 text-base tracking-[-.02em]">{name}</h3>
            <p className="mb-0 max-w-[300px] text-xs leading-[1.6] text-[#7a8594]">{description}</p>
            <ArrowUpRight className="absolute right-[21px] bottom-[19px] text-[#9badca]" size={16} />
          </article>
        ))}
      </div>
      <a className="mt-4 flex items-center gap-[15px] rounded-2xl border border-[#dfe9fb] bg-sky p-[15px_19px] text-[#142039] transition hover:border-[#c4d7f8] hover:shadow-[0_8px_20px_rgba(39,101,232,.08)] max-[520px]:flex-wrap max-[520px]:items-start max-[520px]:p-[14px]" href="tel:+212522228746">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-clinic">
          <CircleDot size={18} />
        </span>
        <span className="flex flex-1 flex-col gap-1 max-[520px]:min-w-[calc(100%_-_60px)]">
          <small className="text-[8px] font-extrabold tracking-[.12em] text-[#74839a]">UNE SITUATION DENTAIRE À ÉVALUER RAPIDEMENT ?</small>
          <b className="text-sm">Urgences dentaires</b>
        </span>
        <span className="flex items-center gap-2 text-[11px] max-[520px]:w-full max-[520px]:justify-between max-[520px]:pl-[54px]">
          Appeler la clinique <strong className="ml-0.5 text-xs text-clinic">05 22 22 87 46</strong>
          <ArrowUpRight size={16} />
        </span>
      </a>
    </section>
  );
}
