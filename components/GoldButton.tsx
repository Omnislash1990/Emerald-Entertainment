import Link from "next/link";
import type { ReactNode } from "react";

export const goldButtonClass =
  "inline-flex cursor-pointer items-center justify-center border border-[#d4af37] bg-[#d4af37] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0a0a0a] transition-colors duration-300 hover:bg-transparent hover:text-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]";

export function GoldButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={goldButtonClass}>
      {children}
    </Link>
  );
}
