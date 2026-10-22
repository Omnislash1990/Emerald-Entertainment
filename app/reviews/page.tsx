import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Client reviews for Emerald Entertainment Group, from hotels, nightlife rooms, and family resorts.",
};

const reviews = [
  {
    quote:
      "Emerald understood the hotel before they understood the show. The season felt bespoke, the cast felt resident, and guests asked who would return next year.",
    client: "Elena Voss, The Marlowe Hotel",
  },
  {
    quote:
      "They bring nightlife that still belongs in a beautiful room. Nothing felt imported, and the night had a shape from the opening track to the last.",
    client: "James Okonkwo, Aurelia",
  },
  {
    quote:
      "We needed days that worked for children and evenings that felt grown. Emerald held both standards without the programme ever looking split in two.",
    client: "Sofia Rahman, Solara Bay Resort",
  },
];

function Stars() {
  return (
    <div className="flex justify-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-[#d4af37]"
          aria-hidden="true"
        >
          <path d="M10 1.4 12.2 6.6l5.6.6-4.2 3.7 1.3 5.5L10 13.7 5.1 16.4l1.3-5.5L2.2 7.2l5.6-.6L10 1.4Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Client Reviews"
        subtitle="Notes from hotels, nightlife rooms, and resorts we have been trusted to entertain."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.client} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col items-center border border-white/10 border-t-[#d4af37] bg-white/[0.02] px-8 py-10 text-center">
                <Stars />
                <blockquote className="mt-8 font-serif text-xl italic leading-relaxed text-zinc-100">
                  “{review.quote}”
                </blockquote>
                <p className="mt-8 text-sm tracking-wide text-[#d4af37]">
                  {review.client}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
