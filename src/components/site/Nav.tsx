import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "Product", href: "#product" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
        <span
          className="absolute inset-0 rounded-lg bg-primary/20 blur-md"
          style={{ animation: "baasc-pulse 3.5s ease-in-out infinite" }}
        />
        <span className="relative font-display text-sm font-bold text-primary">B</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-[0.18em]">BAASC</span>
        <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-muted-foreground">
          Detect. Protect. Respond.
        </span>
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
          >
            Contact
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </span>
        </button>
      </nav>
      {open && (
        <div className="glass border-t border-border px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {[...links, { label: "Contact", href: "#contact" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
