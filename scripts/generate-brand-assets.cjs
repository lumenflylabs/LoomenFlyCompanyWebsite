/* eslint-disable @typescript-eslint/no-require-imports -- standalone CommonJS asset generator */
// Render code-authored social artwork. The supplied raster is displayed through
// an SVG viewport so its symbol is preserved without the wordmark or underline.
const fs = require("node:fs");
const path = require("node:path");
const { Resvg } = require("@resvg/resvg-js");
const root = path.resolve(__dirname, "..");
const source = fs
  .readFileSync(path.join(root, "public/images/brand-reference.png"))
  .toString("base64");
const symbol = `<image width="1254" height="1254" href="data:image/png;base64,${source}"/>`;
const iconViewport = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="388 248 548 526">${symbol}</svg>`;
const icon = new Resvg(iconViewport, { fitTo: { mode: "width", value: 64 } })
  .render()
  .asPng()
  .toString("base64");
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="white" stroke="#E51E25" stroke-width="2"/><image x="15" y="15" width="34" height="34" href="data:image/png;base64,${icon}"/></svg>`;
fs.writeFileSync(path.join(root, "public/favicon.svg"), favicon);
// Apple touch icons are PNGs; use the same SVG viewport and leave a white margin.
const apple = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="180" height="180" fill="white"/><circle cx="90" cy="90" r="83" fill="white" stroke="#E51E25" stroke-width="3"/><svg x="43" y="43" width="94" height="94" viewBox="388 248 548 526">${symbol}</svg></svg>`;
fs.writeFileSync(
  path.join(root, "public/images/apple-touch-icon.png"),
  new Resvg(apple).render().asPng(),
);
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F6F5ED"/>
  <circle cx="92" cy="80" r="30" fill="white" stroke="#E51E25" stroke-width="1.5"/>
  <svg x="75" y="63" width="34" height="34" viewBox="394 254 536 514">${symbol}</svg>
  <text x="64" y="180" font-family="Segoe UI,Arial,sans-serif" font-size="16" letter-spacing="2" font-weight="600" fill="#E51E25">LOOMENDESK BY LOOMENFLY LABS</text>
  <text x="60" y="280" font-family="Segoe UI,Arial,sans-serif" font-size="75" font-weight="600" letter-spacing="-3" fill="#000000">Turn Your Messages</text>
  <text x="60" y="368" font-family="Segoe UI,Arial,sans-serif" font-size="75" font-weight="600" letter-spacing="-3" fill="#E51E25">Into Bookings.</text>
  <text x="64" y="435" font-family="Segoe UI,Arial,sans-serif" font-size="23" fill="#666666">Telegram booking. WhatsApp &amp; Instagram links.</text>
  <path d="M64 399 Q280 386 610 399" fill="none" stroke="#FFD100" stroke-width="7" stroke-linecap="round"/>
  <text x="64" y="552" font-family="Segoe UI,Arial,sans-serif" font-size="19" fill="#666666">One booking experience. One place to manage your day.</text>
  <text x="1136" y="552" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="18" fill="#000000">loomenflylabs.com</text>
</svg>`;
fs.writeFileSync(path.join(root, "public/og-image.svg"), social);
fs.writeFileSync(
  path.join(root, "public/images/og-booking.png"),
  new Resvg(social, { font: { loadSystemFonts: true } }).render().asPng(),
);
