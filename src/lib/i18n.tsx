import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.expertise": { fr: "Expertise", en: "Expertise" },
  "nav.services": { fr: "Services", en: "Services" },
  "nav.resources": { fr: "Ressources", en: "Resources" },
  "nav.contact": { fr: "Contactez-nous", en: "Contact Us" },

  // Service names
  "service.bookkeeping": { fr: "Comptabilité", en: "Bookkeeping" },
  "service.payroll": { fr: "Service de paie", en: "Payroll Services" },
  "service.taxes": { fr: "Rapport de taxes", en: "Tax Reporting" },
  "service.cfo": { fr: "Fractional CFO", en: "Fractional CFO" },
  "service.ap": { fr: "Comptes fournisseurs", en: "Accounts Payable" },
  "service.ar": { fr: "Comptes clients", en: "Accounts Receivable" },
  "service.consulting": { fr: "Services / Conseils", en: "Consulting" },

  // Hero
  "hero.title.1": { fr: "Le future de la", en: "The future of" },
  "hero.title.highlight": { fr: "Comptabilité", en: "Accounting" },
  "hero.title.2": { fr: "pour les PME et les entreprises en démarrage", en: "for SMEs and startups" },
  "hero.desc": {
    fr: "Avec notre approche combinant équipe, technique et technologie, Namaca permet aux petites entreprises et aux startups de prendre en charge leurs finances, de connaître les tenants et aboutissants de leur entreprise et de libérer leur potentiel sans se ruiner.",
    en: "With our approach combining team, technique, and technology, Namaca empowers small businesses and startups to take charge of their finances, understand the ins and outs of their business, and unlock their potential without breaking the bank.",
  },
  "hero.cta": { fr: "Planifier un appel", en: "Schedule a Call" },

  // Why Choose Us Tabs
  "why.title": { fr: "Pourquoi nous choisir ?", en: "Why Choose Us?" },
  "why.tab1.label": { fr: "Bureau propre VS encombré", en: "Clean Desk VS Cluttered" },
  "why.tab1.title": { fr: "Bureau propre vs encombré", en: "Clean Desk vs Cluttered" },
  "why.tab1.p1": {
    fr: "Remplacer les opérations traditionnelles basées sur le papier par des flux de travail numériques rationalisés",
    en: "Replace traditional paper-based operations with streamlined digital workflows",
  },
  "why.tab1.p2": {
    fr: "Exploiter l'infrastructure basée sur le cloud pour une gestion améliorée des documents",
    en: "Leverage cloud-based infrastructure for enhanced document management",
  },
  "why.tab1.p3": {
    fr: "Accédez à des données financières complètes via des interfaces numériques intuitives.",
    en: "Access comprehensive financial data through intuitive digital interfaces.",
  },
  "why.tab1.p4": {
    fr: "Maintenez une organisation de l'espace de travail impeccable grâce à des opérations sans papier.",
    en: "Maintain impeccable workspace organization with paperless operations.",
  },
  "why.tab1.p5": {
    fr: "Projetez un professionnalisme élevé avec des pratiques comptables modernes.",
    en: "Project high professionalism with modern accounting practices.",
  },
  "why.tab2.label": { fr: "Accès complet dans le cloud", en: "Full Cloud Access" },
  "why.tab2.title": { fr: "Accès complet dans le cloud", en: "Full Cloud Access" },
  "why.tab2.p1": {
    fr: "Réduisez la latence opérationnelle grâce au traitement natif du cloud.",
    en: "Reduce operational latency with cloud-native processing.",
  },
  "why.tab2.p2": {
    fr: "Exécutez une synchronisation complète des données sur des plateformes intégrées.",
    en: "Execute complete data synchronization across integrated platforms.",
  },
  "why.tab2.p3": {
    fr: "Mettez en œuvre des mesures de sécurité de niveau entreprise pour les données financières confidentielles.",
    en: "Implement enterprise-level security measures for confidential financial data.",
  },
  "why.tab2.p4": {
    fr: "Optimisez l'allocation des ressources grâce à une architecture cloud centralisée.",
    en: "Optimize resource allocation through centralized cloud architecture.",
  },
  "why.tab3.label": { fr: "Gagner en clarté", en: "Gain Clarity" },
  "why.tab3.title": { fr: "Gagnez en clarté", en: "Gain Clarity" },
  "why.tab3.p1": {
    fr: "Notre système utilise le tableau de bord Xero pour des informations financières en temps réel, contrairement aux méthodes de reporting traditionnelles basées sur le papier utilisées par d'autres.",
    en: "Our system uses the Xero dashboard for real-time financial insights, unlike the traditional paper-based reporting methods used by others.",
  },
  "why.tab3.p2": {
    fr: "Notre système basé sur le cloud garantit que les informations sont accessibles de n'importe où, éliminant ainsi les limitations d'un accès uniquement au bureau.",
    en: "Our cloud-based system ensures information is accessible from anywhere, eliminating the limitations of office-only access.",
  },
  "why.tab4.label": { fr: "Au-delà de la comptabilité", en: "Beyond Bookkeeping" },
  "why.tab4.title": { fr: "Au-delà de la comptabilité", en: "Beyond Bookkeeping" },
  "why.tab4.p1": {
    fr: "Nous simplifions la communication en enregistrant les solutions et en les envoyant via Loom, éliminant ainsi le besoin de réunions chronophages et permettant une plus grande flexibilité.",
    en: "We simplify communication by recording solutions and sending them via Loom, eliminating the need for time-consuming meetings and allowing greater flexibility.",
  },
  "why.tab4.p2": {
    fr: "Les rapports du CFO sont livrés via des enregistrements Loom, garantissant des mises à jour claires et efficaces sans les tracas de la planification ou de l'attente des réunions.",
    en: "CFO reports are delivered via Loom recordings, ensuring clear and efficient updates without the hassle of scheduling or waiting for meetings.",
  },

  // Services Grid
  "services.title": {
    fr: "Service adapté à vos besoins uniques de petite entreprise",
    en: "Services tailored to your unique small business needs",
  },
  "services.bookkeeping.desc": {
    fr: "L'équipe d'experts en comptabilité cloud de Namaca fournit des livres comptables 100% précis sur lesquels vous, votre banquier et vos investisseurs pouvez compter.",
    en: "Namaca's team of cloud accounting experts delivers 100% accurate books that you, your banker, and your investors can rely on.",
  },
  "services.payroll.desc": {
    fr: "Abandonnez les anciennes méthodes de traitement de la paie. Notre service de paie en ligne de pointe transforme les opérations de votre entreprise.",
    en: "Ditch the old payroll processing methods. Our cutting-edge online payroll service transforms your business operations.",
  },
  "services.taxes.desc": {
    fr: "Analyser et gérer la TPS/TVH et la TVP canadiennes. Nous suivons l'éligibilité pour l'enregistrement de votre entreprise dans les provinces concernées.",
    en: "Analyze and manage Canadian GST/HST and PST. We track your business's registration eligibility in relevant provinces.",
  },
  "services.cfo.desc": {
    fr: "À mesure que votre entreprise grandit, naviguer dans des états financiers complexes peut être intimidant. C'est là qu'un CFO fractionnel intervient avec des conseils experts.",
    en: "As your company grows, navigating complex financial statements can be daunting. That's when a fractional CFO steps in with expert guidance.",
  },
  "services.ap.desc": {
    fr: "La technologie a révolutionné les comptes fournisseurs, éliminant le temps perdu sur les factures papier et les rappels de paiement.",
    en: "Technology has revolutionized accounts payables, eliminating the time wasted on paper invoices and payment reminders.",
  },
  "services.ar.desc": {
    fr: "Stimulez la croissance de votre résultat net grâce à notre processus proactif de facturation et de recouvrement des paiements.",
    en: "Boost bottom-line growth with our proactive invoicing and payment collection process. Deliver a great customer experience.",
  },
  "services.consulting.desc": {
    fr: "Des conseils stratégiques et un accompagnement personnalisé pour optimiser la gestion financière de votre entreprise.",
    en: "Strategic advice and personalized support to optimize your business's financial management.",
  },
  "services.learnMore": { fr: "Pour en savoir plus →", en: "Learn more →" },

  // Why Choose Us Numbered
  "whyNumbered.title": { fr: "Pourquoi nous choisir ?", en: "Why choose us?" },
  "whyNumbered.subtitle": {
    fr: "Morbi in praesent tortor metus. Sit aliquet nunc posuere vestibulum accumsan dapibus phasellus eget commodo.",
    en: "Discover the key advantages that set us apart from traditional accounting firms.",
  },
  "whyNumbered.1.title": { fr: "100% En ligne et axé sur la technologie", en: "100% Online & Tech-Driven" },
  "whyNumbered.1.desc": {
    fr: "Notre approche entièrement numérique garantit un accès rapide, sécurisé et moderne à tous vos services comptables.",
    en: "Our fully digital approach ensures fast, secure, and modern access to all your accounting services.",
  },
  "whyNumbered.2.title": { fr: "Fini la reformation", en: "No More Re-training" },
  "whyNumbered.2.desc": {
    fr: "Nous savons combien de temps, d'argent et d'énergie il faut pour reformer votre comptable et votre personnel de paie. Nous parions qu'une fois associé à nous, vous n'aurez plus à vous soucier d'embaucher un autre comptable.",
    en: "We know the amount of time, money and energy it takes to re-train your bookkeeper and payroll staff. We bet that once you partner with us, you won't have to worry about hiring another bookkeeper.",
  },
  "whyNumbered.3.title": { fr: "Gagner en clarté", en: "Gain Clarity" },
  "whyNumbered.3.desc": {
    fr: "Le conseil n°1 d'un mentor d'affaires de premier plan est de 'gagner en clarté' sur les indicateurs clés de performance (KPI). C'est exactement ce que nous faisons : vous faire gagner du temps et vous fournir un tableau de bord KPI.",
    en: "#1 tip from a top-class business mentor is to 'Gain Clarity' on Key Performance Indicators (KPIs) and then leave the rest to professionals. That's precisely what we do.",
  },
  "whyNumbered.4.title": { fr: "Au-delà de la comptabilité", en: "Beyond Bookkeeping" },
  "whyNumbered.4.desc": {
    fr: "Namaca va au-delà de la comptabilité, offrant des solutions comptables transformatrices, y compris les comptes fournisseurs et clients, la paie, les taxes et les services de CFO fractionnel.",
    en: "Namaca goes beyond bookkeeping, offering transformative accounting solutions, including AP & AR, Payroll, Tax, and Fractional CFO services.",
  },
  "whyNumbered.5.title": { fr: "Solutions expertes", en: "Expert Solutions" },
  "whyNumbered.5.desc": {
    fr: "Chez Namaca, nous nous concentrons sur 4 secteurs clés : e-commerce, technologie, entrepreneurs et professionnels. Notre engagement à fournir des solutions modernes sur mesure.",
    en: "At Namaca, we are focused on 4 key sectors: e-commerce, technology, contractors, and professionals. Our commitment to delivering tailored modern solutions.",
  },
  "whyNumbered.6.title": { fr: "Innovation de valeur", en: "Value Innovation" },
  "whyNumbered.6.desc": {
    fr: "Notre innovation de valeur élimine le besoin de choisir entre une comptabilité premium traditionnelle et des freelancers à bas prix. Nous offrons des services de niveau CFO au prix de la comptabilité.",
    en: "Our value innovation eliminates the need to choose between traditional premium accounting and low-cost freelancers. We offer CFO-level services at the price of bookkeeping.",
  },

  // Expertise Counters
  "expertise.title": { fr: "Expertise sectorielle", en: "Sector Expertise" },
  "expertise.subtitle": {
    fr: "Participez à une discussion approfondie sur nos connaissances approfondies et nos compétences spécialisées dans le secteur de la comptabilité",
    en: "Engage in an in-depth discussion about our deep knowledge and specialized skills in the accounting sector",
  },
  "expertise.stat1": { fr: "Expertise au niveau du système", en: "System-Level Expertise" },
  "expertise.stat2": { fr: "Années d'expérience", en: "Years of Experience" },
  "expertise.stat3": { fr: "Taux de satisfaction client", en: "Client Satisfaction Rate" },
  "expertise.stat4": { fr: "Nombre de clients servis", en: "Number of Clients Served" },

  // Testimonials
  "testimonials.title": { fr: "Témoignages clients", en: "Client Testimonials" },
  "testimonials.subtitle": {
    fr: "Découvrez ce que nos clients disent de notre service.",
    en: "Discover what our clients say about our service.",
  },

  // Partners
  "partners.title": { fr: "Nos Partenaires", en: "Our Partners" },

  // Contact Form
  "contact.title": { fr: "Planifiez une consultation !", en: "Schedule a Consultation!" },
  "contact.firstName": { fr: "Prénom", en: "First Name" },
  "contact.lastName": { fr: "Nom de famille", en: "Last Name" },
  "contact.email": { fr: "Courriel", en: "Email" },
  "contact.phone": { fr: "Numéro de téléphone", en: "Phone Number" },
  "contact.message": { fr: "Message", en: "Message" },
  "contact.submit": { fr: "Soumettre", en: "Submit" },
  "contact.sending": { fr: "Envoi...", en: "Sending..." },
  "contact.success": {
    fr: "Message envoyé! Nous vous contacterons bientôt.",
    en: "Message sent! We'll get back to you soon.",
  },

  // Footer
  "footer.nav": { fr: "Navigation", en: "Navigation" },
  "footer.ourServices": { fr: "Nos services", en: "Our Services" },
  "footer.rights": { fr: "tous droits réservés", en: "all rights reserved" },

  // Service Pages
  "servicePage.cta": { fr: "Planifier un appel", en: "Schedule a Call" },
  "servicePage.ready": { fr: "Prêt à commencer ?", en: "Ready to Get Started?" },
  "servicePage.readyDesc": {
    fr: "Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider.",
    en: "Contact us for a free consultation and discover how we can help you.",
  },
  "servicePage.contactUs": { fr: "Contactez-nous", en: "Contact Us" },

  // Expertise Page
  "expertisePage.title": { fr: "Expertise sectorielle", en: "Sector Expertise" },
  "expertisePage.subtitle": {
    fr: "Nous sommes focalisés sur 4 secteurs clés pour offrir des solutions financières modernes et spécialisées.",
    en: "We focus on 4 key sectors to deliver modern and specialized financial solutions.",
  },
  "expertisePage.ecommerce": { fr: "E-commerce", en: "E-commerce" },
  "expertisePage.ecommerce.desc": {
    fr: "Solutions comptables spécialisées pour les entreprises de commerce en ligne, incluant la gestion multi-devises et la conformité fiscale internationale.",
    en: "Specialized accounting solutions for online businesses, including multi-currency management and international tax compliance.",
  },
  "expertisePage.tech": { fr: "Technologie", en: "Technology" },
  "expertisePage.tech.desc": {
    fr: "Expertise financière pour les startups tech et les entreprises SaaS, avec une compréhension approfondie des métriques clés du secteur.",
    en: "Financial expertise for tech startups and SaaS companies, with a deep understanding of key sector metrics.",
  },
  "expertisePage.contractors": { fr: "Entrepreneurs", en: "Contractors" },
  "expertisePage.contractors.desc": {
    fr: "Gestion comptable adaptée aux entrepreneurs et travailleurs autonomes, incluant la facturation de projet et le suivi des dépenses.",
    en: "Accounting management tailored to contractors and freelancers, including project billing and expense tracking.",
  },
  "expertisePage.professionals": { fr: "Professionnels", en: "Professionals" },
  "expertisePage.professionals.desc": {
    fr: "Services financiers sur mesure pour les cabinets professionnels, avocats, médecins et consultants indépendants.",
    en: "Tailored financial services for professional firms, lawyers, doctors, and independent consultants.",
  },
  "expertisePage.cta": { fr: "Discutons de votre secteur", en: "Let's Discuss Your Sector" },
  "expertisePage.ctaDesc": {
    fr: "Contactez-nous pour découvrir comment notre expertise sectorielle peut bénéficier à votre entreprise.",
    en: "Contact us to discover how our sector expertise can benefit your business.",
  },

  // Resources Page
  "resources.title": { fr: "Ressources", en: "Resources" },
  "resources.subtitle": {
    fr: "Articles, guides et conseils pour optimiser la gestion financière de votre entreprise.",
    en: "Articles, guides, and tips to optimize your business's financial management.",
  },

  // Blog posts
  "post.1": { fr: "Comment optimiser votre comptabilité en ligne", en: "How to Optimize Your Online Accounting" },
  "post.2": { fr: "Les avantages d'un CFO fractionnel pour les startups", en: "The Benefits of a Fractional CFO for Startups" },
  "post.3": { fr: "Guide de la TPS/TVH pour les petites entreprises", en: "GST/HST Guide for Small Businesses" },
  "post.4": { fr: "Pourquoi migrer vers Xero pour votre comptabilité", en: "Why Migrate to Xero for Your Accounting" },
  "post.5": { fr: "5 erreurs comptables à éviter en démarrage", en: "5 Accounting Mistakes to Avoid When Starting Up" },
  "post.6": { fr: "La paie simplifiée : guide complet", en: "Simplified Payroll: Complete Guide" },

  // Service page details
  "bookkeeping.subtitle": { fr: "Tenue de Livres", en: "Bookkeeping" },
  "bookkeeping.desc": {
    fr: "L'équipe d'experts en comptabilité cloud de Namaca fournit des livres comptables 100% précis sur lesquels vous, votre banquier et vos investisseurs pouvez compter. Notre approche moderne de la comptabilité transforme vos opérations financières.",
    en: "Namaca's team of cloud accounting experts delivers 100% accurate books that you, your banker, and investors can rely on. Our modern approach to bookkeeping transforms your financial operations.",
  },
  "bookkeeping.f1": { fr: "Comptabilité 100% basée sur le cloud avec accès en temps réel", en: "100% cloud-based bookkeeping with real-time access" },
  "bookkeeping.f2": { fr: "Rapprochement bancaire automatisé et catégorisation des transactions", en: "Automated bank reconciliation and transaction categorization" },
  "bookkeeping.f3": { fr: "Rapports financiers mensuels détaillés", en: "Detailed monthly financial reports" },
  "bookkeeping.f4": { fr: "Intégration avec Xero pour des données précises et à jour", en: "Integration with Xero for accurate, up-to-date data" },
  "bookkeeping.f5": { fr: "Support dédié d'une équipe d'experts certifiés", en: "Dedicated support from a team of certified experts" },

  "payroll.subtitle": { fr: "Traitement de la Paie", en: "Payroll Processing" },
  "payroll.desc": {
    fr: "Abandonnez les anciennes méthodes de traitement de la paie. Notre service de paie en ligne de pointe transforme les opérations de votre entreprise.",
    en: "Ditch the old payroll processing methods. Our cutting-edge online payroll service transforms your business operations.",
  },
  "payroll.f1": { fr: "Traitement de la paie automatisé et sans erreur", en: "Automated and error-free payroll processing" },
  "payroll.f2": { fr: "Conformité aux réglementations fédérales et provinciales", en: "Compliance with federal and provincial regulations" },
  "payroll.f3": { fr: "Gestion des retenues à la source et des avantages sociaux", en: "Management of withholdings and employee benefits" },
  "payroll.f4": { fr: "Portail en libre-service pour les employés", en: "Employee self-service portal" },
  "payroll.f5": { fr: "Déclarations de fin d'année (T4, RL-1) automatisées", en: "Automated year-end filings (T4, RL-1)" },

  "taxes.subtitle": { fr: "Taxes de Ventes", en: "Sales Taxes" },
  "taxes.desc": {
    fr: "Analyser et gérer la TPS/TVH et la TVP canadiennes. Nous suivons l'éligibilité pour l'enregistrement de votre entreprise dans les provinces concernées.",
    en: "Analyze and manage Canadian GST/HST and PST. We track your business's registration eligibility in relevant provinces and implement best practices.",
  },
  "taxes.f1": { fr: "Gestion complète de la TPS/TVH et TVQ", en: "Complete GST/HST and QST management" },
  "taxes.f2": { fr: "Suivi de l'éligibilité à l'enregistrement provincial", en: "Provincial registration eligibility tracking" },
  "taxes.f3": { fr: "Déclarations de taxes trimestrielles et annuelles", en: "Quarterly and annual tax filings" },
  "taxes.f4": { fr: "Optimisation fiscale pour réduire votre charge", en: "Tax optimization to reduce your burden" },
  "taxes.f5": { fr: "Conformité réglementaire assurée", en: "Ensured regulatory compliance" },

  "cfo.subtitle": { fr: "Direction financière", en: "Financial Leadership" },
  "cfo.desc": {
    fr: "À mesure que votre entreprise grandit, naviguer dans des états financiers complexes peut être intimidant. C'est là qu'un CFO fractionnel intervient avec son expertise.",
    en: "As your company grows, navigating complex financial statements can be daunting. That's when a fractional CFO steps in with expert guidance.",
  },
  "cfo.f1": { fr: "Planification et analyse financière stratégique", en: "Strategic financial planning and analysis" },
  "cfo.f2": { fr: "Gestion et prévision des flux de trésorerie", en: "Cash flow management and forecasting" },
  "cfo.f3": { fr: "Tableau de bord KPI pour des insights en temps réel", en: "KPI dashboard for real-time business insights" },
  "cfo.f4": { fr: "Rapports financiers prêts pour les investisseurs", en: "Investor-ready financial reporting" },
  "cfo.f5": { fr: "Conseils de niveau CFO à une fraction du coût", en: "CFO-level guidance at a fraction of the cost" },
  "cfo.f6": { fr: "Rapports livrés via Loom pour une clarté maximale", en: "Reports delivered via Loom for maximum clarity" },

  "ap.subtitle": { fr: "Comptes Payables", en: "Accounts Payable" },
  "ap.desc": {
    fr: "La technologie a révolutionné les comptes fournisseurs, éliminant le temps perdu sur les factures papier et les rappels de paiement.",
    en: "Technology has revolutionized accounts payables, eliminating the time wasted on paper invoices and payment reminders.",
  },
  "ap.f1": { fr: "Traitement automatisé des factures et flux d'approbation", en: "Automated invoice processing and approval workflows" },
  "ap.f2": { fr: "Gestion des fournisseurs et planification des paiements", en: "Vendor management and payment scheduling" },
  "ap.f3": { fr: "Rapports d'ancienneté AP en temps réel", en: "Real-time AP aging reports" },
  "ap.f4": { fr: "Détection et prévention des paiements en double", en: "Duplicate payment detection and prevention" },
  "ap.f5": { fr: "Intégration transparente avec votre plateforme comptable", en: "Seamless integration with your accounting platform" },

  "ar.subtitle": { fr: "Comptes Recevables", en: "Accounts Receivable" },
  "ar.desc": {
    fr: "Stimulez la croissance de votre résultat net grâce à notre processus proactif de facturation et de recouvrement des paiements.",
    en: "Boost bottom-line growth with our proactive invoicing and payment collection process.",
  },
  "ar.f1": { fr: "Facturation proactive et automatisation du suivi", en: "Proactive invoicing and follow-up automation" },
  "ar.f2": { fr: "Recouvrement des paiements et analyse d'ancienneté", en: "Payment collection and aging analysis" },
  "ar.f3": { fr: "Gestion du crédit client", en: "Customer credit management" },
  "ar.f4": { fr: "Stratégies de minimisation des créances douteuses", en: "Bad debt minimization strategies" },
  "ar.f5": { fr: "Rapports AR détaillés et insights", en: "Detailed AR reporting and insights" },

  "consulting.subtitle": { fr: "Service-Conseil", en: "Advisory Services" },
  "consulting.desc": {
    fr: "Des conseils stratégiques et un accompagnement personnalisé pour optimiser la gestion financière de votre entreprise.",
    en: "Strategic advice and personalized support to optimize your business's financial management.",
  },
  "consulting.f1": { fr: "Analyse financière approfondie et recommandations stratégiques", en: "In-depth financial analysis and strategic recommendations" },
  "consulting.f2": { fr: "Optimisation des processus comptables et financiers", en: "Optimization of accounting and financial processes" },
  "consulting.f3": { fr: "Accompagnement dans la transformation numérique", en: "Support in digital transformation" },
  "consulting.f4": { fr: "Planification budgétaire et prévisionnelle", en: "Budget and forecast planning" },
  "consulting.f5": { fr: "Support dans les décisions d'investissement", en: "Support in investment decisions" },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
