import type { MetadataRoute } from "next";
import { SEO_PAGES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical pages belong here. Omit lastModified until an actual
  // content modification date is maintained, rather than using build time.
  return Object.values(SEO_PAGES).map(({ path }) => ({
    url: `${SITE_URL}${path}`,
  }));
}
