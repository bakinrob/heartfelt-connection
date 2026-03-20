import ServicePage from "./ServicePage";

const Taxes = () => (
  <ServicePage
    title="Rapport de taxes"
    subtitle="Taxes de Ventes"
    description="Analyser et gérer la TPS/TVH et la TVP canadiennes. Nous suivons l'éligibilité pour l'enregistrement de votre entreprise dans les provinces/états concernés et mettons en œuvre les meilleures pratiques."
    features={[
      "Gestion complète de la TPS/TVH et TVQ",
      "Suivi de l'éligibilité à l'enregistrement provincial",
      "Déclarations de taxes trimestrielles et annuelles",
      "Optimisation fiscale pour réduire votre charge",
      "Conformité réglementaire assurée",
    ]}
  />
);

export default Taxes;
