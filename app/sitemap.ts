import type { MetadataRoute } from "next";

const SITE = "https://qsoftware.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/catch`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/reputable`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];
}
