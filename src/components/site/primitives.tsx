import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

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
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">{title}</h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      ) : null}
    </Reveal>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Tag({ children, tone = "cyan" }: { children: ReactNode; tone?: "cyan" | "warn" | "muted" }) {
  const tones = {
    cyan: "border-primary/30 bg-primary/10 text-primary",
    warn: "border-warn/30 bg-warn/10 text-warn",
    muted: "border-border bg-muted/60 text-muted-foreground",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em]",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function FlowChain({ steps, dense = false }: { steps: string[]; dense?: boolean }) {
  return (
    <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2 sm:contents">
          <div
            className={cn(
              "glass flex flex-1 items-center justify-center rounded-xl px-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground/90 sm:flex-none",
              dense ? "py-2.5" : "py-3",
            )}
          >
            {s}
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden className="self-center px-1 text-primary/70">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
