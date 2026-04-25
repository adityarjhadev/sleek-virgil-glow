import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeading } from "@/components/page-shell";
import history from "@/assets/history.jpg";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Archive — Virgil, Louis Vuitton & Resale Culture | G\"SELLS\"" },
      {
        name: "description",
        content:
          "An editorial on Virgil Abloh, the Off-White era at Louis Vuitton, and how reselling culture redefined modern luxury.",
      },
      { property: "og:title", content: "Archive — Virgil, Louis Vuitton & Resale" },
      { property: "og:description", content: "How streetwear became the new luxury, and why resale carries the torch." },
      { property: "og:image", content: history },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <PageShell>
      <SectionHeading index="Archive / 01" title="The Quote" caption="An editorial on Virgil Abloh, Louis Vuitton, and the rise of resale." />

      <article className="px-4 md:px-8 py-16 max-w-5xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Editorial No. 01</p>
        <h2 className="mt-4 text-4xl md:text-7xl uppercase leading-[0.9]">
          From the <span className="italic font-normal">&quot;street&quot;</span> to the maison.
        </h2>

        <div className="my-12 border-t border-b border-ink py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.3em]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-8">
                &mdash; Virgil Abloh &nbsp; 1980 &mdash; 2021 &nbsp; / &nbsp; Off&mdash;White c/o &nbsp; / &nbsp; Louis Vuitton Men&apos;s &nbsp;
              </span>
            ))}
          </div>
        </div>

        <figure className="my-12">
          <img
            src={history}
            alt="Editorial archival portrait"
            loading="lazy"
            className="w-full h-[60vh] object-cover bg-beige-deep"
          />
          <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground flex justify-between">
            <span>&quot;ARCHIVAL&quot;</span>
            <span>FIG. 01</span>
          </figcaption>
        </figure>

        <div className="grid md:grid-cols-12 gap-8 text-base leading-relaxed">
          <p className="md:col-span-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            &quot;Chapter 01&quot;<br />The Quotation Mark
          </p>
          <div className="md:col-span-9 space-y-6">
            <p>
              When Virgil Abloh wrapped the word <span className="qm">SHOELACES</span>{" "}
              around a pair of sneakers, he did more than design product &mdash; he
              re-coded what luxury could mean. Off-White wasn&apos;t a brand so much
              as a thesis: that streetwear, the t-shirt, the cargo pant, the cap,
              were every bit as worthy of the runway as a tailored suit.
            </p>
            <p>
              Born in Rockford, Illinois in 1980, Abloh trained as an architect
              and DJ before founding Pyrex Vision and then Off-White c/o Virgil
              Abloh&trade; in Milan, 2013. He treated clothing the way an editor
              treats text &mdash; with quotation marks, footnotes, and citations.
            </p>
          </div>
        </div>

        <blockquote className="my-16 border-y border-ink py-12">
          <p className="text-3xl md:text-5xl uppercase leading-[1.05]">
            <span className="qm">Everything I do is for the seventeen-year-old version of myself.</span>
          </p>
          <footer className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            &mdash; Virgil Abloh
          </footer>
        </blockquote>

        <div className="grid md:grid-cols-12 gap-8 text-base leading-relaxed">
          <p className="md:col-span-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            &quot;Chapter 02&quot;<br />Louis Vuitton Men&apos;s
          </p>
          <div className="md:col-span-9 space-y-6">
            <p>
              In March 2018, Louis Vuitton named Abloh artistic director of its
              men&apos;s collections &mdash; the first Black designer to lead a
              French heritage maison of that scale. His SS19 debut on the Palais
              Royal&apos;s rainbow runway was not a show, it was a statement: the
              monogram had a new audience, and that audience looked like the world.
            </p>
            <p>
              Hoodies cut like couture. Harnesses worn like jewellery. Trunks
              re-imagined as duffel bags. Every season, he widened the door of
              what could enter the maison &mdash; and what could leave its showroom
              and become legend on the secondary market.
            </p>
          </div>
        </div>

        <div className="my-20 grid grid-cols-2 md:grid-cols-4 border border-ink">
          {[
            { k: "1980", v: "Born in Illinois" },
            { k: "2013", v: "Off-White founded" },
            { k: "2018", v: "Joins Louis Vuitton" },
            { k: "2021", v: "Legacy continues" },
          ].map((s) => (
            <div key={s.k} className="border-r last:border-r-0 border-ink p-6">
              <p className="text-3xl md:text-5xl">{s.k}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-8 text-base leading-relaxed">
          <p className="md:col-span-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            &quot;Chapter 03&quot;<br />Resale Culture
          </p>
          <div className="md:col-span-9 space-y-6">
            <p>
              Reselling is not new &mdash; but the Abloh era rewrote its meaning.
              Drops were finite. Hype was global. A teenager in S&atilde;o Paulo
              and a collector in Tokyo refreshed the same page at the same moment.
              When the page sold out, the secondary market became the runway.
            </p>
            <p>
              Resale is preservation. It keeps clothes in circulation, off the
              landfill, and on the next body that will love them. It democratises
              archival fashion: yesterday&apos;s sold-out drop becomes tomorrow&apos;s
              first piece in a young collector&apos;s wardrobe.
            </p>
            <p>
              That is why G&quot;SELLS&quot; exists. Not to flip, but to forward.
              We treat each garment as a quotation &mdash; with care, citation,
              and respect for the hands that made it and the kid who will wear it next.
            </p>
          </div>
        </div>

        <p className="mt-20 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          &mdash; END OF EDITORIAL &mdash;
        </p>
      </article>
    </PageShell>
  );
}