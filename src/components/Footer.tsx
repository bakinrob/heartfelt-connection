import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-namaca-navy border-t border-white/[0.06]">
    <div className="container max-w-7xl py-16 px-6">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
        <div>
          <span className="font-display italic text-2xl text-white">Namaca<span className="text-namaca-orange">.</span></span>
          <p className="text-white/40 text-sm font-body mt-2">Tomorrow's Trusted Advisor, Today</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <h4 className="text-white/60 text-xs uppercase tracking-[0.2em] font-body font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm font-body">
            {["Bookkeeping", "Payroll", "AP/AR", "Fractional CFO", "Tax", "Healthcare"].map((s) => (
              <li key={s}><Link to="/" className="text-white/50 hover:text-namaca-orange transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white/60 text-xs uppercase tracking-[0.2em] font-body font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm font-body">
            {[
              { label: "About", href: "/expertise" },
              { label: "Resources", href: "/resources" },
              { label: "Blog", href: "/resources" },
              { label: "Contact", href: "#book-now" },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="text-white/50 hover:text-namaca-orange transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white/60 text-xs uppercase tracking-[0.2em] font-body font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-sm font-body text-white/50">
            <p>info@namaca.com</p>
            <p>+1 (514) 819-1513</p>
            <p>5915 Rue De Jumonville<br />Montreal QC, Canada</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center text-white/25 text-sm font-body">
        <span>© {new Date().getFullYear()} Namaca Inc. All rights reserved.</span>
        <span>Montreal, Quebec, Canada</span>
      </div>
    </div>
  </footer>
);

export default Footer;
