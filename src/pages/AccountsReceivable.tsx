import ServicePage from "./ServicePage";
import { useI18n } from "@/lib/i18n";

const AccountsReceivable = () => {
  const { t } = useI18n();
  return (
    <ServicePage
      title={t("service.ar")}
      subtitle={t("ar.subtitle")}
      description={t("ar.desc")}
      features={[t("ar.f1"), t("ar.f2"), t("ar.f3"), t("ar.f4"), t("ar.f5")]}
    />
  );
};

export default AccountsReceivable;
