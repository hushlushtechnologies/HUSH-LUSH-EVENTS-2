export interface SocialLink {
  id: "instagram" | "facebook" | "whatsapp" | "youtube" | "telegram";
  label: string;
  href: string;
}

// Replace with real profile URLs before launch
export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/hushlushevents" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/hushlushevents" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/00000000000" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com/@hushlushevents" },
  { id: "telegram", label: "Telegram", href: "https://t.me/hushlushevents" },
];