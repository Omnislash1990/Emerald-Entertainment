"use client";

import { FormEvent, useState } from "react";
import { goldButtonClass } from "@/components/GoldButton";
import { CONTACT_EMAIL } from "@/lib/site";

const labelClass = "block text-[11px] uppercase tracking-[0.2em] text-zinc-300";
const fieldClass =
  "mt-2 w-full border border-white/25 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#d4af37]";

const actTypes = [
  "Vocalist",
  "DJ",
  "Dancer",
  "Musician",
  "Host",
  "Magician",
  "Circus & Specialty",
  "Children's Entertainer",
  "Other",
];

function openMailto(subject: string, form: HTMLFormElement) {
  const body = Array.from(new FormData(form).entries())
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ThankYou({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-8 border border-[#d4af37]/40 bg-black/30 p-6" role="status">
      <p className="font-serif text-2xl text-white">Thank you.</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
        Your email app should open with this message addressed to{" "}
        <a className="text-[#d4af37] hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        . If it does not, send the details there and the team will reply.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] hover:text-white"
      >
        Send another
      </button>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={label}
        type={type}
        autoComplete={autoComplete}
        required
        className={fieldClass}
      />
    </div>
  );
}

function ClientForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openMailto("Client enquiry", event.currentTarget);
    setSent(true);
  }

  return (
    <section className="border border-white/10 bg-emerald-900 p-6 sm:p-10">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">For venues</p>
      <h2 className="mt-3 font-serif text-3xl text-white">Client Enquiries</h2>
      <p className="mt-3 text-sm leading-relaxed text-emerald-50">
        Hotels, resorts, private hosts, and nightlife rooms.
      </p>
      {sent ? (
        <ThankYou onReset={() => setSent(false)} />
      ) : (
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <Field id="client-name" label="Name" autoComplete="name" />
          <Field id="client-venue" label="Venue/Company" autoComplete="organization" />
          <Field id="client-email" label="Email" type="email" autoComplete="email" />
          <Field id="client-date" label="Date of Event" type="date" />
          <div>
            <label htmlFor="client-requirements" className={labelClass}>
              Requirements
            </label>
            <textarea
              id="client-requirements"
              name="Requirements"
              required
              rows={5}
              placeholder="Tell us about the venue, the audience, and the feeling you want."
              className={fieldClass}
            />
          </div>
          <button type="submit" className={`${goldButtonClass} w-full sm:w-auto`}>
            Send Enquiry
          </button>
        </form>
      )}
    </section>
  );
}

function CastingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openMailto("Casting submission", event.currentTarget);
    setSent(true);
  }

  return (
    <section className="border border-[#d4af37]/40 bg-[#111111] p-6 sm:p-10">
      <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-500">For artists</p>
      <h2 className="mt-3 font-serif text-3xl text-white">Casting & Performers</h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        Share your act and a link we can watch.
      </p>
      {sent ? (
        <ThankYou onReset={() => setSent(false)} />
      ) : (
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <Field id="cast-name" label="Name" autoComplete="name" />
          <div>
            <label htmlFor="cast-act" className={labelClass}>
              Act Type
            </label>
            <select id="cast-act" name="Act Type" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select an act type
              </option>
              {actTypes.map((act) => (
                <option key={act} value={act} className="bg-[#0a0a0a]">
                  {act}
                </option>
              ))}
            </select>
          </div>
          <Field id="cast-email" label="Email" type="email" autoComplete="email" />
          <div>
            <label htmlFor="cast-showreel" className={labelClass}>
              Link to Showreel/Socials
            </label>
            <input
              id="cast-showreel"
              name="Link to Showreel/Socials"
              type="url"
              inputMode="url"
              required
              placeholder="https://"
              className={fieldClass}
            />
          </div>
          <button type="submit" className={`${goldButtonClass} w-full sm:w-auto`}>
            Submit Showreel
          </button>
        </form>
      )}
    </section>
  );
}

export function ContactPanels() {
  const [tab, setTab] = useState<"client" | "casting">("client");

  return (
    <div>
      <div
        className="mb-6 grid grid-cols-2 border border-white/15 lg:hidden"
        role="tablist"
        aria-label="Enquiry type"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "client"}
          className={`px-3 py-3 text-[11px] uppercase tracking-[0.16em] ${
            tab === "client" ? "bg-[#d4af37] text-[#0a0a0a]" : "text-zinc-300"
          }`}
          onClick={() => setTab("client")}
        >
          Clients
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "casting"}
          className={`px-3 py-3 text-[11px] uppercase tracking-[0.16em] ${
            tab === "casting" ? "bg-[#d4af37] text-[#0a0a0a]" : "text-zinc-300"
          }`}
          onClick={() => setTab("casting")}
        >
          Performers
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className={tab === "client" ? "block" : "hidden lg:block"}>
          <ClientForm />
        </div>
        <div className={tab === "casting" ? "block" : "hidden lg:block"}>
          <CastingForm />
        </div>
      </div>
    </div>
  );
}
