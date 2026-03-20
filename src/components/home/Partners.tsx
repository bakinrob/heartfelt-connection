import { motion } from "framer-motion";

const partners = [
  { src: "https://namaca.ca/wp-content/uploads/2024/09/xero-1.png", alt: "Xero" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/DEXTools-1.png", alt: "DEXTools" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/175069-1.png", alt: "Partner" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/svg0-1.png", alt: "Partner" },
  { src: "https://namaca.ca/wp-content/uploads/2024/09/Ploto-black-png-logo-1.png", alt: "Ploto" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center text-primary mb-10"
        >
          Nos Partenaires
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p, i) => (
            <motion.img
              key={i}
              src={p.src}
              alt={p.alt}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
