import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputable — Build a reputation that sells",
  description:
    "Reputable is the growth engine for local service & hospitality businesses — reviews, social, trends and competitor intelligence in one place. Reply on-brand in minutes, turn viral trends into campaigns, and know exactly where you stand.",
  alternates: {
    canonical: "/reputable",
  },
  openGraph: {
    title: "Reputable — Build a reputation that sells",
    description:
      "Reviews, social, trends and market intelligence working together in one place. Grow your reputation without hiring an agency.",
    url: "/reputable",
    siteName: "Reputable",
  },
};

/* Structured data — mirrors the Catch page so both products are equally
   legible to search engines (product, price, trial, FAQ). */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Reputable — All-in-one reputation management",
      description:
        "Reviews, social, trends and competitor intelligence for local service & hospitality businesses — in one workspace, led by the Social Playbook.",
      brand: { "@type": "Brand", name: "Reputable" },
      offers: {
        "@type": "Offer",
        price: "32.99",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: "https://qsoftware.ca/reputable",
      },
    },
    {
      "@type": "Organization",
      name: "Q Software",
      url: "https://qsoftware.ca",
      email: "info@qsoftware.ca",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is Reputable different from a reviews tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A reviews tool watches one inbox. Reputable connects reputation, social, trends and competitor intelligence in a single workspace — so a five-star review, a viral format and what your rivals are doing all inform the same next move.",
          },
        },
        {
          "@type": "Question",
          name: "Which platforms does it watch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google, Yelp, TripAdvisor, Uber Eats and Facebook for reviews and ratings, plus Instagram and TikTok for social and trends.",
          },
        },
        {
          "@type": "Question",
          name: "Will the AI replies actually sound like us?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reputable learns your voice from your existing replies and your brand notes, then drafts on-brand responses you can send in a tap or edit first. It never posts without you.",
          },
        },
        {
          "@type": "Question",
          name: "What does it cost, and can I cancel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One plan at $32.99/month — every module, every platform, no tiers or add-ons. It starts with a 14-day free trial, nothing is charged today, and you can cancel anytime.",
          },
        },
      ],
    },
  ],
};

export default function ReputableLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // The stone world is scoped here so it never reaches the entrance.
  return (
    <div className="theme-reputable grain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {children}
    </div>
  );
}
