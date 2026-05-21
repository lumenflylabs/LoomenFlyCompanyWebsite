# Color Audit & Fix Plan

## Original HTML Color Palette (from `index.html`)

### CSS Custom Properties (`:root`)
| Variable | Hex | Usage |
|----------|-----|-------|
| `--gold` | `#F5C518` | Primary accent, buttons, highlights |
| `--gold-light` | `#FFE57A` | Lighter gold for hover states, text |
| `--gold-mid` | `#E8B200` | Medium gold |
| `--gold-dark` | `#C49400` | Darker gold for borders, muted accents |
| `--cream` | `#FFFEF5` | Light cream background |
| `--off-white` | `#FAF9F4` | Main page background |
| `--warm-50` | `#FEFDF0` | Warm light background variant |
| `--ink` | `#18160E` | Main text color (dark brown-black) |
| `--ink-70` | `rgba(24,22,14,.7)` | Muted text |
| `--ink-40` | `rgba(24,22,14,.4)` | Subtle text |
| `--ink-15` | `rgba(24,22,14,.08)` | Subtle borders |

### Background Colors Used
| Color | Where Used |
|-------|-----------|
| `#FAF9F4` (--off-white) | Body background, nav background (rgba), why section gradient |
| `#FFFEF5` (--cream) | Trust flow card background |
| `#FEFDF0` (--warm-50) | Hero gradient start |
| `#FFF8D6` | Hero gradient mid |
| `#FFFEF8` | Hero gradient end |
| `#F8F6FF` | Hero gradient end |
| `#FFFBEA` | Why section gradient end, reviews section |
| `#FFF9D0` | Trust flow card gradient mid |
| `#FFFEF0` | Trust flow card gradient start |
| `#18160E` (--ink) | Footer background, dark cards, about visual card |
| `#0F0E0A` | Phone frame background, industries section |
| `#1A1810` | Plan card visual gradient start |
| `#221E0D` | Plan card visual gradient end |
| `#26200C` | About visual card gradient end |
| `#241E0A` | Custom solutions section gradient mid |
| `#1E1A0E` | Select dropdown option background |
| `#FFFFFF` | Cards, form inputs, chat bubbles (incoming) |
| `#ECE5DD` | WhatsApp chat background |
| `#0B5345` | WhatsApp header bar |
| `#075E54` | Mini chat header (plan card) |
| `#D9F7BE` | WhatsApp outgoing chat bubbles |
| `#F0F2F5` | WhatsApp input area |
| `#25D366` | WhatsApp CTA button |
| `#1EA855` | WhatsApp button hover |
| `#4285F4` | Google Calendar icon |
| `#FF5A5A` | Red indicator (problem section) |

### Text Colors
| Color | Where Used |
|-------|-----------|
| `#18160E` (--ink) | Body text |
| `#FFFFFF` | Text on dark backgrounds |
| `#111111` | Chat bubble text |
| `#888888` | Chat timestamp text |
| `#999999` | Mini chat timestamp |
| `#aaaaaa` | Input placeholder |
| `#cccccc` | Form placeholder |
| `rgba(255,255,255,.42)` | Footer description text |
| `rgba(255,255,255,.45)` | Footer links, muted text on dark |
| `rgba(255,255,255,.55)` | About card description |
| `rgba(255,255,255,.60)` | Section subtitle on dark |
| `rgba(255,255,255,.65)` | WhatsApp status text |
| `rgba(255,255,255,.70)` | Review quote text |
| `rgba(255,255,255,.80)` | Plan card feature text |
| `rgba(255,255,255,.90)` | Plan card feature label |
| `rgba(255,255,255,.3)` | Footer bottom text |
| `rgba(255,255,255,.28)` | Form placeholder on dark |
| `rgba(255,255,255,.45)` | Form label on dark |

### Border Colors
| Color | Where Used |
|-------|-----------|
| `rgba(245,197,24,.15)` | Nav bottom border |
| `rgba(245,197,24,.22)` | Chip border, custom perk border |
| `rgba(245,197,24,.25)` | Floating card border |
| `rgba(245,197,24,.28)` | Trust flow card border |
| `rgba(245,197,24,.30)` | Industry card highlighted border, addon badge border |
| `rgba(245,197,24,.32)` | Eyebrow badge border |
| `rgba(245,197,24,.35)` | Hero eyebrow border, plan card border |
| `rgba(245,197,24,.38)` | Hero chip border |
| `rgba(24,22,14,.08)` (--ink-15) | Card borders |
| `rgba(24,22,14,.2)` | Secondary button border |
| `rgba(255,255,255,.06)` | Phone frame outer border |
| `rgba(255,255,255,.07)` | Footer divider |
| `rgba(255,255,255,.08)` | Plan card visual border |
| `rgba(255,255,255,.09)` | Form input border, social button border |
| `rgba(255,255,255,.10)` | Plan card visual border |

