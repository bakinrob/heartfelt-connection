import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <img
              src="https://namaca.ca/wp-content/uploads/2024/09/base_logo_transparent_background-eps-1.svg"
              alt="Namaca"
              className="h-8 brightness-0 invert"
            />
            <div className="space-y-2 text-sm opacity-80">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@namaca.com</p>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>5915 Rue De Jumonville<br />Montréal, Québec H1M1R2<br />Canada</span>
              </p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +1 (514) 819-1513</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("footer.nav")}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:text-accent transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/expertise" className="hover:text-accent transition-colors">{t("nav.expertise")}</Link></li>
              <li><a href="/#services" className="hover:text-accent transition-colors">{t("footer.ourServices")}</a></li>
              <li><Link to="/resources" className="hover:text-accent transition-colors">{t("nav.resources")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t("nav.services")}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/bookkeeping" className="hover:text-accent transition-colors">{t("service.bookkeeping")}</Link></li>
              <li><Link to="/payroll" className="hover:text-accent transition-colors">{t("service.payroll")}</Link></li>
              <li><Link to="/taxes" className="hover:text-accent transition-colors">{t("service.taxes")}</Link></li>
              <li><Link to="/fractional-cfo" className="hover:text-accent transition-colors">{t("service.cfo")}</Link></li>
              <li><Link to="/accounts-payable" className="hover:text-accent transition-colors">{t("service.ap")}</Link></li>
              <li><Link to="/accounts-receivable" className="hover:text-accent transition-colors">{t("service.ar")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Namaca, {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
