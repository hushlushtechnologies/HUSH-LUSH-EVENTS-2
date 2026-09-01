 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactForm } from "./ContactForm";
import { CinematicBackdrop } from "./CinematicBackdrop";
import { planYourEventContent, contactInfo, mapImage } from "@/data/plan-your-event";

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 4.5L9 10L16 4.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3.5 2.5h2.7l1.1 3.3-1.6 1.1a9 9 0 004.4 4.4l1.1-1.6 3.3 1.1v2.7a1.1 1.1 0 01-1.1 1.1C7.5 14.6 2.9 10 2.4 3.6a1.1 1.1 0 011.1-1.1z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 1.5a5.5 5.5 0 00-5.5 5.5c0 4 5.5 9.5 5.5 9.5s5.5-5.5 5.5-9.5A5.5 5.5 0 009 1.5z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  email: <MailIcon />,
  call: <PhoneIcon />,
  visit: <PinIcon />,
};

export function PlanYourEventHero() {
  const { backgroundWord, eyebrow, heading, description } = planYourEventContent;

  return (
    <section className="relative isolate overflow-hidden bg-dark pb-20 pt-24 md:pb-28 md:pt-32">
      <CinematicBackdrop word={backgroundWord} />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md text-center"
        >
          <span className="font-body inline-block rounded-full border border-brand-gold px-4 py-1.5 text-sm text-brand-gold">
            {eyebrow}
          </span>

          <h1 className="font-display mt-4 text-4xl text-dark-text-primary">{heading}</h1>
          <p className="font-body mt-3 text-sm leading-relaxed text-dark-text-secondary">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {contactInfo.map((info) => (
            <ContactInfoCard key={info.id} label={info.label} value={info.value} icon={icons[info.id]} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <ContactForm />
        </motion.div>

       <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl border border-dark-border/40"
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.779746221838!2d55.181216976392825!3d25.109316077767605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b129a3b9c23%3A0x611d3e8b1335256b!2sHushlush%20Events!5e0!3m2!1sen!2sin!4v1788182479871!5m2!1sen!2sin"
    title="Hushlush Events office location"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    className="h-full w-full grayscale-[40%] invert-[92%] contrast-[90%]"
  />
</motion.div>
      </Container>
    </section>
  );
}