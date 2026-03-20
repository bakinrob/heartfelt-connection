import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import StaggeredFade from "@/components/animations/StaggeredFade";
import FadeUpBlur from "@/components/animations/FadeUpBlur";

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
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <span className="section-label text-center">{t("testimonials.title")}</span>
        <StaggeredFade
          text={t("testimonials.title")}
          as="h2"
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 font-heading"
          charDelay={0.03}
        />
        <FadeUpBlur delay={0.2}>
          <p className="text-center text-muted-foreground mb-12">{t("testimonials.subtitle")}</p>
        </FadeUpBlur>

        <FadeUpBlur delay={0.3}>
          <div className="card-glass p-8 md:p-12 text-center relative">
            {/* Star rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            <img src="https://namaca.ca/wp-content/uploads/2024/09/bxs_quote-left.png" alt="" className="h-8 mx-auto mb-6 opacity-30" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{testimonials[current].text}</p>
            <div className="flex items-center justify-center gap-3">
              <img src={testimonials[current].avatar} alt={testimonials[current].name} className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/20" />
              <div className="text-left">
                <p className="font-semibold text-primary text-sm font-heading">{testimonials[current].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[current].date}</p>
              </div>
            </div>
          </div>
        </FadeUpBlur>

        <div className="flex justify-center gap-3 mt-8">
          <button onClick={() => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-accent" : "w-2 bg-border"}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))} className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
