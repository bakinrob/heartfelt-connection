import { Link } from "react-router-dom";
import { useRef, MouseEvent } from "react";
import { Calculator, Receipt, FileText, TrendingUp, CreditCard, Users, Lightbulb } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import StaggeredFade from "@/components/animations/StaggeredFade";
import FadeInScale from "@/components/animations/FadeInScale";

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
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="hidden lg:block lg:col-span-3">
            <FadeInScale>
              <img src="https://namaca.ca/wp-content/uploads/2024/09/6782-1-1.png" alt="Accounting professional" className="rounded-3xl object-cover h-full w-full shadow-card" loading="lazy" />
            </FadeInScale>
          </div>
          <div className="lg:col-span-9">
            <span className="section-label">{t("nav.services")}</span>
            <StaggeredFade
              text={t("services.title")}
              as="h2"
              className="text-3xl md:text-4xl font-bold text-primary mb-10 font-heading"
              charDelay={0.03}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <FadeInScale key={service.href} index={index} staggerDelay={0.08}>
                  <TiltCard>
                    <Link to={service.href} className="group block card-glass p-6 h-full">
                      <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors font-heading">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                      <span className="text-sm font-medium text-accent">{t("services.learnMore")}</span>
                    </Link>
                  </TiltCard>
                </FadeInScale>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** 3D perspective tilt wrapper */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <div ref={ref} className="perspective-tilt" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
};

export default ServicesGrid;
