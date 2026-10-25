import { CONTACT_EMAIL } from "@/lib/site";

type EmailAddressProps = {
  variant?: "feature" | "compact" | "footer";
  className?: string;
};

const variantClass = {
  feature:
    "email-address-feature mt-2 font-sans text-[#d4af37] underline decoration-[#d4af37]/40 underline-offset-4 transition-colors hover:text-white",
  compact: "email-address font-sans text-[#d4af37] transition-colors hover:text-white",
  footer: "email-address-footer font-sans text-[#d4af37] transition-colors hover:text-white",
} as const;

export function EmailAddress({ variant = "compact", className = "" }: EmailAddressProps) {
  const at = CONTACT_EMAIL.indexOf("@");
  const local = at === -1 ? CONTACT_EMAIL : CONTACT_EMAIL.slice(0, at + 1);
  const domain = at === -1 ? "" : CONTACT_EMAIL.slice(at + 1);

  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={`${variantClass[variant]} ${className}`}>
      {local}
      {/* Preferred wrap point. Footer always allows it; other variants only when narrow. */}
      {domain ? <wbr /> : null}
      {domain}
    </a>
  );
}
