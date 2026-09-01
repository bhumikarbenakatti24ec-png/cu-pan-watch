import type { ReactNode } from "react";
import { Section, SectionHeader, Note } from "@/components/site/primitives";

function Phone({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <figure className="flex flex-col">
      <div className="mx-auto w-full max-w-[268px] rounded-[2rem] border border-border bg-steel p-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-background">
          {/* status bar */}
          <div className="flex items-center justify-between border-b border-border bg-surface px-4 pb-2 pt-3">
            <span className="font-mono text-[0.58rem] text-muted-foreground">09:41</span>
            <span className="h-4 w-16 rounded-full bg-steel/90" />
            <span className="font-mono text-[0.58rem] text-muted-foreground">100%</span>
          </div>
          <div className="min-h-[420px] px-4 py-4">{children}</div>
          <div className="flex justify-center pb-3">
            <span className="h-1 w-20 rounded-full bg-border" />
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold">{title}</p>
      </figcaption>
    </figure>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-1 border border-input bg-card px-3 py-2 text-[0.72rem] text-foreground/80">
        {value}
      </div>
    </div>
  );
}

function Btn({ children, variant = "solid" }: { children: ReactNode; variant?: "solid" | "ghost" }) {
  return (
    <div
      className={
        variant === "solid"
          ? "w-full bg-primary px-3 py-2 text-center text-[0.72rem] font-semibold text-primary-foreground"
          : "w-full border border-border px-3 py-2 text-center text-[0.72rem] font-medium text-muted-foreground"
      }
    >
      {children}
    </div>
  );
}

export function MobileApp() {
  return (
    <Section id="mobile-app" className="border-b border-border bg-surface">
      <SectionHeader
        eyebrow="06 — Mobile application"
        title="Companion application interface"
        intro="The badge is read by a phone camera. The application converts the observed colour into an estimated exposure band and records it against the worker, area and shift."
      />

      <div className="mt-12 grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
        {/* Registration */}
        <Phone label="Screen 01" title="Worker registration">
          <p className="text-[0.95rem] font-bold leading-tight">Register worker</p>
          <p className="mt-1 text-[0.66rem] leading-relaxed text-muted-foreground">
            One-time enrolment by the shift supervisor.
          </p>
          <div className="mt-4 space-y-3">
            <Field label="Full name" value="R. Shetty" />
            <Field label="Employee ID" value="MRPL-40218" />
            <Field label="Department / shift" value="Process Unit 2 · Shift B" />
            <Field label="Badge ID" value="BAASC-0117" />
          </div>
          <div className="mt-5 space-y-2">
            <Btn>Create worker profile</Btn>
            <Btn variant="ghost">Cancel</Btn>
          </div>
        </Phone>

        {/* Login */}
        <Phone label="Screen 02" title="Login & role">
          <div className="mt-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-border bg-steel font-mono text-[0.7rem] font-bold text-steel-foreground">
              BA
            </div>
            <p className="mt-3 text-[0.95rem] font-bold">BAASC Field App</p>
            <p className="text-[0.62rem] text-muted-foreground">Research prototype build</p>
          </div>
          <div className="mt-6 space-y-3">
            <Field label="Employee ID" value="MRPL-40218" />
            <Field label="Passcode" value="••••••" />
            <div>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                Role
              </p>
              <div className="mt-1 grid grid-cols-2 gap-px border border-input bg-border">
                <span className="bg-primary px-2 py-2 text-center text-[0.68rem] font-semibold text-primary-foreground">
                  Worker
                </span>
                <span className="bg-card px-2 py-2 text-center text-[0.68rem] text-muted-foreground">
                  Supervisor
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Btn>Sign in</Btn>
          </div>
        </Phone>

        {/* Worker dashboard */}
        <Phone label="Screen 03" title="Worker dashboard">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[0.95rem] font-bold leading-tight">Scan badge</p>
              <p className="text-[0.62rem] text-muted-foreground">Shift B · Unit 2</p>
            </div>
            <span className="border border-border px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground">
              Live
            </span>
          </div>

          {/* camera viewfinder */}
          <div className="relative mt-3 aspect-[4/3] border border-border bg-steel">
            <div className="absolute inset-6 border border-primary/70" />
            <div className="absolute left-6 top-6 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="absolute right-6 top-6 h-3 w-3 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-6 left-6 h-3 w-3 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-6 right-6 h-3 w-3 border-b-2 border-r-2 border-primary" />
            <p className="absolute inset-x-0 bottom-2 text-center font-mono text-[0.55rem] uppercase tracking-[0.14em] text-steel-foreground/70">
              Align patch inside frame
            </p>
          </div>

          <div className="mt-3 border border-border bg-card p-3">
            <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground">
              Estimated exposure
            </p>
            <div className="mt-1 flex items-end justify-between">
              <p className="font-mono text-xl font-bold">8–12 <span className="text-xs">ppm</span></p>
              <span className="bg-warn px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-wide text-primary-foreground">
                Elevated
              </span>
            </div>
            <div className="mt-2 flex h-2 overflow-hidden border border-border">
              <span className="w-1/3 bg-safe" />
              <span className="w-1/3 bg-warn" />
              <span className="w-1/3 bg-danger/60" />
            </div>
          </div>

          <ul className="mt-3 space-y-1">
            {[
              ["09:12", "0–2 ppm", "Normal"],
              ["11:40", "3–6 ppm", "Watch"],
            ].map(([t, v, s]) => (
              <li
                key={t}
                className="flex items-center justify-between border-b border-border pb-1 font-mono text-[0.6rem] text-muted-foreground"
              >
                <span>{t}</span>
                <span className="text-foreground">{v}</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Phone>

        {/* Supervisor dashboard */}
        <Phone label="Screen 04" title="Supervisor dashboard">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[0.95rem] font-bold leading-tight">Shift overview</p>
              <p className="text-[0.62rem] text-muted-foreground">Unit 2 · 14 workers</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-px border border-border bg-border">
            {[
              ["11", "Normal"],
              ["2", "Watch"],
              ["1", "Flagged"],
            ].map(([n, l]) => (
              <div key={l} className="bg-card px-2 py-3 text-center">
                <p className="font-mono text-base font-bold">{n}</p>
                <p className="text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground">
            Latest scans
          </p>
          <ul className="mt-2 divide-y divide-border border border-border bg-card">
            {[
              ["R. Shetty", "8–12 ppm", "warn"],
              ["A. Kumar", "0–2 ppm", "safe"],
              ["S. Naik", "15+ ppm", "danger"],
              ["P. Rao", "0–2 ppm", "safe"],
            ].map(([n, v, tone]) => (
              <li key={n} className="flex items-center gap-2 px-3 py-2">
                <span
                  className={
                    "h-2 w-2 shrink-0 " +
                    (tone === "safe" ? "bg-safe" : tone === "warn" ? "bg-warn" : "bg-danger")
                  }
                />
                <span className="flex-1 text-[0.7rem] font-medium">{n}</span>
                <span className="font-mono text-[0.62rem] text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Btn>Export shift report</Btn>
          </div>
        </Phone>
      </div>

      <div className="mt-12">
        <Note>
          Screens illustrate the intended application flow for the prototype. Values shown are
          estimates derived from colour comparison, not certified gas measurements.
        </Note>
      </div>
    </Section>
  );
}
