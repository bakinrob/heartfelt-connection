

## Plan: Rebuild Namaca.ca as a React/Lovable App

### What is Namaca?
Namaca is a Canadian accounting firm (based in Montreal) serving SMEs and startups. The current site is a WordPress/Elementor site in French, with services like bookkeeping, payroll, taxes, fractional CFO, AP/AR, and consulting.

### Brand Tokens
- **Primary dark**: `#0C111D`
- **Secondary**: `#FFFFFF`
- **Text**: `#344054`
- **Accent (orange)**: `#EA7600`
- **Dark blue-gray**: `#1D2939`
- **Light yellow**: `#FFFAEA`
- **Fonts**: "Open Sauce Sans" (headings, 700), "Inter" (body, 400/500)

### Site Structure (10 pages)
1. **Home** (Accueil) - hero, why choose us, services grid, why choose us numbered list, sector expertise with counters, testimonials carousel, partners, contact form, footer
2. **Expertise** - sector expertise page
3. **Bookkeeping** (Tenue de Livres)
4. **Payroll** (Traitement de la Paie)
5. **Taxes** (Taxes de Ventes)
6. **Fractional CFO**
7. **Accounts Payable** (Comptes Payables)
8. **Accounts Receivable** (Comptes Recevables)
9. **Consulting** (Service-Conseil)
10. **Resources** - blog listing page

### Implementation Steps

**Step 1: Design system and layout components**
- Update CSS variables to match Namaca brand colors
- Add Google Fonts (Inter; Open Sauce Sans or fallback to similar)
- Create shared `Navbar` component with logo, nav links (Accueil, Expertise, Services dropdown, Ressources), and "Contactez-nous" CTA button
- Create shared `Footer` component with contact info, social links, and site nav

**Step 2: Build the Home page**
- Hero section: heading with orange underline on "Comptabilite", subtitle text, CTA button, image collage on the right
- "Pourquoi nous choisir?" tabbed section with 4 tabs (Bureau propre, Cloud, Clarte, Au-dela)
- Services grid: 7 service cards with icons, titles, descriptions, and "Pour en savoir plus" links
- "Why choose us?" numbered scroll section (6 items: Online & Tech-Driven, No Re-training, Gain Clarity, Beyond Bookkeeping, Expert Solutions, Value Innovation)
- Sector expertise with animated counters (4 stats)
- Client testimonials carousel
- Partners logo row (Xero, DEXTools, etc.)
- Contact form section with name, email, phone, message fields

**Step 3: Build service pages**
- Create a reusable `ServicePage` layout component (hero banner, content sections, CTA)
- Build out Bookkeeping, Payroll, Taxes, Fractional CFO, AP, AR, Consulting pages using content from `pages_full.json`

**Step 4: Build Expertise and Resources pages**
- Expertise page with sector-specific content
- Resources/blog listing page showing the 18 posts from `posts_full.json` as cards

**Step 5: Routing and polish**
- Wire up all routes in `App.tsx`
- Images will reference `namaca.ca` asset URLs directly (they're publicly hosted)
- Add smooth scroll for `#book-now` anchor links
- Responsive design throughout
- Fade-in animations matching the original site

### Technical Details
- All images hotlinked from `namaca.ca/wp-content/uploads/` (already public CDN)
- Contact form will be UI-only initially (no backend); can add Supabase later
- Blog posts rendered statically from JSON data (no CMS)
- Open Sauce Sans loaded via `@font-face` if available, or fallback to a similar geometric sans
- Framer Motion for scroll animations and counter animations

