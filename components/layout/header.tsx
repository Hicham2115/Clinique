import Image from "next/image";
import { CalendarDays, MapPin, Menu, MessageCircle, Phone } from "lucide-react";

const links = [
  ["Accueil", "#accueil"],
  ["À propos", "#clinique"],
  ["Soins", "#soins"],
  ["Le praticien", "#praticien"],
  ["Contact", "#contact"],
];

const mapUrl =
  "https://www.google.com/maps/place/Clinique+dentaire+KHAIR/@33.5525512,-7.6068624,726m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda63300640286ad:0x6d5be28d98e6916e!8m2!3d33.5525512!4d-7.6068624!16s%2Fg%2F11z670xk20?entry=ttu";

export default function Header() {
  return (
    <header className="relative z-30 bg-white font-['Avenir_Next',Avenir,'Segoe_UI',sans-serif] text-[#14233b] shadow-[0_7px_24px_rgba(20,39,72,0.07)]">
      <div className="border-b border-[#203752] bg-[#14243b]">
        <div className="mx-auto grid min-h-8 max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-8 text-[11px] font-medium tracking-[0.01em] text-[#d6e1f0] max-md:px-5 max-sm:grid-cols-[1fr_auto] max-sm:px-4">
          <a
            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-white"
            href="tel:+212522228746"
          >
            <Phone className="text-[#83b2ff]" size={13} strokeWidth={2.1} />
            05 22 22 87 46
          </a>
          <a
            className="inline-flex items-center justify-self-center gap-2 transition-colors hover:text-white max-sm:hidden"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin className="text-[#83b2ff]" size={14} strokeWidth={2.1} />
            Boulevard Panoramique, Casablanca
          </a>
          <a
            className="inline-flex w-fit items-center justify-self-end gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            href="https://wa.me/212522228746"
            target="_blank"
            rel="noreferrer"
            aria-label="Écrire à la clinique sur WhatsApp"
          >
            <MessageCircle
              className="text-[#83b2ff]"
              size={14}
              strokeWidth={2.1}
            />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="border-b border-[#e8edf4]">
        <div className="mx-auto grid min-h-[72px] max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-8 max-[1050px]:grid-cols-[1fr_auto] max-[1050px]:gap-4 max-md:min-h-[64px] max-md:px-5 max-sm:min-h-[60px] max-sm:px-4">
          <a
            className="inline-flex w-fit items-center gap-3 rounded-sm transition-opacity hover:opacity-80"
            href="#accueil"
            aria-label="Clinique Dentaire Khair, accueil"
          >
            <Image
              className="h-auto w-[74px] max-sm:w-[63px]"
              src="/images/clinic-mark.png"
              width={408}
              height={210}
              alt=""
              priority
            />
            <span className="flex flex-col gap-0.5 whitespace-nowrap">
              <span className="text-[20px] font-bold leading-none tracking-[0.12em] text-[#172748] max-sm:text-[17px]">
                KHAIR
              </span>
              <span className="text-[8px] font-bold leading-none tracking-[0.19em] text-[#6a7890] max-sm:text-[7px]">
                CLINIQUE DENTAIRE
              </span>
            </span>
          </a>

          <nav
            className="flex items-center gap-7 max-[1150px]:gap-5 max-[1050px]:hidden"
            aria-label="Navigation principale"
          >
            {links.map(([label, href]) => (
              <a
                className={`relative whitespace-nowrap py-1.5 text-[13px] font-semibold transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-clinic after:transition-transform after:duration-200 hover:text-clinic hover:after:scale-x-100 focus-visible:text-clinic focus-visible:after:scale-x-100 ${href === "#accueil" ? "text-clinic after:scale-x-100" : "text-[#344258]"}`}
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-self-end">
            <a
              className="inline-flex h-11 items-center gap-2.5 rounded-[8px] bg-clinic px-5 text-[12px] font-bold text-white shadow-[0_5px_13px_rgba(39,101,232,0.18)] transition-colors hover:bg-clinic-dark max-[1050px]:hidden"
              href="#rendez-vous"
            >
              <CalendarDays size={17} strokeWidth={2} />
              Prendre rendez-vous
            </a>
            <details className="group relative hidden max-[1050px]:block">
              <summary
                aria-label="Ouvrir la navigation"
                className="grid size-10 cursor-pointer list-none place-items-center rounded-lg border border-[#dce5f1] text-[#172748] transition-colors hover:border-clinic hover:text-clinic [&::-webkit-details-marker]:hidden"
              >
                <Menu size={19} />
              </summary>
              <nav
                className="absolute right-0 top-[calc(100%+12px)] grid min-w-[210px] gap-1 rounded-xl border border-[#e1e8f1] bg-white p-2 shadow-[0_15px_35px_rgba(17,34,61,0.15)]"
                aria-label="Navigation mobile"
              >
                {links.map(([label, href]) => (
                  <a
                    className="rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#344258] hover:bg-[#f3f8fd] hover:text-clinic"
                    href={href}
                    key={href}
                  >
                    {label}
                  </a>
                ))}
                <a
                  className="mt-1 rounded-lg bg-clinic px-3 py-2.5 text-[13px] font-semibold text-white hover:bg-clinic-dark"
                  href="#rendez-vous"
                >
                  Prendre rendez-vous
                </a>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
