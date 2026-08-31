import workerWearing from "@/assets/worker-wearing.jpg";
import { FlowChain, GlassCard, Reveal, Section, SectionHeader, Tag } from "./primitives";

const bandParts = [
  "Chemical sensing patch",
  "Reference patch",
  "Environmental sensors",
  "Camera / color sensor",
  "Microcontroller",
  "Wireless communication",
  "Alert mechanism",
  "Rechargeable power source",
];

const alertPath = [
  "H₂S exposure",
  "Chemical response",
  "Image acquisition",
  "ML interpretation",
  "Risk classification",
  "Wearable alert",
  "Mobile notification",
];

const alertChannels = [
  { name: "Vibration", desc: "Haptic pulse on the wrist for noisy environments." },
  { name: "Buzzer", desc: "Audible alert pattern that escalates with risk level." },
  { name: "LED indicator", desc: "Colour-coded status visible at a glance." },
  { name: "Smartphone", desc: "Push notification with recommended next action." },
];

export function Product() {
  return (
    <>
      <Section id="product">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Smart Wristband"
              title="Wearable by Design"
              intro="The target form factor is a compact, lightweight band that a worker can wear through a full shift without adjusting their routine — rugged enough for industrial sites, simple enough to forget it is there."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bandParts.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 45}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm">{p}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={80} className="overflow-hidden rounded-3xl border border-border">
            <img
              src={workerWearing}
              alt="Industrial worker in protective clothing checking a wearable safety band on his wrist at a process facility"
              loading="lazy"
              width={1280}
              height={864}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section id="app" className="border-y border-border bg-surface/40">
        <SectionHeader
          eyebrow="Mobile Application"
          title="Your Safety Data, At a Glance"
          intro="The companion app is the readable face of the system: current status, environmental context, exposure trend and history — designed so a worker or supervisor can understand the situation in seconds."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal className="mx-auto w-full max-w-[320px]">
            <div className="glass rounded-[2.2rem] border-2 border-border p-3">
              <div className="rounded-[1.7rem] bg-background p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold tracking-[0.18em]">BAASC</span>
                  <span className="font-mono text-[0.6rem] text-muted-foreground">LIVE</span>
                </div>

                <div className="mt-5 rounded-2xl border border-safe/40 bg-safe/10 p-5 text-center">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    H₂S Status
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold text-safe">SAFE</p>
                  <p className="mt-1 text-[0.7rem] text-muted-foreground">
                    Sensor active · patch nominal
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { k: "Temp", v: "26.4°" },
                    { k: "RH", v: "58%" },
                    { k: "Batt", v: "82%" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl border border-border bg-surface/60 p-2.5 text-center">
                      <p className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted-foreground">
                        {m.k}
                      </p>
                      <p className="mt-1 font-display text-xs font-semibold">{m.v}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Exposure trend
                </p>
                <div className="mt-2 flex h-16 items-end gap-1">
                  {[20, 28, 22, 35, 30, 44, 38, 30, 26, 34, 48, 40].map((h, i) => (
                    <span key={i} className="flex-1 rounded-sm bg-primary/40" style={{ height: `${h}%` }} />
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-danger/40 bg-danger/10 p-3">
                  <p className="font-display text-[0.72rem] font-semibold text-destructive">
                    ⚠️ Possible H₂S Exposure Detected
                  </p>
                  <p className="mt-1 text-[0.68rem] leading-relaxed text-muted-foreground">
                    Move to a safe location and follow workplace emergency procedures.
                  </p>
                </div>

                <p className="mt-4 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Detection history
                </p>
                <ul className="mt-2 space-y-1.5">
                  {["09:14 · Caution · 32 °C", "08:02 · Safe · 27 °C"].map((h) => (
                    <li key={h} className="rounded-lg border border-border bg-surface/50 px-3 py-2 text-[0.68rem] text-muted-foreground">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
              Interface mock-up · sample values
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Three-level status", d: "SAFE / CAUTION / DANGER, chosen so the state is readable without interpretation." },
              { t: "Sensor health", d: "Patch state, connectivity and battery reported alongside the reading." },
              { t: "Environmental context", d: "Temperature and humidity shown with each measurement, not hidden behind it." },
              { t: "Trend & history", d: "Exposure over the shift, so patterns are visible rather than single points." },
              { t: "Escalating alerts", d: "Notification content adapts to the classified risk level." },
              { t: "Clear limitations", d: "The app supports awareness and workplace procedure. It does not guarantee safety." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 55}>
                <GlassCard className="h-full">
                  <h3 className="font-display text-sm font-semibold">{f.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.d}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="alerts">
        <SectionHeader
          eyebrow="Real-Time Alerts"
          title="One pathway, from chemistry to notification"
          intro="Every element of the architecture exists to shorten the distance between an exposure event and the moment the wearer knows about it."
        />

        <Reveal className="mt-10">
          <FlowChain steps={alertPath} dense />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {alertChannels.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <GlassCard className="h-full text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-warn/40 bg-warn/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-warn" style={{ animation: "baasc-pulse 2.2s ease-in-out infinite" }} />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold">{c.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <div className="glass rounded-2xl border-l-2 border-l-warn p-6">
            <Tag tone="warn">Important</Tag>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              BAASC is an early-warning research concept. It is not a certified gas detector, and it
              is not intended to replace approved industrial H₂S monitors, permit-to-work systems or
              site emergency procedures.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
