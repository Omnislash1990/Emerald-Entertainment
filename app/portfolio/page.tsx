import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A gallery of residencies, productions, and nights from Emerald Entertainment Group.",
};

const tiles = [
  {
    src: "/gallery/christmas-special.jpg",
    alt: "Christmas Special poster with Santa, stilt walkers, and festive acts",
    caption: "Christmas Special",
    className: "aspect-[3/4]",
  },
  {
    src: "/gallery/mirror-parade.jpg",
    alt: "Gold and silver mirror performers dancing in front of a Christmas tree",
    caption: "Mirror Men",
    className: "aspect-square",
  },
  {
    src: "/gallery/led-dancer.jpg",
    alt: "LED robot dancer in a nightclub surrounded by guests",
    caption: "LED Dancers",
    className: "aspect-[4/5]",
  },
  {
    src: "/gallery/christmas-entertainment.jpg",
    alt: "Christmas Entertainment poster with Santa, a show dancer, and a mirror man",
    caption: "Christmas Entertainment",
    className: "aspect-[3/4]",
  },
  {
    src: "/gallery/ice-queen.jpg",
    alt: "Performer in a glowing ice-queen costume with lighted wings",
    caption: "Themed Walkabout",
    className: "aspect-[3/4]",
  },
  {
    src: "/gallery/mirror-men.jpg",
    alt: "Two mirror-suited performers in mirrored top hats",
    caption: "Mirror Walkabout",
    className: "aspect-[4/5]",
  },
  {
    src: "/gallery/acts-dancers.jpg",
    alt: "Emerald poster featuring a show dancer and the full act list",
    caption: "Dancers & Aerial",
    className: "aspect-[3/4]",
  },
  {
    src: "/gallery/acts-disco.jpg",
    alt: "Emerald poster featuring a disco performer and nightlife acts",
    caption: "Nightlife Acts",
    className: "aspect-[3/4]",
  },
  {
    src: "/gallery/live-entertainment.jpg",
    alt: "Live entertainment poster with a sparkler performer and act thumbnails",
    caption: "Live Entertainment",
    className: "aspect-[4/5]",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Portfolio"
        subtitle="Residencies, productions, and nights across hotels, resorts, and live rooms."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <FadeIn>
          <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {tiles.map((tile) => (
              <li
                key={tile.src}
                className={`relative mb-4 w-full break-inside-avoid overflow-hidden ${tile.className}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12 text-[11px] uppercase tracking-[0.22em] text-white">
                  {tile.caption}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </>
  );
}
