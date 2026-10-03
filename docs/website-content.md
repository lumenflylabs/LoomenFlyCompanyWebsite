# LoomenDesk website content

The public site describes the standard Telegram and browser booking setup.
Optional WhatsApp Cloud API configurations are not presented as the default.

Source review in the sibling FlowDesk checkout:

- `src/FlowDesk.BookingApp/src/App.tsx` and `components/Steps/`: service selection,
  staff and time selection, customer details and confirmation.
- `docs/CHANNEL_AND_CORE_ARCHITECTURE.md`: Telegram Mini App and browser booking
  share the public booking frontend and core scheduling engine.
- `src/FlowDesk.BusinessUI/Pages/Settings.razor`: branch links, QR codes and
  ready-to-copy WhatsApp greetings and Instagram booking replies.
- `src/FlowDesk.BusinessUI/Components/Dialogs/ChannelSetupGuideDialog.razor`:
  WhatsApp Business greeting/away rules and Instagram native booking FAQs.
- `docs/whatsapp-byok.md`: optional Cloud API configuration has separate account,
  verification and billing requirements.

Copy boundaries:

- Describe appointment-based businesses and service teams generally. Avoid
  positioning the product as exclusive to one industry. Use neutral service and
  follow-up appointment examples and icons for scheduling, service lists, team
  availability, messaging, locations and customer records.

- Telegram offers the interactive experience inside the app.
- WhatsApp and Instagram native replies share a link; booking happens on the
  browser page. Native replies follow the channel's configured rules, rather
  than answering every incoming message.
- The standard link-based journey does not generate Meta API messaging charges.
  LoomenDesk setup/subscription fees remain. Optional API messaging and paid ads
  may have separate charges. Do not claim all WhatsApp messaging is always free.
- The small dashboard and reply illustrations in the original feature cards
  are examples, not live bookings or live messaging integrations.

Reference: https://whatsappbusiness.com/products/business-app/ and
https://whatsappbusiness.com/products/platform-pricing/.

Brand: retain the original cream (#F6F5ED), red (#E51E25), yellow (#FFD100),
black, ABeeZee headings, Plus Jakarta Sans body text, pill navigation and original
section layouts. The navigation displays the supplied symbol through a CSS
viewport, without its wordmark or underline. `scripts/generate-brand-assets.cjs`
uses the same source in SVG viewports to render the favicon, Apple icon and
social preview. Run `node scripts/generate-brand-assets.cjs` after replacing it.
