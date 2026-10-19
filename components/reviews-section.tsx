import { ArrowUpRight, MessageCircleHeart } from "lucide-react";

const reviewsUrl = "https://www.google.com/maps/place/Clinique+dentaire+KHAIR/@33.5525512,-7.6068624,726m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda63300640286ad:0x6d5be28d98e6916e!8m2!3d33.5525512!4d-7.6068624!16s%2Fg%2F11z670xk20?entry=ttu";

export default function ReviewsSection() {
  return (
    <section className="mx-auto my-[72px] grid w-[min(100%_-_9vw,1280px)] grid-cols-[68px_1fr_auto] items-center gap-[22px] rounded-clinic bg-[#17243b] px-[40px] py-[32px] text-white max-[1100px]:w-[min(100%_-_7vw,1280px)] max-[820px]:w-[min(100%_-_44px,680px)] max-[820px]:my-[50px] max-[820px]:grid-cols-[52px_1fr] max-[820px]:gap-3 max-[820px]:px-[24px] max-[820px]:py-[22px] max-[520px]:w-[calc(100%_-_36px)] max-[520px]:grid-cols-1 max-[520px]:gap-3 max-[520px]:p-5" id="avis">
      <div className="grid size-[58px] place-items-center rounded-full border border-white/25 text-[#8bb2ff] max-[820px]:size-12 max-[520px]:size-11"><MessageCircleHeart size={27} strokeWidth={1.4}/></div>
      <div><span className="text-[9px] font-extrabold tracking-[.14em] text-[#a6c1f2]">LES AVIS DE NOS PATIENTS</span><h2 className="my-[11px] mb-[7px] text-[clamp(30px,3vw,40px)] leading-[.99] font-medium tracking-[-.075em]">Votre expérience<br /><em className="text-[#8bb2ff] not-italic">compte pour nous.</em></h2><p className="mb-0 max-w-[600px] text-[16px] leading-[1.7] text-[#e0e7f2] max-[520px]:text-[14px]">Consultez les retours publiés sur la fiche Google de la clinique.</p></div>
      <a className="inline-flex items-center gap-[17px] rounded-full bg-white px-[17px] py-[14px] text-xs font-bold text-[#17335f] transition hover:-translate-y-0.5 max-[820px]:col-start-2 max-[820px]:w-fit max-[820px]:mt-1.5 max-[520px]:col-start-1" href={reviewsUrl} target="_blank" rel="noreferrer"><span>Voir les avis sur Google</span><ArrowUpRight size={18}/></a>
      <small className="col-start-2 -mt-[13px] self-start text-[9px] text-[#93a2ba] max-[820px]:mt-[-7px] max-[520px]:col-start-1 max-[520px]:mt-0">Les avis et leur note sont affichés sur Google et peuvent évoluer.</small>
    </section>
  );
}
