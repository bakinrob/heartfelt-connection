import ServicePage from "./ServicePage";
import { useI18n } from "@/lib/i18n";

const Bookkeeping = () => {
  const { t } = useI18n();
  return (
    <ServicePage
      title={t("service.bookkeeping")}
      subtitle={t("bookkeeping.subtitle")}
      description={t("bookkeeping.desc")}
      image="https://namaca.ca/wp-content/uploads/2024/09/2149085926-2-1400x494.png"
      features={[t("bookkeeping.f1"), t("bookkeeping.f2"), t("bookkeeping.f3"), t("bookkeeping.f4"), t("bookkeeping.f5")]}
    />
  );
};

export default Bookkeeping;
