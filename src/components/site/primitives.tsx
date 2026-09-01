import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 md:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl md:text-[2.1rem]">{title}</h2>
      <div className="mt-4 h-[3px] w-14 bg-primary" />
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("border border-border bg-card p-6", className)}>{children}</div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="border border-border border-l-[3px] border-l-primary bg-surface px-5 py-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
        Prototype note
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="divide-y divide-border border border-border bg-card">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-4 px-5 py-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-border bg-surface font-mono text-xs text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-relaxed">{s}</span>
        </li>
      ))}
    </ol>
  );
}
