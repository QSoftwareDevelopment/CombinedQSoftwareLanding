import { Reveal } from "./Reveal";
import { IndexMark } from "./ui";

const QA = [
  {
    q: "How is Reputable different from a reviews tool?",
    a: "A reviews tool watches one inbox. Reputable connects reputation, social, trends and competitor intelligence in a single workspace — so a five-star review, a viral format and what your rivals are doing all inform the same next move. You act, you don’t just monitor.",
  },
  {
    q: "Which platforms does it watch?",
    a: "Google, Yelp, TripAdvisor, Uber Eats and Facebook for reviews and ratings, plus Instagram and TikTok for social and trends. New surfaces are added regularly — your dashboard stays one place, not five tabs.",
  },
  {
    q: "Will the AI replies actually sound like us?",
    a: "Yes. Reputable learns your voice from your existing replies and your brand notes, then drafts on-brand responses you can send in a tap or edit first. It never posts without you — you stay in control of every word.",
  },
  {
    q: "How much time does it take to run?",
    a: "Minutes between customers. The point is to hand you a decision, not homework — every section ends with something you can act on today, whether that’s a reply, a campaign, or a competitor you should answer.",
  },
  {
    q: "Can it handle more than one location?",
    a: "It’s built for it. Track each location’s rating, response rate and momentum separately, or roll them up into one view for the brand — with benchmarks against the rivals around each address.",
  },
  {
    q: "What does it cost, and can I cancel?",
    a: "One plan at $32.99/month — every module, every platform, no tiers or add-ons. It starts with a 14-day free trial, nothing is charged today, and you can cancel anytime in a click.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal as="div">
            <IndexMark>Questions</IndexMark>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] text-ink [text-wrap:balance]"
          >
            The honest answers.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-muted">
            No jargon, no asterisks. If something here isn’t clear, that’s on us —
            ask and we’ll make it plain.
          </Reveal>
        </div>

        <Reveal as="div" delay={0.08} className="rep-faq -mt-2">
          {QA.map((item, i) => (
            <details key={i} className="group border-b border-line-soft" name="reputable-faq">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left">
                <span className="text-[1.15rem] font-medium leading-snug text-ink transition-colors group-hover:text-gold-soft sm:text-[1.28rem]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="rep-faq__icon mt-1 grid h-7 w-7 flex-none place-items-center rounded-full border border-line text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="rep-faq__a max-w-[60ch] pb-7 text-[1.02rem] leading-relaxed text-muted [text-wrap:pretty]">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
