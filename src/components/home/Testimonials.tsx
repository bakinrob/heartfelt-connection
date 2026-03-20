import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Aman is super organized, open minded, and collaborative. His communication is excellent, extremely clear and detailed. He will work with the client to understand their needs and deadlines and put the right processes in place to exceed expectations. And, I have to say that he's also just a great guy who's a pleasure to work with. Highly recommended!",
    name: "Greg Pritchard",
    date: "Jun 25, 2024",
    avatar: "https://namaca.ca/wp-content/uploads/2024/09/image-1.png",
  },
  {
    text: "Aman is super organized, open minded, and collaborative. His communication is excellent, extremely clear and detailed. He will work with the client to understand their needs and deadlines and put the right processes in place to exceed expectations. Highly recommended!",
    name: "Greg Pritchard",
    date: "Jun 25, 2024",
    avatar: "https://namaca.ca/wp-content/uploads/2024/09/image-1.png",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-4"
        >
          Client testimonials
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          Sit aliquet nunc posuere vestibulum accumsan dapibus phasellus eget commodo.
        </p>

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative"
        >
          <img
            src="https://namaca.ca/wp-content/uploads/2024/09/bxs_quote-left.png"
            alt=""
            className="h-8 mx-auto mb-6 opacity-40"
          />
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            {testimonials[current].text}
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-primary text-sm">{testimonials[current].name}</p>
              <p className="text-xs text-muted-foreground">{testimonials[current].date}</p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))}
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
