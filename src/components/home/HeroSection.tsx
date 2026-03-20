import { lazy, Suspense } from "react";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import FadeUpBlur from "@/components/animations/FadeUpBlur";
import { ChevronDown } from "lucide-react";

const FinanceScene = lazy(() => import("./FinanceScene"));

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden dot-grid bg-background">
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
          <AnimatedGroup preset="blur-slide" className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-primary font-body">
              ✦ Montreal's Premier Cloud Accounting Firm
            </span>
          </AnimatedGroup>

          {/* Headline — TextEffect blur reveal */}
          <TextEffect
            per="char"
            as="h1"
            preset="blur"
            delay={0.2}
            className="font-display text-foreground mb-0"
          >
            Your finances.
          </TextEffect>
          <TextEffect
            per="char"
            as="h1"
            preset="blur"
            delay={0.6}
            className="font-display text-foreground/50 mb-0"
          >
            Automated.
          </TextEffect>
          <TextEffect
            per="char"
            as="h1"
            preset="blur"
            delay={1.0}
            className="font-display text-foreground/50 mb-0"
          >
            Elevated.
          </TextEffect>

          <style>{`
            .font-display { font-size: clamp(3.2rem, 8vw, 7.5rem); line-height: 0.92; letter-spacing: -0.04em; font-weight: 600; }
          `}</style>

          {/* Subtitle */}
          <FadeUpBlur delay={0.6}>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mt-8 leading-relaxed font-body">
              CFO-level intelligence at bookkeeper prices.
              100% cloud-based, paperless, and built for
              Canadian businesses that refuse to&nbsp;stay&nbsp;small.
            </p>
          </FadeUpBlur>

          {/* Floating stat badges */}
          <AnimatedGroup
            preset="blur-slide"
            variants={{ item: transitionVariants.item }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {[
              { num: "1,500+", label: "Healthcare Clients" },
              { num: "100%", label: "Cloud-Based" },
              { num: "CFO-Level", label: "At Every Plan" },
            ].map((badge) => (
              <div key={badge.label} className="glass-card rounded-2xl px-6 py-4 text-center">
                <div className="font-display text-primary text-[1.75rem] leading-none">{badge.num}</div>
                <div className="text-muted-foreground text-[0.68rem] uppercase tracking-[0.12em] mt-1 font-body">{badge.label}</div>
              </div>
            ))}
          </AnimatedGroup>

          {/* CTA row */}
          <AnimatedGroup preset="blur-slide" className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#book-now"
              className="bg-primary text-primary-foreground rounded-full px-8 py-4 font-semibold text-sm uppercase tracking-[0.14em] hover:bg-[hsl(var(--accent))] transition-all hover:scale-[1.03] font-body"
            >
              Start Free Consultation →
            </a>
            <a
              href="#services"
              className="liquid-glass rounded-full px-8 py-4 text-foreground text-sm font-semibold uppercase tracking-[0.14em] hover:scale-[1.03] transition-transform font-body"
            >
              See How It Works
            </a>
          </AnimatedGroup>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/30 z-10">
          <span className="text-[10px] uppercase tracking-[0.34em] font-medium font-body">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* Dashboard Scroll Reveal */}
      <section className="bg-background">
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <p className="text-primary text-xs uppercase tracking-[0.34em] font-semibold font-body mb-4">
                Real-Time Visibility
              </p>
              <h2 className="font-display text-foreground heading-display">
                Your finances,{" "}
                <span className="text-primary">one scroll away.</span>
              </h2>
            </div>
          }
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
            alt="Namaca financial dashboard"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>
    </>
  );
};

export default HeroSection;
