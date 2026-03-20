import ScrambleText from "@/components/animations/ScrambleText";
import FadeUpBlur from "@/components/animations/FadeUpBlur";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ChevronDown, Star } from "lucide-react";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative bg-gradient-to-br from-cream via-background to-secondary overflow-hidden py-20 md:py-32 min-h-[85vh] flex items-center">
      {/* Subtle decorative gradient orbs */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Pill badge */}
            <FadeUpBlur delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {t("hero.title.highlight")} — All-in-One Platform
              </span>
            </FadeUpBlur>

            {/* Scramble headline */}
            <ScrambleText
              text={`${t("hero.title.1")} ${t("hero.title.highlight")} ${t("hero.title.2")}`}
              as="h1"
              className="heading-display text-primary mb-0"
              delay={200}
              speed={30}
            />

            {/* Orange underline accent */}
            <FadeUpBlur delay={0.6}>
              <div className="h-[5px] w-32 bg-accent rounded-full mt-4 mb-8" />
            </FadeUpBlur>

            {/* Subtitle */}
            <FadeUpBlur delay={0.4}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                {t("hero.desc")}
              </p>
            </FadeUpBlur>

            {/* CTA + social proof */}
            <FadeUpBlur delay={0.6} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-[1.03]">
                <a href="#book-now">{t("hero.cta")}</a>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span>5.0 · 150+ clients</span>
              </div>
            </FadeUpBlur>
          </div>

          {/* Hero image with floating effect */}
          <FadeUpBlur delay={0.3} className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 rounded-3xl blur-2xl" />
              <img
                src="https://namaca.ca/wp-content/uploads/2024/09/Frame-1000003816.png"
                alt="Professional accounting services"
                className="relative rounded-3xl object-cover w-full shadow-card"
                loading="eager"
              />
            </div>
          </FadeUpBlur>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50">
        <span className="text-[10px] uppercase tracking-[0.34em] font-medium">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
