import ServicePage from "./ServicePage";

const AccountsPayable = () => (
  <ServicePage
    title="Comptes fournisseurs"
    subtitle="Comptes Payables"
    description="Technology has revolutionized accounts payables, eliminating the time wasted on paper invoices and payment reminders. Namaca's expert AP team streamlines your payment processes."
    features={[
      "Automated invoice processing and approval workflows",
      "Vendor management and payment scheduling",
      "Real-time AP aging reports",
      "Duplicate payment detection and prevention",
      "Seamless integration with your accounting platform",
    ]}
  />
);

export default AccountsPayable;
