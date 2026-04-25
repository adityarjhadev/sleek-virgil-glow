import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import hero from "@/assets/hero.jpg";
import shirts from "@/assets/shirts.jpg";
import pants from "@/assets/pants.jpg";
import hats from "@/assets/hats.jpg";
import shoes from "@/assets/shoes.jpg";

// =====================================================================
// HOMEPAGE  (route: "/")
// ---------------------------------------------------------------------
// SECTIONS in order:
//   1. SEO meta — change page <title>, description, og:image below.
//   2. CATS array — controls the 4 category tiles. Edit labels / images.
//   3. Hero section — headline copy, hero image, CTA buttons.
//   4. Marquee — scrolling text band under the hero.
//   5. Catalog grid — uses the CATS array.
//   6. Manifesto / quote block — black band at the bottom.
// =====================================================================

export const Route = createFileRoute("/")({
  // --- SEO metadata: edit page title, description, social preview here ---
  head: () => ({
    meta: [
      { title: "GSELLS — Curated Resale for the New Wave" },
      {
        name: "description",
        content:
          "GSELLS is a curated fashion reseller for shirts, pants, hats and shoes. Authentic, archival, shipped worldwide.",
      },
      { property: "og:title", content: "GSELLS — Curated Resale" },
      { property: "og:description", content: "Authentic resale. Worldwide. Est. 2025." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

// --- CATEGORY TILES: add / remove / rename categories here ---
const CATS = [
  { to: "/shirts" as const, label: "Shirts", n: "01", img: shirts },
  { to: "/pants" as const, label: "Pants", n: "02", img: pants },
  { to: "/hats" as const, label: "Hats", n: "03", img: hats },
  { to: "/shoes" as const, label: "Shoes", n: "04", img: shoes },
];

function Index() {
  return (
    <PageShell>
      {/* =================================================================
          HERO SECTION
          - Left column: tag, headline, sub-copy, CTA buttons.
          - Right column: hero image (swap @/assets/hero.jpg to change).
          ================================================================= */}
      <section className="border-b border-ink">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-ink p-6 md:p-10 flex flex-col justify-between min-h-[70vh]">
            <div className="flex items-center justify-between">
              {/* Top-left tag label */}
              <span className="tag-label">COLLECTION 01</span>
              {/* Top-right live ticker */}
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-ticker-fade">
                &mdash; LIVE NOW
              </span>
            </div>
            <div className="animate-reveal">
              {/* Small kicker line above headline */}
              <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-muted-foreground">
                c/o Gsells &mdash; resale studio
              </p>
              {/* MAIN HEADLINE — change the words "Wear the archive" here */}
              <h1 className="text-[14vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter">
                Wear<br />the
                <span className="italic font-normal"> archive</span>.
              </h1>
              {/* Sub-headline body copy */}
              <p className="mt-6 max-w-md text-sm uppercase tracking-[0.12em] text-muted-foreground">
                Curated, authenticated, second-hand. Built for a generation that
                wears its history out loud.
              </p>
              {/* CTA BUTTONS — primary (filled) + secondary (outline) */}
              <div className="mt-8 flex gap-3">
                <Link
                  to="/shirts"
                  className="inline-block bg-ink text-beige px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-ink/85 transition-colors"
                >
                  Shop catalog &nbsp;&rarr;
                </Link>
                <Link
                  to="/history"
                  className="inline-block border border-ink px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-beige transition-colors"
                >
                  Read the archive
                </Link>
              </div>
            </div>
          </div>
          {/* Hero image column */}
          <div className="md:col-span-5 relative bg-beige-deep min-h-[60vh] md:min-h-full">
            <img
              src={hero}
              alt="Editorial portrait wearing oversized streetwear"
              width={1536}
              height={1920}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Image caption strip — change LOT / SEASON labels here */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-[0.25em] text-beige mix-blend-difference">
              <span>LOT 001</span>
              <span>SS / 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          MARQUEE BAND — change the scrolling phrase below
          ================================================================= */}
      <div className="overflow-hidden border-b border-ink py-3">
        <div className="animate-marquee whitespace-nowrap text-2xl md:text-4xl uppercase tracking-tight">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-6">
              Authentic &mdash; Archival &mdash; Always &mdash; Available &mdash;
            </span>
          ))}
        </div>
      </div>

      {/* =================================================================
          CATALOG TILES — driven by the CATS array near the top of the file
          ================================================================= */}
      <section className="px-4 md:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-5xl uppercase">Catalog</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            04 / categories
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATS.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group border border-ink block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-beige-deep">
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-2 left-2 tag-label">{c.n}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-ink">
                <span className="text-sm uppercase tracking-[0.12em]">{c.label}</span>
                <span className="text-xs">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =================================================================
          MANIFESTO / QUOTE — black band. Edit the headline + signature here
          ================================================================= */}
      <section className="border-y border-ink bg-ink text-beige px-4 md:px-8 py-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-beige/60">Manifesto</p>
        <blockquote className="mt-4 text-3xl md:text-6xl uppercase leading-[1.05] max-w-5xl">
          <span>Streetwear is the new luxury</span>. We resell the
          pieces that built the culture &mdash; with proof, with respect, with care.
        </blockquote>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-beige/60">
          &mdash; GSELLS / Editorial No. 01
        </p>
      </section>
    </PageShell>
  );
}
