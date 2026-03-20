import ServicePage from "./ServicePage";
import { useI18n } from "@/lib/i18n";

const Payroll = () => {
  const { t } = useI18n();
  return (
    <ServicePage
      title={t("service.payroll")}
      subtitle={t("payroll.subtitle")}
      description={t("payroll.desc")}
      image="https://namaca.ca/wp-content/uploads/2024/09/2148236872-1-1400x494.png"
      features={[t("payroll.f1"), t("payroll.f2"), t("payroll.f3"), t("payroll.f4"), t("payroll.f5")]}
    />
  );
};

export default Payroll;
