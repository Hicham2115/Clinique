"use client";

import { useEffect, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Select } from "@base-ui/react/select";
import { Popover } from "@base-ui/react/popover";
import { z } from "zod";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  ShieldCheck,
} from "lucide-react";

const disciplines = [
  "Dentisterie générale",
  "Parodontologie",
  "Endodontie",
  "Chirurgie orale",
  "Implantologie",
  "Orthodontie",
  "Dentisterie esthétique",
  "Prothèses dentaires",
  "Dentisterie pédiatrique",
  "Urgence dentaire · appeler la clinique",
];

const disciplineOptions = disciplines.map((discipline) => ({
  label: discipline,
  value: discipline,
}));

const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Saisissez votre nom."),
  discipline: z.string().min(1, "Choisissez une discipline."),
  preferredDate: z.string().min(1, "Choisissez une date."),
  preferredTime: z.string().min(1, "Choisissez une préférence horaire."),
});

const fieldClassName =
  "min-h-12 w-full rounded-[14px] border border-[#dce5f2] bg-[#f6f9ff] px-4 py-3 text-[13px] font-medium text-[#1d293a] outline-none transition-[border-color,background-color,box-shadow] placeholder:text-[#9aa6b7] hover:border-[#b8c9e6] focus:border-[#6f97ed] focus:bg-white focus:shadow-[0_0_0_4px_rgba(39,101,232,.1)]";

function getErrorMessage(errors: unknown[]) {
  const firstError = errors[0];
  if (typeof firstError === "string") return firstError;
  if (firstError && typeof firstError === "object" && "message" in firstError) {
    return String(firstError.message);
  }
  return undefined;
}

const frenchMonth = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric",
});
const frenchDate = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

