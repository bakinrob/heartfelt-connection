import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Monitor, HardHat, Briefcase } from "lucide-react";

const sectors = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Solutions comptables spécialisées pour les entreprises de commerce en ligne, incluant la gestion multi-devises et la conformité fiscale internationale.",
  },
  {
    icon: Monitor,
    title: "Technologie",
    desc: "Expertise financière pour les startups tech et les entreprises SaaS, avec une compréhension approfondie des métriques clés du secteur.",
  },
  {
    icon: HardHat,
    title: "Entrepreneurs",
    desc: "Gestion comptable adaptée aux entrepreneurs et travailleurs autonomes, incluant la facturation de projet et le suivi des dépenses.",
  },
  {
    icon: Briefcase,
    title: "Professionnels",
    desc: "Services financiers sur mesure pour les cabinets professionnels, avocats, médecins et consultants indépendants.",
  },
];

const Expertise = () => {
  return (
    <Layout>
      <section className="bg-cream py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Expertise sectorielle</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous sommes focalisés sur 4 secteurs clés pour offrir des solutions financières modernes et spécialisées.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:shadow-lg transition-all"
              >
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
          <h2 className="text-3xl font-bold mb-4">Discutons de votre secteur</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Contactez-nous pour découvrir comment notre expertise sectorielle peut bénéficier à votre entreprise.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
            <a href="/#book-now">Contactez-nous</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;
