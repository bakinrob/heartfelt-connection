

## Plan: Integrate Premium Navbar + Hero Components (Namaca-Adapted)

The user wants to replace the current Navbar and Hero with components adapted from three reference templates: a mega-menu header, an animated hero section with scroll-reveal, and a container scroll animation. All adapted for Namaca's dark cinematic fintech branding.

### What Changes

**1. Create `src/components/ui/animated-group.tsx`**
- Port the `AnimatedGroup` component from the ibelick reference
- Remove `"use client"` directive (not Next.js)
- Uses framer-motion variants with preset animations (fade, slide, scale, blur, blur-slide, etc.)

**2. Create `src/components/ui/text-effect.tsx`**
- Port the `TextEffect` component from ibelick reference
- Character/word/line-level text animation with presets (blur, shake, scale, fade, slide)
- Remove `"use client"`, fix `\n` line splitting for non-Next environments

**3. Create `src/components/ui/container-scroll-animation.tsx`**
- Port the `ContainerScroll` component — scroll-driven 3D perspective card reveal
- Replace `next/image` with standard `<img>` tags
- Used below the hero to showcase a dashboard screenshot with scroll-triggered rotation/scale

**4. Rewrite `src/components/Navbar.tsx`**
- Mega-menu style navigation adapted from Header1 template
- **Solutions** dropdown with sub-items (Bookkeeping, Payroll, AP, AR, Fractional CFO, Tax) + description panel + "Book a call" CTA inside dropdown
- **Healthcare** dropdown with sub-items (Medical Practices, Dental, Pharmacies, Specialist Clinics)
- **About** and **Resources** as direct links
- Logo: "Namaca." in Fraunces italic + orange dot (keep current)
- CTA: "Book a Call" button (keep current orange style)
- Remove "Sign in" / "Get started" — not applicable for Namaca
- Mobile: full-screen slide-down menu with collapsible sections
- Uses `NavigationMenu` from existing shadcn component for desktop dropdowns
- Frosted glass on scroll (keep current scroll behavior)

**5. Rewrite `src/components/home/HeroSection.tsx`**
- Merge the animated hero pattern with current Namaca content
- Keep: 3D FinanceScene background, gradient overlay, dot-grid, scroll indicator
- Replace ScrambleText with `TextEffect` component using blur preset for headline reveal
- Add `AnimatedGroup` wrapper for stat badges and CTAs (staggered blur-slide entrance)
- Keep eyebrow pill, stat badges, CTA buttons with current Namaca styling
- Add the `ContainerScroll` below the hero fold — showing a Namaca dashboard screenshot (Unsplash finance dashboard image) with scroll-driven 3D tilt reveal

**6. Update `src/pages/Index.tsx`**
- Add `ContainerScroll` section between HeroSection and TrustStrip (or integrate into HeroSection)

### Dependencies
- All NPM packages already installed (framer-motion, lucide-react, @radix-ui/react-navigation-menu, etc.)
- No new dependencies needed

### Files Summary
| Action | File |
|--------|------|
| Create | `src/components/ui/animated-group.tsx` |
| Create | `src/components/ui/text-effect.tsx` |
| Create | `src/components/ui/container-scroll-animation.tsx` |
| Rewrite | `src/components/Navbar.tsx` |
| Rewrite | `src/components/home/HeroSection.tsx` |
| Edit | `src/pages/Index.tsx` |

### Design Decisions
- All components adapted to use `react-router-dom` `Link` instead of Next.js `Link`
- Dark theme preserved throughout — dropdown menus use glass-card styling with `bg-namaca-navy` backgrounds
- Navigation dropdown content panels use the existing `glass-card` and `orange-card` utilities
- Typography rules maintained: Fraunces for display, Manrope for body/nav/buttons
- Container scroll animation shows a finance dashboard image with the headline "Your finances, one scroll away" using Namaca's orange accent

