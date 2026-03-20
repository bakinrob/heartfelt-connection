import ServicePage from "./ServicePage";
import { useI18n } from "@/lib/i18n";

const Consulting = () => {
  const { t } = useI18n();
  return (
    <ServicePage
      title={t("service.consulting")}
      subtitle={t("consulting.subtitle")}
      description={t("consulting.desc")}
      features={[t("consulting.f1"), t("consulting.f2"), t("consulting.f3"), t("consulting.f4"), t("consulting.f5")]}
    />
  );
};

export default Consulting;
