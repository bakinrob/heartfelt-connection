import ServicePage from "./ServicePage";
import { useI18n } from "@/lib/i18n";

const FractionalCFO = () => {
  const { t } = useI18n();
  return (
    <ServicePage
      title={t("service.cfo")}
      subtitle={t("cfo.subtitle")}
      description={t("cfo.desc")}
      features={[t("cfo.f1"), t("cfo.f2"), t("cfo.f3"), t("cfo.f4"), t("cfo.f5"), t("cfo.f6")]}
    />
  );
};

export default FractionalCFO;
