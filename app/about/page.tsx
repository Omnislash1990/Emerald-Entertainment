import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "At Emerald Entertainment Group, our vision is to redefine live entertainment through exceptional creativity, world-class talent and unforgettable experiences.",
};

const sections = [
  {
    number: "01",
    title: "Professional Industry Experience",
    reverse: false,
    src: "/gallery/fire-performer.jpg",
    alt: "Fire performer breathing a plume of flame on a dark stage",
    paragraphs: [
      "With over a decade of experience across the international entertainment industry, Emerald Entertainment Group is founded on a wealth of knowledge gained from working with prestigious cruise lines, international hotel resorts and professional theatrical productions.",
      "Our expertise extends across performance, choreography, creative direction, entertainment management and full-scale production.",
      "Having experienced the industry both on stage and behind the scenes, we understand what it takes to deliver exceptional entertainment, from the initial concept and casting process through to rehearsals, production and the final performance.",
      "This experience allows us to combine artistic excellence with professional organisation, ensuring every event is delivered with confidence, precision and the highest standards.",
    ],
  },
  {
    number: "02",
    title: "Creativity Without Limits",
    reverse: true,
    src: "/gallery/show-dancers.jpg",
    alt: "Show dancers in feathered costumes under purple stage light",
    paragraphs: [
      "At Emerald Entertainment Group, creativity is at the heart of everything we do.",
      "We believe entertainment should be more than simply a performance. It should create an atmosphere, tell a story and leave audiences with memories that last long after the event.",
      "From spectacular theatrical productions and immersive experiences to bespoke themed events and specialist performances, we approach every project with fresh ideas, imagination and artistic ambition.",
      "No two occasions are the same. We work closely with our clients to develop entertainment that reflects their vision, complements their venue and exceeds expectations.",
      "Your imagination is our inspiration.",
    ],
  },
  {
    number: "03",
    title: "The Emerald Experience",
    reverse: false,
    src: "/gallery/aerial-hoop.jpg",
    alt: "Aerial hoop artist performing above a crowded nightclub",
    paragraphs: [
      "From the first briefing to the final bow, Emerald Entertainment Group is committed to delivering an exceptional experience at every stage.",
      "We pride ourselves on offering a personal, professional and seamless service, bringing together creative direction, exceptional performers, bespoke entertainment and expert event coordination.",
      "Whether providing a single specialist act or producing an entire entertainment programme, our team takes care of the details so our clients can enjoy the experience with complete confidence.",
      "Our commitment is simple: outstanding talent, extraordinary creativity and unforgettable entertainment, delivered with professionalism, personal connections and passion.",
      "Extraordinary Entertainment. Every Occasion.",
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
        title="About Us"
        subheading="Our Vision"
        subtitle="At Emerald Entertainment Group, our vision is to redefine live entertainment through exceptional creativity, world-class talent and unforgettable experiences."
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
