import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";

const steps = [
  ["01", "Prévention", "Étudier des actions de sensibilisation et d’information adaptées aux collaborateurs."],
  ["02", "Parcours dédié", "Prévoir un point de contact et des modalités de rendez-vous définies dans une convention."],
  ["03", "Relation durable", "Construire une collaboration sans partage de données médicales avec l’employeur."],
] as const;

export default function PartnershipSection() {
  return (
    <section className="bg-[#f5f8fd] py-[76px] max-[820px]:py-[52px]" id="entreprises">
      <div className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.9fr_1.1fr] items-center gap-[8%] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-8 max-[520px]:w-[calc(100%_-_36px)]">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-[#657894] uppercase">
            <span className="h-[2px] w-7 bg-clinic" aria-hidden="true" />
            Partenariats entreprises
          </p>
          <h2 className="mb-6 max-w-[620px] text-[clamp(39px,4vw,58px)] leading-[1.01] font-medium tracking-[-.07em] text-[#141a25] max-[520px]:text-[39px]">
            Le bien-être de vos équipes commence aussi par le <em className="text-clinic not-italic">sourire.</em>
          </h2>
          <p className="mb-6 max-w-[570px] text-[17px] leading-[1.75] text-[#35435a] max-[520px]:text-[15px]">
            Un parcours dédié aux directions RH et aux entreprises souhaitant étudier une collaboration avec la clinique.
          </p>
          <a href="#contact" className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-clinic px-5 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(39,101,232,.18)] transition-all hover:-translate-y-0.5 hover:bg-[#1250d1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic">
            Échanger sur une collaboration
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[26px] bg-[#17243b] p-7 text-white shadow-[0_24px_56px_rgba(23,36,59,.14)] max-[520px]:rounded-[21px] max-[520px]:p-5">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4d83ff] via-[#8db2ff] to-transparent" aria-hidden="true" />
          <div className="relative mb-5 flex items-center gap-3 border-b border-white/15 pb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#9bb9ff]">
              <HeartHandshake size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-[.14em] text-[#b9c7df] uppercase">Un parcours pour les équipes</p>
              <p className="mt-1 text-[13px] text-white/65">Les étapes d’une collaboration</p>
            </div>
          </div>

          <div className="relative">
            {steps.map(([number, title, description]) => (
              <article className="relative grid grid-cols-[38px_1fr] gap-3 py-4 first:pt-1 last:pb-2" key={number}>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#527cc9]/50 bg-[#263b60] text-[10px] font-bold tracking-[.06em] text-[#a9c4ff]">{number}</span>
                {number !== "03" && <span className="absolute top-10 bottom-[-10px] left-[15px] w-px bg-[#527cc9]/40" aria-hidden="true" />}
                <div>
                  <h3 className="mb-1.5 pt-1 text-[16px] font-semibold tracking-[-.02em] text-white">{title}</h3>
                  <p className="text-[14px] leading-[1.65] text-[#d1d9e7]">{description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-[14px] bg-white/8 px-4 py-3.5 text-[12px] leading-[1.55] text-[#d8e2f1]">
            <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#9bb9ff]" aria-hidden="true" />
            <p>Aucune donnée médicale n’est partagée avec l’employeur. Aucun partenariat existant n’est présumé.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
