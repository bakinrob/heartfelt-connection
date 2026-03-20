import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/lib/i18n";

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
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        >
          {t("why.title")}
        </motion.h2>

        <Tabs defaultValue="bureau" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-full px-5 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-none border border-border data-[state=active]:border-accent"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">{tab.title}</h3>
                  <ul className="space-y-3">
                    {tab.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img src={tab.image} alt={tab.title} className="rounded-2xl max-h-[400px] object-contain" loading="lazy" />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WhyChooseUsTabs;
