import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";

const mapUrl =
  "https://www.google.com/maps/place/Clinique+dentaire+KHAIR/@33.5525512,-7.6068624,726m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda63300640286ad:0x6d5be28d98e6916e!8m2!3d33.5525512!4d-7.6068624!16s%2Fg%2F11z670xk20?entry=ttu";

export default function ContactSection() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-t border-white/10 bg-[#14243b] py-[88px] text-white max-[820px]:py-[58px]"
        id="contact"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-44 -left-40 size-[520px] rounded-full bg-[#315ab6]/20 blur-[100px]" />
          <div className="absolute right-[-10%] bottom-[-45%] size-[640px] rounded-full bg-[#234f99]/20 blur-[120px]" />
        </div>
        <div className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.95fr_1.05fr] items-start gap-[8%] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-8 max-[520px]:w-[calc(100%_-_36px)]">
          <div className="pt-3">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.18em] text-[#b8c7de] uppercase">
              <span className="h-[2px] w-7 bg-[#7da2ff]" aria-hidden="true" />
              Nous contacter <span className="text-white/35">/ Casablanca</span>
            </p>
            <h2 className="mb-5 max-w-[580px] text-[clamp(42px,4.5vw,62px)] leading-[.98] font-medium tracking-[-.075em] text-white max-[520px]:text-[42px]">
              Le premier pas,
              <br />
              en quelques <em className="text-[#8eafff] not-italic">clics.</em>
            </h2>
            <p className="mb-7 max-w-[580px] text-[15px] leading-[1.8] text-[#c0cbda] max-[520px]:text-[14px]">
              Notre équipe vous accueille à Casablanca. Choisissez une préférence
              de date ; l’équipe confirmera tout rendez-vous selon ses
              disponibilités. Pour une urgence, appelez directement la clinique.
            </p>
            <div className="mb-7 max-w-[480px] divide-y divide-white/10 border-y border-white/10">
              <a
                className="group flex items-center gap-[13px] rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8eafff]"
                href="tel:+212522228746"
              >
                <span className="grid size-[40px] shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-[#9ab6ff] transition-colors group-hover:bg-white/[0.14]">
                  <Phone size={18} />
                </span>
                <b className="flex-1 text-[14px] leading-[1.5] text-white">
                  05 22 22 87 46
                </b>
                <ArrowUpRight
                  className="text-[#91a2bd] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={17}
                />
              </a>
              <a
                className="group flex items-center gap-[13px] rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8eafff]"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="grid size-[40px] shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-[#9ab6ff] transition-colors group-hover:bg-white/[0.14]">
                  <MapPin size={18} />
                </span>
                <b className="flex-1 text-[14px] leading-[1.5] text-white">
                  Boulevard Panoramique
                  <br />
                  <small className="text-[12px] font-normal text-[#aebbd0]">
                    Casablanca — Maroc
                  </small>
                </b>
                <ArrowUpRight
                  className="text-[#91a2bd] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={17}
                />
              </a>
              <a
                className="group flex items-center gap-[13px] rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8eafff]"
                href="https://wa.me/212522228746"
                target="_blank"
                rel="noreferrer"
              >
                <span className="grid size-[40px] shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-[#9ab6ff] transition-colors group-hover:bg-white/[0.14]">
                  <MessageCircle size={18} />
                </span>
                <b className="flex-1 text-[14px] leading-[1.5] text-white">
                  Parler sur WhatsApp
                </b>
                <ArrowUpRight
                  className="text-[#91a2bd] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={17}
                />
              </a>
            </div>
            <p className="mt-5 max-w-[480px] px-1 text-[10px] leading-[1.55] text-[#93a2b8]">
              L’email et les horaires seront ajoutés après confirmation par la
              clinique.
            </p>
          </div>
          <div id="rendez-vous">
            <ContactForm />
          </div>
        </div>
      </section>
      <section
        aria-label="Carte de la clinique à Casablanca"
        className="bg-[#14243b] px-[clamp(18px,4vw,64px)] py-[clamp(18px,3vw,40px)]"
      >
        <div className="relative h-[68svh] min-h-[420px] w-full overflow-hidden rounded-[28px] border border-white/15 bg-[#d8e1ef] shadow-[0_24px_70px_rgba(4,15,32,.28)] max-[520px]:h-[58svh] max-[520px]:min-h-[360px] max-[520px]:rounded-[20px]">
          <iframe
            className="absolute inset-0 size-full border-0"
            src="https://maps.google.com/maps?q=33.5525512,-7.6068624&z=16&output=embed"
            title="Carte Google Maps — Clinique Dentaire Khair, Casablanca"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#14243b]/35 to-transparent" aria-hidden="true" />
          <div className="absolute top-7 left-7 flex max-w-[calc(100%_-_56px)] items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 text-[#14243b] shadow-[0_12px_36px_rgba(13,31,58,.18)] backdrop-blur-md max-[520px]:top-4 max-[520px]:left-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eaf0ff] text-[#2765e8]">
              <MapPin size={19} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[9px] font-bold tracking-[.14em] text-[#71819a] uppercase">Clinique Dentaire Khair</span>
              <span className="mt-0.5 block text-[13px] font-semibold">Boulevard Panoramique · Casablanca</span>
            </span>
          </div>
          <a
            className="absolute right-7 bottom-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#2765e8] px-5 text-[12px] font-bold text-white shadow-[0_12px_32px_rgba(23,64,153,.28)] transition hover:-translate-y-0.5 hover:bg-[#1250d1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-[520px]:right-4 max-[520px]:bottom-4"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir l’itinéraire <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
