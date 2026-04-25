import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ProductGrid, SectionHeading } from "@/components/page-shell";
import pants from "@/assets/pants.jpg";

// =====================================================================
// PANTS CATALOG  (route: "/pants")
// ---------------------------------------------------------------------
// Edit page SEO in head(), heading in <SectionHeading />, and the
// products in the `items` array below.
// =====================================================================

export const Route = createFileRoute("/pants")({
  head: () => ({
    meta: [
      { title: "Pants — GSELLS" },
      { name: "description", content: "Cargo, denim and tailored pants from the archive." },
      { property: "og:title", content: "Pants — GSELLS" },
      { property: "og:description", content: "Cargo, denim, tailored. Curated resale." },
      { property: "og:image", content: pants },
    ],
  }),
  component: PantsPage,
});

function PantsPage() {
  // --- PRODUCT LIST: edit names, prices, tag numbers, and images here ---
  const items = [
    { name: "Cargo Trouser — Sand", price: "$320", tag: "01", img: pants },
    { name: "Pleated Wide — Khaki", price: "$280", tag: "02", img: pants },
    { name: "Carpenter — Stone", price: "$240", tag: "03", img: pants },
    { name: "Selvedge Denim — Raw", price: "$390", tag: "04", img: pants },
    { name: "Track Pant — Black", price: "$210", tag: "05", img: pants },
    { name: "Tailored — Charcoal", price: "$340", tag: "06", img: pants },
  ];
  return (
    <PageShell>
      <SectionHeading index="Catalog / 02" title="Pants" caption="From cargo to tailored. Vintage cuts and contemporary fits." />
      <ProductGrid items={items} category="pants" />
    </PageShell>
  );
}