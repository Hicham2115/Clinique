"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="rounded-[18px] border border-[#e4eaf2] bg-white p-7 shadow-[0_10px_35px_rgba(28,51,87,.06)] max-[520px]:p-[19px]" onSubmit={handleSubmit}>
      <div className="mb-6 flex items-center justify-between gap-3 border-b border-[#e8edf3] pb-[15px] text-[9px] font-extrabold tracking-[.13em] text-[#303b4c]"><span>FORMULAIRE DE DÉMONSTRATION</span><small className="inline-flex items-center gap-[5px] text-[8px] tracking-[.04em] text-[#7586a0]"><ShieldCheck size={14}/> AUCUNE DONNÉE TRANSMISE</small></div>
      {sent ? <div className="flex min-h-[330px] flex-col items-start justify-center"><span className="grid size-[47px] place-items-center rounded-full bg-[#e6f6ed] text-[#1b6b44]"><Check size={23}/></span><h3 className="mt-[17px] mb-[7px] text-[21px]">Merci pour votre essai.</h3><p className="max-w-[350px] text-xs leading-[1.6] text-[#758195]">Ceci est une démonstration. Votre message n’a pas été transmis à la clinique.</p><button type="button" className="inline-flex items-center gap-2.5 border-b border-[#8096bc] bg-transparent pb-[3px] text-[13px] font-bold text-[#17243b] cursor-pointer" onClick={() => setSent(false)}>Recommencer <ArrowRight size={15}/></button></div> : <>
        <label className="mb-[17px] flex flex-col gap-2 text-[11px] font-bold text-[#344053]">Nom de démonstration<input className="min-h-11 w-full rounded-lg border border-[#dfe6ef] bg-white px-3 py-[11px] text-xs font-normal text-[#1d293a] outline-none transition focus:border-[#7fa5f2] focus:shadow-[0_0_0_3px_rgba(39,101,232,.1)] placeholder:text-[#9ba6b5]" required name="name" placeholder="Ex. Samira A." autoComplete="off"/></label>
        <label className="mb-[17px] flex flex-col gap-2 text-[11px] font-bold text-[#344053]">Objet de votre demande<select className="min-h-11 w-full rounded-lg border border-[#dfe6ef] bg-white px-3 py-[11px] text-xs font-normal text-[#1d293a] outline-none transition focus:border-[#7fa5f2] focus:shadow-[0_0_0_3px_rgba(39,101,232,.1)]" required name="subject" defaultValue=""><option value="" disabled>Choisir un sujet</option><option>Rendez-vous</option><option>Information sur les soins</option><option>Imagerie dentaire</option><option>Partenariat entreprise</option><option>Espace formation</option></select></label>
        <label className="mb-[17px] flex flex-col gap-2 text-[11px] font-bold text-[#344053]">Votre message<textarea className="min-h-[84px] w-full resize-y rounded-lg border border-[#dfe6ef] bg-white px-3 py-[11px] text-xs font-normal text-[#1d293a] outline-none transition focus:border-[#7fa5f2] focus:shadow-[0_0_0_3px_rgba(39,101,232,.1)] placeholder:text-[#9ba6b5]" required name="message" rows={3} placeholder="Écrivez un message fictif pour tester le formulaire."/></label>
        <label className="mb-[17px] flex items-start gap-[9px] text-[10px] leading-[1.5] font-normal text-[#758195]"><input className="mt-px accent-clinic" type="checkbox" required/><span>Je comprends qu’il s’agit d’un test sans envoi réel.</span></label>
        <button className="inline-flex min-h-12 w-full items-center justify-between rounded-full bg-clinic px-[17px] text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-[0_8px_24px_rgba(31,78,164,.2)]" type="submit">Tester le formulaire <ArrowRight size={16}/></button>
      </>}
    </form>
  );
}
