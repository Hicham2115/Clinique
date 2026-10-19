import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";

const mapUrl = "https://www.google.com/maps/place/Clinique+dentaire+KHAIR/@33.5525512,-7.6068624,726m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda63300640286ad:0x6d5be28d98e6916e!8m2!3d33.5525512!4d-7.6068624!16s%2Fg%2F11z670xk20?entry=ttu";

export default function ContactSection() {
  return (
    <section className="mx-auto grid w-[min(100%_-_9vw,1280px)] grid-cols-[.95fr_1.05fr] gap-[8%] border-t border-line pt-[62px] pb-[72px] max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:grid-cols-1 max-[820px]:gap-6 max-[820px]:pt-[46px] max-[820px]:pb-[54px] max-[520px]:w-[calc(100%_-_36px)]" id="contact">
      <div><span className="text-[9px] font-extrabold tracking-[.14em] text-[#718097]">NOUS CONTACTER</span><h2 className="my-4 mb-5 text-[clamp(38px,4vw,53px)] leading-[.99] font-medium tracking-[-.075em] text-[#141a25] max-[520px]:text-[39px]">Le premier pas,<br />en quelques <em className="text-clinic not-italic">clics.</em></h2><p className="max-w-[480px] text-sm leading-[1.75] text-[#697588]">Notre équipe vous accueille à Casablanca. Choisissez une préférence de date ; l’équipe confirmera tout rendez-vous selon ses disponibilités. Pour une urgence, appelez directement la clinique.</p>
        <a className="flex max-w-[390px] items-center gap-[13px] border-b border-line py-[15px]" href="tel:+212522228746"><span className="grid size-[37px] shrink-0 place-items-center rounded-full bg-[#edf3ff] text-clinic"><Phone size={18}/></span><b className="flex-1 text-[13px] leading-[1.5]">05 22 22 87 46</b><ArrowUpRight className="text-[#96a3b4]" size={16}/></a>
        <a className="flex max-w-[390px] items-center gap-[13px] border-b border-line py-[15px]" href={mapUrl} target="_blank" rel="noreferrer"><span className="grid size-[37px] shrink-0 place-items-center rounded-full bg-[#edf3ff] text-clinic"><MapPin size={18}/></span><b className="flex-1 text-[13px] leading-[1.5]">Boulevard Panoramique<br/><small className="text-[11px] font-normal text-[#7e8a9b]">Casablanca — Maroc</small></b><ArrowUpRight className="text-[#96a3b4]" size={16}/></a>
        <a className="flex max-w-[390px] items-center gap-[13px] border-b border-line py-[15px]" href="https://wa.me/212522228746" target="_blank" rel="noreferrer"><span className="grid size-[37px] shrink-0 place-items-center rounded-full bg-[#edf3ff] text-clinic"><MessageCircle size={18}/></span><b className="flex-1 text-[13px] leading-[1.5]">Parler sur WhatsApp</b><ArrowUpRight className="text-[#96a3b4]" size={16}/></a>
        <div className="mt-[15px] max-w-[390px] text-[10px] leading-[1.5] text-[#8691a0]">L’email et les horaires seront ajoutés après confirmation par la clinique.</div>
      </div>
      <div id="rendez-vous"><ContactForm /></div>
    </section>
  );
}
