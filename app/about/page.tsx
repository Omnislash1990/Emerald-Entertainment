import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The vision behind Emerald Entertainment Group: industry experience, original ideas, and a single team from first conversation to final night.",
};

const sections = [
  {
    number: "01",
    title: "Professional Industry Experience",
    reverse: false,
    src: "/gallery/fire-performer.jpg",
    alt: "Fire performer breathing a plume of flame on a dark stage",
    paragraphs: [
      "Emerald is built by people who have worked inside hotels, resorts, and live rooms, not only around them. We understand call times, sightlines, guest flow, and the standard a front office expects when entertainment carries the brand.",
      "That experience shows up in the details: a cast that can hold a six-night week, a show that fits the room you actually have, and a team that speaks clearly with banqueting, recreation, and the general manager.",
    ],
  },
  {
    number: "02",
    title: "Creativity Without Limits",
    reverse: true,
    src: "/gallery/show-dancers.jpg",
    alt: "Show dancers in feathered costumes under purple stage light",
    paragraphs: [
      "The brief is the beginning, not a template. We develop original formats, unexpected casting, and staging that could only belong to that property, whether the night is a quiet lobby performance or a full production.",
      "Limits are a design problem. Budget, space, and audience shape the idea. They do not shrink it. The work should feel considered, and it should feel like it could not have come from anywhere else.",
    ],
  },
  {
    number: "03",
    title: "The Emerald Experience",
    reverse: false,
    src: "/gallery/aerial-hoop.jpg",
    alt: "Aerial hoop artist performing above a crowded nightclub",
    paragraphs: [
      "One team stays with you from the first conversation to the final night. Creative direction, casting, and production sit together, so the show you were promised is the show that arrives.",
      "Guests may never see the planning. They feel it in the pace, the casting, and the sense that the evening was made for the room they are standing in.",
    ],
  },
];

function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="pointer-events-none absolute inset-4 border border-[#d4af37]/40 sm:inset-6" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Our Vision"
        subtitle="A house company for venues that want entertainment with a point of view, and the operational calm to deliver it night after night."
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-20 lg:gap-28 lg:py-28">
        {sections.map((section) => (
          <FadeIn key={section.title}>
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className={section.reverse ? "order-1 lg:order-2" : "order-1"}>
                <p className="font-serif text-sm tracking-[0.28em] text-[#d4af37]">
                  {section.number}
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className={section.reverse ? "order-2 lg:order-1" : "order-2"}>
                <PhotoFrame src={section.src} alt={section.alt} />
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
