import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-cream py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-primary">
              {t("hero.title.1")}{" "}
              <span className="relative inline-block">
                {t("hero.title.highlight")}
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-accent rounded-full" />
              </span>{" "}
              {t("hero.title.2")}
            </h1>
            <div className="flex items-start gap-3 mt-8">
              <span className="block w-12 h-[2px] bg-primary mt-3 shrink-0" />
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                {t("hero.desc")}
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base">
              <a href="#book-now">{t("hero.cta")}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://namaca.ca/wp-content/uploads/2024/09/Frame-1000003816.png"
                alt="Professional accounting services"
                className="col-span-2 rounded-2xl object-cover w-full"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
