import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "Product", href: "#product" },
  { label: "Application", href: "#application" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = ids[0]!;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-steel text-steel-foreground">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-extrabold tracking-[0.14em]">BAASC</span>
          <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel-foreground/60 sm:inline">
            Safety Tech
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "border-b-2 px-3 py-2 text-[0.82rem] font-medium transition-colors",
                  active === l.href
                    ? "border-primary text-primary"
                    : "border-transparent text-steel-foreground/75 hover:text-steel-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-steel-foreground/25 xl:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-px w-5 bg-steel-foreground" />
            <span className="block h-px w-5 bg-steel-foreground" />
            <span className="block h-px w-5 bg-steel-foreground" />
          </span>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-steel-foreground/15 bg-steel px-5 pb-4 xl:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-steel-foreground/10 py-3 text-sm text-steel-foreground/80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
