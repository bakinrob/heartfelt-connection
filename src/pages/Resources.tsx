import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const Resources = () => {
  const { t, lang } = useI18n();

  const posts = [
    { titleKey: "post.1", date: "2024-09-15", slug: "optimiser-comptabilite" },
    { titleKey: "post.2", date: "2024-09-10", slug: "cfo-fractionnel" },
    { titleKey: "post.3", date: "2024-08-28", slug: "guide-tps-tvh" },
    { titleKey: "post.4", date: "2024-08-15", slug: "migrer-xero" },
    { titleKey: "post.5", date: "2024-08-01", slug: "erreurs-comptables" },
    { titleKey: "post.6", date: "2024-07-20", slug: "paie-simplifiee" },
  ];

  return (
    <Layout>
      <section className="bg-cream py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("resources.title")}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("resources.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/40 transition-all group cursor-pointer">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">{t(post.titleKey)}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
