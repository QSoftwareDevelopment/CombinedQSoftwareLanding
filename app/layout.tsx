import type { Metadata } from "next";
import { EB_Garamond, Schibsted_Grotesk, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

/* Reputable's display — a calm heritage serif (quiet luxury).
   Only weight 500 is ever rendered (.font-display); listing more would
   preload font files the page never uses. */
const garamond = EB_Garamond({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

/* Catch's display — used only for its wordmark on the entrance (weight 800) */
const bricolage = Bricolage_Grotesque({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-catch-display",
  display: "swap",
});

const SITE = "https://qsoftware.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Q Software — Two tools that grow local businesses",
    template: "%s · Q Software",
  },
  description:
    "Q Software builds focused tools for local & hospitality businesses. Meet Catch, the AI receptionist that never misses a call, and Reputable, the growth engine for your reputation. Choose your tool.",
  keywords: [
    "Q Software",
    "Catch AI receptionist",
    "Reputable reputation management",
    "local business software",
    "missed call text back",
    "review management",
  ],
  openGraph: {
    title: "Q Software — Two tools that grow local businesses",
    description:
      "Catch answers every call. Reputable grows your reputation. Two products, one studio. Choose your tool.",
    url: SITE,
    siteName: "Q Software",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q Software — Catch · Reputable",
    description:
      "Two focused tools for local & hospitality businesses. Choose your tool.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${garamond.variable} ${schibsted.variable} ${bricolage.variable} h-full antialiased`}
    >
      <head>
        {/* Arm the reveal system before paint to avoid a flash of visible content */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