## Current Next.js Color Palette (from `lumenfly-next/app/globals.css`)

| Variable | Current Value | Original Value | Match? |
|----------|--------------|----------------|--------|
| `--color-gold` | `#F5C518` | `#F5C518` | ✅ |
| `--color-gold-light` | `#FFE57A` | `#FFE57A` | ✅ |
| `--color-gold-dark` | `#C49400` | `#C49400` | ✅ |
| `--color-ink` | `#0A0A0A` | `#18160E` | ❌ |
| `--color-surface` | `#121212` | N/A (new) | N/A |
| `--color-surface-elevated` | `#1A1A1A` | N/A (new) | N/A |
| `--color-border-subtle` | `#2A2A2A` | N/A (new) | N/A |

## Key Issues Found

The original site is a **light/cream theme** with dark ink text. The current Next.js site was built as a **dark theme** (black backgrounds, white text). The user wants the **exact original colors** preserved.

### Critical Color Mismatches

1. **Body background**: Original `#FAF9F4` (off-white) → Current `#0A0A0A` (black) ❌
2. **Body text**: Original `#18160E` (ink) → Current `#FFFFFF` (white) ❌
3. **Card backgrounds**: Original `#FFFFFF` (white) → Current `#121212` (dark gray) ❌
4. **Footer background**: Original `#18160E` (ink) → Current `#0A0A0A` (black) ❌
5. **Nav background**: Original `rgba(250,249,244,.88)` → Current `rgba(10,10,10,0.88)` ❌
6. **Section backgrounds**: Original uses cream/warm gradients → Current uses dark/black gradients ❌
7. **Hero background**: Original `linear-gradient(150deg,#FEFDF0,#FFF8D6,#FFFEF8,#F8F6FF)` → Current dark gradient ❌
8. **Trust flow card**: Original `linear-gradient(140deg,#FFFEF0,#FFF9D0,#FFFEF8)` → Current dark gradient ❌
9. **Phone frame**: Original `#0F0E0A` → Current `#0F0E0A` ✅ (this one matches)
10. **WhatsApp colors**: `#ECE5DD`, `#0B5345`, `#075E54`, `#D9F7BE`, `#25D366` — all match ✅

## Required Changes

### 1. `app/globals.css` — Theme Variables
- Change `--color-ink` from `#0A0A0A` to `#18160E`
- Change `--color-surface` from `#121212` to `#FFFFFF`
- Change `--color-surface-elevated` from `#1A1A1A` to `#FFFEF5`
- Change `--color-border-subtle` from `#2A2A2A` to `rgba(24,22,14,.08)`
- Add `--color-off-white: #FAF9F4`
- Add `--color-cream: #FFFEF5`
- Add `--color-warm-50: #FEFDF0`
- Update body background to `#FAF9F4`
- Update body text color to `#18160E`
- Update glass-dark class to use `rgba(250,249,244,.88)`
- Update scrollbar colors
- Update `.text-gradient-gold` to match original

### 2. All Components — Background & Text Color Updates
Every component that uses `bg-[#0A0A0A]`, `bg-[#121212]`, `bg-[#1A1A1A]`, `bg-[#0F0E0A]` needs to be updated to the original light theme colors.

### 3. Section Background Gradients
Restore the original warm/cream gradient backgrounds for:
- Hero section
- Why/ProblemSolution section
- Reviews section
- Trust Flow section
- Custom Solutions section (keep dark since original was dark)

### 4. Text Color Updates
- Change `text-white` to `text-[#18160E]` (or use ink variable) on light backgrounds
- Keep `text-white` only on dark backgrounds (footer, custom solutions, about visual card)
- Update muted text opacities to match original

## Implementation Order
1. Update `app/globals.css` with correct theme variables and base styles
2. Update `app/layout.tsx` body classes
3. Update `components/Navbar.tsx` — light glassmorphism nav
4. Update `components/Hero.tsx` — warm gradient background, light theme chips
5. Update `components/ProblemSolution.tsx` — cream gradient background
6. Update `components/LeadCatcher.tsx` — white card background
7. Update `components/PremiumAddons.tsx` — light section background
8. Update `components/TrustFlow.tsx` — cream gradient card
9. Update `components/Industries.tsx` — light background, white cards
10. Update `components/Reviews.tsx` — cream gradient background, white cards
11. Update `components/About.tsx` — keep dark visual card, light text section
12. Update `components/CustomSolutions.tsx` — keep dark (already correct)
13. Update `components/Contact.tsx` — light background, white cards
14. Update `components/Footer.tsx` — keep dark (already correct)
15. Update `components/ui/SectionHeader.tsx` — ensure light theme compatibility
16. Build test
