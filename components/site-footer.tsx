import { ArrowUpRight, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import CurrentYear from "@/components/current-year";

const linkClass = "w-fit text-[14px] leading-7 text-[#b7becb] underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-white hover:decoration-teal-400 focus-visible:text-white focus-visible:decoration-teal-400";
const headingClass = "mb-5 text-[11px] font-extrabold tracking-[.17em] text-[#91b6ff]";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-[3px] border-clinic bg-[#111b2d] px-[4vw] text-white max-[520px]:px-5">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-[-105px] select-none text-[540px] leading-none font-black tracking-[-.12em] text-white/[.035] max-[800px]:right-[-65px] max-[800px]:top-[-32px] max-[800px]:text-[360px]"
      >
        K
      </span>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between gap-8 border-b border-white/10 py-12 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-6 max-[760px]:py-9">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[9px] font-extrabold tracking-[.2em] text-[#91b6ff]"><Sparkles size={13} aria-hidden="true"/> VOTRE SOURIRE, NOTRE ATTENTION</p>
            <h2 className="max-w-[680px] text-[clamp(27px,3.3vw,42px)] leading-[1.05] font-medium tracking-[-.055em] text-white">Un premier échange peut tout changer.</h2>
          </div>
          <a className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full bg-clinic px-6 text-[12px] font-bold text-white shadow-[0_8px_24px_rgba(39,101,232,.25)] transition hover:-translate-y-0.5 hover:bg-clinic-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91b6ff] max-[760px]:min-h-11" href="tel:+212522228746">
            <Phone size={15} aria-hidden="true"/> Appeler la clinique <ArrowUpRight size={15} aria-hidden="true"/>
          </a>
        </div>

        <div className="grid grid-cols-[1.45fr_.85fr_.85fr_1.15fr] gap-12 py-[60px] max-[980px]:grid-cols-2 max-[980px]:gap-x-10 max-[980px]:gap-y-12 max-[520px]:grid-cols-1 max-[520px]:gap-9 max-[520px]:py-10">
          <div className="max-w-[330px]">
            <a aria-label="Clinique Dentaire Khair, accueil" className="inline-flex items-center gap-3" href="#accueil">
              <span className="grid size-12 place-items-center rounded-xl bg-white p-1.5">
                <Image alt="" className="h-auto w-full" height={270} src="/images/clinic-logo.png" width={442} />
              </span>
              <span>
                <span className="block text-[15px] font-bold tracking-[.13em]">KHAIR</span>
                <span className="mt-1 block text-[9px] font-bold tracking-[.15em] text-[#aab4c3]">CLINIQUE DENTAIRE</span>
              </span>
            </a>
            <p className="mt-5 text-[14px] leading-[1.8] text-[#b7becb]">
              Une attention humaine, au cœur de chaque sourire.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 border border-white/10 px-3 py-2 text-[10px] font-bold tracking-[.13em] text-[#b7becb]">
              <span className="size-1.5 rounded-full bg-clinic" aria-hidden="true" />
              CASABLANCA · MAROC
            </span>
          </div>

          <nav aria-label="Nos soins" className="flex flex-col items-start">
            <h2 className={headingClass}>LA CLINIQUE</h2>
            <a className={linkClass} href="#accueil">Accueil</a>
            <a className={linkClass} href="#clinique">À propos</a>
            <a className={linkClass} href="#soins">Nos soins</a>
            <a className={linkClass} href="#praticien">Le praticien</a>
          </nav>

          <nav aria-label="Votre parcours" className="flex flex-col items-start">
            <h2 className={headingClass}>VOTRE PARCOURS</h2>
            <a className={linkClass} href="#imagerie">Imagerie</a>
            <a className={linkClass} href="#formation">Espace formation</a>
            <a className={linkClass} href="#questions">Questions fréquentes</a>
            <a className={linkClass} href="#rendez-vous">Rendez-vous</a>
          </nav>

          <div className="flex flex-col items-start">
            <h2 className={headingClass}>PARLONS ENSEMBLE</h2>
            <a className="mb-4 inline-flex items-center gap-3 text-[14px] text-[#d0d5de] underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-white hover:decoration-teal-400 focus-visible:text-white focus-visible:decoration-teal-400" href="tel:+212522228746">
              <Phone size={15} className="text-clinic" aria-hidden="true" />
              05 22 22 87 46
              <ArrowUpRight size={13} className="text-[#777e89]" aria-hidden="true" />
            </a>
            <a className="mb-4 inline-flex items-center gap-3 text-[14px] text-[#d0d5de] underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-white hover:decoration-teal-400 focus-visible:text-white focus-visible:decoration-teal-400" href="https://wa.me/212522228746" target="_blank" rel="noreferrer">
              <MessageCircle size={15} className="text-clinic" aria-hidden="true" />
              Écrire sur WhatsApp
              <ArrowUpRight size={13} className="text-[#777e89]" aria-hidden="true" />
            </a>
            <a className="inline-flex items-start gap-3 text-[14px] leading-7 text-[#b7becb] underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-white hover:decoration-teal-400 focus-visible:text-white focus-visible:decoration-teal-400" href="https://maps.google.com/?q=Clinique+dentaire+KHAIR+Casablanca" target="_blank" rel="noreferrer">
              <MapPin size={15} className="mt-1 shrink-0 text-clinic" aria-hidden="true" />
              <span>Boulevard Panoramique<br />Casablanca, Maroc</span>
            </a>
          </div>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-5 text-[11px] text-[#969eab]">
          <span>© <CurrentYear /> Clinique Dentaire Khair. Tous droits réservés.</span>
          <span>CONÇU AVEC SOIN À CASABLANCA <span className="ml-2 inline-block h-px w-7 align-middle bg-clinic" /></span>
        </div>
      </div>
      <p className="mx-auto max-w-[1440px] px-6 py-4 text-center text-[13px] text-white/75 sm:px-8 lg:px-12">
        Designed &amp; developed by{" "}
        <a
          href="https://www.stallionadvertising.ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-20 underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-teal-400 focus-visible:text-white focus-visible:decoration-teal-400"
        >
          Stallion Advertising
        </a>
      </p>
    </footer>
  );
}
