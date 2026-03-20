import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "/#services" },
  { label: "Healthcare", href: "/#healthcare" },
  { label: "About", href: "/expertise" },
  { label: "Resources", href: "/resources" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#080C14]/88 backdrop-blur-xl border-b border-white/[0.06]"
        : "bg-transparent"
    }`}>
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-0.5">
          <span className="font-display italic text-2xl text-white">Namaca</span>
          <span className="text-namaca-orange text-2xl font-display">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/65 hover:text-white transition-colors uppercase tracking-[0.15em] font-body"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#book-now"
            className="bg-namaca-orange text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-namaca-glow transition-colors font-body"
          >
            Book a Call
          </a>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-namaca-dark/95 backdrop-blur-xl border-t border-white/[0.06] p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-white/70 uppercase tracking-[0.15em] font-body"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book-now"
            className="block w-full text-center bg-namaca-orange text-white rounded-full px-5 py-3 text-sm font-semibold font-body mt-4"
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
