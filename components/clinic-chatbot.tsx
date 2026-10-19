"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, RotateCcw, X } from "lucide-react";

type QuestionId =
  | "appointment"
  | "location"
  | "services"
  | "hours"
  | "urgent"
  | "company";

type ChatQuestion = {
  id: QuestionId;
  label: string;
  answer: string;
  link?: { label: string; href: string };
  followups: QuestionId[];
};

const questions: ChatQuestion[] = [
  {
    id: "appointment",
    label: "Prendre rendez-vous",
    answer:
      "Pour prendre rendez-vous, appelez la clinique. Le formulaire du site est une démonstration et n’envoie pas de demande.",
    link: { label: "Appeler le 05 22 22 87 46", href: "tel:+212522228746" },
    followups: ["services", "location", "urgent"],
  },
  {
    id: "location",
    label: "Où se trouve la clinique ?",
    answer:
      "La Clinique Dentaire Khair se trouve Boulevard Panoramique à Casablanca, au Maroc.",
    link: {
      label: "Voir l’itinéraire",
      href: "https://www.google.com/maps/place/Clinique+dentaire+KHAIR/@33.5525512,-7.6068624,726m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda63300640286ad:0x6d5be28d98e6916e!8m2!3d33.5525512!4d-7.6068624!16s%2Fg%2F11z670xk20?entry=ttu",
    },
    followups: ["appointment", "hours", "services"],
  },
  {
    id: "services",
    label: "Quels soins proposez-vous ?",
    answer:
      "La clinique propose notamment les soins généraux, la parodontologie, l’endodontie, la chirurgie orale, l’implantologie, l’orthodontie, la dentisterie esthétique et pédiatrique, ainsi que les prothèses dentaires. Le praticien vous orientera après examen.",
    followups: ["appointment", "urgent", "company"],
  },
  {
    id: "hours",
    label: "Quels sont les horaires ?",
    answer:
      "Les horaires sont à confirmer auprès de la clinique. Appelez-nous pour connaître les disponibilités de l’équipe.",
    link: { label: "Appeler le 05 22 22 87 46", href: "tel:+212522228746" },
    followups: ["location", "appointment", "urgent"],
  },
  {
    id: "urgent",
    label: "J’ai une urgence dentaire",
    answer:
      "Appelez directement la clinique au 05 22 22 87 46 pour connaître les disponibilités. Le site ne garantit pas un accueil permanent.",
    link: { label: "Appeler la clinique", href: "tel:+212522228746" },
    followups: ["appointment", "location", "services"],
  },
  {
    id: "company",
    label: "Partenariat pour une entreprise",
    answer:
      "La clinique peut étudier un parcours adapté aux entreprises : prévention, prise de rendez-vous dédiée et échange avec un interlocuteur identifié. Aucun partenariat existant n’est présumé.",
    followups: ["appointment", "location", "services"],
  },
];

type Message = { id: number; role: "assistant" | "visitor"; text: string };

const welcomeMessage: Message = {
  id: 0,
  role: "assistant",
  text: "Bonjour ! Que souhaitez-vous savoir sur la clinique ?",
};

