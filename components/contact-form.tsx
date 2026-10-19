"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const disciplines = [
  "Dentisterie générale",
  "Parodontologie",
  "Endodontie",
  "Chirurgie orale",
  "Implantologie",
  "Orthodontie",
  "Dentisterie esthétique",
  "Prothèses dentaires",
  "Dentisterie pédiatrique",
];

const fieldClassName =
  "min-h-11 w-full rounded-lg border border-[#dfe6ef] bg-white px-3 py-[11px] text-xs font-normal text-[#1d293a] outline-none transition focus:border-[#7fa5f2] focus:shadow-[0_0_0_3px_rgba(39,101,232,.1)]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      className="rounded-[18px] border border-[#e4eaf2] bg-white p-7 shadow-[0_10px_35px_rgba(28,51,87,.06)] max-[520px]:p-[19px]"
      onSubmit={handleSubmit}
    >
      <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#e8edf3] pb-[15px] text-[9px] font-extrabold tracking-[.13em] text-[#303b4c]">
        <span>RENDEZ-VOUS EN LIGNE</span>
        <span className="inline-flex items-center gap-[5px] text-[8px] tracking-[.04em] text-[#7586a0]">
          <ShieldCheck size={14} aria-hidden="true" />
          DÉMONSTRATION
        </span>
      </div>

      {sent ? (
        <div className="flex min-h-[330px] flex-col items-start justify-center">
          <span className="grid size-[47px] place-items-center rounded-full bg-[#e6f6ed] text-[#1b6b44]">
            <Check size={23} aria-hidden="true" />
          </span>
          <h3 className="mt-[17px] mb-[7px] text-[21px]">
            Merci pour votre essai.
          </h3>
          <p className="max-w-[350px] text-xs leading-[1.6] text-[#758195]">
            Ceci est une démonstration. Aucune réservation n’a été transmise à
            la clinique.
          </p>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-2.5 border-b border-[#8096bc] bg-transparent pb-[3px] text-[13px] font-bold text-[#17243b]"
            onClick={() => setSent(false)}
          >
            Recommencer <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <>
          <p className="mb-5 text-[11px] leading-[1.55] text-[#758195]">
            Choisissez une discipline et une préférence de date. L’équipe
            confirmera tout rendez-vous selon ses disponibilités. Pour une
            urgence, appelez directement la clinique.
          </p>

          <label className="mb-4 flex flex-col gap-2 text-[11px] font-bold text-[#344053]">
            Nom de démonstration
            <input
              className={fieldClassName}
              required
              name="name"
              placeholder="Ex. Samira A."
              autoComplete="off"
            />
          </label>

          <label className="mb-4 flex flex-col gap-2 text-[11px] font-bold text-[#344053]">
            Motif
            <select
              className={fieldClassName}
              required
              name="discipline"
              defaultValue=""
            >
              <option value="" disabled>
                Choisir une discipline
              </option>
              {disciplines.map((discipline) => (
                <option key={discipline}>{discipline}</option>
              ))}
              <option>Urgence dentaire · appeler la clinique</option>
            </select>
          </label>

          <label className="mb-4 flex flex-col gap-2 text-[11px] font-bold text-[#344053]">
            Date souhaitée
            <input
              className={fieldClassName}
              required
              type="date"
              name="preferredDate"
            />
          </label>

          <fieldset className="mb-5">
            <legend className="mb-2 text-[11px] font-bold text-[#344053]">
              Préférence horaire
            </legend>
            <div className="flex gap-3">
              {["Matin", "Après-midi"].map((time) => (
                <label
                  className="inline-flex min-h-10 flex-1 cursor-pointer items-center gap-2 rounded-lg border border-[#dfe6ef] px-3 text-xs text-[#344053] has-[:checked]:border-[#8aaaf0] has-[:checked]:bg-[#f3f7ff]"
                  key={time}
                >
                  <input
                    className="accent-clinic"
                    type="radio"
                    name="preferredTime"
                    value={time}
                    required
                  />
                  {time}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mb-5 flex items-start gap-[9px] text-[10px] leading-[1.5] font-normal text-[#758195]">
            <input className="mt-px accent-clinic" type="checkbox" required />
            <span>
              Je comprends qu’il s’agit d’un test sans réservation réelle.
            </span>
          </label>

          <button
            className="inline-flex min-h-12 w-full items-center justify-between rounded-full bg-clinic px-[17px] text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-[0_8px_24px_rgba(31,78,164,.2)]"
            type="submit"
          >
            Tester ma demande <ArrowRight size={16} aria-hidden="true" />
          </button>
        </>
      )}
    </form>
  );
}
