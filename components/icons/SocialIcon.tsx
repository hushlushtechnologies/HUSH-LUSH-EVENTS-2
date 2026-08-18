import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import type { SocialLink } from "@/data/socials";
import type { ComponentType } from "react";

const iconMap: Record<SocialLink["id"], ComponentType<{ className?: string }>> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
  telegram: FaTelegramPlane,
};

export function SocialIcon({ id, className }: { id: SocialLink["id"]; className?: string }) {
  const Icon = iconMap[id];
  return <Icon className={className} />;
}