export default function ClinicChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [choices, setChoices] = useState<QuestionId[]>(
    questions.map((question) => question.id),
  );
  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    latestMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleNavigationChange = (event: Event) => {
      const navigationEvent = event as CustomEvent<boolean>;
      setIsMobileNavigationOpen(navigationEvent.detail);
      if (navigationEvent.detail) setIsOpen(false);
    };

    window.addEventListener("clinic-mobile-navigation", handleNavigationChange);
    return () =>
      window.removeEventListener("clinic-mobile-navigation", handleNavigationChange);
  }, []);

  const chooseQuestion = (id: QuestionId) => {
    const question = questions.find((item) => item.id === id);
    if (!question) return;

    const nextId = messages.length + 1;
    setMessages((current) => [
      ...current,
      { id: nextId, role: "visitor", text: question.label },
      { id: nextId + 1, role: "assistant", text: question.answer },
    ]);
    setChoices(question.followups);
  };

  const resetConversation = () => {
    setMessages([welcomeMessage]);
    setChoices(questions.map((question) => question.id));
  };

  if (isMobileNavigationOpen) return null;

  return (
    <div className="fixed right-6 bottom-6 z-[70] font-['Avenir_Next',Avenir,'Segoe_UI',sans-serif] max-sm:right-3 max-sm:bottom-3">
      {isOpen && (
        <section
          aria-label="Assistant de la Clinique Dentaire Khair"
          className="absolute right-0 bottom-[4.5rem] flex h-[min(680px,calc(100dvh-120px))] w-[min(560px,calc(100vw-48px))] flex-col overflow-hidden rounded-2xl border border-[#dce5f2] bg-white shadow-[0_18px_60px_rgba(18,36,67,.22)] max-sm:fixed max-sm:right-3 max-sm:bottom-20 max-sm:left-3 max-sm:h-[min(680px,calc(100dvh-100px))] max-sm:w-auto max-sm:rounded-2xl"
          role="dialog"
          aria-modal="false"
        >
          <header className="flex items-center justify-between bg-[#14243b] px-5 py-4 text-white">
            <div>
              <p className="m-0 text-[15px] font-bold">Guide Khair</p>
              <p className="mt-1 mb-0 text-[11px] text-[#c9d7eb]">
                Questions pratiques · Casablanca
              </p>
            </div>
            <button
              aria-label="Fermer l’assistant"
              className="grid size-9 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X size={18} />
            </button>
          </header>

          <div
            aria-live="polite"
            className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-[#f7f9fc] p-4 max-sm:p-3"
          >
            {messages.map((message) => {
              const answer =
                message.role === "assistant"
                  ? questions.find((question) => question.answer === message.text)
                  : undefined;

              return (
                <div key={message.id}>
                  <div
                    className={`flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-3.5 py-3 text-[13px] leading-[1.55] ${
                        message.role === "visitor"
                          ? "rounded-br-md bg-clinic text-white"
                          : "rounded-bl-md border border-[#e6ebf2] bg-white text-black"
                      }`}
                    >
                      {message.text}
                      {answer?.link && (
                        <a
                          className="mt-2 block font-bold text-clinic underline decoration-[#b9ccf2] underline-offset-2"
                          href={answer.link.href}
                          rel="noreferrer"
                          target={
                            answer.link.href.startsWith("https://")
                              ? "_blank"
                              : undefined
                          }
                        >
                          {answer.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                  {message.id === messages[messages.length - 1].id && (
                    <div ref={latestMessageRef} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="shrink-0 border-t border-[#e6ebf2] bg-white p-4 max-sm:p-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="m-0 text-[11px] font-bold tracking-wide text-[#718097] uppercase">
                {messages.length === 1 ? "Choisissez une question" : "Et ensuite ?"}
              </p>
              {messages.length > 1 && (
                <button
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#536680] hover:text-clinic"
                  onClick={resetConversation}
                  type="button"
                >
                  <RotateCcw size={13} /> Recommencer
                </button>
              )}
            </div>
            <div className="flex max-h-48 flex-wrap gap-2 overflow-y-auto max-sm:max-h-40">
              {choices.map((id) => {
                const question = questions.find((item) => item.id === id);
                if (!question) return null;
                return (
                  <button
                    className="rounded-full border border-[#d7e2f2] bg-[#f7faff] px-3.5 py-2.5 text-left text-[12px] font-semibold leading-snug text-[#253b5c] transition-colors hover:border-clinic hover:bg-[#eef4ff] max-sm:px-3 max-sm:py-2 max-sm:text-[11px]"
                    key={question.id}
                    onClick={() => chooseQuestion(question.id)}
                    type="button"
                  >
                    {question.label}
                  </button>
                );
              })}
              <a
                className="rounded-full border border-[#d7e2f2] bg-[#f7faff] px-3.5 py-2.5 text-[12px] font-semibold text-[#253b5c] transition-colors hover:border-clinic hover:bg-[#eef4ff] max-sm:px-3 max-sm:py-2 max-sm:text-[11px]"
                href="https://wa.me/212522228746"
                rel="noreferrer"
                target="_blank"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fermer le guide Khair" : "Ouvrir le guide Khair"}
        className="ml-auto flex h-14 items-center gap-2.5 rounded-full bg-clinic px-5 text-white shadow-[0_8px_26px_rgba(39,101,232,.32)] transition-transform hover:scale-[1.03] hover:bg-clinic-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        <span className="text-[13px] font-bold">{isOpen ? "Fermer" : "Besoin d’aide ?"}</span>
      </button>
    </div>
  );
}
