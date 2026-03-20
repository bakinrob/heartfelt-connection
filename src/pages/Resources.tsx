import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const posts = [
  { title: "Comment optimiser votre comptabilité en ligne", date: "2024-09-15", slug: "optimiser-comptabilite" },
  { title: "Les avantages d'un CFO fractionnel pour les startups", date: "2024-09-10", slug: "cfo-fractionnel" },
  { title: "Guide de la TPS/TVH pour les petites entreprises", date: "2024-08-28", slug: "guide-tps-tvh" },
  { title: "Pourquoi migrer vers Xero pour votre comptabilité", date: "2024-08-15", slug: "migrer-xero" },
  { title: "5 erreurs comptables à éviter en démarrage", date: "2024-08-01", slug: "erreurs-comptables" },
  { title: "La paie simplifiée : guide complet", date: "2024-07-20", slug: "paie-simplifiee" },
];

const Resources = () => {
  return (
    <Layout>
      <section className="bg-cream py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ressources</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Articles, guides et conseils pour optimiser la gestion financière de votre entreprise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/40 transition-all group cursor-pointer"
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" })}</p>
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">{post.title}</h3>
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
