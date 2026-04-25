import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ProductGrid, SectionHeading } from "@/components/page-shell";
import shoes from "@/assets/shoes.jpg";

// =====================================================================
// SHOES CATALOG  (route: "/shoes")
// ---------------------------------------------------------------------
// Edit page SEO in head(), heading in <SectionHeading />, and the
// products in the `items` array below.
// =====================================================================

export const Route = createFileRoute("/shoes")({
  head: () => ({
    meta: [
      { title: "Shoes — GSELLS" },
      { name: "description", content: "Sneakers and footwear, authenticated and shipped worldwide." },
      { property: "og:title", content: "Shoes — GSELLS" },
      { property: "og:description", content: "Sneakers, authenticated." },
      { property: "og:image", content: shoes },
    ],
  }),
  component: ShoesPage,
});

function ShoesPage() {
  // --- PRODUCT LIST: edit names, prices, tag numbers, and images here ---
  const items = [
    { name: "Court Mid — Sand/Black", price: "$420", tag: "01", img: shoes },
    { name: "Runner — Stone", price: "$310", tag: "02", img: shoes },
    { name: "Trainer — Beige", price: "$280", tag: "03", img: shoes },
    { name: "High Top — Onyx", price: "$390", tag: "04", img: shoes },
    { name: "Skate — Khaki", price: "$240", tag: "05", img: shoes },
    { name: "Boot — Charcoal", price: "$520", tag: "06", img: shoes },
  ];
  return (
    <PageShell>
      <SectionHeading index="Catalog / 04" title="Shoes" caption="Sneakers and footwear from the archive. Each pair authenticated." />
      <ProductGrid items={items} />
    </PageShell>
  );
}