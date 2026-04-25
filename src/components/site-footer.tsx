import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink mt-24">
      <div
        aria-hidden
        className="overflow-hidden border-b border-ink bg-ink text-beige py-3"
      >
        <div className="animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.3em]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8">
              &quot;G&apos;SELLS&quot; &nbsp;&mdash;&nbsp; AUTHENTIC RESALE &nbsp;&mdash;&nbsp; WORLDWIDE SHIPPING &nbsp;&mdash;&nbsp; EST. 2025 &nbsp;&mdash;&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-8 py-12">
        <div>
          <p className="tag-label mb-3">&quot;INDEX&quot;</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/shirts" className="hover:underline">Shirts</Link></li>
            <li><Link to="/pants" className="hover:underline">Pants</Link></li>
            <li><Link to="/hats" className="hover:underline">Hats</Link></li>
            <li><Link to="/shoes" className="hover:underline">Shoes</Link></li>
          </ul>
        </div>
        <div>
          <p className="tag-label mb-3">&quot;INFO&quot;</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
            <li><Link to="/history" className="hover:underline">Archive</Link></li>
          </ul>
        </div>
        <div>
          <p className="tag-label mb-3">&quot;CONTACT&quot;</p>
          <p className="text-sm">hello@gsells.studio</p>
          <p className="text-sm">+1 (000) 000&mdash;0000</p>
        </div>
        <div>
          <p className="tag-label mb-3">&quot;ADDRESS&quot;</p>
          <p className="text-sm">No. 23 Industrial Lane<br/>Brooklyn, NY 11201</p>
        </div>
      </div>
      <div className="border-t border-ink px-4 md:px-8 py-4 flex justify-between text-[10px] uppercase tracking-[0.2em]">
        <span>&copy; G&quot;SELLS&quot; MMXXV</span>
        <span>&quot;FOR DISPLAY PURPOSES&quot;</span>
      </div>
    </footer>
  );
}