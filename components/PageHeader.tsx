import { FadeIn } from "@/components/FadeIn";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="border-b border-white/10 px-6 pb-16 pt-32 sm:pt-36">
      <FadeIn className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-500">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      </FadeIn>
    </header>
  );
}
