import ServicePage from "./ServicePage";
import { useI18n } from "@/lib/i18n";

const Taxes = () => {
  const { t } = useI18n();
  return (
    <ServicePage
      title={t("service.taxes")}
      subtitle={t("taxes.subtitle")}
      description={t("taxes.desc")}
      features={[t("taxes.f1"), t("taxes.f2"), t("taxes.f3"), t("taxes.f4"), t("taxes.f5")]}
    />
  );
};

export default Taxes;
