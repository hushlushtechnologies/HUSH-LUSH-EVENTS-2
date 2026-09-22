export interface SocialLink {
  id: "instagram" | "facebook" | "whatsapp" | "youtube"  ;
  label: string;
  href: string;
}

// Replace with real profile URLs before launch
export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/hushlush_events/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/people/Hush-Lush-Events/61577939084079/" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/+971542440905" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@HUSHLUSHEVENTS" },
  // { id: "telegram", label: "Telegram", href: "https://t.me/hushlushevents" },
];