import Image from "next/image";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="w-56 shrink-0 sm:w-72">
          <Image
            src="/brand/emerald-logo.jpg"
            alt="Emerald Entertainment Group Ltd"
            width={1000}
            height={1000}
            sizes="288px"
            className="h-auto w-full"
          />
        </div>
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
