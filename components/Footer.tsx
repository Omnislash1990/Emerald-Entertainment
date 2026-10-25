import Image from "next/image";
import { EmailAddress } from "@/components/EmailAddress";
import { SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center justify-items-center gap-6 px-6 py-10 text-center sm:grid-cols-[auto_minmax(0,1fr)] sm:justify-items-stretch sm:gap-x-6 sm:text-left lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-6">
        <div className="w-56 sm:w-72">
          <Image
            src="/brand/emerald-logo.jpg"
            alt="Emerald Entertainment Group Ltd"
            width={1000}
            height={1000}
            sizes="288px"
            className="h-auto w-full"
          />
        </div>
        <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-6 sm:items-start sm:gap-2 lg:col-span-2 lg:grid lg:w-auto lg:grid-cols-subgrid lg:items-center lg:gap-6">
          <EmailAddress variant="footer" className="min-w-0 max-w-full lg:justify-self-center" />
          <p className="w-full min-w-0 max-w-full text-xs tracking-wide text-zinc-500 lg:w-auto lg:justify-self-end">
            © 2026 {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
