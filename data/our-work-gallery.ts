 export interface GalleryTile {
  id: string;
  src: string;
  top: string;
  left: string;
  width: string;
  height: string;
  /** e.g. "304 / 170" — explicit, not just implied by width/height, so the image's proportions are self-documenting and stay correct if width or height ever needs to flex responsively. */
  aspectRatio: string;
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
  { id: "t1", src: "/images/our-work/gallery-1.jpg", top: "20.1%", left: "55.9%", width: "304px", height: "128px", aspectRatio: "304 / 128" },
  { id: "t2", src: "/images/our-work/gallery-2.jpg", top: "30.9%", left: "36.9%", width: "304px", height: "287px", aspectRatio: "304 / 287" },
  { id: "t4", src: "/images/our-work/gallery-4.jpg", top: "24.1%", left: "75.9%", width: "303px", height: "291px", aspectRatio: "303 / 291" },
  { id: "t5", src: "/images/our-work/gallery-5.jpg", top: "35.7%", left: "60.1%", width: "400px", height: "316px", aspectRatio: "400 / 316" },
  { id: "t6", src: "/images/our-work/gallery-6.jpg", top: "62.3%", left: "38.1%", width: "187px", height: "176px", aspectRatio: "187 / 176" },
  { id: "t7", src: "/images/our-work/gallery-7.jpg", top: "5.8%", left: "94.8%", width: "304px", height: "287px", aspectRatio: "304 / 287" },
  { id: "t8", src: "/images/our-work/gallery-8.jpg", top: "76.5%", left: "70.7%", width: "187px", height: "176px", aspectRatio: "187 / 176" },
  { id: "t10", src: "/images/our-work/gallery-1.jpg", top: "72.6%", left: "50.5%", width: "304px", height: "128px", aspectRatio: "304 / 128" },
  { id: "t11", src: "/images/our-work/gallery-3.jpg", top: "78.2%", left: "96.5%", width: "304px", height: "218px", aspectRatio: "304 / 218" },
  { id: "t12", src: "/images/our-work/gallery-2.jpg", top: "59.5%", left: "84.8%", width: "187px", height: "176px", aspectRatio: "187 / 176" },
];