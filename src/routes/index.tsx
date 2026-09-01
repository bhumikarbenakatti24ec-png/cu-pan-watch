import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Technology } from "@/components/site/Technology";
import { Product } from "@/components/site/Product";
import { MobileApp } from "@/components/site/MobileApp";
import { Application } from "@/components/site/Application";
import { Research } from "@/components/site/Research";
import { Team } from "@/components/site/Team";
import { Contact, Footer } from "@/components/site/Contact";

const title = "BAASC — Wearable H₂S Exposure Indicator (Research Prototype)";
const description =
  "BAASC is a student research prototype: a wearable colorimetric H₂S exposure indicator with a phone-based reading app, developed for review with MRPL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Product />
      <MobileApp />
      <Application />
      <Research />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