function dateFromValue(value: string) {
  if (!value) return undefined;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateToValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function AppointmentDatePicker({
  value,
  onChange,
  invalid,
  describedBy,
}: {
  value: string;
  onChange: (value: string) => void;
  invalid: boolean;
  describedBy?: string;
}) {
  const selectedDate = dateFromValue(value);
  const [open, setOpen] = useState(false);
  const [today, setToday] = useState("");
  const [month, setMonth] = useState(() => {
    const selected = dateFromValue(value);
    return new Date(
      selected?.getFullYear() ?? 2000,
      selected?.getMonth() ?? 0,
      1,
    );
  });

  const offset = (month.getDay() + 6) % 7;
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1 - offset);
  const days = Array.from(
    { length: 42 },
    (_, index) =>
      new Date(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        firstDay.getDate() + index,
      ),
  );

  function changeMonth(delta: number) {
    setMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + delta, 1),
    );
  }

  return (
    <Popover.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (nextOpen) {
          const currentDate = new Date();
          setToday(dateToValue(currentDate));
          const visibleDate = selectedDate ?? currentDate;
          setMonth(
            new Date(visibleDate.getFullYear(), visibleDate.getMonth(), 1),
          );
        }
        setOpen(nextOpen);
      }}
    >
      <Popover.Trigger
        className={`${fieldClassName} flex cursor-pointer items-center justify-between gap-3 text-left ${invalid ? "border-red-400" : ""}`}
        type="button"
        aria-label="Choisir la date souhaitée"
        aria-invalid={invalid}
        aria-describedby={describedBy}
      >
        <span className={selectedDate ? "text-[#1d293a]" : "text-[#9aa6b7]"}>
          {selectedDate ? frenchDate.format(selectedDate) : "Choisir une date"}
        </span>
        <CalendarDays
          size={17}
          className="shrink-0 text-[#527df0]"
          aria-hidden="true"
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          className="z-50 outline-none"
          sideOffset={8}
          align="start"
        >
          <Popover.Popup className="w-[min(320px,calc(100vw-32px))] rounded-2xl border border-[#e1e8f2] bg-white p-4 text-[#1d293a] shadow-[0_20px_55px_rgba(28,51,87,.2)] outline-none transition-[opacity,transform] duration-150 data-[starting-style]:scale-[.98] data-[starting-style]:opacity-0 data-[ending-style]:scale-[.98] data-[ending-style]:opacity-0 motion-reduce:transition-none">
            <div className="mb-4 flex items-center justify-between">
              <Popover.Title className="text-sm font-bold capitalize text-[#1d293a]">
                {frenchMonth.format(month)}
              </Popover.Title>
              <div className="flex gap-1">
                <button
                  className="grid size-8 cursor-pointer place-items-center rounded-full text-[#60718b] transition hover:bg-[#f0f4fb] hover:text-[#2765e8]"
                  type="button"
                  aria-label="Mois précédent"
                  onClick={() => changeMonth(-1)}
                >
                  <ChevronLeft size={17} aria-hidden="true" />
                </button>
                <button
                  className="grid size-8 cursor-pointer place-items-center rounded-full text-[#60718b] transition hover:bg-[#f0f4fb] hover:text-[#2765e8]"
                  type="button"
                  aria-label="Mois suivant"
                  onClick={() => changeMonth(1)}
                >
                  <ChevronRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div
              className="grid grid-cols-7 text-center text-[10px] font-bold text-[#91a0b4]"
              aria-hidden="true"
            >
              {weekDays.map((day, index) => (
                <span className="pb-2" key={`${day}-${index}`}>
                  {day}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-1" aria-label="Calendrier">
              {days.map((day) => {
                const inMonth = day.getMonth() === month.getMonth();
                const isSelected = Boolean(
                  selectedDate &&
                  dateToValue(day) === dateToValue(selectedDate),
                );
                const isToday = dateToValue(day) === today;
                return (
                  <button
                    className={`mx-auto grid size-9 cursor-pointer place-items-center rounded-full text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2765e8] ${
                      isSelected
                        ? "bg-[#2765e8] font-bold text-white shadow-[0_4px_12px_rgba(39,101,232,.24)]"
                        : inMonth
                          ? "text-[#344053] hover:bg-[#edf3ff] hover:text-[#174fbf]"
                          : "text-[#c2cad6] hover:bg-[#f5f7fb]"
                    } ${isToday && !isSelected ? "font-bold ring-1 ring-inset ring-[#a9c0f7]" : ""}`}
                    key={dateToValue(day)}
                    type="button"
                    aria-label={frenchDate.format(day)}
                    aria-pressed={isSelected}
                    onClick={() => {
                      onChange(dateToValue(day));
                      setOpen(false);
                    }}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 border-t border-[#edf0f5] pt-3 text-center">
              <button
                className="cursor-pointer text-[11px] font-bold text-[#2765e8] hover:text-[#174fbf]"
                type="button"
                onClick={() => {
                  const today = new Date();
                  const todayValue = dateToValue(today);
                  setToday(todayValue);
                  onChange(todayValue);
                  setMonth(new Date(today.getFullYear(), today.getMonth(), 1));
                  setOpen(false);
                }}
              >
                Aujourd’hui
              </button>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [disciplineOpen, setDisciplineOpen] = useState(false);

  useEffect(() => {
    if (!disciplineOpen) return;

    const closeOnOutsideScroll = (event: WheelEvent | TouchEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest("[data-lenis-prevent]")
      ) {
        return;
      }
      setDisciplineOpen(false);
    };

    window.addEventListener("wheel", closeOnOutsideScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("touchmove", closeOnOutsideScroll, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", closeOnOutsideScroll, true);
      window.removeEventListener("touchmove", closeOnOutsideScroll, true);
    };
  }, [disciplineOpen]);

  const form = useForm({
    defaultValues: {
      name: "",
      discipline: "",
      preferredDate: "",
      preferredTime: "",
    },
    validators: {
      onSubmit: appointmentSchema,
    },
    onSubmit: () => {
      setSent(true);
    },
  });

  return (
    <form
      className="rounded-[28px] border border-white/70 bg-white p-8 shadow-[0_30px_90px_rgba(4,15,32,.28)] ring-1 ring-[#9bb8ff]/20 max-[520px]:rounded-[22px] max-[520px]:p-5"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="relative -mx-8 -mt-8 mb-6 flex items-center justify-between gap-3 overflow-hidden rounded-t-[27px] bg-[#17243b] px-8 py-6 text-white max-[520px]:-mx-5 max-[520px]:-mt-5 max-[520px]:rounded-t-[21px] max-[520px]:px-5">
        <span
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#4d83ff] via-[#a8c1ff] to-transparent"
          aria-hidden="true"
        />
        <div className="flex items-center gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-[15px] border border-white/10 bg-white/[0.08] text-[#a9c0ff] shadow-inner shadow-white/[0.04]">
            <CalendarDays size={20} aria-hidden="true" />
          </span>
          <div>
            <span className="block text-[9px] font-extrabold tracking-[.16em] text-[#b8c8e2]">
              RENDEZ-VOUS EN LIGNE
            </span>
            <span className="mt-1.5 block text-[17px] font-semibold tracking-[-.03em]">
              Préparer une demande
            </span>
          </div>
        </div>
      </div>

      <>
        <p className="mb-6 rounded-xl border-l-[3px] border-[#6e93ed] bg-[#f3f7ff] px-4 py-3 text-[11px] leading-[1.6] text-[#64738a]">
          Choisissez une discipline et une préférence de date. L’équipe
          confirmera tout rendez-vous selon ses disponibilités. Pour une
          urgence, appelez directement la clinique.
        </p>

        <form.Field name="name">
          {(field) => {
            const error = getErrorMessage(field.state.meta.errors);
            return (
              <label className="mb-5 flex flex-col gap-2.5 text-[10px] font-extrabold tracking-[.04em] text-[#53647e]">
                Nom de démonstration
                <input
                  className={fieldClassName}
                  autoComplete="off"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${field.name}-error` : undefined}
                />
                {error && (
                  <span
                    className="text-[10px] font-medium text-red-600"
                    id={`${field.name}-error`}
                  >
                    {error}
                  </span>
                )}
              </label>
            );
          }}
        </form.Field>

        <form.Field name="discipline">
          {(field) => {
            const error = getErrorMessage(field.state.meta.errors);
            return (
              <div className="mb-5 flex flex-col gap-2.5">
                <Select.Root
                  items={disciplineOptions}
                  open={disciplineOpen}
                  onOpenChange={(open) => setDisciplineOpen(open)}
                  value={field.state.value || null}
                  onValueChange={(value) =>
                    field.handleChange(String(value ?? ""))
                  }
                >
                  <Select.Label className="text-[10px] font-extrabold tracking-[.04em] text-[#53647e]">
                    Motif
                  </Select.Label>
                  <Select.Trigger
                    className={`${fieldClassName} group flex cursor-pointer items-center justify-between text-left data-[popup-open]:border-[#7fa5f2] data-[popup-open]:bg-[#edf3ff]`}
                    aria-label="Motif"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "discipline-error" : undefined}
                  >
                    <Select.Value placeholder="Choisir une discipline" />
                    <ChevronDown
                      size={16}
                      className="shrink-0 text-[#73839a] transition-transform group-data-[popup-open]:rotate-180"
                      aria-hidden="true"
                    />
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Positioner
                      className="z-50 outline-none"
                      sideOffset={6}
                      align="start"
                    >
                      <Select.Popup className="max-h-[min(320px,var(--available-height))] min-w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-hidden rounded-xl border border-[#dfe6ef] bg-white p-1.5 text-[#1d293a] shadow-[0_16px_42px_rgba(28,51,87,.16)] outline-none transition-[opacity,transform] duration-150 data-[starting-style]:scale-[.98] data-[starting-style]:opacity-0 data-[ending-style]:scale-[.98] data-[ending-style]:opacity-0 motion-reduce:transition-none">
                        <Select.List
                          className="max-h-[min(300px,var(--available-height))] overscroll-contain overflow-y-auto"
                          data-lenis-prevent
                        >
                          {disciplineOptions.map(({ label, value }) => (
                            <Select.Item
                              className="flex min-h-10 cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs text-[#344053] outline-none data-[highlighted]:bg-[#edf3ff] data-[highlighted]:text-[#174fbf] data-[selected]:font-semibold"
                              key={value}
                              value={value}
                            >
                              <Select.ItemText>{label}</Select.ItemText>
                              <Select.ItemIndicator>
                                <Check
                                  size={14}
                                  className="text-clinic"
                                  aria-hidden="true"
                                />
                              </Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.List>
                      </Select.Popup>
                    </Select.Positioner>
                  </Select.Portal>
                </Select.Root>
                {error && (
                  <span
                    className="text-[10px] font-medium text-red-600"
                    id="discipline-error"
                  >
                    {error}
                  </span>
                )}
              </div>
            );
          }}
        </form.Field>

        <form.Field name="preferredDate">
          {(field) => {
            const error = getErrorMessage(field.state.meta.errors);
            return (
              <label className="mb-5 flex flex-col gap-2.5 text-[10px] font-extrabold tracking-[.04em] text-[#53647e]">
                Date souhaitée
                <AppointmentDatePicker
                  value={field.state.value}
                  onChange={field.handleChange}
                  invalid={Boolean(error)}
                  describedBy={error ? `${field.name}-error` : undefined}
                />
                {error && (
                  <span
                    className="text-[10px] font-medium text-red-600"
                    id={`${field.name}-error`}
                  >
                    {error}
                  </span>
                )}
              </label>
            );
          }}
        </form.Field>

        <form.Field name="preferredTime">
          {(field) => {
            const error = getErrorMessage(field.state.meta.errors);
            return (
              <fieldset className="mb-6">
                <legend className="mb-2.5 text-[10px] font-extrabold tracking-[.04em] text-[#53647e]">
                  Préférence horaire
                </legend>
                <div className="flex gap-3">
                  {["Matin", "Après-midi"].map((time) => (
                    <label
                      className="inline-flex min-h-11 flex-1 cursor-pointer items-center gap-2 rounded-xl border border-[#dce5f2] bg-[#f9fbff] px-3 text-xs text-[#344053] transition-colors hover:border-[#b8c9e6] has-[:checked]:border-[#8aaaf0] has-[:checked]:bg-[#f0f5ff] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#6f97ed]"
                      key={time}
                    >
                      <input
                        className="accent-clinic"
                        type="radio"
                        name={field.name}
                        value={time}
                        checked={field.state.value === time}
                        onBlur={field.handleBlur}
                        onChange={() => field.handleChange(time)}
                      />
                      {time}
                    </label>
                  ))}
                </div>
                {error && (
                  <p className="mt-2 text-[10px] font-medium text-red-600">
                    {error}
                  </p>
                )}
              </fieldset>
            );
          }}
        </form.Field>

        <button
          className="inline-flex min-h-[54px] w-full items-center justify-between rounded-[16px] bg-clinic px-5 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(39,101,232,.2)] transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-[0_14px_30px_rgba(31,78,164,.3)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6f97ed]"
          type="submit"
        >
          Confirmer ma demande <ArrowRight size={16} aria-hidden="true" />
        </button>
      </>

      {sent && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#101a2b]/55 px-4 py-6 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSent(false);
          }}
        >
          <section
            aria-labelledby="request-success-title"
            aria-describedby="request-success-description"
            aria-modal="true"
            role="dialog"
            className="relative w-full max-w-[440px] overflow-hidden rounded-[22px] border border-[#dce5f2] bg-white p-7 text-center shadow-[0_30px_90px_rgba(4,15,32,.3)] animate-in fade-in zoom-in-95 duration-200 max-[520px]:rounded-[20px] max-[520px]:p-5"
          >
            <span
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#4d83ff] via-[#a8c1ff] to-transparent"
              aria-hidden="true"
            />
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setSent(false)}
              className="absolute right-4 top-4 grid size-9 cursor-pointer place-items-center rounded-full text-[#8793a5] transition hover:bg-[#f2f5fa] hover:text-[#24334b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f97ed]"
            >
              <X size={17} aria-hidden="true" />
            </button>
            <div className="flex flex-col items-center gap-3 px-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-[14px] border border-[#dce8ff] bg-[#edf3ff] text-[#2765e8]">
                <Check size={21} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <div className="pt-0.5">
                <p className="text-[9px] font-extrabold tracking-[.16em] text-[#71819a]">
                  DEMANDE ENREGISTRÉE
                </p>
                <h3
                  id="request-success-title"
                  className="mt-1.5 text-[21px] leading-tight font-semibold tracking-[-.04em] text-[#17243b] max-[520px]:text-[19px]"
                >
                  Merci pour votre demande
                </h3>
              </div>
            </div>
            <p
              id="request-success-description"
              className="mx-auto mt-5 max-w-[370px] border-l-[3px] border-[#6e93ed] bg-[#f3f7ff] px-4 py-3 text-[12px] leading-[1.65] text-[#64738a]"
            >
              Notre équipe a bien reçu votre demande. Un membre de la clinique
              vous contactera pour confirmer votre rendez-vous.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[13px] bg-clinic px-5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(39,101,232,.2)] transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-[0_12px_24px_rgba(31,78,164,.25)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6f97ed]"
              onClick={() => setSent(false)}
            >
              Continuer <ArrowRight size={15} aria-hidden="true" />
            </button>
          </section>
        </div>
      )}
    </form>
  );
}
