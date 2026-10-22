import { FadeIn } from "@/components/FadeIn";

const mascots = [
  {
    name: "Lennox the Lizard",
    line: "The friend who gets the week started.",
    border: "border-[#ef4444]/55",
    text: "text-[#f87171]",
    icon: "lizard",
  },
  {
    name: "Callie the Chameleon",
    line: "Colour, craft, and a new idea every hour.",
    border: "border-[#ec4899]/55",
    text: "text-[#f472b6]",
    icon: "chameleon",
  },
  {
    name: "Beau the Bumble Bee",
    line: "Buzz, games, and pool-deck energy.",
    border: "border-[#eab308]/60",
    text: "text-[#facc15]",
    icon: "bee",
  },
  {
    name: "Teddy the Turtle",
    line: "Gardens, trails, and looking closely.",
    border: "border-[#22c55e]/55",
    text: "text-[#4ade80]",
    icon: "turtle",
  },
  {
    name: "Lucius the Lion",
    line: "Games that help quieter children stand taller.",
    border: "border-[#3b82f6]/55",
    text: "text-[#60a5fa]",
    icon: "lion",
  },
  {
    name: "Baby the Butterfly",
    line: "Dance, sparkle, and the last twirl of the week.",
    border: "border-[#a855f7]/55",
    text: "text-[#c084fc]",
    icon: "butterfly",
  },
] as const;

type MascotIcon = (typeof mascots)[number]["icon"];

const days = [
  {
    day: "Day 1",
    title: "Red Day",
    theme: "Friendship & Fun",
    host: "Lennox",
    border: "border-[#ef4444]/70",
    text: "text-[#f87171]",
    dot: "bg-[#ef4444]",
  },
  {
    day: "Day 2",
    title: "Pink Day",
    theme: "Creativity & Baking",
    host: "Callie",
    border: "border-[#ec4899]/70",
    text: "text-[#f472b6]",
    dot: "bg-[#ec4899]",
  },
  {
    day: "Day 3",
    title: "Yellow Day",
    theme: "Energy & Play",
    host: "Beau",
    border: "border-[#eab308]/70",
    text: "text-[#facc15]",
    dot: "bg-[#eab308]",
  },
  {
    day: "Day 4",
    title: "Green Day",
    theme: "Nature & Adventure",
    host: "Teddy",
    border: "border-[#22c55e]/70",
    text: "text-[#4ade80]",
    dot: "bg-[#22c55e]",
  },
  {
    day: "Day 5",
    title: "Blue Day",
    theme: "Confidence & Games",
    host: "Lucius",
    border: "border-[#3b82f6]/70",
    text: "text-[#60a5fa]",
    dot: "bg-[#3b82f6]",
  },
  {
    day: "Day 6",
    title: "Purple Day",
    theme: "Magic & Dance",
    host: "Baby",
    border: "border-[#a855f7]/70",
    text: "text-[#c084fc]",
    dot: "bg-[#a855f7]",
  },
  {
    day: "Day 7",
    title: "Rainbow Day",
    theme: "Grand Mascot Parade",
    host: "The whole family",
    border: "",
    text: "",
    dot: "",
    rainbow: true,
  },
] as const;

