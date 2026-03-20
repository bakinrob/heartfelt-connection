import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Expertise au niveau du système", value: 100, suffix: "%" },
  { label: "Années d'expérience", value: 10, suffix: "+" },
  { label: "Client Satisfaction Rate", value: 99, suffix: "%" },
  { label: "Number of Clients Served", value: 50, suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / target;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-accent">
      {count}{suffix}
    </span>
  );
};

const ExpertiseCounters = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise sectorielle</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Participez à une discussion approfondie sur nos connaissances approfondies et nos compétences spécialisées dans le secteur de la comptabilité
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm text-primary-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCounters;
