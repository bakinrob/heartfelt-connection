import { useI18n } from "@/lib/i18n";
import StaggeredFade from "@/components/animations/StaggeredFade";
import FadeUpBlur from "@/components/animations/FadeUpBlur";
import FadeInScale from "@/components/animations/FadeInScale";

const WhyChooseUsNumbered = () => {
  const { t } = useI18n();

  const items = [
    { num: "01", title: t("whyNumbered.1.title"), desc: t("whyNumbered.1.desc") },
    { num: "02", title: t("whyNumbered.2.title"), desc: t("whyNumbered.2.desc") },
    { num: "03", title: t("whyNumbered.3.title"), desc: t("whyNumbered.3.desc") },
    { num: "04", title: t("whyNumbered.4.title"), desc: t("whyNumbered.4.desc") },
    { num: "05", title: t("whyNumbered.5.title"), desc: t("whyNumbered.5.desc") },
    { num: "06", title: t("whyNumbered.6.title"), desc: t("whyNumbered.6.desc") },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="section-label">{t("whyNumbered.title")}</span>
            <StaggeredFade
              text={t("whyNumbered.title")}
              as="h2"
              className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading"
              charDelay={0.03}
            />
            <FadeUpBlur delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">{t("whyNumbered.subtitle")}</p>
            </FadeUpBlur>
            <FadeInScale delay={0.4} className="hidden lg:block mt-10">
              <img src="https://namaca.ca/wp-content/uploads/2024/09/6782-1.png" alt="Why choose Namaca" className="rounded-3xl max-h-[500px] object-cover shadow-card" loading="lazy" />
            </FadeInScale>
          </div>
          <div className="space-y-0">
            {items.map((item, i) => (
              <FadeUpBlur key={item.num} delay={i * 0.08}>
                <div className="group border-b border-border py-8 first:pt-0 hover:pl-2 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-accent/20 group-hover:text-accent/40 shrink-0 leading-none transition-colors duration-300 font-heading">{item.num}</span>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="h-0 w-0 group-hover:w-6 group-hover:h-[2px] bg-accent transition-all duration-300 rounded-full" />
                        <h3 className="text-xl font-bold text-primary mb-2 font-heading">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUpBlur>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsNumbered;
