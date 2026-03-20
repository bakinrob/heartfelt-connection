import ServicePage from "./ServicePage";

const Bookkeeping = () => (
  <ServicePage
    title="Comptabilité"
    subtitle="Tenue de Livres"
    description="L'équipe d'experts en comptabilité cloud de Namaca fournit des livres comptables 100% précis sur lesquels vous, votre banquier et vos investisseurs pouvez compter. Notre approche moderne de la comptabilité transforme vos opérations financières."
    image="https://namaca.ca/wp-content/uploads/2024/09/2149085926-2-1400x494.png"
    features={[
      "Comptabilité 100% basée sur le cloud avec accès en temps réel",
      "Rapprochement bancaire automatisé et catégorisation des transactions",
      "Rapports financiers mensuels détaillés",
      "Intégration avec Xero pour des données précises et à jour",
      "Support dédié d'une équipe d'experts certifiés",
    ]}
  />
);

export default Bookkeeping;
