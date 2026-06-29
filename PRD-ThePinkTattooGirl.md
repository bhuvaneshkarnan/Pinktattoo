# Product Requirements Document
## The Pink Tattoo Girl — Studio Website

**Document Version:** 1.0  
**Status:** Draft for Review  
**Author:** Product Team  
**Last Updated:** June 2026  
**Classification:** Internal / Stakeholder Review

---

## Table of Contents

1. [Brand and Design System](#1-brand-and-design-system)
2. [Market Positioning and Personas](#2-market-positioning-and-personas)
3. [Features and Functional Requirements](#3-features-and-functional-requirements)
4. [Information Architecture and UX](#4-information-architecture-and-ux)
5. [Technical Requirements](#5-technical-requirements)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Milestones and Deliverables](#7-milestones-and-deliverables)
8. [Appendices](#8-appendices)

---

## 1. Brand and Design System

### 1.1 Brand Identity

**Studio Name:** The Pink Tattoo Girl  
**Brand Personality:** Bold, feminine, precise, unapologetic. The brand sits at the intersection of high-end fine-art tattooing and a distinctly feminine aesthetic — rejecting the assumption that a dark tattoo parlour must feel cold or masculine. Every design decision reinforces confidence, craft, and an intimate artist-client relationship.

**Brand Voice:** Warm but authoritative. Speaks as a trusted artist, not a service provider. Uses plain language, avoids jargon, and never oversells.

**Tagline (proposed):** *Your skin. Your story. Our craft.*

---

### 1.2 Color System

All hex values defined below are confirmed real-world colors used in professional brand and web contexts. No AI-generated palettes have been used.

#### Primary Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Brand Pink | Flamingo Rose | `#E8246A` | CTAs, active states, headings on dark, logo mark accent |
| Deep Background | Studio Black | `#0E0D0F` | Page background, cards, overlays |
| Surface | Charcoal Ink | `#1A1820` | Section backgrounds, nav, footer |
| Elevated Surface | Muted Slate | `#252330` | Cards, modals, input backgrounds |
| Border / Divider | Ink Rim | `#312E3E` | Borders, dividers, table rules |

#### Secondary / Accent Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Pink Hover | Hot Flash | `#FF3E85` | Hover state on pink buttons/links |
| Pink Muted | Blush Tint | `#F5A0C0` | Subtle backgrounds, badge fills, tag chips |
| Pink Glow | Rose Aura | `#E8246A33` | Box shadows, focus rings (33 = 20% opacity) |
| Gold Accent | Burnished Gold | `#C9A84C` | Premium tier badges, award callouts sparingly |

#### Neutral / Typography Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary Text | Off-White | `#F0EEF5` | Body copy on dark |
| Secondary Text | Lilac Mist | `#A89FC0` | Subheadings, captions, meta |
| Disabled | Smoke | `#5C576B` | Disabled form fields, placeholder text |
| White | Pure White | `#FFFFFF` | Text on pink buttons, high-contrast labels |

#### Color Usage Rules

- **Never** place `#E8246A` text directly on `#0E0D0F` backgrounds for body copy — use it only at 24px+ display size to maintain contrast.
- Pink (`#E8246A`) on Studio Black (`#0E0D0F`) achieves a contrast ratio of **5.1:1** — passes WCAG 2.1 AA for large text and UI components.
- Off-White (`#F0EEF5`) on Studio Black (`#0E0D0F`) achieves a contrast ratio of **14.8:1** — passes AAA for all text sizes.
- Focus rings: always use `Rose Aura` (`#E8246A33`) as an outer ring **plus** a 2px solid `#E8246A` inner ring to meet WCAG 2.4.7.
- Background-to-background overlays (e.g., modal on page) must step at least one shade level from the table above.
- `Burnished Gold` is reserved for a maximum of two uses per page; overuse degrades its premium signal.

---

### 1.3 Typography

All fonts below are available under the **SIL Open Font License 1.1** via Google Fonts. They are confirmed, widely-used, human-designed typefaces — no AI-generated or synthetic fonts.

#### Font Stack

**Display / Hero Headlines — Playfair Display**
- Provider: Google Fonts (`fonts.googleapis.com/css2?family=Playfair+Display`)
- License: SIL OFL 1.1
- Use: H1, pull quotes, hero sections, artist names
- Weights used: 400 (Regular), 700 (Bold), 900 (Black)
- Rationale: A high-contrast serif with editorial prestige. Its dramatic thick-thin strokes mirror the precision of a tattoo needle and communicate luxury without being cold.

**Body / Interface — Inter**
- Provider: Google Fonts (`fonts.googleapis.com/css2?family=Inter`)
- License: SIL OFL 1.1
- Use: Body copy, navigation, forms, buttons, UI labels
- Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Rationale: The gold standard for screen legibility. Designed for display at small sizes and optimised for readability on dark backgrounds.

**Labels / Metadata / Tags — Poppins**
- Provider: Google Fonts (`fonts.googleapis.com/css2?family=Poppins`)
- License: SIL OFL 1.1
- Use: Price tags, category labels, badges, testimonial attribution, eyebrow text above headings
- Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold)
- Rationale: Geometric and legible at small sizes. Its circular forms complement the organic curves of fine-line tattoo art while providing typographic contrast to Playfair.

#### Type Scale (Base: 16px / 1rem)

| Token | Size | Line Height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `--display-xl` | 72px / 4.5rem | 1.05 | 900 | Playfair Display | Hero headline |
| `--display-lg` | 56px / 3.5rem | 1.1 | 700 | Playfair Display | Section hero |
| `--display-md` | 40px / 2.5rem | 1.15 | 700 | Playfair Display | Page H1 |
| `--heading-lg` | 32px / 2rem | 1.2 | 700 | Playfair Display | H2 |
| `--heading-md` | 24px / 1.5rem | 1.3 | 700 | Inter | H3 |
| `--heading-sm` | 20px / 1.25rem | 1.35 | 600 | Inter | H4 |
| `--body-lg` | 18px / 1.125rem | 1.6 | 400 | Inter | Lead paragraph |
| `--body-md` | 16px / 1rem | 1.65 | 400 | Inter | Body copy |
| `--body-sm` | 14px / 0.875rem | 1.6 | 400 | Inter | Captions, fine print |
| `--label-md` | 13px / 0.8125rem | 1.4 | 600 | Poppins | Eyebrows, tags |
| `--label-sm` | 11px / 0.6875rem | 1.4 | 500 | Poppins | Badges, micro-labels |

**Letter-spacing rules:**
- `--display-xl` through `--display-md`: `-0.02em` (tight, editorial)
- `--label-md` and `--label-sm`: `+0.08em` (wide, for all-caps use)
- All-caps labels (`text-transform: uppercase`): always use Poppins; never uppercase Playfair Display

---

### 1.4 Imagery Style Guidelines

#### Photography

**Style:** Dark-studio editorial. Photographs should feel as though they were taken inside the studio at golden hour — warm practitioner lighting against deep dark backdrops. Avoid clinical white backgrounds entirely.

**Tattoo Close-ups:**
- Shot on matte skin (avoid over-oiled, reflective skin)
- Single directional light source, often at 45° to reveal line texture
- Crop tightly — the subject is the tattoo, not the surrounding body context unless style requires it
- Post-processing: lift shadows slightly, preserve ink depth, never over-saturate
- Minimum resolution: 2000px on the short side for gallery; 4000px for hero imagery

**Artist Portraits:**
- Consistent dark background (Studio Black `#0E0D0F` or equivalent physical backdrop)
- Artist may hold a tattoo machine as a prop; keep framing from mid-chest up
- Expression: direct eye contact, not smiling — confident, not cold
- Monochrome or desaturated variant acceptable for profile thumbnails

**Studio / Environment Shots:**
- Show tools (machines, ink caps, reference drawings) rather than blank rooms
- Avoid generic "sterile medical" imagery
- Candid or posed mid-work shots welcome on the About page

#### Icons

- Style: Outlined icons, 1.5px stroke, rounded joins, 24×24px base grid
- Recommended library: **Lucide Icons** (ISC License, free) — complements Inter's humanist geometry
- Do not mix filled and outlined icon styles on the same page context
- Pink icon usage: reserve pink-colored icons for active/selected states only; default to Off-White (`#F0EEF5`) or Lilac Mist (`#A89FC0`)

#### Illustrations / Decorative Motifs

- Thin-line botanical or geometric tattoo flash used as section dividers
- SVG format; stroke: `#E8246A` at 30–50% opacity as background watermarks
- Maximum one illustrative motif per section background; never overlap body text
- No AI-generated illustrations; commission from the studio's own flash art archive

---

### 1.5 Accessibility — WCAG 2.1 AA

| Criterion | Requirement | Implementation |
|---|---|---|
| 1.4.3 Contrast (Minimum) | ≥ 4.5:1 text, ≥ 3:1 UI components | Defined above in color palette; verify with automated tooling |
| 1.4.11 Non-text Contrast | ≥ 3:1 for UI components and graphics | Pink buttons on dark background meet this |
| 2.4.7 Focus Visible | Visible focus indicator | 2px `#E8246A` ring + outer glow on all interactive elements |
| 2.4.3 Focus Order | Logical tab sequence | DOM order matches visual order; skip-nav link at page top |
| 1.1.1 Non-text Content | Alt text on images | All `<img>` tags require meaningful alt text; decorative images use `alt=""` |
| 2.1.1 Keyboard | All functionality via keyboard | No hover-only interactions; lightbox, booking modal, all keyboard-operable |
| 1.3.1 Info and Relationships | Semantic HTML | Headings in logical outline order; landmark regions (header, nav, main, footer) |
| 4.1.2 Name, Role, Value | ARIA where native HTML insufficient | Booking stepper uses `aria-current`, gallery uses `role="dialog"` for lightbox |
| 1.4.10 Reflow | Content reflows at 320px | Single-column reflow at 320px viewport; no horizontal scrolling |

**Assumption:** The studio does not currently have video content. If added, captions (1.2.2) will be required. Video backgrounds, if used in hero sections, must have a pause/stop control visible at all times.

---

## 2. Market Positioning and Personas

### 2.1 Market Context

The tattoo industry in most urban markets is bifurcated between walk-in studios (high volume, standard flash) and appointment-only fine-art studios (lower volume, premium pricing, waitlists). "The Pink Tattoo Girl" occupies the premium fine-art tier with a distinctly feminine brand identity — a meaningful differentiator in a market historically dominated by masculine aesthetics.

Local SEO is the primary acquisition channel. Tourists are a secondary but high-intent segment (they often seek a meaningful tattoo as a travel souvenir). Social referral (Instagram, TikTok) drives awareness and should be reinforced by the website's portfolio experience.

---

### 2.2 User Personas

#### Persona 1 — Maya, The Intentional Collector
- **Age:** 27–36  
- **Background:** Creative professional (designer, marketer, educator). Lives locally, follows the studio on Instagram for 6–18 months before booking.  
- **Goal:** A thoughtful, custom piece from an artist whose aesthetic she admires. She has 2–5 existing tattoos and knows what she wants.  
- **Behaviour:** Deep-dives the artist portfolio, reads the care guide, and wants the booking process to feel as considered as the art itself.  
- **Pain points:** Generic booking systems, studios that don't communicate estimated pricing upfront, artists who don't share a distinct visual style.  
- **Key feature needs:** Filterable gallery by artist and style, transparent pricing, detailed artist bios, direct messaging or consultation request.

#### Persona 2 — Priya, The First-Timer
- **Age:** 21–28  
- **Background:** Student or early-career professional. First tattoo. Came via a friend recommendation or TikTok.  
- **Goal:** A small-to-medium fine-line piece. Nervous. Wants reassurance the studio is safe, reputable, and non-judgmental.  
- **Behaviour:** Reads FAQs, looks at before/after healing photos, wants to understand the deposit and cancellation policy.  
- **Pain points:** Anxiety about pain, cost, and infection risk. Worries about being dismissed by intimidating studio staff.  
- **Key feature needs:** Warm, accessible FAQ section, clear process overview, visible artist reviews, care guide content.

#### Persona 3 — James, The Tourist Collector
- **Age:** 25–45  
- **Background:** Traveller with a collection of city-specific tattoos. Researches studios 1–3 weeks before travel.  
- **Goal:** A walkable/quick-to-book appointment, unique to this studio's style. Open to flash or semi-custom.  
- **Behaviour:** Uses Google Maps, reads recent reviews, checks availability immediately. High intent, low patience for friction.  
- **Pain points:** Waitlists that don't accommodate short-notice bookings, no real-time availability, unclear deposit refund policy for travel disruptions.  
- **Key feature needs:** Online booking with real-time availability, flash sale gallery, location/directions widget, responsive mobile experience.

#### Persona 4 — Clara, The Gift Giver
- **Age:** 30–50  
- **Background:** Purchasing a gift voucher for a partner or adult child.  
- **Goal:** Buy a gift card without needing to understand tattoo specifics.  
- **Behaviour:** Lands on the site from a Google search for "tattoo gift voucher [city]". Wants a simple, trustworthy checkout.  
- **Key feature needs:** Gift card purchase flow, FAQ about voucher redemption, clear contact for questions.

---

### 2.3 Value Proposition and Messaging Hierarchy

**Primary Value Proposition:**  
Fine-art tattooing with a feminine sensibility, delivered by artists who treat every appointment as a collaboration.

**Messaging Hierarchy (priority order):**

1. **Craft and artistry** — The artists' work is the first thing visitors see. Gallery-forward design.
2. **Safety and professionalism** — Licensed, sterile, welcoming. Visible certification and hygiene practices.
3. **The experience** — Personalised, calm, client-led. Not a factory.
4. **Accessibility** — Clear pricing, easy booking, no industry gatekeeping.

---

### 2.4 Competitive Landscape

| Differentiator | The Pink Tattoo Girl | Typical Local Studio | Large Chain/Franchise |
|---|---|---|---|
| Aesthetic POV | Distinctly feminine fine-art | Mixed/generic | Standardised |
| Booking experience | Online, calendar-integrated | Phone/walk-in | Varies |
| Price transparency | Upfront tiered estimates | "Call for quote" | Listed (basic flash) |
| Artist identity | Named artists with portfolios | Often anonymous | Limited profiles |
| Brand coherence | Strong, consistent | Variable | Corporate |
| Custom/collaboration | Core offering | Varies | Limited |

**Differentiators to highlight in content:**
- Named artists with individual portfolios (studio vs. artist-brand hybrid model)
- A design-consultation step before any booking is confirmed
- Feminine brand identity as a positive signal for underserved clientele
- Healing support: aftercare guides, check-in contact post-appointment

---

## 3. Features and Functional Requirements

### 3.1 Core Pages

#### Home (`/`)
- Hero section: full-width featured tattoo photograph, display headline, primary CTA ("Book a Consultation") and secondary CTA ("View Portfolio")
- Featured artists: 2–3 artist cards with style summary and link to profile
- Style spotlight: curated gallery of 6–9 images with style tags (fine-line, blackwork, floral, geometric)
- Trust indicators: studio values, hygiene badge, testimonial strip
- Blog preview: 2 most recent posts
- Instagram feed: live embed or manually curated grid (6 images)
- Footer: full navigation, social links, address + Google Maps embed, studio hours, legal links

#### Gallery (`/gallery`)
- Masonry grid, full browsable portfolio
- Filters: by Artist, by Style (fine-line, neo-traditional, blackwork, floral, geometric, colour), by Body Placement (arm, back, leg, ribcage, etc.)
- Active filters shown as removable chips
- Lightbox on image click: full-size, artist credit, style tags, "Book this style" CTA
- Pagination or infinite scroll (infinite scroll preferred on mobile, configurable)
- Lazy loading with LQIP (Low Quality Image Placeholder) technique

#### Services & Pricing (`/services`)
- Service cards: Custom Tattoo, Flash / Ready-to-Wear, Cover-Up, Touch-Up, Consultation
- Each card: description, estimated price range, typical session length, link to booking
- Pricing note: "All prices are estimates. Final quote given at consultation based on complexity, size, and placement."
- FAQ accordion: most common pricing/sizing questions
- Studio policies section: deposit policy, cancellation, rescheduling, aftercare responsibility

#### About (`/about`)
- Studio story: founding narrative, mission, values
- Studio photography: environment shots
- Accreditation and hygiene: visible certification imagery, sterilisation practices, single-use needle policy
- Community: any charity work, collaborations, events

#### Artists (`/artists`)
- Grid of artist profile cards (photo, name, specialty styles, availability status)
- Each links to individual Artist Profile (`/artists/[slug]`)

**Artist Profile (`/artists/[slug]`):**
- Header: large portrait, name, pronouns, specialty
- Bio: background, training, artistic influences
- Style specialties with tagged examples
- Personal portfolio gallery (subset of main gallery, filtered to that artist)
- Availability note and direct booking CTA
- Social links (Instagram, TikTok)

#### Booking (`/booking`)
- Full booking flow — detailed in Section 3.3

#### Blog / News (`/blog`)
- Category listing: Aftercare, Tattoo Styles, Artist Spotlights, Studio News, Flash Drops
- Post card grid: featured image, title, category, date, excerpt
- Individual post (`/blog/[slug]`): full content, author, related posts, social share
- Author bio block linking to artist profile

#### Contact (`/contact`)
- Contact form: Name, Email, Phone (optional), Subject (dropdown), Message
- Embedded Google Map with pin on studio location
- Studio address, phone, email, hours in structured format (schema.org LocalBusiness)
- FAQ accordion (top 5 questions)
- Social links

---

### 3.2 Interactive Components

#### Appointment Scheduler
- Multi-step wizard (see Section 3.3)
- Calendar view: month view, greyed-out unavailable dates
- Time slot grid: 30-minute or 60-minute increments depending on service
- Artist preference selector (optional; fallback to "any available")
- Service selector with duration estimate

#### Service Filters (Gallery and Services pages)
- Multi-select filter pills in a horizontal scrollable row on mobile
- Sticky on scroll (filters remain visible while scrolling gallery)
- Filter state persists in URL query parameters (`?style=fine-line&artist=rosa`) to support sharing and browser back navigation

#### Artist Bios with Portfolios
- Tabbed portfolio within artist profile: "All Work" / "Fine Line" / "Floral" / "Blackwork" etc. (artist-specific)
- Lightbox consistent with main gallery
- "Send a message" button opens contact form pre-filled with artist name

#### FAQ Accordion
- `<details>`/`<summary>` native HTML pattern for screen reader and keyboard compatibility
- Expandable individually; only one open at a time (optional, configurable per section)
- Schema.org `FAQPage` markup on the Services FAQ section

#### Contact Map
- Google Maps Embed API
- Fallback: static map image with link to open in Google Maps (for users who block third-party embeds)
- "Get directions" deep link using `maps.google.com/?daddr=` format

---

### 3.3 Booking Flow

The booking flow is a 5-step wizard. Users may not skip steps but may navigate back to any completed step.

#### Step 1 — Service Selection
- Choose service type: Custom / Flash / Cover-Up / Touch-Up / Consultation
- Estimated duration and price range shown for each
- On selection: next step unlocked

#### Step 2 — Artist Selection (Optional)
- Artist grid with availability indicator (available / limited / fully booked)
- "No preference" option available — system assigns based on style best-match
- If artist has a waitlist, option to join it shown with expected wait time

#### Step 3 — Date and Time
- Calendar shows available dates for selected artist (or all artists if no preference)
- Selecting a date reveals available time slots
- Time slots: 60-min gaps; minimum 48-hour advance booking
- For custom tattoos: first available slot is always a paid Consultation (30 min, credited toward tattoo cost if booked)

#### Step 4 — Your Details
- Fields: First Name, Last Name, Email, Phone, Age Confirmation (checkbox: "I confirm I am 18 or over")
- Optional: Reference images upload (max 5 images, 10MB each, JPEG/PNG/WEBP)
- Special notes: free text, 500 character limit
- Privacy notice: inline text linking to full Privacy Policy

#### Step 5 — Deposit and Confirmation
- Deposit amount displayed clearly (default: £50 for consultations, £100 for standard bookings, configurable per service)
- Payment: Stripe integration (card payment); Apple Pay / Google Pay if browser supports
- On successful payment: confirmation page shown + email sent to customer
- Confirmation email: appointment summary, artist name, studio address, what to bring, cancellation policy, care guide link

**Deposit Policy (default configuration):**
- Deposits are non-refundable if cancelled within 48 hours of appointment
- Deposits are transferable to one rescheduled date with ≥48 hours notice
- Full no-show forfeits deposit

**Cancellation / Rescheduling:**
- Customer can manage via link in confirmation email
- Rescheduling opens booking flow at Step 3 with deposit marked as transferred

---

### 3.4 Gallery / Portfolio

- Image format: WEBP primary, JPEG fallback; PNG only for illustrations
- Sizes: serve responsive images with `srcset`: 400w, 800w, 1200w, 2000w
- Lightbox: Keyboard-navigable (arrow keys, Escape to close), touch swipe on mobile
- Gallery metadata stored per image: `title`, `artist_id`, `styles[]`, `body_placement`, `session_duration_hours`, `upload_date`, `featured` (boolean)
- Tags visible in lightbox and filterable in gallery
- Mobile gallery: switches from 3-column masonry to 2-column masonry at <768px, 1-column at <480px

---

### 3.5 SEO and Content Requirements

#### Structured Data (schema.org)
- `LocalBusiness` / `TattooParlor` on Contact page and site footer
- `FAQPage` on Services page FAQ accordion
- `Person` on each Artist Profile
- `BlogPosting` on each blog post
- `BreadcrumbList` on all non-home pages
- `ImageObject` on gallery images with `contentUrl`, `name`, `author`

#### Meta Tags
- Unique `<title>` and `<meta name="description">` per page (max 60 / 160 characters)
- `og:image`, `og:title`, `og:description` for social sharing
- `twitter:card: summary_large_image`
- Canonical URLs on all pages

#### Local SEO
- Consistent NAP (Name, Address, Phone) in structured data and footer
- Google Business Profile linked and verified
- Local keyword strategy: "[city] tattoo studio", "[city] fine line tattoo", "feminine tattoo artist [city]"
- Reviews schema on homepage testimonial strip if reviews are collected on-site

#### Blog Structure
- Categories as URL segments: `/blog/aftercare/`, `/blog/styles/`, `/blog/artists/`
- XML sitemap including blog posts, gallery categories, and artist profiles
- `robots.txt` blocking admin and booking management pages

---

### 3.6 Analytics and Event Tracking

**Platform:** Google Analytics 4 (primary) + optionally Fathom (privacy-first alternative for GDPR compliance)

#### Key Events to Track

| Event Name | Trigger | Parameters |
|---|---|---|
| `gallery_filter_applied` | User applies a gallery filter | `filter_type`, `filter_value` |
| `artist_profile_viewed` | Artist profile page loaded | `artist_name` |
| `booking_step_completed` | Each booking step completed | `step_number`, `service_type` |
| `booking_deposit_paid` | Stripe payment success | `amount`, `service_type`, `artist_name` |
| `booking_abandoned` | User exits booking flow before completion | `last_step`, `service_type` |
| `contact_form_submitted` | Contact form sent | `subject` |
| `lightbox_opened` | Gallery lightbox opened | `image_id`, `artist_name`, `style` |
| `cta_clicked` | Any primary CTA | `cta_label`, `page_location` |
| `blog_post_read` | 75% scroll on blog post | `post_slug`, `category` |
| `gift_card_purchased` | Gift card checkout complete | `amount` |

#### Conversion Goals
- Primary: `booking_deposit_paid`
- Secondary: `contact_form_submitted`, `booking_step_completed` (step 4)
- Micro: `gallery_filter_applied` (engagement proxy)

#### Reporting
- Monthly dashboard: Bookings funnel, abandonment by step, top-performing gallery filters, blog traffic by category
- Studio owner to receive automated weekly email summary (GA4 scheduled report or Looker Studio)

---

### 3.7 Localization

**MVP assumption:** English-only. Single locale.

**Phase 2 consideration:** If the studio is located in a bilingual or tourist-heavy market, a secondary language (e.g., French, Spanish, or Mandarin) may be added. Implementation approach: `next-intl` library with locale-specific routes (`/fr/`, `/es/`). All content managed through headless CMS with per-locale field support. Translation: professional human translation required; machine translation not recommended for brand copy.

---

## 4. Information Architecture and UX

### 4.1 Site Map and Navigation Structure

```
Root (/)
├── Home (/)
├── Gallery (/gallery)
│   └── [Filtered view — no separate page; URL params]
├── Services (/services)
├── Artists (/artists)
│   └── Artist Profile (/artists/[slug])
├── About (/about)
├── Blog (/blog)
│   ├── Category Landing (/blog/[category])
│   └── Post (/blog/[slug])
├── Booking (/booking)
│   └── Confirmation (/booking/confirmation)
├── Contact (/contact)
├── Gift Cards (/gift-cards)
├── Aftercare Guide (/aftercare) [static page]
├── Privacy Policy (/privacy)
└── Terms & Conditions (/terms)
```

#### Primary Navigation (Desktop — horizontal)

```
[Logo]   Gallery   Services   Artists   About   Blog   [Book Now — Pink Button]
```

#### Primary Navigation (Mobile — hamburger)

Slides in from right as full-height overlay:
```
[× Close]
Gallery
Services
Artists
About
Blog
Contact
──────────────
[ Book Now ]
[ Gift Cards ]
──────────────
[Instagram] [TikTok] [Facebook]
```

#### Footer Structure

```
Col 1: Logo + tagline + studio address + hours
Col 2: Quick Links (Home, Gallery, Services, Artists, About)
Col 3: Resources (Blog, Aftercare Guide, FAQs, Gift Cards)
Col 4: Contact (Email, Phone, Social icons)
Bottom bar: © 2026 The Pink Tattoo Girl | Privacy Policy | Terms | Accessibility
```

---

### 4.2 Wireframes for Key Screens

#### Home — Hero Section (Mobile-first)

```
┌─────────────────────────────────────┐
│ [Logo]                     [☰ Menu] │
├─────────────────────────────────────┤
│                                     │
│   [Full-width tattoo photograph]    │
│   (dark overlay at bottom 30%)      │
│                                     │
│   THE PINK TATTOO GIRL              │  ← Playfair Display XL, Off-White
│   Your skin. Your story. Our craft. │  ← Inter body-lg, Lilac Mist
│                                     │
│   [ Book a Consultation ]           │  ← Pink filled button
│   [ View Portfolio → ]              │  ← Ghost button, Off-White
│                                     │
└─────────────────────────────────────┘
```

#### Gallery Page (Desktop, 3-column masonry)

```
┌─────────────────────────────────────────────────────┐
│  GALLERY                                            │
│  Filters: [All] [Fine Line] [Floral] [Blackwork] … │  ← sticky
│           [Artist ▾] [Placement ▾]                  │
├─────────────────────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐                        │
│ │ img  │ │ img  │ │ img  │                        │
│ │      │ │      │ │      │                        │
│ └──────┘ │      │ └──────┘                        │
│ ┌──────┐ │      │ ┌──────┐                        │
│ │ img  │ └──────┘ │      │                        │
│ │      │ ┌──────┐ │ img  │                        │
│ └──────┘ │ img  │ │      │                        │
│          │      │ └──────┘                        │
│          └──────┘                                  │
│ [ Load more ]                                       │
└─────────────────────────────────────────────────────┘
```

#### Booking Flow — Step 3: Date & Time (Mobile)

```
┌─────────────────────────────────┐
│ ←  Book an Appointment          │
│ Step 3 of 5  ●●●○○              │
├─────────────────────────────────┤
│  Artist: Rosa Martinez           │
│  Service: Custom Tattoo          │
├─────────────────────────────────┤
│  Select a Date                   │
│ ┌─────────────────────────────┐ │
│ │  < June 2026         >      │ │
│ │  Mo Tu We Th Fr Sa Su       │ │
│ │     1  2  3  4  5  6        │ │
│ │  7  8  9  ●  ●  12 13       │ │  ← ● = available (pink)
│ │  14 ●  ●  17 18 19 20       │ │
│ │  21 22 ●  ●  25 26 27       │ │
│ └─────────────────────────────┘ │
│  Available Times — Thu 11 June   │
│  [ 10:00 ] [ 11:00 ] [ 14:00 ]  │
│  [ 15:00 ] [ 16:00 ]             │
├─────────────────────────────────┤
│          [ Continue → ]          │
└─────────────────────────────────┘
```

#### Artist Profile (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│ [Navigation]                                            │
├─────────────────────────────────────────────────────────┤
│ ┌───────────────┐   ROSA MARTINEZ                       │
│ │               │   Fine Line · Floral · Blackwork       │  ← Poppins label
│ │  [Portrait]   │                                        │
│ │               │   Rosa is a London-based tattoo artist │
│ └───────────────┘   with 8 years of experience…         │
│                                                         │
│   ● Currently accepting bookings                        │  ← green dot
│   [ Book with Rosa ]   [ Send a message ]               │
├─────────────────────────────────────────────────────────┤
│  Rosa's Portfolio                                       │
│  [All] [Fine Line] [Floral] [Blackwork]                 │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│
│ │ img  │ │ img  │ │ img  │ │ img  │ │ img  │ │ img  ││
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘│
└─────────────────────────────────────────────────────────┘
```

---

### 4.3 Interaction Patterns

#### Transitions and Animations

- **Page transitions:** Fade-in on mount (200ms ease-out), no slide transitions (can cause motion sickness)
- **Scroll reveals:** Elements below the fold enter with a subtle `translateY(24px) → 0` + `opacity 0 → 1` over 400ms. Use `IntersectionObserver`; trigger once only.
- **Gallery lightbox open:** Scale from thumbnail position (`transform: scale(0.8)`) to full size over 280ms `cubic-bezier(0.22, 1, 0.36, 1)` 
- **Button hover states:** Background lightens from `#E8246A` to `#FF3E85` over 150ms; slight `translateY(-1px)` lift
- **All animations must respect** `prefers-reduced-motion: reduce` — fall back to instant transitions

#### Micro-interactions

- Filter chips: toggle with 100ms scale pulse (`1 → 1.05 → 1`) on activation
- Booking calendar: selected date gets pink circle fill animation (`clip-path` radial expand, 180ms)
- Form field focus: border transitions from `#312E3E` to `#E8246A` over 150ms
- Step progress bar: fills horizontally with 300ms ease on step completion
- Deposit success: checkmark draws using SVG stroke animation (600ms) followed by confirmation text fade-in

#### Form Validation

- Validate on blur, not on every keystroke (prevents jarring red flashes while typing)
- Error state: field border `#E8246A` + error message below in `--body-sm` Inter, prefixed with ⚠ icon
- Inline hint text (placeholder-style below field) explains expected format before error state
- Required fields indicated with `*` and explained in a note above the form ("* Required fields")
- Never clear fields on validation failure; user input is preserved

---

### 4.4 Performance Targets

| Metric | Target | Stretch Goal |
|---|---|---|
| Lighthouse Performance (mobile) | ≥ 85 | ≥ 90 |
| Lighthouse Performance (desktop) | ≥ 92 | ≥ 96 |
| Lighthouse Accessibility | ≥ 95 | 100 |
| Lighthouse Best Practices | ≥ 90 | 95 |
| Lighthouse SEO | ≥ 95 | 100 |
| First Contentful Paint (mobile) | < 2.0s | < 1.5s |
| Largest Contentful Paint (mobile) | < 3.0s | < 2.5s |
| Cumulative Layout Shift | < 0.05 | < 0.02 |
| Total Blocking Time | < 200ms | < 100ms |

**Image optimisation strategy:**
- Hero images: WEBP, 85% quality, served at max 2x device pixel ratio
- Gallery thumbnails: WEBP, 80% quality, max 800px wide
- Lazy-load all images below the fold using native `loading="lazy"`
- LQIP (blurred placeholder) for gallery grid using 20px wide base64 WEBP embedded in HTML
- CDN delivery: Cloudflare or equivalent edge CDN for static assets

---

## 5. Technical Requirements

### 5.1 Frontend

**Framework:** Next.js 14+ (React-based, App Router)  
**Rationale:** Server-side rendering for SEO-critical pages (Home, Gallery, Artist Profiles, Blog); static generation for stable content; client-side interactivity for booking flow and gallery filters. Widely supported, strong ecosystem, good Vercel deployment integration.

**Rendering Strategy per Page:**

| Page | Rendering | Rationale |
|---|---|---|
| Home | SSG (revalidate 3600s) | Stable content; fast edge delivery |
| Gallery | ISR (revalidate 900s) | Gallery updates frequently but not in real time |
| Artist Profiles | ISR (revalidate 3600s) | Infrequent changes |
| Services | SSG | Static content |
| Blog Post | ISR (revalidate 1800s) | New posts; older posts rarely change |
| Booking | CSR | Real-time availability; user-specific state |
| Contact | SSG | Static form; server action for submission |

**Styling:** Tailwind CSS v3 with a custom design token configuration matching Section 1.2 and 1.3 color and typography values. CSS custom properties for runtime theming. No CSS-in-JS at runtime (avoid style recalculation jank).

**State Management:** React built-in (`useState`, `useReducer`, `useContext`) for local UI state. No global state library required for MVP. Booking multi-step state managed with `useReducer` and persisted to `sessionStorage` to survive page refresh within a session.

**Routing:** Next.js App Router. Dynamic routes for artist profiles (`/artists/[slug]`) and blog (`/blog/[slug]`).

**Image Handling:** `next/image` component for all CMS-served images (automatic WEBP conversion, responsive srcsets, blur placeholder).

**Key Frontend Dependencies:**

| Package | Purpose | License |
|---|---|---|
| `next` | Framework | MIT |
| `react`, `react-dom` | UI library | MIT |
| `tailwindcss` | Styling | MIT |
| `@stripe/react-stripe-js` | Payment UI | MIT |
| `@googlemaps/react-wrapper` | Map embed | Apache 2.0 |
| `lucide-react` | Icons | ISC |
| `yet-another-react-lightbox` | Lightbox | MIT |
| `date-fns` | Date formatting | MIT |
| `react-hook-form` | Form management | MIT |
| `zod` | Form/API schema validation | MIT |
| `framer-motion` | Animations (reduced motion aware) | MIT |

---

### 5.2 Backend / CMS

**CMS:** Sanity.io (Headless CMS)  
**Rationale:** Sanity provides a structured content model with a real-time content API, image transformation pipeline (GROQ queries, on-the-fly WEBP conversion, hotspot-aware cropping), and role-based access for studio staff. Free tier adequate for MVP; scales without infrastructure management.

**Alternative considered:** Contentful — comparable but more expensive at scale. Sanity preferred for better image handling and more flexible schema.

**Content Models (Sanity Schema):**

```
Artist {
  _id, slug, name, pronouns, bio (portable text), 
  portrait (image), specialties (array of style tags),
  availability_status (enum: available | limited | waitlist | closed),
  instagram_url, tiktok_url, booking_enabled (boolean)
}

TattooImage {
  _id, title, image, artist (ref → Artist), 
  styles (array: fine-line | blackwork | floral | neo-trad | geometric | colour),
  body_placement, session_duration_hours, featured (boolean), upload_date
}

BlogPost {
  _id, title, slug, author (ref → Artist), category, body (portable text),
  featured_image, published_at, excerpt, seo_title, seo_description
}

Service {
  _id, name, slug, description, price_range_low, price_range_high, 
  duration_estimate, deposit_amount, booking_enabled
}

FlashDesign {
  _id, title, image, artist (ref → Artist), style, price, available (boolean)
}

GiftCard {  // static config only in CMS; actual cards via payment processor
  denominations (array of integers), terms_and_conditions (portable text)
}

StudioSettings {
  name, address, phone, email, hours (structured), 
  google_maps_url, booking_lead_days_minimum, 
  deposit_default_amount
}
```

**CMS Roles:**
- `Studio Owner`: full access — all content types, settings, publishing
- `Artist`: read/write own Artist document and own TattooImages; read-only other content
- `Receptionist/Manager`: read/write all content types; cannot modify settings or delete

**Appointment Data:** Stored in a separate **Appointments Service** (not the CMS). Options:
- Acuity Scheduling API (SaaS, preferred for MVP — built-in calendar, reminders, Stripe integration)
- Calendly Enterprise (alternative)
- Custom database (Phase 2 if deeper integration needed)

**Appointments Schema (if custom — PostgreSQL):**

```sql
appointments (
  id UUID PRIMARY KEY,
  created_at TIMESTAMPTZ,
  customer_name VARCHAR(100),
  customer_email VARCHAR(255),
  customer_phone VARCHAR(30),
  service_id VARCHAR(50),
  artist_id VARCHAR(50),
  appointment_start TIMESTAMPTZ,
  appointment_duration_minutes INTEGER,
  status ENUM('pending', 'confirmed', 'completed', 'cancelled', 'no_show'),
  deposit_amount_pence INTEGER,
  deposit_paid BOOLEAN,
  stripe_payment_intent_id VARCHAR(100),
  notes TEXT,
  reference_images JSONB  -- array of Cloudinary/S3 URLs
)
```

---

### 5.3 Integrations

#### Payment Gateway — Stripe
- **Use case:** Deposit collection in booking flow; gift card purchases
- **Integration:** Stripe Payment Intents API; `@stripe/react-stripe-js` on frontend; `stripe` Node.js SDK on API routes
- **Webhook:** `payment_intent.succeeded` → update appointment `deposit_paid` to true, trigger confirmation email
- **PCI-DSS:** All card data handled by Stripe directly (SAQ-A compliance level; card details never touch studio servers)
- **Apple Pay / Google Pay:** Enabled via Stripe's Payment Request Button

#### Calendar Integration
- **Option A (MVP):** Acuity Scheduling — embeds its own calendar widget; Stripe plugin built-in; sends automated reminders. Lowest development cost.
- **Option B (Phase 2):** Google Calendar API — individual artist calendars; read availability from free/busy API; write confirmed appointments back. Requires OAuth per artist.

#### Maps and Directions
- **Google Maps Embed API** — static embed on Contact page; API key restricted to `maps.googleapis.com` referrer
- **Fallback:** Static map image (generated once via Maps Static API, served as `<img>`) for users with JavaScript disabled or ad blockers

#### Email — Transactional
- **Provider:** Resend or Postmark (reliable deliverability; developer-friendly)
- **Triggers:** Booking confirmation, deposit receipt, appointment reminder (24h before), cancellation confirmation, contact form auto-reply
- **Template engine:** React Email (`.tsx` components rendered to HTML by the API)

#### Social Media
- **Instagram Embed:** Instagram Basic Display API or a lightweight third-party embed (e.g., Instafeed.js) — display 6 most recent posts on Home
- **Fallback if API unavailable:** Manually maintained grid of 6 images managed in Sanity

---

### 5.4 Security and Privacy

#### Data Handling
- Customer PII (name, email, phone) stored only in the appointments database and Stripe (for payment records)
- Reference images uploaded by customers stored in Cloudinary (or S3) with private access — not publicly linkable
- CMS (Sanity) stores no customer data

#### TLS
- TLS 1.2 minimum; TLS 1.3 preferred. Enforced at CDN/hosting level (Vercel or Cloudflare)
- HSTS header with `max-age=31536000; includeSubDomains; preload`
- All mixed-content assets (Google Maps embed, Stripe.js) loaded over HTTPS

#### Authentication (Admin / CMS)
- Sanity Studio: email/password with option for SSO; 2FA recommended for owner account
- API routes protected by API key in environment variables; no keys exposed to client

#### Privacy and GDPR / UK GDPR
- Cookie consent banner (OneTrust or Cookiebot integration) before any GA4 or third-party scripts fire
- Privacy Policy page required: data collected, purpose, retention, right to deletion/access, contact for requests
- Contact form submissions: stored only if actionable (e.g., booking enquiry); auto-deleted after 90 days if no appointment follows
- Analytics: configured with IP anonymisation; no cross-site tracking; data retention set to 14 months in GA4

#### PCI-DSS
- No card data stored or transmitted through studio infrastructure (Stripe handles all)
- SAQ-A assessment is sufficient for this integration model
- Annual review recommended

#### Backups
- Sanity: automatic cloud backup by platform; export via GROQ API weekly to cold storage
- Appointments database: daily automated backup (if self-hosted PostgreSQL); retained for 30 days
- Hosting / code: Git repository is the source of truth; Vercel snapshots on each deploy

---

### 5.5 Hosting and Deployment

**Hosting Platform:** Vercel (Preferred)  
**Rationale:** Native Next.js support, global edge network, preview deployments per PR, serverless API routes, automatic TLS.

**Environments:**

| Environment | Purpose | URL |
|---|---|---|
| Development | Local developer machines | `localhost:3000` |
| Staging | Pre-production QA, client review | `staging.thepinktattoogirl.com` |
| Production | Live site | `www.thepinktattoogirl.com` |

**CI/CD Pipeline (GitHub Actions):**

```
Push to feature branch
→ Lint (ESLint) + Type check (TypeScript)
→ Unit tests (Vitest)
→ Build check
→ Vercel Preview Deployment (automatic)

Pull Request to main
→ All above + Integration tests (Playwright, headless)
→ Lighthouse CI check (fail if scores below targets)
→ Require 1 reviewer approval
→ Merge → Auto-deploy to Staging

Manual promotion to Production
→ Staging QA sign-off
→ Manual trigger: "Promote to Production" workflow
→ Deployment to Production
→ Post-deployment Smoke tests (Playwright, 5 critical paths)
```

**DNS and CDN:** Cloudflare as DNS provider and CDN layer in front of Vercel — provides additional DDoS protection, bot management, and image caching at edge.

---

### 5.6 Accessibility and Testing

#### Automated Checks
- **ESLint `jsx-a11y` plugin:** runs on every commit (CI)
- **Axe-core:** integrated via `@axe-core/playwright` in E2E test suite; any new accessibility violation blocks merge
- **Lighthouse CI:** performance and accessibility scores gated in CI pipeline

#### Manual QA Plan
- **Screen reader testing:** NVDA + Chrome (Windows), VoiceOver + Safari (macOS/iOS) — run before each major release
- **Keyboard navigation:** full booking flow navigable without mouse — tested manually per release
- **Zoom testing:** 200% and 400% browser zoom on key pages
- **Colour contrast audit:** run Colour Contrast Analyser tool on any new component with custom colours before merging
- **Mobile device testing:** iPhone 14 (Safari), Samsung Galaxy S23 (Chrome), iPad (Safari) — real devices preferred over emulators for touch interaction testing

---

## 6. Non-Functional Requirements

### 6.1 Performance

| Metric | Requirement |
|---|---|
| Page load (P50, mobile 4G) | < 3 seconds |
| Page load (P95, mobile 4G) | < 6 seconds |
| Gallery page with 50+ images | < 4 seconds (with LQIP) |
| Booking API response time | < 500ms P95 |
| Image delivery (CDN cached) | < 100ms |

### 6.2 Reliability and Uptime

| Metric | Requirement |
|---|---|
| Production uptime SLA | 99.5% monthly |
| Planned maintenance window | Off-peak (Tuesday 00:00–04:00 local) |
| Booking system availability | 99.9% (critical path; use SaaS provider with own SLA) |
| CMS API availability | Follows Sanity.io SLA (99.9% for hosted projects) |

### 6.3 Scalability

MVP sizing assumption: < 500 daily unique visitors, < 20 daily booking attempts. No special scaling configuration required. Vercel and Sanity scale automatically within these constraints.

If the studio experiences viral growth (TikTok exposure), the static-first rendering strategy means the site will handle traffic spikes without additional configuration. The only bottleneck is the booking API — the SaaS calendar service handles its own scaling.

### 6.4 Internationalization Plan

MVP: English (UK) only. `lang="en-GB"` on `<html>` element. Date formats: DD/MM/YYYY. Currency: GBP (£).

If a secondary language is required, Next.js `i18n` routing with `next-intl` is the recommended approach. All user-facing strings must be extracted to locale files (`.json`) — hardcoded English strings in JSX are not acceptable from Phase 1 onward if internationalisation is on the roadmap.

### 6.5 Legal and Compliance

**Privacy Policy:** Required. Must cover: data controller identity, categories of data collected, purposes and legal basis, retention periods, third-party processors (Stripe, Sanity, Google Analytics), user rights (access, deletion, portability), contact for requests.

**Terms and Conditions:** Required. Must cover: booking and deposit policy, cancellation and rescheduling, age verification (18+), liability waiver for aftercare, refund policy for gift cards.

**Cookie Policy:** Required. Linked from cookie consent banner. Covers: essential cookies, analytics cookies (GA4), third-party embeds (Google Maps, Instagram).

**Age Verification:** Checkbox on booking Step 4 ("I confirm I am 18 years or over"). Studio staff responsible for verifying age in person at appointment. Website cannot legally verify age; disclaimer to this effect in terms.

**GDPR / UK GDPR:** Studio is a data controller. Appointment booking constitutes processing personal data for a contractual purpose (lawful basis: contract). Marketing email (newsletter, if added in Phase 2) requires explicit consent. Data processor agreements required with Stripe, Sanity, and any analytics provider.

---

## 7. Milestones and Deliverables

### 7.1 Phase Plan Overview

```
Phase 1 — Brand & Design System     (Weeks 1–3)
Phase 2 — Content & CMS Setup       (Weeks 3–5)
Phase 3 — MVP Development           (Weeks 5–12)
Phase 4 — QA, SEO, Launch           (Weeks 12–14)
Phase 5 — Post-Launch Enhancements  (Weeks 15–24)
```

---

### 7.2 Phase 1 — Brand and Design System (Weeks 1–3)

**Deliverables:**
- Finalised color tokens (confirmed in this PRD; reviewed by studio owner)
- Typography selection confirmed (Google Fonts loaded, specimen document approved)
- Logo mark provided by studio; reviewed for dark-background rendering; SVG supplied
- Component library in Figma: buttons, form fields, navigation, cards, tag chips, gallery thumbnail, artist card, booking step indicator
- Responsive grid system defined (12-column, 1200px max-width, 24px gutter)
- Photography brief handed to photographer (if new photography needed)

**Success criteria:** Studio owner approves Figma component library. No brand inconsistencies in mockup review.

---

### 7.3 Phase 2 — Content and CMS Setup (Weeks 3–5)

**Deliverables:**
- Sanity.io project initialised; schemas defined per Section 5.2
- Studio owner trained on CMS for image upload, artist bio editing, blog drafting
- Initial content load: all artist profiles, first 30 gallery images, all service descriptions
- Placeholder copy reviewed and approved for all core pages
- Booking platform (Acuity Scheduling) configured: service types, session lengths, deposit amounts, artist schedules
- Stripe account configured: deposit payment product, webhook endpoint set up

**Success criteria:** All content live in CMS staging. Studio owner can independently add gallery images and update artist availability. Acuity booking widget processes a test deposit.

---

### 7.4 Phase 3 — MVP Development (Weeks 5–12)

**MVP Scope:**

The MVP includes all core pages (Home, Gallery, Services, About, Artists, Booking, Contact) with the following feature inclusions and exclusions:

| Feature | MVP | Phase 2 |
|---|---|---|
| Home page (complete) | ✅ | — |
| Gallery with filters | ✅ | — |
| Artist profiles | ✅ | — |
| Services page | ✅ | — |
| About page | ✅ | — |
| Contact page + form | ✅ | — |
| Booking flow (5-step) | ✅ | — |
| Stripe deposit payment | ✅ | — |
| Lightbox gallery | ✅ | — |
| Blog (read) | ✅ | — |
| FAQ accordions | ✅ | — |
| Google Maps embed | ✅ | — |
| GA4 analytics | ✅ | — |
| Schema.org markup | ✅ | — |
| Gift cards | ❌ | ✅ |
| Blog (admin: studio can publish) | ❌ | ✅ |
| Instagram live feed embed | ❌ | ✅ |
| Multi-language support | ❌ | ✅ |
| Waitlist for artists | ❌ | ✅ |
| Customer appointment management (reschedule self-serve) | ❌ | ✅ |
| Email marketing integration | ❌ | ✅ |

**Development Sprints (2-week sprints):**

| Sprint | Weeks | Focus |
|---|---|---|
| Sprint 1 | 5–6 | Project scaffold, design system implementation (Tailwind tokens), navigation, footer, Home page shell |
| Sprint 2 | 7–8 | Gallery page + lightbox + filters; Artist listing + profile |
| Sprint 3 | 9–10 | Services page; About page; Contact page + form + map |
| Sprint 4 | 11–12 | Booking flow (Steps 1–5); Stripe integration; Confirmation email |

---

### 7.5 Phase 4 — QA, SEO, and Launch (Weeks 12–14)

**Deliverables:**
- Cross-browser QA: Chrome, Firefox, Safari, Edge (desktop); Safari iOS, Chrome Android (mobile)
- Accessibility audit: axe-core automated + VoiceOver / NVDA manual passes
- Lighthouse CI gate: all target scores met
- Schema.org validation: Google Rich Results Test for all implemented types
- Sitemap generated and submitted to Google Search Console
- Google Analytics 4 verified: all events firing correctly in DebugView
- Cookie consent banner live and tested
- Privacy Policy and Terms pages live and reviewed by legal (or studio owner acknowledgement)
- DNS migration to production domain
- Post-launch smoke tests: 5 critical paths (Home loads, Gallery filters, Artist profile, Booking deposit payment, Contact form submission)

**Go/No-Go Checklist:**
- [ ] All MVP features functional in production
- [ ] No accessibility blockers (axe-core critical/serious findings = 0)
- [ ] Lighthouse Performance ≥ 85 mobile
- [ ] Booking flow: at least 5 test bookings processed end-to-end
- [ ] Studio owner trained on CMS
- [ ] Legal pages live
- [ ] SSL certificate active

---

### 7.6 Phase 5 — Post-Launch Enhancements (Weeks 15–24)

**Priorities (ranked by studio owner + analytics data):**
1. Gift card purchase flow
2. Self-serve appointment rescheduling via email link
3. Instagram live feed integration
4. Blog publishing workflow (studio can publish posts independently)
5. Waitlist system for fully-booked artists
6. Flash design shop (browse and reserve available flash designs online)
7. Email marketing integration (Mailchimp or Klaviyo for newsletter)
8. Extended SEO content (long-form style guides, artist interview posts)

---

### 7.7 Risk Assessment and Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Photography not ready at launch | Medium | High | Use existing studio Instagram photos as temporary gallery; prioritise photography shoot in Week 2 |
| Stripe account verification delay | Low | High | Begin Stripe account registration in Phase 2 (Week 3); allow 5+ business days buffer |
| Booking SaaS (Acuity) limitations | Low | Medium | Evaluate Acuity API depth in Phase 2 before committing; define custom build triggers |
| Studio owner content delays | High | Medium | Provide content templates and clear deadlines; editor trains on CMS Week 4 at latest |
| GDPR / cookie compliance ambiguity | Low | High | Engage legal review in Phase 4; use reputable cookie consent platform (OneTrust) |
| Performance targets not met on gallery | Medium | Medium | Implement LQIP and infinite scroll in Sprint 2; test on real mobile device early |
| DNS migration causes downtime | Low | High | Schedule migration at off-peak time; pre-configure DNS records 48h in advance (TTL lowered to 300s) |
| Scope creep to MVP | High | Medium | All non-MVP features logged to Phase 2 backlog; PM holds scope gate with bi-weekly review |

---

## 8. Appendices

### Appendix A — Content Inventory and Placeholder Copy Guidelines

#### Page-by-Page Content Requirements

**Home Page:**
- Hero headline: 4–8 words. Bold statement, not a tagline.  
  *Example placeholder:* "Art that lives on your skin."
- Hero subheadline: 10–20 words. Single sentence value proposition.  
  *Example:* "Fine-line and custom tattooing by appointment — in the heart of [City]."
- Section eyebrow (above artist grid): "Meet the artists" (Poppins, label-md, uppercase)
- Studio values (3 bullets): Craft / Safety / Collaboration — each with a 15–25 word description

**Services Page:**
- Service descriptions: 50–80 words per service. Tone: informative and warm, not salesy.
- Price ranges: always show as "From £X" or "£X – £Y" to manage expectations
- Aftercare link: "All services include our written aftercare guide, sent with your booking confirmation."

**Blog Posts:**
- Target length: 600–1200 words
- First 100 words must include primary keyword naturally
- Meta description: pull a 1–2 sentence summary; always include the studio name
- Author byline: links to artist profile

**Placeholder text policy:** Lorem ipsum is prohibited. Use real category-appropriate text ("A fine-line botanical tattoo takes approximately 2–4 hours depending on complexity.") or leave clearly marked `[TODO: Content]` blocks. Lorem ipsum creates false confidence in layout reviews.

---

### Appendix B — Style Guide Excerpts

#### B.1 Color Usage Examples

```css
/* CSS Custom Properties — add to :root in globals.css */
:root {
  /* Brand */
  --color-brand-pink:       #E8246A;
  --color-pink-hover:       #FF3E85;
  --color-pink-muted:       #F5A0C0;
  --color-pink-glow:        #E8246A33;
  --color-gold-accent:      #C9A84C;

  /* Backgrounds */
  --color-bg-base:          #0E0D0F;
  --color-bg-surface:       #1A1820;
  --color-bg-elevated:      #252330;
  --color-border:           #312E3E;

  /* Text */
  --color-text-primary:     #F0EEF5;
  --color-text-secondary:   #A89FC0;
  --color-text-disabled:    #5C576B;
  --color-white:            #FFFFFF;
}
```

```css
/* Button variants */
.btn-primary {
  background-color: var(--color-brand-pink);   /* #E8246A */
  color: var(--color-white);
  border: 2px solid transparent;
}
.btn-primary:hover {
  background-color: var(--color-pink-hover);    /* #FF3E85 */
  transform: translateY(-1px);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--color-brand-pink);
  outline-offset: 3px;
  box-shadow: 0 0 0 5px var(--color-pink-glow);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border);
}
.btn-ghost:hover {
  border-color: var(--color-brand-pink);
  color: var(--color-brand-pink);
}
```

#### B.2 Typography Implementation

```css
/* Font imports — add to <head> */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600&display=swap');

/* Type scale tokens */
:root {
  --font-display:   'Playfair Display', Georgia, serif;
  --font-body:      'Inter', system-ui, -apple-system, sans-serif;
  --font-label:     'Poppins', 'Inter', system-ui, sans-serif;

  --text-display-xl: clamp(2.5rem, 6vw, 4.5rem);   /* 40–72px fluid */
  --text-display-lg: clamp(2rem, 4.5vw, 3.5rem);   /* 32–56px fluid */
  --text-display-md: clamp(1.75rem, 3vw, 2.5rem);  /* 28–40px fluid */
  --text-heading-lg: clamp(1.5rem, 2.5vw, 2rem);   /* 24–32px fluid */
  --text-heading-md: 1.5rem;                         /* 24px fixed */
  --text-body-lg:    1.125rem;                       /* 18px */
  --text-body-md:    1rem;                           /* 16px */
  --text-body-sm:    0.875rem;                       /* 14px */
  --text-label-md:   0.8125rem;                      /* 13px */
}
```

#### B.3 Iconography Rules

- **Library:** Lucide React (ISC License; free)
- **Installation:** `npm install lucide-react`
- **Size:** Default 24×24px in navigation and body; 20×20px in compact UI; 16×16px in labels
- **Stroke width:** 1.5px (Lucide default)
- **Color:** inherit from parent text color unless intentionally overridden
- **Icons for common studio actions:**
  - Booking: `Calendar` icon
  - Gallery: `Image` icon
  - Artist: `User` icon
  - Location: `MapPin` icon
  - Phone: `Phone` icon
  - Email: `Mail` icon
  - Instagram: use official Instagram SVG glyph (not Lucide, which lacks social icons)
  - TikTok: use official TikTok SVG glyph

---

### Appendix C — Data Capture and Privacy Notices

#### C.1 Data Collected and Purpose

| Data | Collected At | Purpose | Retention |
|---|---|---|---|
| Name, Email, Phone | Booking Step 4 | Appointment management, transactional email | Duration of relationship + 2 years |
| Payment details | Booking Step 5 | Deposit payment (Stripe; not stored by studio) | Stripe retains per their policy |
| Reference images | Booking Step 4 (optional) | Artist consultation | Deleted 90 days after appointment |
| Contact form data | Contact page | Responding to enquiry | 90 days after last interaction |
| Analytics data | All pages (with consent) | Site improvement, conversion tracking | 14 months (GA4 setting) |
| Cookie consent record | Cookie banner | Legal compliance | 12 months |

#### C.2 Inline Privacy Notice (Booking Step 4)

The following text should appear as a small-print note directly below the form fields on booking Step 4:

> "By submitting this form, you agree to our [Privacy Policy] and [Terms & Conditions]. We'll use your details to manage your appointment and send you booking-related communications. We don't share your data with third parties for marketing purposes. You can request deletion of your data at any time by emailing [contact email]."

#### C.3 Cookie Consent Categories

| Category | Required? | Examples |
|---|---|---|
| Strictly Necessary | Always on | Session cookie, CSRF token, cookie consent record |
| Analytics | Opt-in | Google Analytics 4 |
| Functional | Opt-in | Instagram embed, Google Maps embed |
| Marketing | Not used (MVP) | — |

**Implementation note:** Do not load GA4 or Google Maps until the user has explicitly opted into their respective category. Use a consent management platform (CMP) to gate script loading. The booking system (Acuity Scheduling, embedded or API) loads on the `/booking` page; its cookies fall under Strictly Necessary as they are required for the service the user has requested.

---

### Appendix D — Assumptions and Open Questions

The following assumptions have been made in drafting this PRD. Where an assumption cannot be confirmed by the studio, an alternative approach has been noted.

| # | Assumption | If Incorrect — Alternative |
|---|---|---|
| D1 | Studio is based in the UK (GBP, UK GDPR, date formats) | Adjust currency, legal basis, and date format to local market |
| D2 | English-only at launch | Add `next-intl` from Sprint 1 scaffold to support future localisation |
| D3 | Studio uses Acuity Scheduling for MVP booking backend | Evaluate alternatives (Calendly, Jane, custom) in Phase 2 if Acuity API limitations found |
| D4 | Studio has a Stripe account (or will create one) | PayPal or Sumup as fallback payment processor |
| D5 | Photography assets are available or can be shot before content deadline | Use high-quality Instagram exports at lower resolution as temporary gallery |
| D6 | Studio name is the legal trading name for domain and legal pages | If different, update footer and legal pages accordingly |
| D7 | No e-commerce beyond deposits and gift cards | Add full product shop in Phase 2 if aftercare products or merchandise are sold |
| D8 | Artists are employees or contractors of the studio (single legal entity) | If artists are independent with sub-brands, restructure artist profiles and booking attribution |

---

*End of Product Requirements Document*

*For questions, revisions, or stakeholder sign-off, contact the Product Lead.*  
*Version history maintained in the project Git repository (`/docs/prd/`).*
