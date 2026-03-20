import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useI18n();

  const services = [
    { label: t("service.bookkeeping"), href: "/bookkeeping" },
    { label: t("service.payroll"), href: "/payroll" },
    { label: t("service.taxes"), href: "/taxes" },
    { label: t("service.cfo"), href: "/fractional-cfo" },
    { label: t("service.ap"), href: "/accounts-payable" },
    { label: t("service.ar"), href: "/accounts-receivable" },
    { label: t("service.consulting"), href: "/consulting" },
  ];

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <header className="sticky top-0 z-50 navbar-glass border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src="https://namaca.ca/wp-content/uploads/2024/09/base_logo_transparent_background-eps-1.svg"
            alt="Namaca"
            className="h-8"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/" ? "text-accent" : "text-foreground"}`}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/expertise"
            className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/expertise" ? "text-accent" : "text-foreground"}`}
          >
            {t("nav.expertise")}
          </Link>

          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              {t("nav.services")} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2" onMouseLeave={() => setServicesOpen(false)}>
                <div className="card-glass py-2 min-w-[220px]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/resources"
            className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/resources" ? "text-accent" : "text-foreground"}`}
          >
            {t("nav.resources")}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors px-3 py-1.5 rounded-full border border-border/60 hover:border-accent/40"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <Button asChild className="btn-glass text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground">
            <a href="/#book-now">{t("nav.contact")}</a>
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border/50 p-4 space-y-3">
          <Link to="/" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{t("nav.home")}</Link>
          <Link to="/expertise" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{t("nav.expertise")}</Link>
          <div>
            <button className="flex items-center gap-1 py-2 text-sm font-medium w-full" onClick={() => setServicesOpen(!servicesOpen)}>
              {t("nav.services")} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} to={s.href} className="block py-1.5 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/resources" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{t("nav.resources")}</Link>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium py-2"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "fr" ? "Switch to English" : "Passer au Français"}
          </button>
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <a href="/#book-now" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
