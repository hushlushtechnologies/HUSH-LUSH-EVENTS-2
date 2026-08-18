export interface Celebration {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const celebrations: Celebration[] = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "From intimate ceremonies to grand celebrations, we create weddings filled with personality, elegance and unforgettable details.",
    image: "/images/celebrations/weddings.jpg",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description:
      "Professional events designed to bring people together, strengthen connections and leave a lasting impression.",
    image: "/images/celebrations/corporate-events.jpg",
  },
  {
    id: "gala-nights",
    title: "Gala Nights",
    description:
      "Professional events designed to bring people together, strengthen connections and leave a lasting impression.",
    image: "/images/celebrations/gala-nights.jpg",
  },
  {
    id: "private-celebrations",
    title: "Private Celebrations",
    description:
      "Stylish, intimate and complete celebrations designed around stories and moments that matter.",
    image: "/images/celebrations/private-celebrations.jpg",
  },
];