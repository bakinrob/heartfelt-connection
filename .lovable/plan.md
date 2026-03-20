

## Plan: Motion & Animation System Overhaul

### What Changes
Transform the current site from basic Framer Motion fade-ins into a cinematic, premium animation experience inspired by the Fintiq/Ledger references and the detailed animation brief.

### New Dependencies
- `lenis` — smooth inertia scrolling
- `gsap` — ScrollTrigger-based reveals (more performant than Framer Motion for scroll animations)

### New Files

**1. `src/components/animations/StaggeredFade.tsx`**
Character-by-character heading reveal. Splits text into `<motion.span>` elements, each with `delay: i * 0.07s`. Uses `useInView` to trigger only when scrolled into view.

**2. `src/components/animations/FadeUpBlur.tsx`**
Wrapper for paragraphs/CTAs. Animates from `opacity: 0, y: 20, blur(8px)` to clear. Accepts `delay` prop for sequencing.

**3. `src/components/animations/FadeInScale.tsx`**
Wrapper for cards/images. Animates from `opacity: 0, scale: 0.9` to full. Accepts `index` and `staggerDelay` props for grid staggering.

**4. `src/components/animations/ScrambleText.tsx`**
Hero "decryption" effect. Characters cycle through random alphanumerics via `requestAnimationFrame` before resolving to real letters. Accepts `delay` prop for staggering multiple lines.

**5. `src/hooks/useSmoothScroll.ts`**
Lenis initialization hook with `duration: 1.2`, exponential easing, cleanup on unmount.

### Modified Files

**6. `src/index.css`**
- Add liquid-glass button utilities (backdrop-blur, gradient border mask via `::before`)
- Add 3D perspective tilt base styles
- Add cinematic typography classes: fluid `clamp()` sizing, `leading-[0.95]`, `tracking-[-0.04em]`
- Add section label utility: `text-xs uppercase tracking-[0.34em]` muted color

**7. `src/components/home/HeroSection.tsx`**
- Replace basic `motion.div` fade with `ScrambleText` for the headline
- Add pill badge above headline ("All-in-One Accounting" style)
- Add scroll indicator at bottom (small "Scroll" label + bouncing ChevronDown)
- Sequence: ScrambleText title → FadeUpBlur subtitle (0.3s) → FadeUpBlur CTA (0.5s)
- Subtle gradient background wash instead of flat cream

**8. `src/components/home/ServicesGrid.tsx`**
- Replace `motion.div` cards with `FadeInScale` wrappers (index-based stagger)
- Add 3D perspective tilt on hover via mouse position tracking
- Liquid-glass hover effect on cards
- Rounded icon containers with light accent background

**9. `src/components/home/WhyChooseUsTabs.tsx`**
- `StaggeredFade` for section heading
- `FadeUpBlur` for tab content transitions
- Larger tab pills with smoother active transitions

**10. `src/components/home/WhyChooseUsNumbered.tsx`**
- `StaggeredFade` for heading
- Left accent line on hover for each item
- GSAP ScrollTrigger for staggered item reveals

**11. `src/components/home/ExpertiseCounters.tsx`**
- `StaggeredFade` for heading
- `FadeInScale` for each counter card

**12. `src/components/home/Testimonials.tsx`**
- Add star ratings above quotes
- `FadeUpBlur` for quote transitions
- Soft card shadow upgrade

**13. `src/components/home/Partners.tsx`**
- Auto-scrolling infinite carousel (duplicate array, smooth scroll loop)
- Replace static grid with continuous horizontal scroll

**14. `src/components/home/ContactForm.tsx`**
- `StaggeredFade` heading
- `FadeUpBlur` for form fields
- Input focus glow effect
- Glass-morphism card style

**15. `src/components/Navbar.tsx`**
- Enhanced frosted-glass effect with increased blur
- Liquid-glass outline CTA button style

**16. `src/pages/Index.tsx`**
- Initialize Lenis smooth scroll via `useSmoothScroll` hook
- Initialize GSAP ScrollTrigger for section reveals

### Animation Rhythm (Every Section)
```text
StaggeredFade → title (char-by-char)
FadeUpBlur    → body text (delay 0.3s)
FadeUpBlur    → CTA/action (delay 0.5s)
FadeInScale   → cards/images (index * 0.1s stagger)
```

### Technical Details
- GSAP + ScrollTrigger dynamically imported to keep bundle lean
- Lenis cleaned up on unmount to prevent memory leaks
- All existing i18n keys and content preserved
- 3D tilt uses `onMouseMove` handler calculating rotateX/rotateY from cursor position relative to card center
- Liquid-glass buttons use `backdrop-filter: blur(4px)` + `::before` with `mask-composite: exclude` for gradient border

