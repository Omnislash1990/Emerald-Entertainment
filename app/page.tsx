import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { GoldButton } from "@/components/GoldButton";
import { MascotFamily } from "@/components/MascotFamily";

const services = [
  {
    title: "Hotel & Resort",
    icon: "hotel",
    description:
      "Residencies, lobby performances, and guest entertainment shaped around the property, the season, and the way your guests actually spend the day.",
  },
  {
    title: "Live Shows",
    icon: "shows",
    description:
      "Production-led shows with casting, direction, and a finish that holds a room, from a twenty-minute set to a full evening.",
  },
  {
    title: "Kids Clubs",
    icon: "kids",
    description:
      "Daytime entertainment that feels imaginative and properly produced, with hosts and formats parents are happy to leave children with.",
  },
  {
    title: "Events & Nightlife",
    icon: "nightlife",
    description:
      "Private celebrations, launch nights, and after-dark programmes with a sharper edge and the same care as a premiere.",
  },
  {
    title: "Casting",
    icon: "casting",
    description:
      "Performers chosen for the venue, the audience, and the brief. A lineup with a point of view, not a generic roster.",
  },
  {
    title: "Seasonal",
    icon: "seasonal",
    description:
      "Summer seasons, festive programmes, and limited runs built to a calendar, staffed and paced for the full stretch.",
  },
] as const;

type ServiceIconName = (typeof services)[number]["icon"];

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
      {name === "hotel" ? (
        <>
          <path d="M4 20V9.5L12 4l8 5.5V20" />
          <path d="M9 20v-6h6v6" />
        </>
      ) : null}
      {name === "shows" ? (
        <>
          <path d="M4 7h16v11H4z" />
          <path d="M10 10.5 15 13l-5 2.5z" />
        </>
      ) : null}
      {name === "kids" ? (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M6.5 19c.8-2.6 2.8-4 5.5-4s4.7 1.4 5.5 4" />
        </>
      ) : null}
      {name === "nightlife" ? (
        <>
          <path d="M8 4h8l-1.2 6.2a2.8 2.8 0 0 1-5.6 0L8 4z" />
          <path d="M12 14.5V18M9.5 20h5" />
        </>
      ) : null}
      {name === "casting" ? (
        <>
          <circle cx="10" cy="8" r="2.6" />
          <path d="M4.8 18.5c.7-2.4 2.4-3.6 5.2-3.6 2.8 0 4.5 1.2 5.2 3.6" />
          <path d="M16 7.5h4.2M18.1 5.4v4.2" />
        </>
      ) : null}
      {name === "seasonal" ? (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3.5V6M12 18v2.5M3.5 12H6M18 12h2.5M6 6l1.8 1.8M16.2 16.2 18 18M18 6l-1.8 1.8M7.8 16.2 6 18" />
        </>
      ) : null}
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0 bg-[#111111]" aria-hidden="true">
          <Image
            src="/gallery/led-wings.jpg"
            alt="Illuminated stilt walker performing in a hotel garden at night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/55 via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-5 border border-white/10 sm:inset-8" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl items-end px-6 pb-16 pt-32 sm:items-center sm:pb-24">
          <FadeIn className="w-full max-w-4xl">
            <p className="max-w-full text-[11px] uppercase tracking-[0.28em] text-emerald-500 sm:tracking-[0.35em]">
              Hotels · Resorts · Live Entertainment
            </p>
            <h1 className="mt-6 max-w-full text-balance font-serif text-[2.15rem] leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Extraordinary Entertainment. Unforgettable Experiences.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              We design and produce programmes for properties and private hosts
              who want the room to feel unforgettable, from daytime kids clubs
              to nights guests talk about afterwards.
            </p>
            <div className="mt-10">
              <GoldButton href="/contact">Enquire Now</GoldButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-emerald-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end">
          <FadeIn className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]">
              Introduction
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Welcome to Emerald
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-emerald-50 sm:text-lg">
              <p>
                Emerald Entertainment Group creates entertainment for hotels,
                resorts, and rooms that expect more than a lineup. Every
                programme is cast, paced, and produced to feel native to the
                venue.
              </p>
              <p>
                From the first briefing to the last bow, one team stays close
                to the work: creative direction, performers, and the quiet
                logistics that let a night look effortless.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-500">
              What we do
            </p>
            <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              Our Services
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              Six ways we work with venues and hosts. Each one can stand alone,
              or sit inside a season we build with you.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.05} className="h-full">
                <article className="group flex h-full flex-col border border-white/10 bg-[#111111] p-8 transition-colors duration-300 hover:border-emerald-800 hover:bg-emerald-900">
                  <div className="text-[#d4af37]">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <span className="mt-8 block h-px w-10 bg-[#d4af37] transition-all duration-300 group-hover:w-16" />
                  <h3 className="mt-6 font-serif text-2xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400 group-hover:text-emerald-50">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <MascotFamily />

      <section className="border-t border-white/10 px-6 py-24">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-500">
            Next step
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Tell us about the experience you have in mind.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            A venue, a date, and the feeling you want guests to leave with is
            enough to begin.
          </p>
          <div className="mt-10">
            <GoldButton href="/contact">Enquire Now</GoldButton>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
