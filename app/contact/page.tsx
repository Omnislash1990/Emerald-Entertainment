import type { Metadata } from "next";
import { ContactPanels } from "@/components/ContactPanels";
import { EmailAddress } from "@/components/EmailAddress";
import { PageHeader } from "@/components/PageHeader";

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
        <div className="email-slot mb-10 text-left">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Email</p>
          <EmailAddress variant="feature" />
        </div>
        <ContactPanels />
      </div>
    </>
  );
}
