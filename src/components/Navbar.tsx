import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MoveRight, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutionItems = [
  { title: "Bookkeeping", href: "/bookkeeping", desc: "Real-time tracking & reconciliation" },
  { title: "Payroll", href: "/payroll", desc: "T4s, RL1s & provincial compliance" },
  { title: "Accounts Payable", href: "/accounts-payable", desc: "Vendor management & payments" },
  { title: "Accounts Receivable", href: "/accounts-receivable", desc: "Invoicing & collections" },
  { title: "Fractional CFO", href: "/fractional-cfo", desc: "Strategic financial leadership" },
  { title: "Tax & Advisory", href: "/taxes", desc: "GST/HST & tax optimization" },
];

const healthcareItems = [
  { title: "Medical Practices", href: "/#healthcare" },
  { title: "Dental Clinics", href: "/#healthcare" },
  { title: "Pharmacies", href: "/#healthcare" },
  { title: "Specialist Clinics", href: "/#healthcare" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--background))]/88 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="relative z-20 flex items-center gap-0.5">
          <span className="font-display italic text-2xl text-foreground">Namaca</span>
          <span className="text-primary text-2xl font-display">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Solutions Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium uppercase tracking-[0.15em] font-body">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[580px] p-6 bg-[hsl(var(--card))] border border-border rounded-2xl backdrop-blur-xl grid grid-cols-5 gap-6">
                    {/* Left description panel */}
                    <div className="col-span-2 flex flex-col justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground font-body mb-2">Solutions</p>
                        <p className="text-xs text-muted-foreground font-body leading-relaxed">
                          Every financial function handled by one unified team — 100% cloud-based.
                        </p>
                      </div>
                      <a
                        href="#book-now"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-[hsl(var(--accent))] transition-colors font-body uppercase tracking-[0.14em]"
                      >
                        Book a call <MoveRight className="w-3 h-3" />
                      </a>
                    </div>
                    {/* Right sub-items */}
                    <div className="col-span-3 grid grid-cols-1 gap-1">
                      {solutionItems.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            to={item.href}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors group"
                          >
                            <div>
                              <span className="text-sm font-medium text-foreground font-body block">{item.title}</span>
                              <span className="text-[11px] text-muted-foreground font-body">{item.desc}</span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Healthcare Mega Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium uppercase tracking-[0.15em] font-body">
                  Healthcare
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[380px] p-6 bg-[hsl(var(--card))] border border-border rounded-2xl backdrop-blur-xl">
                    <p className="text-sm font-semibold text-foreground font-body mb-1">Healthcare Specialization</p>
                    <p className="text-xs text-muted-foreground font-body mb-4 leading-relaxed">
                      1,500+ healthcare providers trust Namaca with their finances.
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                      {healthcareItems.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <a
                            href={item.href}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors group"
                          >
                            <span className="text-sm text-foreground font-body">{item.title}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Direct links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/expertise"
                    className="inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-[0.15em] font-body transition-colors"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/resources"
                    className="inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-[0.15em] font-body transition-colors"
                  >
                    Resources
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#book-now"
            className="bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-[hsl(var(--accent))] transition-colors font-body"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative z-20 p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(var(--background))]/95 backdrop-blur-xl border-t border-border p-6 space-y-6">
          {/* Solutions */}
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] font-body mb-3">Solutions</p>
            <div className="space-y-1">
              {solutionItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                  <MoveRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Healthcare */}
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] font-body mb-3">Healthcare</p>
            <div className="space-y-1">
              {healthcareItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                  <MoveRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Direct links */}
          <div className="space-y-1 border-t border-border pt-4">
            <Link to="/expertise" className="block py-2 text-sm text-muted-foreground hover:text-foreground font-body" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/resources" className="block py-2 text-sm text-muted-foreground hover:text-foreground font-body" onClick={() => setMobileOpen(false)}>
              Resources
            </Link>
          </div>

          {/* CTA */}
          <a
            href="#book-now"
            className="block w-full text-center bg-primary text-primary-foreground rounded-full px-5 py-3 text-sm font-semibold font-body mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
