"use client";

import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format, parseISO, isValid } from "date-fns";
import "react-day-picker/style.css";

interface DatePickerProps {
  id: string;
  name: string;
  value: string; // ISO "yyyy-MM-dd"
  onChange: (isoDate: string) => void;
  onBlur: () => void;
  hasError?: boolean;
  minDate?: Date;
}

export function DatePicker({ id, name, value, onChange, onBlur, hasError, minDate }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected = value && isValid(parseISO(value)) ? parseISO(value) : undefined;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Hidden input keeps name/value wired for any form-level access */}
      <input type="hidden" id={id} name={name} value={value} readOnly />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => {
          // Delay so a click inside the popover isn't treated as a blur-away.
          setTimeout(() => {
            if (!wrapperRef.current?.contains(document.activeElement)) onBlur();
          }, 100);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`font-body flex w-full items-center justify-between rounded-full border bg-transparent px-5 py-3 text-left text-sm focus:outline-none ${
          hasError ? "border-red-500/70" : "border-dark-border/50"
        } ${selected ? "text-dark-text-primary" : "text-dark-text-muted"}`}
      >
        {selected ? format(selected, "d MMM yyyy") : "Select event date"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-dark-text-secondary">
          <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 3V6M16 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

           {open && (
        <div
          className="absolute left-1/2 top-[calc(100%+8px)] z-30 w-[min(320px,calc(100vw-2.5rem))] -translate-x-1/2 rounded-2xl border border-dark-border/50 bg-dark-card p-3 shadow-xl sm:left-0 sm:w-auto sm:translate-x-0 sm:p-5"
          style={{
            ["--rdp-day-width" as string]: "36px",
            ["--rdp-day-height" as string]: "36px",
            ["--rdp-accent-color" as string]: "var(--color-dark-primary)",
          }}
        >
          <style jsx>{`
            @media (min-width: 640px) {
              div {
                --rdp-day-width: 44px;
                --rdp-day-height: 44px;
              }
            }
          `}</style>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              if (date) {
                onChange(format(date, "yyyy-MM-dd"));
                setOpen(false);
              }
            }}
            disabled={minDate ? { before: minDate } : undefined}
            defaultMonth={selected ?? minDate}
            classNames={{
              root: "font-body text-dark-text-primary text-sm sm:text-base",
              months: "flex",
              month_caption: "flex justify-center pb-2 sm:pb-3",
              caption_label: "text-sm sm:text-base font-semibold text-dark-text-primary",
              button_previous: "cursor-pointer text-dark-text-secondary hover:text-dark-primary [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5",
              button_next: "cursor-pointer text-dark-text-secondary hover:text-dark-primary [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5",
              weekdays: "text-xs sm:text-sm",
              weekday: "text-dark-text-muted font-medium",
              day: "text-xs sm:text-sm p-0.5",
              day_button:
                "cursor-pointer rounded-full text-dark-text-primary hover:bg-dark-primary/20 h-9 w-9 text-xs sm:h-11 sm:w-11 sm:text-sm",
              selected: "[&>button]:!bg-dark-primary [&>button]:!text-dark-bg [&>button]:font-semibold",
              today: "[&>button]:text-dark-primary [&>button]:font-semibold",
              disabled: "[&>button]:text-dark-text-muted/40",
              outside: "[&>button]:text-dark-text-muted/30",
            }}
          />
        </div>
      )}
    </div>
  );
}