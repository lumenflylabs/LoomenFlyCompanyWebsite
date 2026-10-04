# Loomenfly Labs search setup

The website targets the company name, LoomenDesk, and appointment booking
software for businesses and service teams. Keep the original brand and avoid
industry-exclusive positioning or unsupported automation and pricing claims.

## Implemented

- Six unique page titles, descriptions, canonical URLs and matching social
  previews in `lib/seo.ts`.
- Organization structured data with the real company details and a crawlable
  180px PNG logo. Home-page WebSite and SoftwareApplication data explain the
  company name and LoomenDesk's actual capabilities. No invented reviews,
  ratings, prices or search-result guarantees.
- One generated robots.txt and sitemap.xml, with canonical pages only.
  No build-time timestamps presented as content modification dates.
- Permanent redirects for old About, terms and data deletion URLs, while
  retaining working links to the relevant information.
- Existing Vercel apex-domain redirect to the preferred www domain was checked.
- Server-rendered product copy identifies appointment booking software and
  preserves the distinction between Telegram booking and browser booking links.

## Google Search Console setup

Ownership has not yet been verified. The company owner should:

1. Open https://search.google.com/search-console and add a Domain property
   for `loomenflylabs.com`.
2. Copy Google's exact TXT record into the domain's DNS provider and verify.
   Do not replace existing DNS records. Domain verification covers both www
   and the apex domain.
3. Submit `https://www.loomenflylabs.com/sitemap.xml` in Sitemaps.
4. Inspect `https://www.loomenflylabs.com/`, `/about` and `/contact`. Request
   indexing after confirming the production deployment is current.
5. Review indexing, search queries, clicks and Core Web Vitals as data becomes
   available. A sitemap submission or indexing request does not guarantee
   indexing or rankings.

For an alternative URL-prefix property (`https://www.loomenflylabs.com/`),
the HTML-tag verification token can be set as `GOOGLE_SITE_VERIFICATION` in
the connected Vercel project's Production environment and then redeployed.
Use only the verification token from Google's `content` attribute. No Google
verification token has been invented or configured.

Future content should answer real customer questions about choosing services,
availability, setup, booking channels and subscription costs. Add pages only
when they contain useful, distinct information; avoid repetitive keyword pages.

## Verification

Run `npm run build` and `npm run lint`. With a production build running on
port 3001, run `npm run check:seo -- http://localhost:3001`. After deployment,
run `npm run check:seo -- https://www.loomenflylabs.com` to check the public
responses, canonical URLs, structured data, sitemap, redirects and missing pages.

## References

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://support.google.com/webmasters/answer/9008080

Search engines choose their own displayed titles and snippets. Structured data
helps describe the site but does not guarantee a rich result.
