import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputable — Build a reputation that sells",
  description:
    "Reputable is the growth engine for local service & hospitality businesses — reviews, social, trends and competitor intelligence in one place. Reply on-brand in minutes, turn viral trends into campaigns, and know exactly where you stand.",
  openGraph: {
    title: "Reputable — Build a reputation that sells",
    description:
      "Reviews, social, trends and market intelligence working together in one place. Grow your reputation without hiring an agency.",
    siteName: "Reputable",
  },
};

export default function ReputableLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // The velvet world is scoped here so it never reaches the entrance.
  return <div className="theme-reputable grain">{children}</div>;
}
