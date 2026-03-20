import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Monitor, HardHat, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Expertise = () => {
  const { t } = useI18n();

  const sectors = [
    { icon: ShoppingCart, title: t("expertisePage.ecommerce"), desc: t("expertisePage.ecommerce.desc") },
    { icon: Monitor, title: t("expertisePage.tech"), desc: t("expertisePage.tech.desc") },
    { icon: HardHat, title: t("expertisePage.contractors"), desc: t("expertisePage.contractors.desc") },
    { icon: Briefcase, title: t("expertisePage.professionals"), desc: t("expertisePage.professionals.desc") },
  ];

  return (
    <Layout>
      <section className="bg-cream py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("expertisePage.title")}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("expertisePage.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:shadow-lg transition-all">
                <s.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">{t("expertisePage.cta")}</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">{t("expertisePage.ctaDesc")}</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
            <a href="/#book-now">{t("nav.contact")}</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;
