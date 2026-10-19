"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const questions = [
  ["Comment prendre rendez-vous ?", "Appelez la clinique au 05 22 22 87 46. Le formulaire de ce site est une démonstration et ne transmet aucune demande."],
  ["Où se situe la clinique ?", "La Clinique Dentaire Khair se trouve boulevard Panoramique à Casablanca, au Maroc."],
  ["Quelles disciplines sont proposées ?", "La clinique présente la dentisterie générale, la parodontologie, l’endodontie, la chirurgie orale, l’implantologie, l’orthodontie, la dentisterie esthétique, les prothèses dentaires et la dentisterie pédiatrique. Pour une urgence, appelez la clinique."],
  ["Puis-je venir pour une urgence dentaire ?", "Appelez directement le 05 22 22 87 46 pour connaître les possibilités d’accueil. Le site ne garantit pas une permanence."],
  ["La clinique propose-t-elle des partenariats aux entreprises ?", "L’équipe peut étudier une collaboration et définir ses modalités avec votre entreprise."],
  ["Les demandes envoyées depuis ce site sont-elles réelles ?", "Non. Les formulaires de démonstration ne transmettent pas de données à la clinique. Pour contacter l’équipe, appelez le numéro affiché."],
] as const;

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f5f8fd] py-[82px] max-[820px]:py-[56px]" id="questions">
      <div className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.72fr_1.28fr] gap-[7%] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-7 max-[520px]:w-[calc(100%_-_36px)]">
        <div className="flex flex-col items-start">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-[#657894] uppercase">
            <span className="h-[2px] w-7 bg-clinic" aria-hidden="true" />
            Vos questions
          </p>
          <h2 className="mb-5 text-[clamp(40px,4vw,56px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">
            Une visite,<br />en toute <em className="text-clinic not-italic">clarté.</em>
          </h2>
          <p className="mb-8 max-w-[400px] text-[16px] leading-[1.75] text-[#46546a] max-[520px]:text-[14px]">
            Quelques réponses pour préparer votre venue et savoir comment nous joindre.
          </p>

        </div>

        <div className="border-t border-[#cfd9e8]">
          {questions.map(([question, answer], index) => {
            const isOpen = open === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className="border-b border-[#cfd9e8]" key={question}>
                <h3>
                  <button
                    className={`group flex min-h-[76px] w-full items-center justify-between gap-5 py-5 text-left text-[18px] leading-[1.35] font-semibold tracking-[-.035em] transition-colors hover:text-clinic focus-visible:relative focus-visible:z-10 max-[520px]:min-h-[68px] max-[520px]:py-4 max-[520px]:text-[15px] ${isOpen ? "text-clinic" : "text-[#17243b]"}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    {isOpen ? <Minus size={19} className="shrink-0 text-clinic" aria-hidden="true" /> : <Plus size={19} className="shrink-0 text-[#8594aa] transition-colors group-hover:text-clinic" aria-hidden="true" />}
                  </button>
                </h3>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  id={answerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-10 max-[520px]:pb-5 max-[520px]:pr-4">
                      <p className="max-w-[680px] border-l-2 border-[#8eafff] pl-5 text-[16px] leading-[1.75] text-[#46546a] max-[520px]:pl-4 max-[520px]:text-[14px]">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