const benefits = [
  {
    title: "A Complete Turnkey Solution",
    detail:
      "Hosts, costumes, scripts, and a full week of programming, ready for your recreation team.",
  },
  {
    title: "Boosts Guest Satisfaction",
    detail:
      "Daytime families remember, and mention again when they sit down to dinner.",
  },
  {
    title: "Increases Repeat Bookings",
    detail:
      "A reason to return next season, with a parade children ask for by name.",
  },
];

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MascotIcon({ name }: { name: MascotIcon }) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true" {...stroke}>
      {name === "lizard" ? (
        <>
          <path d="M3 15c2.2-.4 3.6-3.2 6.4-4 1.6-.4 2.8 1.2 4.6 1.2 1.8 0 3-1.2 4.4-1.2" />
          <circle cx="16.2" cy="10.2" r="0.7" fill="currentColor" stroke="none" />
          <path d="M8 14.5c-.6 1.8-1.4 3.4-.4 5.2" />
          <path d="M5.5 16.2 3.2 17.2M7.2 18.2 5.2 20.4" />
        </>
      ) : null}
      {name === "chameleon" ? (
        <>
          <circle cx="15" cy="10" r="2.4" />
          <circle cx="15.8" cy="10" r="0.55" fill="currentColor" stroke="none" />
          <path d="M12.6 11.4c-2.6.6-4.6 2.4-5 4.6" />
          <path d="M7.6 16.2c-1.8 1.2-2.6 3-.8 4.2" />
          <path d="M17.2 8.2 19 6.4" />
        </>
      ) : null}
      {name === "bee" ? (
        <>
          <ellipse cx="12" cy="13" rx="3.6" ry="2.8" />
          <path d="M9.2 13h5.6M10 11.6h4M10 14.4h4" />
          <path d="M9 10.4C7.2 8.6 7.2 6.6 9 5.6M15 10.4c1.8-1.8 1.8-3.8 0-4.8" />
          <path d="M12 15.8v2.4" />
        </>
      ) : null}
      {name === "turtle" ? (
        <>
          <ellipse cx="11.5" cy="13" rx="4.6" ry="3.4" />
          <circle cx="17.4" cy="12.2" r="1.5" />
          <path d="M8 15.6 6.2 18M10 16.4 9.2 19M14 16.4 14.8 19M16.2 15.4 18 17.6" />
        </>
      ) : null}
      {name === "lion" ? (
        <>
          <circle cx="12" cy="12" r="2.7" />
          <path d="M12 5.2 12.8 8M8.2 6.4l1.8 2.2M5.8 9.4 8.6 10.6M5.8 14.2 8.6 13.2M8.2 17.4 10 15.4M12 18.8 11.2 16M15.8 17.4 14 15.4M18.2 14.2 15.4 13.2M18.2 9.4 15.4 10.6M15.8 6.4 14 8.6" />
        </>
      ) : null}
      {name === "butterfly" ? (
        <>
          <path d="M12 7.5v9" />
          <path d="M12 10.5c-2.6-3.4-6.4-2.6-6.4 1.1 0 2.4 3.2 3.4 6.4.9" />
          <path d="M12 10.5c2.6-3.4 6.4-2.6 6.4 1.1 0 2.4-3.2 3.4-6.4.9" />
          <path d="M12 14.8c-1.6 1.8-3.2 3.2-2.2 4.4M12 14.8c1.6 1.8 3.2 3.2 2.2 4.4" />
        </>
      ) : null}
    </svg>
  );
}

export function MascotFamily() {
  return (
    <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-24" aria-labelledby="mascot-family-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-500">Kids Club</p>
          <h2
            id="mascot-family-heading"
            className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl"
          >
            The Emerald Mascot Family
          </h2>
          <p className="mt-4 font-serif text-xl italic text-[#d4af37] sm:text-2xl">
            More Than Characters... Happier Holidays
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            A hosted week for resort kids clubs: six characters, a colour for every day, and a parade that closes the stay.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mascots.map((mascot, index) => (
            <FadeIn key={mascot.name} delay={index * 0.05} className="h-full">
              <article className={`flex h-full flex-col border bg-[#111111] p-7 ${mascot.border}`}>
                <div className={mascot.text}>
                  <MascotIcon name={mascot.icon} />
                </div>
                <h3 className={`mt-6 font-serif text-2xl ${mascot.text}`}>{mascot.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{mascot.line}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-500">Weekly programme</p>
            <h3 className="mt-4 font-serif text-3xl text-white sm:text-4xl">7 Days of Themed Fun</h3>
          </FadeIn>

          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[7px] hidden h-px bg-white/15 lg:block"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {days.map((day, index) => (
              <FadeIn key={day.day} delay={index * 0.04} className="h-full">
                <article className="relative flex h-full flex-col">
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mb-4 hidden h-3.5 w-3.5 rounded-full ring-4 ring-[#0a0a0a] lg:block ${
                      "rainbow" in day && day.rainbow
                        ? "bg-[linear-gradient(90deg,#ef4444,#eab308,#22c55e,#3b82f6,#a855f7)]"
                        : day.dot
                    }`}
                  />
                  {"rainbow" in day && day.rainbow ? (
                    <div className="h-full bg-[linear-gradient(135deg,#ef4444,#ec4899,#eab308,#22c55e,#3b82f6,#a855f7)] p-px">
                      <div className="flex h-full flex-col bg-[#111111] px-4 py-5">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{day.day}</p>
                        <p className="mt-2 bg-[linear-gradient(90deg,#f87171,#f472b6,#facc15,#4ade80,#60a5fa,#c084fc)] bg-clip-text font-serif text-lg text-transparent">
                          {day.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{day.theme}</p>
                        <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                          {day.host}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex h-full flex-col border-t-2 bg-[#111111] px-4 py-5 ${day.border}`}>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{day.day}</p>
                      <p className={`mt-2 font-serif text-lg ${day.text}`}>{day.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{day.theme}</p>
                      <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                        {day.host}
                      </p>
                    </div>
                  )}
                </article>
              </FadeIn>
            ))}
            </div>
          </div>
        </div>

        <FadeIn className="mt-16">
          <div className="border border-[#d4af37]/35 bg-[#111111] px-6 py-10 sm:px-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">For venues</p>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <li key={benefit.title}>
                  <h3 className="font-serif text-2xl leading-snug text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{benefit.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
