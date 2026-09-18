export interface GalleryImage {
  src: string;
  className: string;
    zIndex?: number;
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
      { src: "/images/gallery/wedding-archs.jpg", className: "left-[4%] top-[15%] h-44 w-32 rounded-2xl" },
      { src: "/images/gallery/wedding-halls.jpg", className: "left-[10%] top-[5%] h-26 w-26 rounded-xl" },
      { src: "/images/gallery/gala-crowds.jpg", className: "left-[22%] top-[5%] h-36 w-28 rounded-xl" },
      { src: "/images/gallery/couple-sunsets.jpg", className: "left-[13%] top-[20%] h-56 w-40 rounded-2xl" },
    ],
  },
  {
    id: "ne",
    images: [
      { src: "/images/gallery/floralss.jpg", className: "right-[22%] top-[7%] h-40 w-32 rounded-2xl" },
      { src: "/images/gallery/dance-floors.jpg", className: "right-[10%] top-[9%] h-26 w-26 rounded-xl" },
      { src: "/images/gallery/tent-lightss.jpg", className: "right-[0%] top-[18%] h-34 w-26 rounded-2xl" },
      { src: "/images/gallery/reception-halls.jpg", className: "right-[10%] top-[24%] h-50 w-40 rounded-2xl" },
    ],
  },
 {
  id: "sw",
  images: [
    { src: "/images/gallery/cake-fireworkss.jpg", className: "left-[5%] top-[64%] h-39 w-30 rounded-2xl" },
    { src: "/images/gallery/party-balloonss.jpg", className: "left-[30%] top-[68%] h-36 w-30 rounded-2xl", zIndex: 5 },
    { src: "/images/gallery/party-guestss.jpg", className: "left-[23%] top-[64%] h-34 w-32 rounded-xl" },
  ],
},
{
  id: "se",
  images: [
    { src: "/images/gallery/floral-tables.jpg", className: "right-[5%] top-[64%] h-39 w-30 rounded-2xl" },
    { src: "/images/gallery/chandelier-tables.jpg", className: "right-[28%] top-[68%] h-36 w-30 rounded-2xl", zIndex: 5 },
    { src: "/images/gallery/tent-dances.jpg", className: "right-[23%] top-[64%] h-34 w-32 rounded-xl" },
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