import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-beige text-ink">
      <SiteHeader />
      <main className="flex-1 animate-page-in">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="border-b border-ink px-4 md:px-8 py-6 flex items-end justify-between gap-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{index}</p>
        <h1 className="text-4xl md:text-6xl uppercase tracking-tight mt-1">
          &quot;{title}&quot;
        </h1>
      </div>
      {caption && (
        <p className="hidden md:block max-w-xs text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  );
}

export function ProductGrid({
  items,
}: {
  items: { name: string; price: string; tag: string; img: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-ink">
      {items.map((it, i) => (
        <article
          key={i}
          className="group border-r border-b border-ink last:border-r-0 odd:border-r p-4 md:p-6 flex flex-col"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-beige-deep">
            <img
              src={it.img}
              alt={it.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 tag-label">&quot;{it.tag}&quot;</span>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <h3 className="text-sm uppercase tracking-[0.12em]">{it.name}</h3>
            <span className="text-sm">{it.price}</span>
          </div>
          <button className="mt-3 self-start text-[11px] uppercase tracking-[0.2em] border-b border-ink pb-0.5 hover:opacity-60 transition-opacity">
            Add to bag &nbsp;&rarr;
          </button>
        </article>
      ))}
    </div>
  );
}