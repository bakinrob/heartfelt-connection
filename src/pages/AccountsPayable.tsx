import ServicePage from "./ServicePage";
import { useI18n } from "@/lib/i18n";

const AccountsPayable = () => {
  const { t } = useI18n();
  return (
    <ServicePage
      title={t("service.ap")}
      subtitle={t("ap.subtitle")}
      description={t("ap.desc")}
      features={[t("ap.f1"), t("ap.f2"), t("ap.f3"), t("ap.f4"), t("ap.f5")]}
    />
  );
};

export default AccountsPayable;
