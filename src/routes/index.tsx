import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Technology } from "@/components/site/Technology";
import { Product } from "@/components/site/Product";
import { Research } from "@/components/site/Research";
import { Applications } from "@/components/site/Applications";
import { Closing } from "@/components/site/Closing";

const title = "BAASC — Wearable H₂S Detection Research";
const description =
  "BAASC is a student deep-tech project developing a wearable H₂S exposure detection system using Cu-PAN colorimetric sensing, environmental compensation and ML interpretation.";

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
      <Technology />
      <Product />
      <Research />
      <Applications />
      <Closing />
    </main>
  );
}
