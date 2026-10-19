"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const questions = [
  [
    "Comment prendre rendez-vous ?",
    "Appelez la clinique au 05 22 22 87 46. Le formulaire de ce site est une démonstration et ne transmet aucune demande.",
  ],
  [
    "Où se situe la clinique ?",
    "La Clinique Dentaire Khair se trouve boulevard Panoramique à Casablanca, au Maroc.",
  ],
  [
    "Quelles disciplines sont proposées ?",
    "La clinique présente la dentisterie générale, la parodontologie, l’endodontie, la chirurgie orale, l’implantologie, l’orthodontie, la dentisterie esthétique, les prothèses dentaires et la dentisterie pédiatrique. Pour une urgence, appelez la clinique.",
  ],
  [
    "Puis-je venir pour une urgence dentaire ?",
    "Appelez directement le 05 22 22 87 46 pour connaître les possibilités d’accueil. Le site ne garantit pas une permanence.",
  ],
  [
    "La clinique propose-t-elle des partenariats aux entreprises ?",
    "L’équipe peut étudier une collaboration et définir ses modalités avec votre entreprise.",
  ],
  [
    "Les demandes envoyées depuis ce site sont-elles réelles ?",
    "Non. Les formulaires de démonstration ne transmettent pas de données à la clinique. Pour contacter l’équipe, appelez le numéro affiché.",
  ],
] as const;

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const columns = [questions.slice(0, 3), questions.slice(3)];

  return (
    <section
      className="relative isolate overflow-hidden py-[88px] max-[820px]:py-[58px]"
      id="questions"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-48 left-[8%] size-[520px] rounded-full bg-[#dce8ff]/55 blur-[110px]" />
        <div className="absolute right-[-8%] bottom-[-42%] size-[620px] rounded-full bg-[#e3edff]/70 blur-[120px]" />
      </div>
      <div className="mx-auto w-[min(100%_-_9vw,1280px)] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[520px]:w-[calc(100%_-_36px)]">
        <div className="mb-10 flex items-end justify-between gap-8 max-[820px]:mb-7 max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-3">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.18em] text-[#657894] uppercase">
              <span className="h-[2px] w-8 bg-clinic" aria-hidden="true" />
              Vos questions
            </p>
            <h2 className="mb-0 text-[clamp(40px,4vw,56px)] leading-[.99] font-medium tracking-[-.075em] text-[#14243b] max-[520px]:text-[39px]">
              Une visite,
              <br />
              en toute <em className="text-clinic not-italic">clarté.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-x-8 max-[820px]:grid-cols-1 max-[820px]:gap-y-3">
          {columns.map((column, columnIndex) => (
            <div className="flex flex-col gap-3" key={columnIndex}>
              {column.map(([question, answer]) => {
                const index = questions.findIndex(
                  ([item]) => item === question,
                );
                const isOpen = open === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <article
                    className={`relative overflow-hidden rounded-[16px] border bg-white/95 px-5 transition-[border-color,box-shadow,transform] max-[520px]:rounded-[14px] max-[520px]:px-4 ${isOpen ? "border-[#c8d8f2] shadow-[0_14px_34px_rgba(24,65,130,.1)]" : "border-[#e2e8f1] shadow-[0_5px_18px_rgba(24,49,91,.035)] hover:-translate-y-0.5 hover:border-[#c8d8f2] hover:shadow-[0_12px_28px_rgba(24,65,130,.08)]"}`}
                    key={question}
                  >
                    <h3>
                      <button
                        className={`group flex min-h-[70px] w-full items-center justify-between gap-5 py-4 text-left text-[16px] leading-[1.4] font-semibold tracking-[-.025em] focus-visible:relative focus-visible:z-10 max-[520px]:min-h-[64px] max-[520px]:text-[14px] ${isOpen ? "text-[#174fbf]" : "text-[#17243b]"}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpen(isOpen ? null : index)}
                      >
                        <span className="flex min-w-0 items-start gap-3">
                          <span
                            className={`grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-bold transition-colors ${isOpen ? "bg-[#eaf1ff] text-[#174fbf]" : "bg-[#f2f5fa] text-[#71819a] group-hover:bg-[#eaf1ff] group-hover:text-[#174fbf]"}`}
                          >
                            {index + 1}.
                          </span>
                          <span className="pt-[3px]">{question}</span>
                        </span>
                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-clinic text-white" : "bg-[#edf3ff] text-clinic group-hover:bg-clinic group-hover:text-white"}`}
                        >
                          {isOpen ? (
                            <Minus size={15} aria-hidden="true" />
                          ) : (
                            <Plus size={15} aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      id={answerId}
                      aria-hidden={!isOpen}
                      inert={!isOpen}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-5 pl-10 pr-9 max-[520px]:pb-4 max-[520px]:pl-10 max-[520px]:pr-2">
                          <p className="border-t border-[#e8edf5] pt-4 text-[13px] leading-[1.75] text-[#687487] max-[520px]:pt-3 max-[520px]:text-[12px]">
                            {answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
