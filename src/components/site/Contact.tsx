import { useState } from "react";
import { Section, SectionHeader } from "@/components/site/primitives";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" className="border-b border-border">
      <SectionHeader
        eyebrow="09 — Contact"
        title="Project enquiries"
        intro="For technical discussion, review of the prototype, or collaboration on field testing, please use the form below."
      />

      <div className="mt-10 grid gap-px border border-border bg-border lg:grid-cols-[1.2fr_1fr]">
        <form
          className="bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Organisation</span>
              <input
                name="org"
                className="mt-2 w-full border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Email</span>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="mt-5 block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <button
            type="submit"
            className="mt-6 border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send enquiry
          </button>
          {sent ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Thank you — your message has been recorded locally in this prototype.
            </p>
          ) : null}
        </form>

        <div className="bg-surface p-6 sm:p-8">
          <h3 className="text-base font-semibold">Project details</h3>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Project</dt>
              <dd className="mt-1">BAASC wearable H₂S exposure indicator</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Stage</dt>
              <dd className="mt-1">Research prototype under development</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Context</dt>
              <dd className="mt-1">Developed for review with MRPL, Mangalore</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Discipline</dt>
              <dd className="mt-1">Electronics &amp; Communication Engineering</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-base font-extrabold tracking-[0.14em]">BAASC</p>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-steel-foreground/60">
            Research prototype. Not a certified gas detector. Does not replace calibrated industrial
            H₂S detection equipment or established safety procedures.
          </p>
        </div>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel-foreground/50">
          © {new Date().getFullYear()} BAASC Project Team
        </p>
      </div>
    </footer>
  );
}
