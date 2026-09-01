"use client";

import { useState } from "react";
import { locationOptions } from "@/data/plan-your-event";

const inputClasses =
  "font-body w-full rounded-full border border-dark-border/50 bg-transparent px-5 py-3 text-sm text-dark-text-primary placeholder:text-dark-text-muted focus:border-dark-primary/60 focus:outline-none";

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
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-3xl border border-dark-border/40 bg-dark-card/60 p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        <div>
          <label className="font-body block text-sm text-dark-text-primary">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Enter your Name"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div>
          <label className="font-body block text-sm text-dark-text-primary">Location</label>
          <select
            required
            value={form.location}
            onChange={update("location")}
            className={`${inputClasses} mt-2 appearance-none`}
          >
            <option value="" disabled>
              Pick a Location
            </option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-body block text-sm text-dark-text-primary">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="Enter your Email ID"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div>
          <label className="font-body block text-sm text-dark-text-primary">
            Approx Budget in your Mind
          </label>
          <input
            type="text"
            value={form.budget}
            onChange={update("budget")}
            placeholder="Enter Approx Budget (AED)"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div>
          <label className="font-body block text-sm text-dark-text-primary">Phone</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="Enter your Phone Number"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div>
          <label className="font-body block text-sm text-dark-text-primary">Subject</label>
          <input
            type="text"
            value={form.subject}
            onChange={update("subject")}
            placeholder="Enter the Subject"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div>
          <label className="font-body block text-sm text-dark-text-primary">Events Looking for</label>
          <input
            type="text"
            value={form.eventType}
            onChange={update("eventType")}
            placeholder="Type your Events Name"
            className={`${inputClasses} mt-2`}
          />
        </div>

        <div className="md:row-span-2">
          <label className="font-body block text-sm text-dark-text-primary">Message</label>
          <textarea
            value={form.message}
            onChange={update("message")}
            placeholder="Write Something..."
            rows={5}
            className={`${inputClasses} mt-2 rounded-xl`}
          />
        </div>

        <div>
          <label className="font-body block text-sm text-dark-text-primary">Event Date</label>
          <input
            type="date"
            required
            value={form.eventDate}
            onChange={update("eventDate")}
            className={`${inputClasses} mt-2`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="font-body mt-8 w-full rounded-full bg-dark-button-gradient py-3.5 text-sm font-semibold text-dark-bg transition-transform hover:scale-[1.01]"
      >
        Submit
      </button>
    </form>
  );
}