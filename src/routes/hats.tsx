import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ProductGrid, SectionHeading } from "@/components/page-shell";
import hats from "@/assets/hats.jpg";

export const Route = createFileRoute("/hats")({
  head: () => ({
    meta: [
      { title: "Hats — G\"SELLS\"" },
      { name: "description", content: "Caps, beanies, bucket hats. Hand picked from the archive." },
      { property: "og:title", content: "Hats — G\"SELLS\"" },
      { property: "og:description", content: "Headwear, curated." },
      { property: "og:image", content: hats },
    ],
  }),
  component: HatsPage,
});

function HatsPage() {
  const items = [
    { name: "6-Panel Cap — Black", price: "$80", tag: "01", img: hats },
    { name: "Bucket — Beige", price: "$95", tag: "02", img: hats },
    { name: "Trucker — Stone", price: "$70", tag: "03", img: hats },
    { name: "Beanie — Charcoal", price: "$60", tag: "04", img: hats },
    { name: "Dad Cap — Sand", price: "$75", tag: "05", img: hats },
    { name: "Visor — Onyx", price: "$55", tag: "06", img: hats },
  ];
  return (
    <PageShell>
      <SectionHeading index="Catalog / 03" title="Hats" caption="Headwear that finishes the fit." />
      <ProductGrid items={items} />
    </PageShell>
  );
}