import Image from "next/image";
import ClinicImageMark from "@/components/clinic-image-mark";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-[680px] overflow-hidden bg-[#f8fbff] lg:h-[min(82svh,820px)] max-md:min-h-[740px] max-sm:min-h-[780px]"
      id="accueil"
    >
      <div className="absolute inset-0 -z-20 max-md:top-auto max-md:h-[62%]">
        <Image
          className="object-cover object-center max-md:object-[63%_center]"
          src="/images/hero-clinician-hq.png"
          alt="Une professionnelle de santé dans un cabinet dentaire moderne"
          fill
          priority
          quality={95}
          sizes="100vw"
        />
      </div>
      <ClinicImageMark className="right-7 bottom-7 max-md:right-5 max-md:bottom-5" />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f8fbff_0%,#f8fbff_31%,rgba(248,251,255,0.96)_38%,rgba(248,251,255,0.78)_43%,rgba(248,251,255,0.4)_48%,rgba(248,251,255,0.12)_52%,transparent_56%)] max-md:bg-[linear-gradient(180deg,#f8fbff_0%,#f8fbff_35%,rgba(248,251,255,0.9)_49%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full min-h-[680px] max-w-[1460px] items-center px-8 py-16 max-md:min-h-[740px] max-md:items-start max-md:px-5 max-md:pt-16 max-sm:min-h-[780px] max-sm:px-4 max-sm:pt-12">
        <div className="max-w-[640px] max-md:max-w-[550px]">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.17em] text-[#41659c] uppercase max-sm:mb-5 max-sm:text-[9px]">
            <span className="h-[2px] w-8 bg-clinic" aria-hidden="true" />
            Clinique Dentaire Khair · Casablanca
          </p>
          <h1 className="max-w-[680px] text-[clamp(48px,4.8vw,72px)] leading-[1.02] font-semibold tracking-[-0.055em] text-[#14233b] max-md:max-w-[590px] max-md:text-[clamp(46px,6.8vw,64px)] max-sm:text-[clamp(40px,10.5vw,52px)]">
            L’humain au cœur
            <br />
            de chaque <span className="text-clinic">sourire.</span>
          </h1>
          <p className="mt-6 max-w-[580px] text-[18px] leading-[1.65] font-medium text-[#202938] max-sm:mt-5 max-sm:max-w-[340px] max-sm:text-[15px]">
            Bien plus que des soins, une attention particulière à l’égard de
            chaque patient.
          </p>
          <p className="mt-3 max-w-[580px] text-[16px] leading-[1.75] text-[#202938] max-sm:max-w-[340px] max-sm:text-[14px]">
            Découvrez un lieu où expertise, écoute et technologies de pointe se
            conjuguent pour vous offrir une expérience de soin pensée autour de
            vous.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 max-sm:mt-7">
            <a
              className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-clinic px-6 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(39,101,232,0.19)] transition-colors hover:bg-clinic-dark max-sm:min-h-11 max-sm:px-5"
              href="#rendez-vous"
            >
              Prendre rendez-vous
              <ArrowUpRight size={17} strokeWidth={2} />
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 border-b border-[#9fb5d5] text-[13px] font-semibold text-[#253b5c] transition-colors hover:border-clinic hover:text-clinic"
              href="#soins"
            >
              Découvrir nos soins
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
