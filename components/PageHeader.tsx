import { FadeIn } from "@/components/FadeIn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subheading?: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subheading, subtitle }: PageHeaderProps) {
  return (
    <header className="border-b border-white/10 px-6 pb-16 pt-32 sm:pt-36">
      <FadeIn className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-500">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`max-w-3xl text-balance font-serif text-4xl leading-tight text-white sm:text-6xl ${
            eyebrow ? "mt-4" : ""
          }`}
        >
          {title}
        </h1>
        {subheading ? (
          <p className="mt-4 font-serif text-2xl leading-tight text-white sm:text-3xl">
            {subheading}
          </p>
        ) : null}
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </FadeIn>
    </header>
  );
}
