export interface GalleryImage {
  src: string;
  className: string;
}

export interface GalleryCluster {
  id: string;
  images: GalleryImage[];
}

export interface GalleryStat {
  id: string;
  value: string;
  label: string;
  position: string;
}

// All percentages below are relative to the SAME 1000x1000 canvas as the
// section container and ConnectorLines' viewBox — top-* always means
// "% down from the top of the WHOLE canvas," never relative to a corner.
export const galleryClusters: GalleryCluster[] = [
  {
    id: "nw",
    images: [
      { src: "/images/gallery/wedding-arch.jpg", className: "left-[4%] top-[15%] h-44 w-32 rounded-2xl" },
      { src: "/images/gallery/wedding-hall.jpg", className: "left-[8%] top-[0%] h-36 w-32 rounded-xl" },
      { src: "/images/gallery/gala-crowd.jpg", className: "left-[20%] top-[9%] h-36 w-32 rounded-xl" },
      { src: "/images/gallery/couple-sunset.jpg", className: "left-[10%] top-[25%] h-56 w-40 rounded-2xl" },
    ],
  },
  {
    id: "ne",
    images: [
      { src: "/images/gallery/florals.jpg", className: "right-[27%] top-[4%] h-44 w-32 rounded-2xl" },
      { src: "/images/gallery/tent-lights.jpg", className: "right-[15%] top-[5%] h-36 w-32 rounded-xl" },
      { src: "/images/gallery/dance-floor.jpg", className: "right-[3%] top-[14%] h-40 w-32 rounded-2xl" },
      { src: "/images/gallery/reception-hall.jpg", className: "right-[5%] top-[28%] h-56 w-44 rounded-2xl" },
    ],
  },
  {
    id: "sw",
    images: [
      { src: "/images/gallery/cake-fireworks.jpg", className: "left-[2%] top-[72%] h-40 w-36 rounded-2xl" },
      { src: "/images/gallery/party-balloons.jpg", className: "left-[6%] top-[86%] h-56 w-40 rounded-2xl" },
      { src: "/images/gallery/party-guests.jpg", className: "left-[23%] top-[84%] h-36 w-32 rounded-xl" },
    ],
  },
{
  id: "se",
  images: [
    { src: "/images/gallery/floral-table.jpg", className: "-right-[0%] top-[70%] h-48 w-36 rounded-2xl" },
    { src: "/images/gallery/chandelier-table.jpg", className: "right-[14%] top-[75%] h-40 w-32 rounded-xl" },
    { src: "/images/gallery/tent-dance.jpg", className: "right-[24%] top-[80%] h-36 w-40 rounded-2xl" },
  ],
},
];

// Stats sit independently at the four cardinal edges, between clusters —
// not owned by any single cluster.
export const galleryStats: GalleryStat[] = [
  { id: "event-types", value: "10+", label: "Event Types", position: "left-[46%] top-[18%]" },
  { id: "happy-clients", value: "200+", label: "Happy Clients", position: "left-[71%] top-[45%] -translate-y-1/2" },
  { id: "events-created", value: "400+", label: "Events Created", position: "left-[16%] top-[55%] -translate-y-1/2" },
  { id: "team", value: "10+", label: "Team with One Vision", position: "left-[44%] top-[77%]" },
];