import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ProductGrid, SectionHeading } from "@/components/page-shell";
import shirts from "@/assets/shirts.jpg";

// =====================================================================
// SHIRTS CATALOG  (route: "/shirts")
// ---------------------------------------------------------------------
// - To change the page title / SEO, edit the head() block below.
// - To change the heading / caption, edit the <SectionHeading /> props.
// - To add / remove / reprice products, edit the `items` array.
//   Each item: { name, price, tag, img }.
//   Replace `img: shirts` with a different imported asset for unique photos.
// =====================================================================

export const Route = createFileRoute("/shirts")({
  head: () => ({
    meta: [
      { title: "Shirts — GSELLS" },
      { name: "description", content: "Curated archival shirts and tees, authenticated and ready to ship." },
      { property: "og:title", content: "Shirts — GSELLS" },
      { property: "og:description", content: "Archival tees and shirts. Worldwide shipping." },
      { property: "og:image", content: shirts },
    ],
  }),
  component: ShirtsPage,
});

function ShirtsPage() {
  // --- PRODUCT LIST: edit names, prices, tag numbers, and images here ---
  const items = [
    { name: "Heavyweight Tee — Mocha", price: "$140", tag: "01", img: shirts },
    { name: "Box Logo Tee — Sand", price: "$220", tag: "02", img: shirts },
    { name: "Vintage Crew — Charcoal", price: "$95", tag: "03", img: shirts },
    { name: "Oversized Tee — Beige", price: "$110", tag: "04", img: shirts },
    { name: "Graphic Tee — Black", price: "$160", tag: "05", img: shirts },
    { name: "Henley — Stone", price: "$125", tag: "06", img: shirts },
  ];
  return (
    <PageShell>
      <SectionHeading index="Catalog / 01" title="Shirts" caption="Authenticated archival tees and tops, sized for the new wave." />
      <ProductGrid items={items} />
    </PageShell>
  );
}