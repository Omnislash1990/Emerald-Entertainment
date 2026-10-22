"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function Mark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M16 3.5 27 12.5 16 28.5 5 12.5 16 3.5Z"
        fill="#064e3b"
        stroke="#d4af37"
        strokeWidth="1.2"
      />
      <path d="M5 12.5h22" stroke="#d4af37" strokeWidth="1" />
      <path
        d="M16 3.5 11.5 12.5 16 28.5 20.5 12.5 16 3.5Z"
        fill="#10b981"
        opacity="0.7"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Mark />
          <span className="min-w-0 leading-none">
            <span className="block font-serif text-base tracking-[0.18em] text-white sm:text-lg sm:tracking-[0.24em]">
              EMERALD
            </span>
            <span className="mt-1 block text-[8px] tracking-[0.22em] text-[#d4af37] sm:text-[10px] sm:tracking-[0.28em]">
              ENTERTAINMENT GROUP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  active ? "text-[#d4af37]" : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 bg-[#0a0a0a] lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-sm uppercase tracking-[0.18em] ${
                      active ? "text-[#d4af37]" : "text-zinc-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
