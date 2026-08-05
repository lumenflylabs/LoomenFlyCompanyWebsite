import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "facebookexternalhit",
          "Facebot",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "Googlebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.loomenflylabs.com/sitemap.xml",
  };
}
