import FadeUpBlur from "@/components/animations/FadeUpBlur";
import FadeInScale from "@/components/animations/FadeInScale";

const features = [
  "Revenue cycle management",
  "Medicare/Medicaid compliance",
  "Medical billing reconciliation",
  "Healthcare-specific tax planning",
];

const HealthcareSection = () => (
  <section className="bg-namaca-navy py-28">
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 max-w-[600px]">
          <FadeUpBlur>
            <span className="section-label">Healthcare Specialization</span>
            <h2 className="font-display text-white mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
              Built for the businesses that keep people healthy.
            </h2>
          </FadeUpBlur>
          <FadeUpBlur delay={0.2}>
            <p className="text-namaca-muted font-body text-base leading-relaxed mb-8">
              Over 1,500 healthcare providers trust Namaca to manage
              their finances — from solo medical practices to multi-location
              dental groups, pharmacies, and specialist&nbsp;clinics.
            </p>
          </FadeUpBlur>
          <FadeUpBlur delay={0.3}>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/80 font-body text-sm">
                  <span className="h-2 w-2 rounded-full bg-namaca-orange shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </FadeUpBlur>
          <FadeUpBlur delay={0.4}>
            <a href="#book-now" className="inline-block border border-namaca-orange/40 text-namaca-orange rounded-full px-7 py-3 font-semibold text-sm uppercase tracking-[0.14em] hover:bg-namaca-orange hover:text-white transition-all font-body">
              Healthcare Accounting →
            </a>
          </FadeUpBlur>
        </div>

        {/* Visual — floating stat cards */}
        <div className="flex-1 relative min-h-[400px] flex items-center justify-center">
          {/* Blurred bg image */}
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-10 blur-sm"
            loading="lazy"
          />

          <div className="relative z-10 w-full max-w-[380px]">
            <FadeInScale index={0}>
              <div className="glass-card rounded-3xl p-6 mb-4">
                <div className="font-display text-namaca-orange text-[4rem] leading-none">1,500+</div>
                <div className="text-white/60 text-sm font-body mt-1">Healthcare providers served</div>
              </div>
            </FadeInScale>
            <FadeInScale index={1}>
              <div className="glass-card rounded-3xl p-5 ml-8 -mt-2 mb-4">
                <div className="font-display text-namaca-orange text-[3rem] leading-none">145+</div>
                <div className="text-white/60 text-sm font-body mt-1">Dedicated health professionals</div>
              </div>
            </FadeInScale>
            <FadeInScale index={2}>
              <div className="orange-card rounded-2xl p-5 mr-8 -mt-2">
                <div className="text-3xl mb-2">🏥 🦷 💊 🔬</div>
                <div className="text-white/80 text-sm font-medium font-body">All specialties covered</div>
              </div>
            </FadeInScale>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HealthcareSection;
