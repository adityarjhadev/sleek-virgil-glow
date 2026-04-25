import { useCart, VENMO_USERNAME } from "@/lib/cart";

// =====================================================================
// CART DRAWER — slide-out panel from the right edge
// ---------------------------------------------------------------------
// - Lists every item the user added with image, name, qty controls, price.
// - "Checkout via Venmo" opens Venmo with the total amount + an itemised
//   note pre-filled. Update VENMO_USERNAME in src/lib/cart.tsx.
// - Delivery copy: local Austin TX area only (within ~25 miles of ATX).
// =====================================================================

export function CartDrawer() {
  const { items, total, count, open, setOpen, setQty, remove, clear } = useCart();

  const handleVenmoCheckout = () => {
    if (items.length === 0) return;
    // Build an itemised note like: "GSELLS order: 2x Heavyweight Tee, 1x Bucket Hat"
    const note = `GSELLS order: ${items.map((i) => `${i.qty}x ${i.name}`).join(", ")}`;
    const amount = total.toFixed(2);
    // Venmo deep link — works on mobile app; falls back to venmo.com on desktop.
    // To change recipient, edit VENMO_USERNAME in src/lib/cart.tsx.
    const url = `https://venmo.com/${encodeURIComponent(VENMO_USERNAME)}?txn=pay&amount=${amount}&note=${encodeURIComponent(note)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-ink/40 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden
      />
      {/* Drawer panel */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-beige text-ink border-l border-ink flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink px-5 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bag</p>
            <h2 className="text-2xl uppercase tracking-tight">Your items ({count})</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="text-xs uppercase tracking-[0.18em] border border-ink px-3 py-1.5 hover:bg-ink hover:text-beige transition-colors"
          >
            Close
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Your bag is empty.
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Add items from the catalog to get started.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-ink/20">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4 p-5">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-beige-deep border border-ink">
                    <img src={it.img} alt={it.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm uppercase tracking-[0.12em]">{it.name}</h3>
                      <span className="text-sm">${(it.price * it.qty).toFixed(2)}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                      ${it.price.toFixed(2)} ea
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      {/* Qty controls */}
                      <div className="flex items-center border border-ink">
                        <button
                          onClick={() => setQty(it.id, it.qty - 1)}
                          aria-label="Decrease quantity"
                          className="px-3 py-1 hover:bg-ink hover:text-beige transition-colors"
                        >
                          −
                        </button>
                        <span className="px-3 text-sm tabular-nums">{it.qty}</span>
                        <button
                          onClick={() => setQty(it.id, it.qty + 1)}
                          aria-label="Increase quantity"
                          className="px-3 py-1 hover:bg-ink hover:text-beige transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(it.id)}
                        className="text-[11px] uppercase tracking-[0.2em] underline-offset-4 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / checkout */}
        <div className="border-t border-ink p-5 space-y-4">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.12em]">
            <span>Subtotal</span>
            <span className="text-lg">${total.toFixed(2)}</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Local delivery only — within 25 miles of Austin, TX. Free hand-off in central ATX.
          </p>
          <button
            onClick={handleVenmoCheckout}
            disabled={items.length === 0}
            className="w-full bg-ink text-beige px-5 py-3 text-xs uppercase tracking-[0.25em] hover:bg-ink/85 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Checkout via Venmo &nbsp;&rarr;
          </button>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="w-full text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-ink"
            >
              Clear bag
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
