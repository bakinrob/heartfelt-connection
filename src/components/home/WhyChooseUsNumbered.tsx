import { motion } from "framer-motion";

const items = [
  {
    num: "01",
    title: "100% Online & Tech-Driven",
    desc: "Morbi in praesent tortor metus. Sit aliquet nunc posuere vestibulum accumsan dapibus phasellus eget commodo. Elementum ut eget at dui felis lacus vivamus.",
  },
  {
    num: "02",
    title: "No More Re-training",
    desc: "We know the amount of time, money and energy it takes to re-train your bookkeeper and payroll staff. Many small businesses and startups may not even require an in-house bookkeeper. We bet that once you partner with us, you won't have to worry about hiring another bookkeeper.",
  },
  {
    num: "03",
    title: "Gain Clarity",
    desc: "#1 tip from a top-class business mentor is to 'Gain Clarity' on Key Performance Indicators (KPIs) and then leave the rest to professionals. That's precisely what we do: to save you time and provide you with a KPI Dashboard for gaining clarity about your business finances.",
  },
  {
    num: "04",
    title: "Beyond Bookkeeping",
    desc: "Namaca goes beyond bookkeeping, offering transformative accounting solutions, including AP & AR, Payroll, Tax, and Fractional CFO services. From real-time insights to expert advice, we empower businesses to thrive without breaking the bank.",
  },
  {
    num: "05",
    title: "Expert Solutions",
    desc: "At Namaca, we are focused on 4 key sectors: e-commerce, technology, contractors, and professionals. Our commitment to delivering tailored modern solutions offers the specialized financial support you deserve.",
  },
  {
    num: "06",
    title: "Value Innovation",
    desc: "Our value innovation eliminates the need for businesses to choose between traditional premium accounting and low-cost freelancers. Instead, we offer CFO-level services at the price of bookkeeping, complete with modern financial statements.",
  },
];

const WhyChooseUsNumbered = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why choose us?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Morbi in praesent tortor metus. Sit aliquet nunc posuere vestibulum accumsan dapibus phasellus eget commodo.
              </p>
            </motion.div>
            <div className="hidden lg:block mt-10">
              <img
                src="https://namaca.ca/wp-content/uploads/2024/09/6782-1.png"
                alt="Why choose Namaca"
                className="rounded-2xl max-h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-0">
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b border-border py-8 first:pt-0"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-bold text-accent/20 shrink-0 leading-none">{item.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsNumbered;
