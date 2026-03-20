import { useI18n } from "@/lib/i18n";
import FadeUpBlur from "@/components/animations/FadeUpBlur";

const partners = [
  { src: "https://namaca.ca/wp-content/uploads/2024/09/xero-1.png", alt: "Xero" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/DEXTools-1.png", alt: "DEXTools" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/175069-1.png", alt: "Partner" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/svg0-1.png", alt: "Partner" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/Ploto-black-png-logo-1.png", alt: "Ploto" },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners, ...partners];

const Partners = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-card border-t border-border/50 overflow-hidden">
      <div className="container">
        <FadeUpBlur>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10 font-heading">
            {t("partners.title")}
          </h2>
        </FadeUpBlur>
      </div>

      {/* Infinite scroll */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <div className="scroll-infinite">
          {allPartners.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.alt}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-10 md:mx-16 shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
