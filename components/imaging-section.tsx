import Image from "next/image";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Une meilleure visibilité",
    description: "Des examens choisis selon votre situation.",
  },
  {
    title: "Des explications claires",
    description: "Votre praticien vous accompagne à chaque étape.",
  },
];

export default function ImagingSection() {
  return (
    <section
      className="bg-[#f5f8fd] py-[78px] max-[820px]:py-[52px]"
      id="imagerie"
    >
      <div className="mx-auto w-[min(100%_-_9vw,1280px)] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[520px]:w-[calc(100%_-_36px)]">
        <div className="mb-8 grid grid-cols-[1.05fr_.95fr] items-end gap-12 max-[820px]:grid-cols-1 max-[820px]:gap-4">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-[#657894] uppercase">
              <span className="h-[2px] w-7 bg-clinic" aria-hidden="true" />
              04 — Technologie &amp; précision
            </p>
            <h2 className="max-w-[720px] text-[clamp(42px,4.1vw,60px)] leading-[1.03] font-medium tracking-[-0.065em] text-[#141a25] max-[520px]:text-[40px]">
              L’imagerie au service
              <br className="max-[520px]:hidden" /> de votre{" "}
              <span className="text-clinic">santé.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[570px] text-[16px] leading-[1.8] text-[#202938] max-[820px]:max-w-[640px] max-[520px]:text-[14px]">
            Découvrez notre espace d’imagerie, ses équipements et les examens
            proposés, pour mieux comprendre chaque étape et aborder votre visite
            en toute confiance.
          </p>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[1060px] overflow-hidden rounded-[26px] bg-[#e3ebf6] shadow-[0_24px_58px_rgba(28,51,87,.13)] max-[820px]:h-[360px] max-[520px]:h-[270px]">
          <Image
            className="object-cover object-center"
            src="/images/dental-imaging-branded.png"
            alt="Équipement d’imagerie dentaire dans une salle lumineuse"
            fill
            sizes="(max-width: 820px) 100vw, 1060px"
          />
        </div>

        <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-[.82fr_.82fr_1.36fr] border-t border-[#dce5f1] max-[820px]:grid-cols-2 max-[520px]:grid-cols-1">
          {benefits.map(({ title, description }, index) => (
            <div
              className={`py-6 pr-7 max-[820px]:pr-5 max-[520px]:py-5 max-[520px]:pr-0 ${index > 0 ? "border-l border-[#dce5f1] pl-7 max-[820px]:pl-5 max-[520px]:border-l-0 max-[520px]:border-t max-[520px]:pl-0" : ""}`}
              key={title}
            >
              <span
                className="mb-4 block h-[2px] w-8 bg-clinic"
                aria-hidden="true"
              />
              <strong className="mb-2 block text-[21px] leading-[1.2] font-semibold tracking-[-0.035em] text-[#17243b] max-[520px]:text-[19px]">
                {title}
              </strong>
              <span className="block max-w-[270px] text-[14px] leading-[1.65] text-[#59677c]">
                {description}
              </span>
            </div>
          ))}
          <div className="border-l border-[#dce5f1] py-6 pl-8 max-[820px]:col-span-full max-[820px]:border-t max-[820px]:border-l-0 max-[820px]:pl-0 max-[520px]:py-5">
            <span
              className="mb-4 block h-[2px] w-8 bg-clinic"
              aria-hidden="true"
            />
            <h3 className="mb-2 max-w-[480px] text-[21px] leading-[1.25] font-semibold tracking-[-0.03em] text-[#17243b] max-[520px]:text-[19px]">
              Comprendre chaque étape de votre visite.
            </h3>
            <p className="mb-4 max-w-[500px] text-[14px] leading-[1.65] text-[#59677c]">
              Découvrez les équipements et les examens proposés, puis échangez
              avec votre praticien sur les possibilités adaptées à votre
              situation.
            </p>
            <a
              href="#contact"
              className="group inline-flex min-h-10 items-center gap-2.5 text-[13px] font-semibold text-[#213654] transition-colors hover:text-clinic focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic"
            >
              Parler à notre équipe
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
