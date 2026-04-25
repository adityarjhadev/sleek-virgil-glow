import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Index" },
  { to: "/shirts", label: "Shirts" },
  { to: "/pants", label: "Pants" },
  { to: "/hats", label: "Hats" },
  { to: "/shoes", label: "Shoes" },
  { to: "/history", label: "Archive" },
  { to: "/shipping", label: "Shipping" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-beige">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-lg tracking-tight">G&quot;SELLS&quot;</span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline">
            c/o resale studio &mdash; est. 2025
          </span>
        </Link>

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

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-xs uppercase tracking-[0.18em] border border-ink px-3 py-1.5"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

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