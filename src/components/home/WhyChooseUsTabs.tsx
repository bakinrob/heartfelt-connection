import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/lib/i18n";
import StaggeredFade from "@/components/animations/StaggeredFade";
import FadeUpBlur from "@/components/animations/FadeUpBlur";
import FadeInScale from "@/components/animations/FadeInScale";

const WhyChooseUsTabs = () => {
  const { t } = useI18n();

  const tabs = [
    {
      id: "bureau",
      label: t("why.tab1.label"),
      title: t("why.tab1.title"),
      points: [t("why.tab1.p1"), t("why.tab1.p2"), t("why.tab1.p3"), t("why.tab1.p4"), t("why.tab1.p5")],
      image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-1.png",
    },
    {
      id: "cloud",
      label: t("why.tab2.label"),
      title: t("why.tab2.title"),
      points: [t("why.tab2.p1"), t("why.tab2.p2"), t("why.tab2.p3"), t("why.tab2.p4")],
      image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-2.png",
    },
    {
      id: "clarte",
      label: t("why.tab3.label"),
      title: t("why.tab3.title"),
      points: [t("why.tab3.p1"), t("why.tab3.p2")],
      image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-3.png",
    },
    {
      id: "au-dela",
      label: t("why.tab4.label"),
      title: t("why.tab4.title"),
      points: [t("why.tab4.p1"), t("why.tab4.p2")],
      image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-4.png",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <span className="section-label text-center">{t("why.title")}</span>
        <StaggeredFade
          text={t("why.title")}
          as="h2"
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-heading"
          charDelay={0.03}
        />

        <Tabs defaultValue="bureau" className="w-full">
          <FadeUpBlur delay={0.2}>
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-accent/20 border border-border data-[state=active]:border-accent transition-all duration-300"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </FadeUpBlur>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <FadeUpBlur delay={0.1}>
                  <h3 className="text-2xl font-bold text-primary mb-6 font-heading">{tab.title}</h3>
                  <ul className="space-y-4">
                    {tab.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUpBlur>
                <FadeInScale delay={0.2}>
                  <img src={tab.image} alt={tab.title} className="rounded-3xl max-h-[400px] object-contain shadow-card" loading="lazy" />
                </FadeInScale>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WhyChooseUsTabs;
