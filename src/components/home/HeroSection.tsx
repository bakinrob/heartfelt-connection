import { lazy, Suspense } from "react";
import ScrambleText from "@/components/animations/ScrambleText";
import FadeUpBlur from "@/components/animations/FadeUpBlur";
import { ChevronDown } from "lucide-react";

const FinanceScene = lazy(() => import("./FinanceScene"));

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden dot-grid bg-namaca-dark">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <FinanceScene />
      </Suspense>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(8,12,20,0.4) 0%, rgba(8,12,20,0.15) 40%, rgba(8,12,20,0.75) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 px-5 max-w-4xl mx-auto">
        {/* Eyebrow pill */}
        <FadeUpBlur delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-namaca-orange/30 bg-namaca-orange/[0.08] px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-namaca-orange mb-10 font-body">
            ✦ Montreal's Premier Cloud Accounting Firm
          </span>
        </FadeUpBlur>

        {/* Headline */}
        <ScrambleText
          text="Your finances."
          as="h1"
          className="font-display text-white mb-0"
          delay={200}
          speed={30}
        />
        <ScrambleText
          text="Automated."
          as="h1"
          className="font-display text-white/50 mb-0"
          delay={600}
          speed={30}
        />
        <ScrambleText
          text="Elevated."
          as="h1"
          className="font-display text-white/50 mb-0"
          delay={1000}
          speed={30}
        />

        <style>{`
          .font-display { font-size: clamp(3.2rem, 8vw, 7.5rem); line-height: 0.92; letter-spacing: -0.04em; font-weight: 600; }
        `}</style>

        {/* Subtitle */}
        <FadeUpBlur delay={0.6}>
          <p className="text-namaca-muted text-lg max-w-lg mx-auto mt-8 leading-relaxed font-body">
            CFO-level intelligence at bookkeeper prices.
            100% cloud-based, paperless, and built for
            Canadian businesses that refuse to&nbsp;stay&nbsp;small.
          </p>
        </FadeUpBlur>

        {/* Floating stat badges */}
        <FadeUpBlur delay={0.8}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              { num: "1,500+", label: "Healthcare Clients" },
              { num: "100%", label: "Cloud-Based" },
              { num: "CFO-Level", label: "At Every Plan" },
            ].map((badge) => (
              <div key={badge.label} className="glass-card rounded-2xl px-6 py-4 text-center">
                <div className="font-display text-namaca-orange text-[1.75rem] leading-none">{badge.num}</div>
                <div className="text-namaca-muted text-[0.68rem] uppercase tracking-[0.12em] mt-1 font-body">{badge.label}</div>
              </div>
            ))}
          </div>
        </FadeUpBlur>

        {/* CTA row */}
        <FadeUpBlur delay={1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#book-now"
              className="bg-namaca-orange text-white rounded-full px-8 py-4 font-semibold text-sm uppercase tracking-[0.14em] hover:bg-namaca-glow transition-all hover:scale-[1.03] font-body"
            >
              Start Free Consultation →
            </a>
            <a
              href="#services"
              className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-semibold uppercase tracking-[0.14em] hover:scale-[1.03] transition-transform font-body"
            >
              See How It Works
            </a>
          </div>
        </FadeUpBlur>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 z-10">
        <span className="text-[10px] uppercase tracking-[0.34em] font-medium font-body">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
