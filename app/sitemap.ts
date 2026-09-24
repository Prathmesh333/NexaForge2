import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: process.env.NEXT_PUBLIC_SITE_URL || "https://prathmesh333.github.io/NexaForge2/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 }]; }
