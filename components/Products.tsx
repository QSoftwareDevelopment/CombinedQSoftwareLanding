import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";
import { ReviewsGlyph, TrendsGlyph, InsightsGlyph } from "./icons";

const OTHERS = [
  {
    Glyph: ReviewsGlyph,
    name: "Reviews & replies",
    body: "Every review from Google, Yelp, TripAdvisor, Uber Eats & Facebook in one inbox — with on-brand AI replies you send in a tap.",
  },
  {
    Glyph: TrendsGlyph,
    name: "Trends",
    body: "See what’s taking off in your market this week, ranked by momentum — the raw material your next playbook turns into a post.",
  },
  {
    Glyph: InsightsGlyph,
    name: "Competitor insight",
    body: "Know exactly where you stand against local rivals, and the one thing worth fixing next. No spreadsheets.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal as="div">
            <IndexMark>Also included</IndexMark>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]"
          >
            The rest of your reputation, handled.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            The Playbook is the headline. These work quietly alongside it — so
            reviews, trends and rivals all live in the one place you run between
            customers.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {OTHERS.map((p, i) => {
            const Glyph = p.Glyph;
            return (
              <Reveal as="div" key={p.name} delay={0.06 * i}>
                <div className="card card-i h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color-mix(in_oklch,var(--gold)_12%,var(--surface-2))] text-gold">
                    <Glyph className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-5 text-[1.35rem] text-ink">{p.name}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted [text-wrap:pretty]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
