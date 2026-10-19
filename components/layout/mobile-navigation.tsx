"use client";

import { Drawer } from "@base-ui/react/drawer";
import { ArrowUpRight, CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Accueil", "#accueil"],
  ["À propos", "#clinique"],
  ["Soins", "#soins"],
  ["Le praticien", "#praticien"],
  ["Imagerie", "#imagerie"],
  ["Espace formation", "#formation"],
  ["Questions fréquentes", "#questions"],
  ["Contact", "#contact"],
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    window.dispatchEvent(
      new CustomEvent("clinic-mobile-navigation", { detail: nextOpen }),
    );
  }

  function closeDrawer() {
    handleOpenChange(false);
  }

  return (
    <Drawer.Root open={open} onOpenChange={handleOpenChange} swipeDirection="right">
      <Drawer.Trigger
        aria-label="Ouvrir la navigation"
        className="grid size-10 place-items-center rounded-lg border border-[#dce5f1] text-[#172748] transition-colors hover:border-clinic hover:text-clinic focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinic"
      >
        <Menu size={19} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 bg-[#101b2d]/45 opacity-0 transition-opacity duration-300 data-[open]:opacity-100" />
        <Drawer.Viewport className="fixed inset-0 z-50 flex justify-end outline-none">
          <Drawer.Popup className="h-full w-[min(88vw,390px)] translate-x-full bg-white shadow-[-18px_0_55px_rgba(15,31,55,.2)] transition-transform duration-300 ease-out data-[open]:translate-x-0">
            <Drawer.Content className="flex h-full flex-col px-7 pb-8 pt-7 text-[#172748]">
              <div className="mb-9 flex items-start justify-between border-b border-[#e8edf4] pb-6">
                <div>
                  <p className="text-[10px] font-bold tracking-[.2em] text-[#54709c]">CLINIQUE DENTAIRE</p>
                  <Drawer.Title className="mt-1 text-2xl font-bold tracking-[.12em]">KHAIR</Drawer.Title>
                  <Drawer.Description className="mt-1 text-xs text-[#7d899b]">Casablanca · Maroc</Drawer.Description>
                </div>
                <Drawer.Close
                  aria-label="Fermer la navigation"
                  className="grid size-10 place-items-center rounded-full border border-[#e1e8f1] text-[#344258] transition-colors hover:border-clinic hover:text-clinic focus-visible:outline-2 focus-visible:outline-clinic"
                >
                  <X size={18} />
                </Drawer.Close>
              </div>

              <nav aria-label="Navigation mobile" className="grid gap-1">
                {links.map(([label, href], index) => (
                  <a
                    className="group flex min-h-12 items-center justify-between border-b border-[#edf1f6] text-[15px] font-medium text-[#344258] transition-colors hover:text-clinic"
                    href={href}
                    key={href}
                    onClick={closeDrawer}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold tracking-wider text-[#9aa8bb]">0{index + 1}</span>
                      {label}
                    </span>
                    <ArrowUpRight className="text-[#a8b6c8] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clinic" size={16} />
                  </a>
                ))}
              </nav>

              <div className="mt-auto border-t border-[#e8edf4] pt-6">
                <a
                  href="#rendez-vous"
                  onClick={closeDrawer}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-clinic px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(39,101,232,.2)] transition-colors hover:bg-clinic-dark"
                >
                  <CalendarDays size={17} />
                  Prendre rendez-vous
                </a>
                <a className="mt-4 block text-center text-sm font-semibold text-[#344258]" href="tel:+212522228746">05 22 22 87 46</a>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
