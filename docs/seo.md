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

The company has accessed Search Console for the www URL-prefix property after
publishing Google's HTML verification file. Keep
`public/google38e44d131de05a2c.html` deployed. The submitted sitemap subsequently
showed a fetch error; live checks confirmed HTTP 200 and valid XML, but Google's
successful read has not yet been confirmed. Inspect the exact submitted URL
and use Google's live URL test for further diagnosis.

For broader Domain-property coverage, the company owner can:

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

## Company identity in search

The owner clarified that the LLP's registered office is a cofounder's home and
that the team visits customers for setup, demos and support. A service-area
Business Profile is therefore the appropriate setup, subject to Google's
verification. Use the real operating address for verification and hide it from
the public profile when customers are not served there. Select only locations
the team actually visits. Keep Organization and WebSite structured data; do not
represent the registered address as a customer-facing storefront.

Business Profile details prepared from the company's public website:
- Public name: Loomenfly Labs.
- Website: https://www.loomenflylabs.com/.
- Primary phone: +91 7736119930.
- Category to look for in Google's dropdown: Software company.
- Description: Loomenfly Labs develops LoomenDesk appointment booking software
  for businesses and service teams. The platform combines interactive Telegram
  booking, browser booking links shared through WhatsApp Business and Instagram
  replies, and a dashboard for services, staff availability, branches and
  customer records. Our team provides setup, demonstrations and support,
  including visits to customer locations.

Service areas, hours, profile creation and Google verification remain to be
completed in the owner's Google account. Once a verified profile exists, add
its genuine public URL to the website's Organization sameAs data.

The structured data uses the public name `Loomenfly Labs`, legal name
`LOOMENFLY LABS LLP`, and alternate name `Loomenflylabs` to connect the compact
brand search with the real company. Use the same public name, website, logo and
company description on genuine social and company profiles.

Google may still show a different company's panel when it corrects the query
to a similar name. The website cannot force or purchase an organic company
knowledge panel. Request indexing of the updated homepage in Search Console;
review the result after Google recrawls the site. The observed search screenshot
still contained the previous favicon, title and WhatsApp-only description.

References:
- https://support.google.com/business/answer/13763036
- https://developers.google.com/search/docs/appearance/structured-data/organization

## References

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://support.google.com/webmasters/answer/9008080

Search engines choose their own displayed titles and snippets. Structured data
helps describe the site but does not guarantee a rich result.
