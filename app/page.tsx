import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { GoldButton } from "@/components/GoldButton";

const services = [
  {
    title: "HOTEL AND RESORT ENTERTAINMENT",
    icon: "hotel",
    description:
      "Complete entertainment solutions for hotels and resorts worldwide. From professional entertainment teams, daytime activities and poolside experiences to spectacular evening productions, live music and family entertainment, we create bespoke programmes that enhance the guest experience.",
  },
  {
    title: "LIVE SHOWS AND PRODUCTIONS",
    icon: "shows",
    description:
      "Spectacular live entertainment brought to life through creative direction, choreography and exceptional talent. From theatrical productions and cabaret to dance shows, aerial performances and immersive experiences, we deliver unforgettable entertainment tailored to your venue and audience.",
  },
  {
    title: "FESTIVALS AND LARGE-SCALE EVENTS",
    icon: "festivals",
    description:
      "Bringing energy, creativity and spectacle to festivals, concerts, outdoor celebrations and large-scale events. Our diverse entertainment offering includes dancers, stilt walkers, fire performers, roaming characters, acrobats, musicians and immersive acts designed to captivate audiences.",
  },
  {
    title: "CORPORATE AND PRIVATE EVENTS",
    icon: "corporate",
    description:
      "Exceptional entertainment for corporate functions, award ceremonies, product launches, weddings, private celebrations and exclusive occasions. From elegant welcome performances to spectacular headline acts, we tailor every experience to complement your event.",
  },
  {
    title: "NIGHTLIFE AND VENUE ENTERTAINMENT",
    icon: "nightlife",
    description:
      "Elevate your nightlife experience with high-impact entertainment for nightclubs, bars, restaurants and exclusive venues. From podium dancers, showgirls and themed performers to fire acts, DJs, live musicians and immersive entertainment, we bring your venue to life.",
  },
  {
    title: "KIDS AND FAMILY ENTERTAINMENT",
    icon: "kids",
    description:
      "Creative, engaging and professionally organised entertainment for children and families. From bespoke kids clubs and interactive activities to themed parties, mini discos, character experiences and spectacular family productions.",
  },
  {
    title: "SPECIALIST ACTS AND PERFORMERS",
    icon: "casting",
    description:
      "An exceptional selection of professional entertainment talent available for events of every scale. Discover dancers, singers, aerialists, acrobats, fire performers, stilt walkers, living statues, roaming characters, musicians, DJs and unique specialty acts, carefully selected to suit your vision.",
  },
  {
    title: "SEASONAL AND THEMED ENTERTAINMENT",
    icon: "seasonal",
    description:
      "Bring every season and celebration to life with bespoke entertainment experiences. From Christmas spectaculars and Halloween productions to summer festivals, New Year's Eve celebrations and themed events, we create memorable experiences throughout the year.",
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
      {name === "festivals" ? (
        <>
          <path d="M5 20V4" />
          <path d="M5 6h8.5L12 9.2 13.5 12.5H5" />
          <path d="M14 20V8.5" />
          <path d="M14 9.5h5.5L18.2 12l1.3 2.5H14" />
        </>
      ) : null}
      {name === "corporate" ? (
        <>
          <path d="M4 9.5h16V19H4z" />
          <path d="M9 9.5V7.8A1.8 1.8 0 0 1 10.8 6h2.4A1.8 1.8 0 0 1 15 7.8v1.7" />
          <path d="M4 14h16" />
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
              Live entertainment tailored to your event
            </p>
            <h1 className="mt-6 max-w-full text-balance font-serif text-[2.15rem] leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Extraordinary Entertainment.
              <br />
              Every Occasion.
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p>At Emerald Entertainment Group, we bring extraordinary entertainment to life.</p>
              <p>
                From spectacular live productions and professional performers to immersive experiences,
                themed events and complete hotel and resort entertainment packages, we create
                unforgettable moments for every audience.
              </p>
              <p>
                Whether you&apos;re planning an intimate celebration, a high-energy event or a
                full-scale production, our experienced creative team will tailor every detail to your
                vision.
              </p>
              <p>Your event. Your vision. Our expertise.</p>
            </div>
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
                Led by a director with over a decade of international experience and a worldwide
                reputation in live entertainment, Emerald Entertainment Group brings creativity,
                professionalism and exceptional talent together to deliver extraordinary experiences.
              </p>
              <p>
                From spectacular live productions and luxury events to immersive entertainment and
                bespoke hotel and resort programmes, we pride ourselves on transforming ideas into
                unforgettable moments.
              </p>
              <p>
                From the first briefing to the final bow, our team is dedicated to delivering
                excellence at every stage. Combining creative vision, personal connections and
                world-class performers, we ensure every experience is as unique as the occasion
                itself.
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
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                Whether you&apos;re planning a one-night event, a private celebration or an entire
                season of entertainment, our services are tailored to your vision, venue and audience.
              </p>
              <p>Extraordinary Entertainment. Every Occasion.</p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.05} className="h-full">
                <article className="group flex h-full flex-col border border-white/10 bg-[#111111] p-8 transition-colors duration-300 hover:border-emerald-800 hover:bg-emerald-900">
                  <div className="text-[#d4af37]">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <span className="mt-8 block h-px w-10 bg-[#d4af37] transition-all duration-300 group-hover:w-16" />
                  <h3 className="mt-6 font-serif text-2xl leading-tight text-white">
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

      <section className="border-t border-white/10 px-6 py-24">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-500">
            Next step
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-white sm:text-5xl">
            LET&apos;S CREATE SOMETHING EXTRAORDINARY
          </h2>
          <p className="mt-4 font-serif text-xl text-[#d4af37] sm:text-2xl">
            Your Vision. Our Expertise.
          </p>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400">
            <p>Every unforgettable experience starts with an idea.</p>
            <p>
              Whether you&apos;re planning a spectacular event, seeking exceptional performers or
              looking for a complete entertainment solution, Emerald Entertainment Group is here to
              bring your vision to life.
            </p>
            <p>
              Get in touch with our team today and discover how we can create something truly
              extraordinary, tailored to your occasion.
            </p>
            <p>Extraordinary Entertainment. Every Occasion.</p>
          </div>
          <div className="mt-10">
            <GoldButton href="/contact">Enquire Now</GoldButton>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
