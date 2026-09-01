import { Section, SectionHeader, Note } from "@/components/site/primitives";

const screens = [
  {
    tag: "Screen 01",
    title: "Registration",
    lines: ["Worker name / employee ID", "Department & shift", "Assigned supervisor", "Device / badge ID"],
  },
  {
    tag: "Screen 02",
    title: "Login",
    lines: ["Employee ID + passcode", "Role selection: Worker / Supervisor", "Session tied to assigned site area"],
  },
  {
    tag: "Screen 03",
    title: "Worker dashboard",
    lines: ["Camera scan of the badge", "Colour compared against reference patch", "Estimated exposure band shown", "Scan history for the shift"],
  },
  {
    tag: "Screen 04",
    title: "Supervisor dashboard",
    lines: ["List of workers on shift", "Latest scan status per worker", "Flagged readings for follow-up", "Area-wise summary view"],
  },
];

export function MobileApp() {
  return (
    <Section id="mobile-app" className="border-b border-border bg-surface">
      <SectionHeader
        eyebrow="05 — Mobile application"
        title="Companion application concept"
        intro="The badge is read by a phone camera. The application converts the observed colour into an estimated exposure band and records it against the worker and shift."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {screens.map((s) => (
          <div key={s.title} className="border border-border bg-card">
            <div className="border-b border-border bg-steel px-4 py-3">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel-foreground/60">
                {s.tag}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-steel-foreground">{s.title}</h3>
            </div>
            <div className="aspect-[9/14] p-4">
              <ul className="space-y-3">
                {s.lines.map((l) => (
                  <li key={l} className="border-b border-border pb-3 text-[0.8rem] leading-relaxed text-muted-foreground">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Note>
          Screens describe the intended application flow for the prototype. Values shown in the app
          are estimates derived from colour comparison, not certified gas measurements.
        </Note>
      </div>
    </Section>
  );
}
