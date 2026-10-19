import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";

const steps = [
  ["01", "Prévention", "Étudier des actions de sensibilisation et d’information adaptées aux collaborateurs."],
  ["02", "Parcours dédié", "Prévoir un point de contact et des modalités de rendez-vous définies dans une convention."],
  ["03", "Relation durable", "Construire une collaboration sans partage de données médicales avec l’employeur."],
];

export default function PartnershipSection() {
  return (
    <section className="relative mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[1fr_1.05fr] gap-[8%] border-y border-line py-[64px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-6 max-[820px]:py-[48px] max-[520px]:w-[calc(100%_-_36px)]" id="entreprises">
      <div><span className="text-[9px] font-extrabold tracking-[.14em] text-[#718097]">PARTENARIATS ENTREPRISES</span><h2 className="my-4 mb-5 text-[clamp(37px,3.8vw,52px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">Le bien-être de vos équipes commence aussi par le <em className="text-clinic not-italic">sourire.</em></h2><p className="max-w-[480px] text-sm leading-[1.75] text-[#697588]">Un parcours dédié aux directions RH et aux entreprises souhaitant étudier une collaboration avec la clinique.</p><a href="#contact" className="mt-2 inline-flex items-center gap-2.5 border-b border-[#8096bc] pb-[3px] text-[13px] font-bold text-[#17243b] [&_svg]:transition-transform hover:[&_svg]:translate-x-1">Échanger sur une collaboration <ArrowRight size={16}/></a></div>
      <div className="pt-1">{steps.map(([n, title, text]) => <article className="grid grid-cols-[40px_1fr] gap-4 border-b border-line py-[14px]" key={n}><span className="text-[11px] font-bold text-clinic">{n}</span><div><h3 className="mb-1.5 text-[15px]">{title}</h3><p className="mb-0 text-xs leading-[1.6] text-[#748093]">{text}</p></div></article>)}<div className="mt-[17px] flex items-center gap-[9px] text-[11px] text-[#31568f]"><ShieldCheck size={18}/> Aucun partage de données médicales avec l’employeur.</div><small className="mt-3 block text-[10px] text-[#8a95a5]">Aucun partenariat existant n’est présumé.</small></div>
      <div className="absolute right-[4%] bottom-[23px] flex items-center gap-[9px] text-[#8ea0bd] max-[820px]:hidden"><HeartHandshake size={25}/><span className="text-[7px] leading-[1.4] font-extrabold tracking-[.1em]">UN PARCOURS<br/>POUR LES ÉQUIPES</span></div>
    </section>
  );
}
