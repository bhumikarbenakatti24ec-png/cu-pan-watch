import { Note, Section, SectionHeader } from "./primitives";

const flow = [
  { s: "H₂S exposure", tone: "text-brand-blue", bar: "bg-brand-blue" },
  { s: "Chemical reaction in sensing patch", tone: "text-brand-cyan", bar: "bg-brand-cyan" },
  { s: "Visible colour change", tone: "text-brand-orange", bar: "bg-brand-orange" },
  { s: "Mobile camera captures patch", tone: "text-brand-teal", bar: "bg-brand-teal" },
  { s: "Image analysis", tone: "text-brand-blue", bar: "bg-brand-blue" },
  { s: "Estimated H₂S exposure level in ppm", tone: "text-brand-navy", bar: "bg-brand-navy" },
];

export function Solution() {
  return (
    <Section id="solution" className="border-b border-border bg-tint-cyan">
      <SectionHeader
        num="02"
        label="The Solution"
        accent="cyan"
        title="A passive wearable indicator read by a mobile camera"
        intro="BAASC is a wearable H₂S exposure indicator that uses a passive chemical sensing patch and image-based analysis."
      />

      <ol className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {flow.map((step, i) => (
          <li key={step.s} className="relative">
            <div className={`h-[3px] w-full ${step.bar}`} />
            <p className={`mt-3 font-mono text-[0.7rem] tracking-[0.16em] ${step.tone}`}>
              STEP {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-brand-navy">{step.s}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <Note>
          The patch responds chemically to H₂S; the mobile application interprets the resulting
          colour against a printed reference region. Reported values are estimates for
          exposure-awareness, not certified gas measurements.
        </Note>
      </div>
    </Section>
  );
}
