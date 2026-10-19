import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { CurrentYear } from "@/components/current-year";

const flipClass =
  "footer-flip-link underline decoration-transparent underline-offset-4 transition-colors hover:text-white hover:decoration-[#7da2ff] focus-visible:text-white focus-visible:decoration-[#7da2ff]";
const linkClass = `${flipClass} w-fit text-[14px] leading-7 text-[#aeb9ca]`;
const headingClass =
  "mb-4 text-[11px] font-bold tracking-[.12em] text-white uppercase";

export default function SiteFooter() {
  return (
    <footer className="bg-white px-[clamp(14px,3vw,40px)] py-7 text-white">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1727] px-[5.5vw] text-white shadow-[0_24px_70px_rgba(13,23,39,.16)] max-[520px]:rounded-[24px] max-[520px]:px-5">
        <div className="grid grid-cols-[1.65fr_1fr_1fr_1fr] gap-10 border-b border-white/10 py-[66px] max-[980px]:grid-cols-2 max-[980px]:gap-x-12 max-[980px]:gap-y-10 max-[760px]:py-11 max-[520px]:gap-x-7 max-[520px]:gap-y-9">
          <div className="max-w-[380px] max-[980px]:col-span-2">
            <a
              aria-label="Clinique Dentaire Khair, accueil"
              className="inline-flex items-center gap-3"
              href="#accueil"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-white p-1.5">
                <Image
                  alt=""
                  className="h-auto w-full"
                  height={270}
                  src="/images/clinic-logo.webp"
                  width={442}
                />
              </span>
              <span>
                <span className="block text-[16px] font-bold tracking-[.14em]">
                  KHAIR
                </span>
                <span className="mt-1 block text-[9px] font-bold tracking-[.16em] text-[#aeb9ca]">
                  CLINIQUE DENTAIRE
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-[350px] text-[14px] leading-[1.8] text-[#aeb9ca]">
              Une attention humaine, au cœur de chaque sourire.
            </p>
          </div>

          <nav aria-label="La clinique" className="flex flex-col items-start">
            <h2 className={headingClass}>La clinique</h2>
            <a className={linkClass} href="#accueil">Accueil</a>
            <a className={linkClass} href="#clinique">À propos</a>
            <a className={linkClass} href="#soins">Nos soins</a>
            <a className={linkClass} href="#praticien">Le praticien</a>
          </nav>

          <nav aria-label="Votre parcours" className="flex flex-col items-start">
            <h2 className={headingClass}>Votre parcours</h2>
            <a className={linkClass} href="#imagerie">Imagerie</a>
            <a className={linkClass} href="#formation">Espace formation</a>
            <a className={linkClass} href="#questions">Questions fréquentes</a>
            <a className={linkClass} href="#rendez-vous">Rendez-vous</a>
          </nav>

          <div className="flex flex-col items-start">
            <h2 className={headingClass}>Parlons ensemble</h2>
            <a className={`${linkClass} inline-flex items-center gap-2.5`} href="tel:+212522228746">
              <Phone size={14} className="text-[#8eafff]" aria-hidden="true" />
              05 22 22 87 46
              <ArrowUpRight size={13} className="text-[#71819a]" aria-hidden="true" />
            </a>
            <a
              className={`${linkClass} inline-flex items-center gap-2.5`}
              href="https://wa.me/212522228746"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} className="text-[#8eafff]" aria-hidden="true" />
              Écrire sur WhatsApp
              <ArrowUpRight size={13} className="text-[#71819a]" aria-hidden="true" />
            </a>
            <a
              className={`${linkClass} inline-flex items-start gap-2.5`}
              href="https://maps.google.com/?q=Clinique+dentaire+KHAIR+Casablanca"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={14} className="mt-1 shrink-0 text-[#8eafff]" aria-hidden="true" />
              <span>Boulevard Panoramique<br />Casablanca, Maroc</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-[11px] text-[#aeb9ca] max-[520px]:items-start">
          <span>© <CurrentYear /> Clinique Dentaire Khair. Tous droits réservés.</span>
          <span className="flex flex-wrap items-center gap-x-2">
            Designed &amp; developed by{" "}
            <a
              className={`${flipClass} text-[#aeb9ca]`}
              href="https://www.stallionadvertising.ma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stallion Advertising
            </a>
          </span>
        </div>
        <p
          aria-hidden="true"
          className="pointer-events-none mx-auto max-w-[1500px] overflow-hidden bg-gradient-to-r from-[#1b3152] via-[#6693ff] to-[#1b3152] bg-clip-text pb-6 text-center text-[clamp(90px,22vw,320px)] leading-[.72] font-black tracking-[-.105em] text-transparent select-none max-[520px]:text-[22vw]"
        >
          KHAIR
        </p>
      </div>
    </footer>
  );
}
