import { useState } from "react";
import { Calculator, Receipt, FileText, TrendingUp, CreditCard, Users, ChevronRight } from "lucide-react";
import FadeUpBlur from "@/components/animations/FadeUpBlur";

const services = [
  {
    icon: Calculator,
    title: "Bookkeeping",
    desc: "Bank reconciliation, GL maintenance, and real-time expense tracking — your books, always clean.",
    bullets: ["Bank reconciliation", "Expense tracking", "Chart of accounts", "Monthly reporting"],
  },
  {
    icon: Receipt,
    title: "Payroll",
    desc: "Fully managed payroll including T4s, RL1s, and provincial compliance for Quebec and beyond.",
    bullets: ["Payroll processing", "Tax calculations", "Year-end filings", "Compliance management"],
  },
  {
    icon: CreditCard,
    title: "Accounts Payable",
    desc: "We handle your vendor relationships, invoice processing, and payment management end-to-end.",
    bullets: ["Invoice processing", "Vendor management", "Payment tracking", "AP reporting"],
  },
  {
    icon: Users,
    title: "Accounts Receivable",
    desc: "From invoice creation to collections — we protect your cash flow and chase down what you're owed.",
    bullets: ["Invoice delivery", "Payment collections", "Debtor follow-up", "Cash flow optimization"],
  },
  {
    icon: TrendingUp,
    title: "Fractional CFO",
    desc: "Strategic financial leadership without the executive salary. Forecasting, KPI dashboards, and growth planning.",
    bullets: ["Financial forecasting", "KPI dashboards", "Budget planning", "Investor reporting"],
  },
  {
    icon: FileText,
    title: "Tax & Advisory",
    desc: "GST/HST management, Canadian tax optimization, and entity structuring for maximum efficiency.",
    bullets: ["Tax planning", "GST/HST filing", "Entity structuring", "Credits & incentives"],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-namaca-dark py-28">
      <div className="container">
        <FadeUpBlur>
          <span className="section-label">What We Handle</span>
          <h2 className="font-display text-white mb-1" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', lineHeight: 1, letterSpacing: '-0.04em' }}>
            Every financial function.
          </h2>
          <h2 className="font-display text-white/30 mb-16" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', lineHeight: 1, letterSpacing: '-0.04em' }}>
            One unified team.
          </h2>
        </FadeUpBlur>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: clickable list */}
          <div className="lg:w-[340px] shrink-0 space-y-1">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all font-body text-sm flex items-center gap-3 border-l-2 ${
                  i === active
                    ? "border-l-namaca-orange bg-namaca-orange/[0.05] text-white"
                    : "border-l-transparent text-white/50 hover:border-l-white/15 hover:text-white/80"
                }`}
              >
                <s.icon className={`h-5 w-5 shrink-0 ${i === active ? "text-namaca-orange" : "text-white/30"}`} />
                {s.title}
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="flex-1 relative rounded-[2rem] p-8 lg:p-12 min-h-[440px] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(234,118,0,0.08), rgba(8,12,20,0.95))',
              border: '1px solid rgba(234,118,0,0.18)',
            }}
          >
            {/* Decorative number */}
            <span className="absolute -right-4 -top-8 font-display text-namaca-orange opacity-[0.05] select-none pointer-events-none" style={{ fontSize: '14rem', lineHeight: 1 }}>
              {String(active + 1).padStart(2, '0')}
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <current.icon className="h-7 w-7 text-namaca-orange" />
                <h3 className="font-display text-white text-2xl">{current.title}</h3>
              </div>
              <p className="text-namaca-muted font-body text-base leading-relaxed mb-8 max-w-lg">
                {current.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.bullets.map((b) => (
                  <div key={b} className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 text-namaca-orange shrink-0" />
                    <span className="text-white/80 text-sm font-body">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
