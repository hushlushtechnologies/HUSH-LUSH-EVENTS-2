export interface GalleryTile {
  id: string;
  src: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

export const galleryIntro = {
  headingLines: ["The Moment is", "Only the Beginning"],
  script: "The creative minds",
  scriptLine2: "behind your memories.",
};

// Positions are absolute (px/%) within a large canvas, not a grid —
// matches the scattered mosaic layout in the reference. Canvas width
// is intentionally wider than the viewport so dragging reveals more.
export const galleryTiles: GalleryTile[] = [
  { id: "t1", src: "/images/our-work/gallery-1.jpg", top: "0%", left: "56%", width: "220px", height: "150px" },
  { id: "t2", src: "/images/our-work/gallery-2.jpg", top: "22%", left: "34%", width: "230px", height: "300px" },
  { id: "t3", src: "/images/our-work/gallery-3.jpg", top: "44%", left: "0%", width: "230px", height: "290px" },
  { id: "t4", src: "/images/our-work/gallery-4.jpg", top: "18%", left: "72%", width: "260px", height: "300px" },
  { id: "t5", src: "/images/our-work/gallery-5.jpg", top: "38%", left: "56%", width: "270px", height: "330px" },
  { id: "t6", src: "/images/our-work/gallery-6.jpg", top: "62%", left: "34%", width: "180px", height: "220px" },
  { id: "t7", src: "/images/our-work/gallery-7.jpg", top: "0%", left: "94%", width: "220px", height: "290px" },
  { id: "t8", src: "/images/our-work/gallery-8.jpg", top: "76%", left: "72%", width: "220px", height: "150px" },
  { id: "t9", src: "/images/our-work/gallery-4.jpg", top: "72%", left: "0%", width: "220px", height: "150px" },
  { id: "t10", src: "/images/our-work/gallery-1.jpg", top: "88%", left: "22%", width: "220px", height: "150px" },
  { id: "t11", src: "/images/our-work/gallery-3.jpg", top: "70%", left: "108%", width: "220px", height: "290px" },
];