import { Logo } from "./ui";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Reviews", href: "#pillars" },
      { label: "Social Playbook", href: "#pillars" },
      { label: "Trends", href: "#pillars" },
      { label: "Insights", href: "#pillars" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Inside Reputable", href: "#inside" },
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "qsoftware.ca", href: "#top" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#top" },
      { label: "Terms", href: "#top" },
      { label: "Contact", href: "#top" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line-soft py-14">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-5 max-w-[34ch] text-[0.92rem] leading-relaxed text-muted">
              The growth engine for local service & hospitality. Reviews, social,
              trends and market intelligence — working together in one place.
            </p>
          </div>

          {COLUMNS.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="text-[0.74rem] uppercase tracking-[0.16em] text-gold-deep">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.92rem] text-muted transition-colors hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line-soft pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.84rem] text-faint">
            © {new Date().getFullYear()} Reputable — by Q Software. All rights reserved.
          </p>
          <p className="text-[0.84rem] text-faint">qsoftware.ca</p>
        </div>
      </div>
    </footer>
  );
}
