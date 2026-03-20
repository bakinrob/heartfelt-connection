import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Handshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("contact.success"));
    }, 1000);
  };

  const inputCls = "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50";

  return (
    <section id="book-now" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Handshake className="h-12 w-12 text-accent mb-6" />
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>📧 info@namaca.com</p>
              <p>📍 5915 Rue De Jumonville<br />Montréal, Québec H1M1R2, Canada</p>
              <p>📞 +1 (514) 819-1513</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("contact.title")}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder={t("contact.firstName")} required className={inputCls} />
                <Input placeholder={t("contact.lastName")} required className={inputCls} />
              </div>
              <Input type="email" placeholder={t("contact.email")} required className={inputCls} />
              <Input type="tel" placeholder={t("contact.phone")} className={inputCls} />
              <Textarea placeholder={t("contact.message")} rows={4} className={inputCls} />
              <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base py-5">
                {loading ? t("contact.sending") : t("contact.submit")}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
