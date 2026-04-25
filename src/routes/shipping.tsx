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
          { title: "Delivery & Communications — GSELLS" },
          { name: "description", content: "Local Austin TX delivery only — within 25 miles of ATX. Returns, authentication, and contact." },
          { property: "og:title", content: "Delivery & Communications — GSELLS" },
          { property: "og:description", content: "Local Austin delivery only. Get in touch." },
    ],
  }),
  component: ShippingPage,
});

// --- LOCAL DELIVERY ZONES: edit Austin neighborhoods, hand-off times, fees ---
// We only deliver within ~25 miles of central Austin, TX. No shipping.
const ROWS = [
  { region: "Central Austin (78701 — 78705)", time: "Same-day hand-off", price: "Free" },
  { region: "East / South ATX (~10 mi)", time: "Same-day or next-day", price: "Free over $75" },
  { region: "Greater Austin (10 — 25 mi)", time: "Within 48 hours", price: "$8 flat" },
  { region: "Outside 25 mi of ATX", time: "Not available", price: "—" },
];

// --- FAQ ENTRIES: add / remove / reword question + answer pairs here ---
const FAQ = [
  { q: "Are items authentic?", a: "Every piece is hand-inspected by our resale studio. We provide a certificate of authenticity with each delivery." },
  { q: "What is the return policy?", a: "14 days from hand-off for unworn items in original condition. We'll meet you locally to pick it back up if it was misrepresented." },
  { q: "Do you ship?", a: "No — we are local-only right now. Delivery is hand-off within 25 miles of central Austin, TX." },
  { q: "How do I pay?", a: "Checkout sends you straight to Venmo with your total and an itemised note. Pay before we coordinate the hand-off." },
  { q: "How do you price items?", a: "We benchmark against current resale market data and condition grade each piece on a 10-point scale." },
];

function ShippingPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <SectionHeading index="Info / 01" title="Delivery" caption="Local-only. Within 25 miles of Austin, TX. Hand-off in person." />

      {/* --- SHIPPING RATES TABLE — driven by the ROWS array above --- */}
      <section className="px-4 md:px-8 py-12 border-b border-ink">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground max-w-2xl">
          We deliver by hand within a 25-mile radius of central Austin. No shipping, no carriers — just a meet-up at a coffee shop, your doorstep, or a public spot of your choice.
        </p>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <th className="text-left py-3 border-b border-ink">Zone</th>
              <th className="text-left py-3 border-b border-ink">Hand-off</th>
              <th className="text-right py-3 border-b border-ink">Fee</th>
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