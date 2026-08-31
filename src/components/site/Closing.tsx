import { useState, type FormEvent } from "react";
import { Logo } from "./Nav";
import { GlassCard, Reveal, Section, SectionHeader, Tag } from "./primitives";

const team = [
  { role: "Electronics & Communication Engineering", focus: "Sensor electronics & embedded firmware" },
  { role: "Electronics & Communication Engineering", focus: "Wearable hardware & power design" },
  { role: "Electronics & Communication Engineering", focus: "Image acquisition & optics" },
  { role: "Electronics & Communication Engineering", focus: "Materials & chemical sensing layer" },
  { role: "Electronics & Communication Engineering", focus: "Testing, calibration & validation" },
  { role: "AI / ML", focus: "Data pipeline & model development" },
];

const docs = [
  { t: "Research papers", d: "Peer-reviewed and preprint work will be listed here once published." },
  { t: "Posters & presentations", d: "Conference and symposium material from the project team." },
  { t: "Technical reports", d: "Design notes, test protocols and characterisation summaries." },
];

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Closing() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Section id="team" className="border-y border-border bg-surface/40">
        <SectionHeader
          eyebrow="Team"
          title="The Team Behind BAASC"
          intro="BAASC is developed by a multidisciplinary student team spanning Electronics & Communication Engineering and AI/ML — combining sensor hardware, embedded systems, materials work and data science."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={`${m.role}-${i}`} delay={i * 60}>
              <GlassCard className="h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                  <span className="font-display text-lg font-bold text-primary">
                    {m.role.startsWith("AI") ? "AI" : "EC"}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-sm font-semibold leading-snug">{m.role}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{m.focus}</p>
                <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground/70">
                  Profile coming soon
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="documentation">
        <SectionHeader
          eyebrow="Documentation"
          title="Research & Publications"
          intro="This space is reserved for the project's own output. Nothing is listed until it exists."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {docs.map((d, i) => (
            <Reveal key={d.t} delay={i * 70}>
              <GlassCard className="h-full">
                <Tag tone="muted">Coming soon</Tag>
                <h3 className="mt-4 font-display text-base font-semibold">{d.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
          >
            Download Presentation
          </a>
        </Reveal>
      </Section>

      <Section id="contact" className="border-t border-border bg-surface/40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <SectionHeader
            eyebrow="Collaborate"
            title="Let's Build Safer Technology Together"
            intro="BAASC is looking for opportunities to collaborate on research, prototyping, validation and real-world testing. If you work in industrial safety, sensing materials, or occupational health, we'd like to hear from you."
          />

          <Reveal delay={80}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  />
                </label>
              </div>
              <label className="mt-4 flex flex-col gap-2 text-sm">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Organization
                </span>
                <input
                  name="organization"
                  className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                />
              </label>
              <label className="mt-4 flex flex-col gap-2 text-sm">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
              {sent && (
                <p className="mt-4 rounded-xl border border-safe/40 bg-safe/10 px-4 py-3 text-sm text-safe">
                  Thanks — your message has been noted. Message delivery is not connected yet.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Section>

      <footer className="px-5 py-14 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <Logo />
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
              BAASC is a student-led research and development project. The system described on this
              site is under development and is not a certified, medical-grade or approved gas
              detection instrument. It is not a substitute for certified industrial H₂S detectors,
              gas testing procedures or workplace safety systems.
            </p>
            <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground/70">
              © 2026 BAASC · Detect. Protect. Respond.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
