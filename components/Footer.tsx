import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-serif text-lg tracking-wide text-white">{SITE_NAME}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="break-all text-sm text-[#d4af37] transition-colors hover:text-white sm:break-normal"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="text-xs tracking-wide text-zinc-500">
          © 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
