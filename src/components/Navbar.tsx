import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Comptabilité", href: "/bookkeeping" },
  { label: "Service de paie", href: "/payroll" },
  { label: "Rapport de taxes", href: "/taxes" },
  { label: "Fractional CFO", href: "/fractional-cfo" },
  { label: "Comptes fournisseurs", href: "/accounts-payable" },
  { label: "Comptes clients", href: "/accounts-receivable" },
  { label: "Services / Conseils", href: "/consulting" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
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
            Accueil
          </Link>
          <Link
            to="/expertise"
            className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/expertise" ? "text-accent" : "text-foreground"}`}
          >
            Expertise
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 pt-2"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="bg-card rounded-lg shadow-lg border border-border py-2 min-w-[220px]">
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
            Ressources
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
            <a href="/#book-now">Contactez-nous</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border p-4 space-y-3">
          <Link to="/" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Accueil</Link>
          <Link to="/expertise" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Expertise</Link>
          <div>
            <button className="flex items-center gap-1 py-2 text-sm font-medium w-full" onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
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
          <Link to="/resources" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Ressources</Link>
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <a href="/#book-now" onClick={() => setMobileOpen(false)}>Contactez-nous</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
