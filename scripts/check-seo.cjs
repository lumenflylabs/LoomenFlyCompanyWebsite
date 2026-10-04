// Check the actual HTTP responses from a running build or production site.
// eslint-disable-next-line @typescript-eslint/no-require-imports -- standalone Node HTTP checker
const assert = require("node:assert/strict");

const baseUrl = process.argv[2] || "http://localhost:3000";
const canonicalOrigin = "https://www.loomenflylabs.com";
const paths = ["/", "/about", "/contact", "/privacy-policy", "/terms-of-service", "/data-deletion"];
const aliases = {
  "/about-us": "/about",
  "/terms": "/terms-of-service",
  "/terms-conditions": "/terms-of-service",
  "/data-deletion-instructions": "/data-deletion",
  "/user-data-deletion": "/data-deletion",
};

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]));
}

async function check() {
  const titles = new Set();
  const descriptions = new Set();
  for (const path of paths) {
    const response = await fetch(`${baseUrl}${path}`);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    assert.ok(title?.includes("Loomenfly Labs"), `Company title: ${path}`);
    assert.ok(!titles.has(title), `Unique title: ${path}`);
    titles.add(title);
    const metas = [...html.matchAll(/<meta\s[^>]*>/g)].map(([tag]) => attributes(tag));
    const description = metas.find((meta) => meta.name === "description")?.content;
    assert.ok(description && !descriptions.has(description), `Unique description: ${path}`);
    descriptions.add(description);
    const canonicals = [...html.matchAll(/<link\s[^>]*>/g)].map(([tag]) => attributes(tag)).filter((link) => link.rel === "canonical");
    assert.equal(canonicals.length, 1, `One canonical: ${path}`);
    assert.equal(new URL(canonicals[0].href).href, `${canonicalOrigin}${path}`, `Canonical URL: ${path}`);
    assert.equal(new URL(metas.find((meta) => meta.property === "og:url")?.content).href, new URL(canonicals[0].href).href, path);
    assert.ok(metas.find((meta) => meta.name === "robots")?.content.includes("index, follow"), path);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One H1: ${path}`);
    const data = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
    assert.ok(data.some((item) => item["@type"] === "Organization"), `Organization: ${path}`);
    if (path === "/") {
      assert.ok(html.includes("Appointment booking software for your business"), "Product copy is server rendered");
      const graph = data.flatMap((item) => item["@graph"] || []);
      assert.ok(graph.some((item) => item["@type"] === "WebSite"), "Website identity");
      assert.ok(graph.some((item) => item["@type"] === "SoftwareApplication" && item.name === "LoomenDesk"), "Product identity");
    }
  }
  const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls.sort(), paths.map((path) => `${canonicalOrigin}${path}`).sort(), "Canonical pages only in sitemap");
  const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /User-Agent: \*\s+Allow: \//i);
  assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
  for (const [source, destination] of Object.entries(aliases)) {
    const response = await fetch(`${baseUrl}${source}`, { redirect: "manual" });
    assert.equal(response.status, 308, `Permanent redirect: ${source}`);
    assert.equal(new URL(response.headers.get("location"), baseUrl).pathname, destination, source);
  }
  assert.equal((await fetch(`${baseUrl}/images/apple-touch-icon.png`)).status, 200, "Crawlable company logo");
  assert.equal((await fetch(`${baseUrl}/images/og-booking.png`)).status, 200, "Social image");
  const missing = await fetch(`${baseUrl}/seo-check-missing-page`);
  assert.equal(missing.status, 404, "Missing pages return 404");
  assert.match(await missing.text(), /name="robots" content="noindex"/, "Missing pages are not indexed");
  console.log(`SEO checks passed: ${paths.length} pages, sitemap, robots, structured data, ${Object.keys(aliases).length} redirects, images and 404 (${baseUrl}).`);
}

check().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
