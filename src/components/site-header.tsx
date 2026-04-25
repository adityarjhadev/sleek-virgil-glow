import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";

// =====================================================================
// SITE HEADER
// ---------------------------------------------------------------------
// To add / remove / rename navigation links, edit the NAV array below.
// Each entry needs a `to` (route path) and a `label` (display text).
// To change the brand name, edit the <span> with the brand text.
// To change the tagline, edit the second <span> in the brand link.
// =====================================================================

const NAV = [
  { to: "/", label: "Index" },
  { to: "/shirts", label: "Shirts" },
  { to: "/pants", label: "Pants" },
  { to: "/hats", label: "Hats" },
  { to: "/shoes", label: "Shoes" },
  { to: "/history", label: "Archive" },
  { to: "/shipping", label: "Delivery" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-beige">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* --- BRAND / LOGO --- change brand name + tagline here --- */}
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-lg tracking-tight">GSELLS</span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline">
            c/o resale studio &mdash; est. 2025
          </span>
        </Link>

        {/* --- DESKTOP NAVIGATION (hidden on mobile) --- */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "underline underline-offset-4" }}
              className="text-xs uppercase tracking-[0.18em] hover:opacity-60 transition-opacity"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* --- RIGHT-SIDE ACTIONS: cart button (always visible) + mobile menu --- */}
        <div className="flex items-center gap-2">
          {/* Cart / bag button — opens the slide-out drawer */}
          <button
            type="button"
            aria-label={`Open bag, ${count} items`}
            onClick={() => setCartOpen(true)}
            className="relative text-xs uppercase tracking-[0.18em] border border-ink px-3 py-1.5 hover:bg-ink hover:text-beige transition-colors"
          >
            Bag ({count})
          </button>
          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-xs uppercase tracking-[0.18em] border border-ink px-3 py-1.5"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DROPDOWN --- */}
      {open && (
        <nav className="md:hidden border-t border-ink animate-page-in">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 border-b border-ink/20 text-sm uppercase tracking-[0.18em]"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}