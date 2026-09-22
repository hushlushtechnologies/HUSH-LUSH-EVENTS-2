"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { locationOptions } from "@/data/plan-your-event";
import { FormStatusPanel } from "./FormStatusPanel";
import { DatePicker } from "@/components/ui/DatePicker";

const inputClasses =
  "font-body w-full rounded-full border border-dark-border/50 bg-transparent px-5 py-3 text-sm text-dark-text-primary placeholder:text-dark-text-muted focus:border-dark-primary/60 focus:outline-none";

const errorInputClasses = "border-red-500/70 focus:border-red-500/70";

interface FormState {
  name: string;
  location: string;
  email: string;
  budget: string;
  phone: string;
  subject: string;
  eventType: string;
  message: string;
  eventDate: string;
  company: string;
}

const initialState: FormState = {
  name: "",
  location: "",
  email: "",
  budget: "",
  phone: "",
  subject: "",
  eventType: "",
  message: "",
  eventDate: "",
  company: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s\-().]{6,}$/;
const NAME_PATTERN = /^[a-zA-Z\s'-]+$/;
const UAE_PHONE_PATTERN = /^5\d{8}$/;

function todayISODate() {
  return new Date().toISOString().split("T")[0];
}

function validateField(
  field: keyof FormState,
  value: string,
): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case "name":
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      if (!NAME_PATTERN.test(trimmed))
        return "Name can only contain letters, spaces and hyphens.";
      return undefined;

    case "email":
      if (!trimmed) return "Please enter your email address.";
      if (!EMAIL_PATTERN.test(trimmed))
        return "Please enter a valid email address.";
      return undefined;

    case "phone":
      if (!trimmed) return "Please enter your phone number.";
      if (!PHONE_PATTERN.test(trimmed))
        return "Please enter a valid phone number.";
      return undefined;

    case "location":
      if (!trimmed) return "Please select a location.";
      return undefined;

    case "eventDate":
      if (!trimmed) return "Please select an event date.";
      if (trimmed < todayISODate()) return "Event date can't be in the past.";
      return undefined;

    case "budget":
      if (trimmed && !/^[\d,]+$/.test(trimmed))
        return "Budget should be a number (e.g. 15000).";
      return undefined;

    case "phone": {
      const digitsOnly = trimmed.replace(/\D/g, "");
      if (!digitsOnly) return "Please enter your phone number.";
      if (!UAE_PHONE_PATTERN.test(digitsOnly)) {
        return "Enter a valid UAE mobile number (e.g. 5XXXXXXXX).";
      }
      return undefined;
    }

    case "message":
      if (trimmed && trimmed.length < 10)
        return "Message should be at least 10 characters, or left blank.";
      return undefined;

    default:
      return undefined;
  }
}

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(form) as (keyof FormState)[]).forEach((field) => {
    if (field === "company" || field === "subject" || field === "eventType")
      return;
    const error = validateField(field, form[field]);
    if (error) errors[field] = error;
  });
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      if (touched[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: validateField(field, value),
        }));
      }
    };

  const handleBlur = (field: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.company) {
      setStatus("success");
      setForm(initialState);
      return;
    }

    const formErrors = validateForm(form);
    setErrors(formErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      location: true,
      eventDate: true,
      budget: true,
      message: true,
    });

    if (Object.keys(formErrors).length > 0) {
      const firstErrorField = Object.keys(formErrors)[0];
      document.getElementsByName(firstErrorField)[0]?.focus();
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name.trim(),
          location: form.location,
          email: form.email.trim(),
          budget: form.budget.trim(),
          phone: form.phone.trim(),
          subject: form.subject.trim(),
          event_type: form.eventType.trim(),
          event_date: form.eventDate,
          message: form.message.trim(),
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );

      setStatus("success");
      setForm(initialState);
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  };

  const fieldError = (field: keyof FormState) =>
    touched[field] ? errors[field] : undefined;

  if (status === "success") {
    return (
      <FormStatusPanel
        variant="success"
        heading="Enquiry Received"
        subheading="Thank You. Your Enquiry Is With Us."
        description="We've received your events enquiry and our team will review your requirements. One of our team member will get in touch with you shortly."
        footnote="We look forward to helping you explore the right event plan across the UAE."
        primaryAction={{ label: "Back to Home", href: "/" }}
        secondaryAction={{ label: "View Our Work", href: "/our-work" }}
      />
    );
  }

  if (status === "error") {
    return (
      <FormStatusPanel
        variant="error"
        heading="Something Went Wrong."
        description="Something went wrong while submitting your enquiry. Please try again, or contact our team directly through WhatsApp."
        primaryAction={{ label: "Try Again", onClick: () => setStatus("idle") }}
        secondaryAction={{ label: "View Our Work", href: "/our-work" }}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-dark-border/40 bg-dark-card/60 p-8 md:p-10"
    >
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={update("company")}
        />
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-body block text-sm text-dark-text-primary"
          >
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={update("name")}
            onBlur={handleBlur("name")}
            placeholder="Enter your Name"
            aria-invalid={Boolean(fieldError("name"))}
            aria-describedby={fieldError("name") ? "name-error" : undefined}
            className={`${inputClasses} mt-2 ${fieldError("name") ? errorInputClasses : ""}`}
          />
          {fieldError("name") && (
            <p
              id="name-error"
              role="alert"
              className="font-body mt-1.5 text-xs text-red-400"
            >
              {fieldError("name")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="location"
            className="font-body block text-sm text-dark-text-primary"
          >
            Location <span className="text-red-400">*</span>
          </label>

          <select
            id="location"
            name="location"
            value={form.location}
            onChange={update("location")}
            onBlur={handleBlur("location")}
            aria-invalid={Boolean(fieldError("location"))}
            aria-describedby={
              fieldError("location") ? "location-error" : undefined
            }
            className={`${inputClasses} mt-2 appearance-none bg-[length:12px] bg-[right_1.25rem_center] bg-no-repeat pr-10 ${
              fieldError("location") ? errorInputClasses : ""
            }`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23F5F0EC' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            }}
          >
            <option
              value=""
              disabled
              className="bg-dark-card text-dark-text-muted"
            >
              Pick a Location
            </option>
            {locationOptions.map((loc) => (
              <option
                key={loc}
                value={loc}
                className="bg-dark-card text-dark-text-primary"
              >
                {loc}
              </option>
            ))}
          </select>
          {fieldError("location") && (
            <p
              id="location-error"
              role="alert"
              className="font-body mt-1.5 text-xs text-red-400"
            >
              {fieldError("location")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-body block text-sm text-dark-text-primary"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={update("email")}
            onBlur={handleBlur("email")}
            placeholder="Enter your Email ID"
            aria-invalid={Boolean(fieldError("email"))}
            aria-describedby={fieldError("email") ? "email-error" : undefined}
            className={`${inputClasses} mt-2 ${fieldError("email") ? errorInputClasses : ""}`}
          />
          {fieldError("email") && (
            <p
              id="email-error"
              role="alert"
              className="font-body mt-1.5 text-xs text-red-400"
            >
              {fieldError("email")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="budget"
            className="font-body block text-sm text-dark-text-primary"
          >
            Approx Budget in your Mind
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="budget"
            name="budget"
            value={form.budget}
            onChange={update("budget")}
            onBlur={handleBlur("budget")}
            placeholder="Enter Approx Budget (AED)"
            aria-invalid={Boolean(fieldError("budget"))}
            aria-describedby={fieldError("budget") ? "budget-error" : undefined}
            className={`${inputClasses} mt-2 ${fieldError("budget") ? errorInputClasses : ""}`}
          />
          {fieldError("budget") && (
            <p
              id="budget-error"
              role="alert"
              className="font-body mt-1.5 text-xs text-red-400"
            >
              {fieldError("budget")}
            </p>
          )}
        </div>

                <div>
          <label htmlFor="phone" className="font-body block text-sm text-dark-text-primary">
            Phone <span className="text-red-400">*</span>
          </label>
          <div
            className={`mt-2 flex items-center overflow-hidden rounded-full border border-dark-border/50 bg-transparent focus-within:border-dark-primary/60 ${
              fieldError("phone") ? errorInputClasses : ""
            }`}
          >
            <span className="font-body select-none border-r border-dark-border/50 px-4 py-3 text-sm text-dark-text-secondary">
              +971
            </span>
            <input
              type="tel"
              inputMode="numeric"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "").slice(0, 9);
                setForm((prev) => ({ ...prev, phone: digits }));
                if (touched.phone) {
                  setErrors((prev) => ({ ...prev, phone: validateField("phone", digits) }));
                }
              }}
              onBlur={handleBlur("phone")}
              placeholder="5X XXX XXXX"
              maxLength={9}
              aria-invalid={Boolean(fieldError("phone"))}
              aria-describedby={fieldError("phone") ? "phone-error" : undefined}
              className="font-body w-full bg-transparent px-4 py-3 text-sm text-dark-text-primary placeholder:text-dark-text-muted focus:outline-none"
            />
          </div>
          {fieldError("phone") && (
            <p id="phone-error" role="alert" className="font-body mt-1.5 text-xs text-red-400">
              {fieldError("phone")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="font-body block text-sm text-dark-text-primary"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={update("subject")}
            placeholder="Enter the Subject"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div>
          <label
            htmlFor="eventType"
            className="font-body block text-sm text-dark-text-primary"
          >
            Events Looking for
          </label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            value={form.eventType}
            onChange={update("eventType")}
            placeholder="Type your Events Name"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div className="md:row-span-2">
          <label
            htmlFor="message"
            className="font-body block text-sm text-dark-text-primary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={update("message")}
            onBlur={handleBlur("message")}
            placeholder="Write Something..."
            rows={5}
            aria-invalid={Boolean(fieldError("message"))}
            aria-describedby={
              fieldError("message") ? "message-error" : undefined
            }
            className={`${inputClasses} mt-2 rounded-xl ${fieldError("message") ? errorInputClasses : ""}`}
          />
          {fieldError("message") && (
            <p
              id="message-error"
              role="alert"
              className="font-body mt-1.5 text-xs text-red-400"
            >
              {fieldError("message")}
            </p>
          )}
        </div>

             <div>
          <label htmlFor="eventDate" className="font-body block text-sm text-dark-text-primary">
            Event Date <span className="text-red-400">*</span>
          </label>
          <div className="mt-2">
            <DatePicker
              id="eventDate"
              name="eventDate"
              value={form.eventDate}
              onChange={(iso) => {
                setForm((prev) => ({ ...prev, eventDate: iso }));
                if (touched.eventDate) {
                  setErrors((prev) => ({ ...prev, eventDate: validateField("eventDate", iso) }));
                }
              }}
              onBlur={handleBlur("eventDate")}
              hasError={Boolean(fieldError("eventDate"))}
              minDate={new Date()}
            />
          </div>
          {fieldError("eventDate") && (
            <p id="eventDate-error" role="alert" className="font-body mt-1.5 text-xs text-red-400">
              {fieldError("eventDate")}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="cursor-pointer font-body mt-8 w-full rounded-full bg-dark-button-gradient py-3.5 text-sm font-semibold text-dark-bg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
