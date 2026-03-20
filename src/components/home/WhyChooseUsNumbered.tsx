import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

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
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("whyNumbered.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("whyNumbered.subtitle")}</p>
            </motion.div>
            <div className="hidden lg:block mt-10">
              <img src="https://namaca.ca/wp-content/uploads/2024/09/6782-1.png" alt="Why choose Namaca" className="rounded-2xl max-h-[500px] object-cover" loading="lazy" />
            </div>
          </div>
          <div className="space-y-0">
            {items.map((item, i) => (
              <motion.div key={item.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border-b border-border py-8 first:pt-0">
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-bold text-accent/20 shrink-0 leading-none">{item.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsNumbered;
