import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    id: "bureau",
    label: "Bureau propre VS encombré",
    title: "Bureau propre vs encombré",
    points: [
      "Remplacer les opérations traditionnelles basées sur le papier par des flux de travail numériques rationalisés",
      "Exploiter l'infrastructure basée sur le cloud pour une gestion améliorée des documents",
      "Accédez à des données financières complètes via des interfaces numériques intuitives.",
      "Maintenez une organisation de l'espace de travail impeccable grâce à des opérations sans papier.",
      "Projetez un professionnalisme élevé avec des pratiques comptables modernes.",
    ],
    image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-1.png",
  },
  {
    id: "cloud",
    label: "Accès complet dans le cloud",
    title: "Accès complet dans le cloud",
    points: [
      "Réduisez la latence opérationnelle grâce au traitement natif du cloud.",
      "Exécutez une synchronisation complète des données sur des plateformes intégrées.",
      "Mettez en œuvre des mesures de sécurité de niveau entreprise pour les données financières confidentielles.",
      "Optimisez l'allocation des ressources grâce à une architecture cloud centralisée.",
    ],
    image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-2.png",
  },
  {
    id: "clarte",
    label: "Gagner en clarté",
    title: "Gagnez en clarté",
    points: [
      "Notre système utilise le tableau de bord Xero pour des informations financières en temps réel, contrairement aux méthodes de reporting traditionnelles basées sur le papier utilisées par d'autres.",
      "Notre système basé sur le cloud garantit que les informations sont accessibles de n'importe où, éliminant ainsi les limitations d'un accès uniquement au bureau.",
    ],
    image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-3.png",
  },
  {
    id: "au-dela",
    label: "Au-delà de la comptabilité",
    title: "Au-delà de la comptabilité",
    points: [
      "Nous simplifions la communication en enregistrant les solutions et en les envoyant via Loom, éliminant ainsi le besoin de réunions chronophages et permettant une plus grande flexibilité.",
      "Les rapports du CFO sont livrés via des enregistrements Loom, garantissant des mises à jour claires et efficaces sans les tracas de la planification ou de l'attente des réunions.",
    ],
    image: "https://namaca.ca/wp-content/uploads/2024/11/Frame-1000003751-4.png",
  },
];

const WhyChooseUsTabs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        >
          Pourquoi nous choisir ?
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
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="rounded-2xl max-h-[400px] object-contain"
                    loading="lazy"
                  />
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
