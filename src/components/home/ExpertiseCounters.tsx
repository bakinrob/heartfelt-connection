import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import StaggeredFade from "@/components/animations/StaggeredFade";
import FadeUpBlur from "@/components/animations/FadeUpBlur";
import FadeInScale from "@/components/animations/FadeInScale";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / target;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-accent font-heading">
      {count}{suffix}
    </span>
  );
};

const ExpertiseCounters = () => {
  const { t } = useI18n();

  const stats = [
    { label: t("expertise.stat1"), value: 100, suffix: "%" },
    { label: t("expertise.stat2"), value: 10, suffix: "+" },
    { label: t("expertise.stat3"), value: 99, suffix: "%" },
    { label: t("expertise.stat4"), value: 50, suffix: "+" },
  ];

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-label !text-primary-foreground/40">{t("expertise.title")}</span>
          <StaggeredFade
            text={t("expertise.title")}
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
            charDelay={0.03}
          />
          <FadeUpBlur delay={0.3}>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">{t("expertise.subtitle")}</p>
          </FadeUpBlur>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeInScale key={stat.label} index={i} staggerDelay={0.12}>
              <div className="text-center p-6 rounded-2xl border border-primary-foreground/10 backdrop-blur-sm">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            </FadeInScale>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCounters;
