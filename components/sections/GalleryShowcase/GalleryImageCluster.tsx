import Image from "next/image";
import type { GalleryCluster } from "@/data/gallery-showcase";

export function GalleryImageCluster({ images }: GalleryCluster) {
  return (
    <>
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute overflow-hidden border border-dark-border/40 shadow-lg ${img.className}`}
          style={{ zIndex: 10 + index }}
        >
          <Image src={img.src} alt="" fill className="object-cover" sizes="200px" />
        </div>
      ))}
    </>
  );
}