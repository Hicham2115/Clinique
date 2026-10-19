"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const questions = [
  ["Comment prendre rendez-vous ?", "Appelez la clinique au 05 22 22 87 46. Le formulaire de ce site est une démonstration et ne transmet aucune demande."],
  ["Où se situe la clinique ?", "La Clinique Dentaire Khair se trouve boulevard Panoramique à Casablanca, au Maroc."],
  ["Quelles disciplines sont proposées ?", "La clinique présente la dentisterie générale, la parodontologie, l’endodontie, la chirurgie orale, l’implantologie, l’orthodontie, la dentisterie esthétique, les prothèses dentaires et la dentisterie pédiatrique. Pour une urgence, appelez la clinique."],
  ["Puis-je venir pour une urgence dentaire ?", "Appelez directement le 05 22 22 87 46 pour connaître les possibilités d’accueil. Le site ne garantit pas une permanence."],
  ["La clinique propose-t-elle des partenariats aux entreprises ?", "L’équipe peut étudier une collaboration et définir ses modalités avec votre entreprise."],
  ["Les demandes envoyées depuis ce site sont-elles réelles ?", "Non. Les formulaires de démonstration ne transmettent pas de données à la clinique. Pour contacter l’équipe, appelez le numéro affiché."],
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.75fr_1.25fr] gap-[8%] pt-6 pb-[72px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-3 max-[820px]:pt-2 max-[820px]:pb-[52px] max-[520px]:w-[calc(100%_-_36px)]" id="questions">
      <div><span className="text-[9px] font-extrabold tracking-[.14em] text-[#718097]">VOS QUESTIONS</span><h2 className="my-[17px] mb-[21px] text-[clamp(40px,4vw,56px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">Une visite,<br />en toute <em className="text-clinic not-italic">clarté.</em></h2><p className="max-w-[560px] text-[16px] leading-[1.75] text-[#202938] max-[520px]:text-[14px]">Quelques informations pour préparer votre venue.</p></div>
      <div className="border-t border-line">{questions.map(([question, answer], index) => <article className="border-b border-line" key={question}><button className="flex w-full items-center justify-between gap-[15px] border-0 bg-transparent py-4 text-left text-sm font-bold text-[#192335] cursor-pointer transition-colors hover:text-clinic max-[520px]:py-3.5 max-[520px]:text-xs" type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{question}</span>{open === index ? <ArrowUp className="shrink-0 text-clinic" size={17}/> : <ArrowDown className="shrink-0 text-clinic" size={17}/>}</button>{open === index && <p className="mb-4 mt-[-2px] mr-[42px] max-w-[760px] text-[15px] leading-[1.75] text-[#202938] max-[520px]:text-[14px]">{answer}</p>}</article>)}</div>
    </section>
  );
}
