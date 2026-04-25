import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/page-shell";
import { useState } from "react";

// =====================================================================
// SHIPPING & CONTACT PAGE  (route: "/shipping")
// ---------------------------------------------------------------------
// EDIT POINTS:
//   - SEO meta in the head() block below.
//   - ROWS array → shipping regions, transit times, and prices.
//   - FAQ array  → frequently-asked-questions (q + a pairs).
//   - Contact form fields are defined inline as an array inside the form.
//   - Note: form is currently UI-only (no backend). The submit just shows
//     a confirmation. Wire up an endpoint to actually send messages.
// =====================================================================

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Communications — GSELLS" },
      { name: "description", content: "Shipping, returns, authentication and customer service for G'Sells resale." },
      { property: "og:title", content: "Shipping & Communications — GSELLS" },
      { property: "og:description", content: "How we ship, return, authenticate. Get in touch." },
    ],
  }),
  component: ShippingPage,
});

// --- SHIPPING RATES TABLE: add / edit regions, transit times, prices ---
const ROWS = [
  { region: "United States", time: "2 — 4 business days", price: "$12 / Free over $250" },
  { region: "Canada / Mexico", time: "4 — 7 business days", price: "$24" },
  { region: "Europe", time: "5 — 8 business days", price: "$35" },
  { region: "Asia / Pacific", time: "6 — 10 business days", price: "$45" },
  { region: "Rest of World", time: "8 — 14 business days", price: "$55" },
];

// --- FAQ ENTRIES: add / remove / reword question + answer pairs here ---
const FAQ = [
  { q: "Are items authentic?", a: "Every piece is hand-inspected by our resale studio. We provide a certificate of authenticity with each shipment." },
  { q: "What is the return policy?", a: "14 days from delivery for unworn items in original condition. Buyer covers return shipping unless the item was misrepresented." },
  { q: "Do you ship worldwide?", a: "Yes. We ship to over 90 countries. Duties and import taxes are the buyer's responsibility." },
  { q: "How do you price items?", a: "We benchmark against current resale market data and condition grade each piece on a 10-point scale." },
];

function ShippingPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <SectionHeading index="Info / 01" title="Shipping" caption="Worldwide. Tracked. Carbon-offset packaging." />

      {/* --- SHIPPING RATES TABLE — driven by the ROWS array above --- */}
      <section className="px-4 md:px-8 py-12 border-b border-ink">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <th className="text-left py-3 border-b border-ink">Region</th>
              <th className="text-left py-3 border-b border-ink">Transit</th>
              <th className="text-right py-3 border-b border-ink">Rate</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.region} className="border-b border-ink/20">
                <td className="py-4 uppercase tracking-[0.1em]">{r.region}</td>
                <td className="py-4 text-muted-foreground">{r.time}</td>
                <td className="py-4 text-right">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* --- FAQ SECTION — driven by the FAQ array above. Change the
              left-side intro headline + sub-copy directly below. --- */}
      <section className="grid md:grid-cols-2 border-b border-ink">
        <div className="border-b md:border-b-0 md:border-r border-ink p-6 md:p-10">
          <p className="tag-label mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl uppercase">Questions, answered.</h2>
          <p className="mt-4 text-sm text-muted-foreground uppercase tracking-[0.12em] max-w-sm">
            Still unsure? Our resale studio is on standby Monday through Saturday.
          </p>
        </div>
        <div className="divide-y divide-ink/30">
          {FAQ.map((f, i) => (
            <details key={i} className="group p-6 md:p-8">
              <summary className="cursor-pointer flex items-center justify-between text-sm uppercase tracking-[0.12em] list-none">
                <span>{f.q}</span>
                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* --- CONTACT FORM — UI only. Hook up onSubmit to send messages. --- */}
      <section className="px-4 md:px-8 py-16">
        <SectionHeading index="Info / 02" title="Contact" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl"
        >
          {/* Form fields — add / remove / reorder by editing this array */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Order #", name: "order", type: "text" },
            { label: "Subject", name: "subject", type: "text" },
          ].map((f) => (
            <label key={f.name} className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {f.label}
              </span>
              <input
                required
                type={f.type}
                name={f.name}
                className="bg-transparent border-b border-ink py-2 outline-none focus:border-b-2 transition-all"
              />
            </label>
          ))}
          <label className="flex flex-col md:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Message
            </span>
            <textarea
              required
              rows={5}
              name="message"
              className="bg-transparent border-b border-ink py-2 outline-none focus:border-b-2 transition-all resize-none"
            />
          </label>
          <div className="md:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="bg-ink text-beige px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-ink/85 transition-colors"
            >
              Send transmission &nbsp;&rarr;
            </button>
            {sent && (
              <span className="text-xs uppercase tracking-[0.2em] animate-page-in">
                received &mdash; we&apos;ll reply within 24h
              </span>
            )}
          </div>
        </form>
      </section>
    </PageShell>
  );
}