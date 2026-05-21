# Lumenfly Labs — Next.js Landing Page Architecture Plan

## Overview

Complete rebuild of the legacy static HTML landing page into a modern Next.js 14 (App Router) + Tailwind CSS application with a premium dark theme, Neon Gold/Yellow accents, and full Meta WhatsApp API compliance.

---

## 1. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Fonts | `next/font` — Sora (headings) + Plus Jakarta Sans (body) |
| Icons | Inline SVG / Unicode emoji (no icon library dependency) |
| Deployment | Static export-ready (output: export) |

---

## 2. Project Structure

```
lumenfly-next/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, global styles
│   ├── page.tsx                # Home page — composes all sections
│   ├── privacy/
│   │   └── page.tsx            # Privacy Policy route
│   └── globals.css             # Tailwind directives + custom dark-theme utilities
├── components/
│   ├── Navbar.tsx              # Sticky nav, glassmorphism, mobile hamburger
│   ├── Hero.tsx                # Hero section — headline, CTA, phone mockup, floating chips
│   ├── ProblemSolution.tsx     # "Without vs With Lumenfly" comparison grid
│   ├── LeadCatcher.tsx         # "The Lead Catcher" base plan card
│   ├── PremiumAddons.tsx       # 4 modular upgrade cards
│   ├── TrustFlow.tsx           # WhatsApp → Google Calendar sync visualization
│   ├── Industries.tsx          # Industry grid (Salons, Clinics, Barbershops, etc.)
│   ├── Reviews.tsx             # Testimonial cards
│   ├── About.tsx               # Company story section
│   ├── CustomSolutions.tsx     # Custom solutions + inquiry form
│   ├── Contact.tsx             # Contact methods + message form
│   ├── Footer.tsx              # Legal footer with Meta compliance
│   └── ui/
│       ├── Button.tsx          # Reusable CTA button component
│       ├── SectionHeader.tsx   # Reusable section eyebrow + heading + subtext
│       └── PhoneMockup.tsx     # Reusable WhatsApp phone frame
├── lib/
│   └── constants.ts            # Business copy, links, wa.me URLs, emails
├── public/
│   └── (static assets if needed)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 3. Component Tree & Data Flow

```
layout.tsx
├── <Navbar />
│   ├── Logo (Lumenfly Labs brand mark)
│   ├── Desktop nav links (Why Us, Plans, Industries, Reviews, About, Contact)
│   ├── CTA button → wa.me link
│   └── Mobile hamburger menu
│
├── <Hero />
│   ├── Eyebrow badge
│   ├── Headline with gold gradient highlight
│   ├── Subtitle copy
│   ├── CTA buttons (Book Demo → wa.me, See Plans → scroll)
│   ├── KPI stats (24/7, 0s, 100%)
│   ├── WhatsApp phone mockup with animated chat bubbles
│   └── Floating info chips (New Booking, Reminder Sent, Confirmed)
│
├── <ProblemSolution />
│   ├── Section header
│   ├── Left column: "Without Lumenfly" (pain points)
│   └── Right column: "With Lumenfly" (solutions)
│
├── <LeadCatcher />
│   ├── Section header: "Start with One Bot"
│   ├── Feature card: 24/7 WhatsApp Meta Flow booking bot
│   ├── Feature card: Auto-syncs to Google Calendar
│   ├── Feature list (FAQ auto-replies, service menu, dashboard)
│   └── CTA → wa.me
│
├── <PremiumAddons />
│   ├── Section header: "Unlock as You Grow"
│   ├── Card 1: No-Show Protector (2hr reminders)
│   ├── Card 2: Advance Deposits (Razorpay links in WhatsApp)
│   ├── Card 3: Multi-Stylist Routing (pick barber/doctor)
│   └── Card 4: Festive Broadcaster (bulk marketing campaigns)
│
├── <TrustFlow />
│   ├── Section header
│   ├── Flow visualization: WhatsApp → Google Calendar → Any Device
│   └── Detail text about data safety
│
├── <Industries />
│   ├── Section header
│   └── Grid of industry cards (Salons, Clinics, Barbershops, etc.)
│
├── <Reviews />
│   ├── Section header
│   └── 3 testimonial cards with star ratings
│
├── <About />
│   ├── Dark card with company mission
│   ├── Floating stat badge
│   ├── About text paragraphs
│   └── Value propositions list
│
├── <CustomSolutions />
│   ├── Section header (dark bg)
│   ├── Perks list (4 items)
│   └── Inquiry form (business name, name, phone, type, requirements)
│
├── <Contact />
│   ├── Section header
│   ├── Contact methods (email links, WhatsApp button)
│   └── Message form (name, phone, email, message)
│
├── <Footer />
│   ├── Logo + description
│   ├── Legal company name: "Lumenfly Labs Pvt. Ltd."
│   ├── Registered address placeholder
│   ├── Admin email: admin@lumenflylabs.com
│   ├── Navigation links
│   ├── Services links
│   ├── Social links
│   ├── Privacy Policy link → /privacy
│   ├── Copyright notice
│   └── wa.me CTA link
│
└── /privacy/page.tsx (standalone route)
```

---

## 4. Dark Theme Design System

### Color Palette

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| Background (deepest) | `bg-[#0A0A0A]` | #0A0A0A |
| Background (cards) | `bg-[#121212]` | #121212 |
| Background (subtle) | `bg-[#1A1A1A]` | #1A1A1A |
| Border subtle | `border-[#2A2A2A]` | #2A2A2A |
| Border gold | `border-[#C49400]/30` | rgba(196,148,0,0.3) |
| Neon Gold primary | `text-[#F5C518]` | #F5C518 |
| Neon Gold light | `text-[#FFE57A]` | #FFE57A |
| Neon Gold dark | `text-[#C49400]` | #C49400 |
| Text primary | `text-white` | #FFFFFF |
| Text secondary | `text-white/70` | rgba(255,255,255,0.7) |
| Text muted | `text-white/40` | rgba(255,255,255,0.4) |
| Gold glow shadow | `shadow-[0_0_28px_rgba(245,197,24,0.55)]` | — |

### Typography

- **Headings**: Sora (weights: 600, 700, 800)
- **Body**: Plus Jakarta Sans (weights: 400, 500, 600)
- **Scale**: clamp() based responsive sizing

### Animations (Tailwind-only)

| Effect | Implementation |
|--------|---------------|
| Floating elements | `animate-bounce` with custom duration via `[--duration:4s]` |
| Pulse glow on CTAs | `animate-pulse` on box-shadow via Tailwind config |
| Hover lift | `hover:-translate-y-1 transition-transform duration-300` |
| Fade-in on scroll | Tailwind `motion-safe:animate-fadeInUp` (custom keyframe) |
| Gold shimmer | `animate-shimmer` custom keyframe on accent borders |

---

## 5. Meta API Compliance Checklist

| Requirement | Implementation |
|-------------|---------------|
| All "Book Demo" CTAs are `<a>` tags | ✅ `href="https://wa.me/910000000000?text=..."` |
| Legal company name in footer | ✅ "Lumenfly Labs Pvt. Ltd." |
| Registered physical address | ✅ Placeholder text in footer |
| Admin email visible | ✅ `admin@lumenflylabs.com` in footer |
| Privacy Policy page | ✅ `/privacy` route with full template |
| Privacy link in footer | ✅ Link to `/privacy` |

---

## 6. Business Copy Strategy

### "Land and Expand" Model

**The Lead Catcher (Base):**
- 24/7 WhatsApp Meta Flow booking bot
- Auto-syncs to Google Calendar
- FAQ auto-replies
- Service & price menu on request
- Simple booking dashboard

**Premium Add-Ons (Modular Upgrades):**
1. **No-Show Protector** — Automated 2-hour pre-appointment reminders via WhatsApp
2. **Advance Deposits** — Razorpay payment links sent directly inside WhatsApp chat
3. **Multi-Stylist Routing** — Let customers pick their specific barber/doctor/stylist
4. **Festive Broadcaster** — Bulk WhatsApp marketing campaigns to segmented customer lists

---

## 7. Route Design

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Landing page (all sections) |
| `/privacy` | `app/privacy/page.tsx` | Privacy Policy for Meta compliance |

---

## 8. Implementation Order

1. **Project scaffolding**: `npx create-next-app`, install Tailwind, configure fonts
2. **Global styles & layout**: `globals.css`, `layout.tsx`, dark theme tokens
3. **Constants & utilities**: `lib/constants.ts` with all copy, links, emails
4. **UI primitives**: `Button`, `SectionHeader`, `PhoneMockup`
5. **Top-level components** (top to bottom of page):
   - Navbar → Hero → ProblemSolution → LeadCatcher → PremiumAddons
   - TrustFlow → Industries → Reviews → About → CustomSolutions → Contact → Footer
6. **Privacy Policy route**: `/privacy/page.tsx`
7. **Meta compliance audit**: Verify all CTAs, footer, privacy link
8. **Build & test**: `npm run build` — verify zero errors
