import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";

const mapUrl =
  "https://www.google.com/maps/place/Clinique+dentaire+KHAIR/@33.5525512,-7.6068624,726m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda63300640286ad:0x6d5be28d98e6916e!8m2!3d33.5525512!4d-7.6068624!16s%2Fg%2F11z670xk20?entry=ttu";

export default function ContactSection() {
  return (
    <section
      className="border-t border-line bg-[#f5f8fd] py-[68px] max-[820px]:py-[48px]"
      id="contact"
    >
      <div className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.95fr_1.05fr] items-start gap-[8%] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-7 max-[520px]:w-[calc(100%_-_36px)]">
        <div className="pt-3">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-[#657894] uppercase">
            <span className="h-[2px] w-7 bg-clinic" aria-hidden="true" />
            Nous contacter
          </p>
          <h2 className="mb-5 text-[clamp(38px,4vw,53px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">
            Le premier pas,
            <br />
            en quelques <em className="text-clinic not-italic">clics.</em>
          </h2>
          <p className="mb-5 max-w-[600px] text-[16px] leading-[1.8] text-[#354154] max-[520px]:text-[14px]">
            Notre équipe vous accueille à Casablanca. Choisissez une préférence
            de date ; l’équipe confirmera tout rendez-vous selon ses
            disponibilités. Pour une urgence, appelez directement la clinique.
          </p>
          <div className="max-w-[480px] divide-y divide-[#dce5f1]">
            <a
              className="group flex items-center gap-[13px] rounded-xl px-3 py-3 transition-colors hover:bg-white"
              href="tel:+212522228746"
            >
              <span className="grid size-[40px] shrink-0 place-items-center rounded-full bg-white text-clinic shadow-sm transition-colors group-hover:bg-[#eaf1ff]">
                <Phone size={18} />
              </span>
              <b className="flex-1 text-[14px] leading-[1.5] text-[#1d293a]">
                05 22 22 87 46
              </b>
              <ArrowUpRight
                className="text-[#96a3b4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={17}
              />
            </a>
            <a
              className="group flex items-center gap-[13px] rounded-xl px-3 py-3 transition-colors hover:bg-white"
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid size-[40px] shrink-0 place-items-center rounded-full bg-white text-clinic shadow-sm transition-colors group-hover:bg-[#eaf1ff]">
                <MapPin size={18} />
              </span>
              <b className="flex-1 text-[14px] leading-[1.5] text-[#1d293a]">
                Boulevard Panoramique
                <br />
                <small className="text-[12px] font-normal text-[#7e8a9b]">
                  Casablanca — Maroc
                </small>
              </b>
              <ArrowUpRight
                className="text-[#96a3b4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={17}
              />
            </a>
            <a
              className="group flex items-center gap-[13px] rounded-xl px-3 py-3 transition-colors hover:bg-white"
              href="https://wa.me/212522228746"
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid size-[40px] shrink-0 place-items-center rounded-full bg-white text-clinic shadow-sm transition-colors group-hover:bg-[#eaf1ff]">
                <MessageCircle size={18} />
              </span>
              <b className="flex-1 text-[14px] leading-[1.5] text-[#1d293a]">
                Parler sur WhatsApp
              </b>
              <ArrowUpRight
                className="text-[#96a3b4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={17}
              />
            </a>
          </div>
          <p className="mt-4 max-w-[480px] px-3 text-[11px] leading-[1.55] text-[#8691a0]">
            L’email et les horaires seront ajoutés après confirmation par la
            clinique.
          </p>
        </div>
        <div id="rendez-vous">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
