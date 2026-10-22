import type { Metadata } from "next";
import { ContactPanels } from "@/components/ContactPanels";
import { PageHeader } from "@/components/PageHeader";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about entertainment for your venue, or submit a showreel to Emerald Entertainment Group.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation"
        subtitle="Client bookings and performer submissions are read by the same team."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="mb-10 text-sm text-zinc-400">
          Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-serif text-lg text-[#d4af37] underline decoration-[#d4af37]/40 underline-offset-4 transition-colors hover:text-white sm:text-2xl"
          >
            <span className="sm:hidden">
              {CONTACT_EMAIL.split("@")[0]}@
              <br />
              {CONTACT_EMAIL.split("@")[1]}
            </span>
            <span className="hidden sm:inline">{CONTACT_EMAIL}</span>
          </a>
        </p>
        <ContactPanels />
      </div>
    </>
  );
}
