import Image from "next/image";

type ClinicImageMarkProps = {
  className: string;
};

export default function ClinicImageMark({ className }: ClinicImageMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 grid size-10 place-items-center rounded-xl border border-white/80 bg-white/90 shadow-[0_4px_14px_rgba(20,35,59,.14)] backdrop-blur-sm ${className}`}
    >
      <Image
        alt=""
        className="h-auto w-[29px]"
        height={210}
        src="/images/clinic-mark.png"
        width={408}
      />
    </span>
  );
}
