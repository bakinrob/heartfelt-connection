import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Receipt, FileText, TrendingUp, CreditCard, Users, Lightbulb } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const ServicesGrid = () => {
  const { t } = useI18n();

  const services = [
    { icon: Calculator, title: t("service.bookkeeping"), desc: t("services.bookkeeping.desc"), href: "/bookkeeping" },
    { icon: Receipt, title: t("service.payroll"), desc: t("services.payroll.desc"), href: "/payroll" },
    { icon: FileText, title: t("service.taxes"), desc: t("services.taxes.desc"), href: "/taxes" },
    { icon: TrendingUp, title: t("service.cfo"), desc: t("services.cfo.desc"), href: "/fractional-cfo" },
    { icon: CreditCard, title: t("service.ap"), desc: t("services.ap.desc"), href: "/accounts-payable" },
    { icon: Users, title: t("service.ar"), desc: t("services.ar.desc"), href: "/accounts-receivable" },
    { icon: Lightbulb, title: t("service.consulting"), desc: t("services.consulting.desc"), href: "/consulting" },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="hidden lg:block lg:col-span-3">
            <img src="https://namaca.ca/wp-content/uploads/2024/09/6782-1-1.png" alt="Accounting professional" className="rounded-2xl object-cover h-full w-full" loading="lazy" />
          </div>
          <div className="lg:col-span-9">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-primary mb-10">
              {t("services.title")}
            </motion.h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div key={service.href} variants={cardVariants}>
                  <Link to={service.href} className="group block bg-background rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 h-full">
                    <service.icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                    <span className="text-sm font-medium text-accent">{t("services.learnMore")}</span>
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
