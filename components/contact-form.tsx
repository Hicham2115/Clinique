"use client";

import { useState } from "react";
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
  acceptsDemo: z.boolean().refine(Boolean, "Confirmez qu’il s’agit d’un test."),
});

const fieldClassName =
  "min-h-12 w-full rounded-xl border border-[#dfe6ef] bg-[#f9fbff] px-4 py-3 text-[13px] font-medium text-[#1d293a] outline-none transition-colors placeholder:text-[#9aa6b7] hover:border-[#c3d2ec] focus:border-[#7fa5f2] focus:bg-white focus:shadow-[0_0_0_3px_rgba(39,101,232,.1)]";

function getErrorMessage(errors: unknown[]) {
  const firstError = errors[0];
  if (typeof firstError === "string") return firstError;
  if (firstError && typeof firstError === "object" && "message" in firstError) {
    return String(firstError.message);
  }
  return undefined;
}

const frenchMonth = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });
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
    return new Date(selected?.getFullYear() ?? 2000, selected?.getMonth() ?? 0, 1);
  });

  const offset = (month.getDay() + 6) % 7;
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1 - offset);
  const days = Array.from({ length: 42 }, (_, index) =>
    new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + index),
  );

  function changeMonth(delta: number) {
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
  }

  return (
    <Popover.Root open={open} onOpenChange={(nextOpen) => {
      if (nextOpen) {
        const currentDate = new Date();
        setToday(dateToValue(currentDate));
        const visibleDate = selectedDate ?? currentDate;
        setMonth(new Date(visibleDate.getFullYear(), visibleDate.getMonth(), 1));
      }
      setOpen(nextOpen);
    }}>
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
        <CalendarDays size={17} className="shrink-0 text-[#527df0]" aria-hidden="true" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner className="z-50 outline-none" sideOffset={8} align="start">
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
            <div className="grid grid-cols-7 text-center text-[10px] font-bold text-[#91a0b4]" aria-hidden="true">
              {weekDays.map((day, index) => <span className="pb-2" key={`${day}-${index}`}>{day}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-y-1" aria-label="Calendrier">
              {days.map((day) => {
                const inMonth = day.getMonth() === month.getMonth();
                const isSelected = Boolean(selectedDate && dateToValue(day) === dateToValue(selectedDate));
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
  const form = useForm({
    defaultValues: {
      name: "",
      discipline: "",
      preferredDate: "",
      preferredTime: "",
      acceptsDemo: false,
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
      className="rounded-[24px] border border-[#e1e8f2] bg-white p-7 shadow-[0_20px_54px_rgba(28,51,87,.08)] max-[520px]:rounded-[20px] max-[520px]:p-[19px]"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="relative -mx-7 -mt-7 mb-6 flex items-center justify-between gap-3 overflow-hidden rounded-t-[23px] bg-[#17243b] px-7 py-5 text-white max-[520px]:-mx-[19px] max-[520px]:-mt-[19px] max-[520px]:rounded-t-[19px] max-[520px]:px-5">
        <span
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#4d83ff] via-[#8db2ff] to-transparent"
          aria-hidden="true"
        />
        <div>
          <span className="block text-[9px] font-extrabold tracking-[.15em] text-[#c2d0e6]">
            RENDEZ-VOUS EN LIGNE
          </span>
          <span className="mt-1.5 block text-[15px] font-semibold tracking-[-.02em]">
            Préparer une demande
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-[8px] font-bold tracking-[.06em] text-[#d5e0f2]">
          <ShieldCheck
            size={14}
            className="text-[#9bb9ff]"
            aria-hidden="true"
          />
          DÉMO
        </span>
      </div>

      {sent ? (
        <div className="flex min-h-[330px] flex-col items-start justify-center">
          <span className="grid size-[47px] place-items-center rounded-full bg-[#e6f6ed] text-[#1b6b44]">
            <Check size={23} aria-hidden="true" />
          </span>
          <h3 className="mt-[17px] mb-[7px] text-[21px]">
            Merci pour votre essai.
          </h3>
          <p className="max-w-[350px] text-xs leading-[1.6] text-[#758195]">
            Ceci est une démonstration. Aucune réservation n’a été transmise à
            la clinique.
          </p>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-2.5 border-b border-[#8096bc] bg-transparent pb-[3px] text-[13px] font-bold text-[#17243b]"
            onClick={() => setSent(false)}
          >
            Recommencer <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <>
          <p className="mb-5 text-[11px] leading-[1.55] text-[#758195]">
            Choisissez une discipline et une préférence de date. L’équipe
            confirmera tout rendez-vous selon ses disponibilités. Pour une
            urgence, appelez directement la clinique.
          </p>

          <form.Field name="name">
            {(field) => {
              const error = getErrorMessage(field.state.meta.errors);
              return (
                <label className="mb-4 flex flex-col gap-2 text-[11px] font-bold text-[#344053]">
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
                <div className="mb-4 flex flex-col gap-2">
                  <Select.Root
                    items={disciplineOptions}
                    value={field.state.value || null}
                    onValueChange={(value) =>
                      field.handleChange(String(value ?? ""))
                    }
                  >
                    <Select.Label className="text-[11px] font-bold text-[#344053]">
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
                          <Select.List className="max-h-[min(300px,var(--available-height))] overflow-y-auto">
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
                <label className="mb-4 flex flex-col gap-2 text-[11px] font-bold text-[#344053]">
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
                <fieldset className="mb-5">
                  <legend className="mb-2 text-[11px] font-bold text-[#344053]">
                    Préférence horaire
                  </legend>
                  <div className="flex gap-3">
                    {["Matin", "Après-midi"].map((time) => (
                      <label
                        className="inline-flex min-h-10 flex-1 cursor-pointer items-center gap-2 rounded-lg border border-[#dfe6ef] px-3 text-xs text-[#344053] has-[:checked]:border-[#8aaaf0] has-[:checked]:bg-[#f3f7ff]"
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

          {/* <form.Field name="acceptsDemo">
            {(field) => {
              const error = getErrorMessage(field.state.meta.errors);
              return (
                <label className="mb-5 flex items-start gap-[9px] text-[10px] leading-[1.5] font-normal text-[#758195]">
                  <input
                    className="mt-px accent-clinic"
                    type="checkbox"
                    checked={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) =>
                      field.handleChange(event.target.checked)
                    }
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "acceptsDemo-error" : undefined}
                  />
                  <span>
                    Je comprends qu’il s’agit d’un test sans réservation réelle.
                    {error && (
                      <span
                        className="mt-1 block font-medium text-red-600"
                        id="acceptsDemo-error"
                      >
                        {error}
                      </span>
                    )}
                  </span>
                </label>
              );
            }}
          </form.Field> */}

          <button
            className="inline-flex min-h-12 w-full items-center justify-between rounded-full bg-clinic px-[17px] text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-[0_8px_24px_rgba(31,78,164,.2)]"
            type="submit"
          >
            Tester ma demande <ArrowRight size={16} aria-hidden="true" />
          </button>
        </>
      )}
    </form>
  );
}
