import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Receipt, FileText, TrendingUp, CreditCard, Users, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Comptabilité",
    desc: "L'équipe d'experts en comptabilité cloud de Namaca fournit des livres comptables 100% précis sur lesquels vous, votre banquier et vos investisseurs pouvez compter.",
    href: "/bookkeeping",
  },
  {
    icon: Receipt,
    title: "Service de paie",
    desc: "Abandonnez les anciennes méthodes de traitement de la paie. Notre service de paie en ligne de pointe transforme les opérations de votre entreprise.",
    href: "/payroll",
  },
  {
    icon: FileText,
    title: "Rapport de taxes",
    desc: "Analyser et gérer la TPS/TVH et la TVP canadiennes. Nous suivons l'éligibilité pour l'enregistrement de votre entreprise dans les provinces concernées.",
    href: "/taxes",
  },
  {
    icon: TrendingUp,
    title: "Fractional CFO",
    desc: "As your company grows, navigating complex financial statements can be daunting. That's when a fractional CFO steps in with expert guidance.",
    href: "/fractional-cfo",
  },
  {
    icon: CreditCard,
    title: "Comptes fournisseurs",
    desc: "Technology has revolutionized accounts payables, eliminating the time wasted on paper invoices and payment reminders.",
    href: "/accounts-payable",
  },
  {
    icon: Users,
    title: "Comptes clients",
    desc: "Boost bottom-line growth with our proactive invoicing and payment collection process. Deliver a great customer experience.",
    href: "/accounts-receivable",
  },
  {
    icon: Lightbulb,
    title: "Services / Conseils",
    desc: "Des conseils stratégiques et un accompagnement personnalisé pour optimiser la gestion financière de votre entreprise.",
    href: "/consulting",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left image */}
          <div className="hidden lg:block lg:col-span-3">
            <img
              src="https://namaca.ca/wp-content/uploads/2024/09/6782-1-1.png"
              alt="Accounting professional"
              className="rounded-2xl object-cover h-full w-full"
              loading="lazy"
            />
          </div>

          {/* Right grid */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-10"
            >
              Service adapté à vos besoins uniques de petite entreprise
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {services.map((service) => (
                <motion.div key={service.href} variants={cardVariants}>
                  <Link
                    to={service.href}
                    className="group block bg-background rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <service.icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                    <span className="text-sm font-medium text-accent">Pour en savoir plus →</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
