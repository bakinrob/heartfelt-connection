import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  image?: string;
}

const ServicePage = ({ title, subtitle, description, features, image }: ServicePageProps) => {
  const { t } = useI18n();

  return (
    <Layout>
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-accent font-medium text-sm mb-3 uppercase tracking-wider">{subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">{title}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
                <a href="/#book-now">{t("servicePage.cta")}</a>
              </Button>
            </motion.div>
            {image && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <img src={image} alt={title} className="rounded-2xl w-full object-cover" loading="eager" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {features && features.length > 0 && (
        <section className="py-20">
          <div className="container max-w-3xl">
            <ul className="space-y-4">
              {features.map((f, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">{t("servicePage.ready")}</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">{t("servicePage.readyDesc")}</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
            <a href="/#book-now">{t("servicePage.contactUs")}</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
