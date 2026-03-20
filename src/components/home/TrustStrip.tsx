const tags = [
  "Medical Practices", "Dental Clinics", "Tech Startups", "E-Commerce Brands",
  "Law Firms", "Healthcare Groups", "Contractors", "Nonprofits",
  "Pharmacies", "Specialist Clinics",
];

const TrustStrip = () => (
  <section className="bg-namaca-dark py-12 overflow-hidden">
    <p className="text-center text-[0.65rem] uppercase tracking-[0.38em] text-white/30 mb-6 font-body">
      Trusted by 1,500+ businesses across Canada
    </p>
    <div className="relative overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            className="inline-block border border-white/10 bg-white/[0.04] rounded-full px-5 py-2 text-sm text-white/50 mx-2 whitespace-nowrap font-body"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
