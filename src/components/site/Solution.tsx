import { Note, Section, SectionHeader } from "./primitives";

const flow = [
  "H₂S exposure",
  "Chemical reaction in sensing patch",
  "Visible colour change",
  "Mobile camera captures patch",
  "Image analysis",
  "Estimated H₂S exposure level in ppm",
];

export function Solution() {
  return (
    <Section id="solution" className="border-b border-border bg-surface">
      <SectionHeader
        eyebrow="02 — The Solution"
        title="A passive wearable indicator read by a mobile camera"
        intro="BAASC is a wearable H₂S exposure indicator that uses a passive chemical sensing patch and image-based analysis."
      />

      <ol className="mt-10 grid gap-0 md:grid-cols-3">
        {flow.map((step, i) => (
          <li
            key={step}
            className="relative border border-border bg-card p-5 md:-ml-px md:-mt-px"
          >
            <span className="font-mono text-[0.7rem] text-primary">
              STEP {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-medium leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <Note>
          The patch responds chemically to H₂S; the mobile application interprets the resulting
          colour against a printed reference region. Reported values are estimates for
          exposure-awareness, not certified gas measurements.
        </Note>
      </div>
    </Section>
  );
}
