export default function Logo() {
  return (
    <span className="inline-flex items-center gap-[10px]">
      <span
        className="grid size-[34px] place-items-center rounded-full border-2 border-clinic text-[13px] font-extrabold text-clinic"
        aria-hidden="true"
      >
        K
      </span>
      <span className="flex flex-col gap-0.5 text-[#1b2a44]">
        <b className="text-lg leading-none tracking-[.16em]">KHAIR</b>
        <small className="text-[8px] font-bold tracking-[.18em]">
          CLINIQUE DENTAIRE
        </small>
      </span>
    </span>
  );
}
