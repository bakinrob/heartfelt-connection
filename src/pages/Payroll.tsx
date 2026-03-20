import ServicePage from "./ServicePage";

const Payroll = () => (
  <ServicePage
    title="Service de paie"
    subtitle="Traitement de la Paie"
    description="Abandonnez les anciennes méthodes de traitement de la paie. Notre service de paie en ligne de pointe transforme les opérations de votre entreprise. Plus de temps perdu avec les feuilles de temps ou la conformité."
    image="https://namaca.ca/wp-content/uploads/2024/09/2148236872-1-1400x494.png"
    features={[
      "Traitement de la paie automatisé et sans erreur",
      "Conformité aux réglementations fédérales et provinciales",
      "Gestion des retenues à la source et des avantages sociaux",
      "Portail en libre-service pour les employés",
      "Déclarations de fin d'année (T4, RL-1) automatisées",
    ]}
  />
);

export default Payroll;
