import { Star } from "lucide-react";
import FadeUpBlur from "@/components/animations/FadeUpBlur";
import FadeInScale from "@/components/animations/FadeInScale";

const testimonials = [
  {
    text: "Aman is super organized, open minded, and collaborative. His communication is excellent — extremely clear and detailed. He will work to understand your needs and exceed expectations.",
    name: "Greg Pritchard",
    title: "Business Owner",
  },
  {
    text: "Namaca transformed how we handle billing and compliance. Their healthcare expertise is unmatched — they know our industry inside and out.",
    name: "Sarah M.",
    title: "Medical Practice Manager",
  },
  {
    text: "We got CFO-level reporting from day one. The Xero dashboards they set up give us real-time clarity on every dollar. Worth every cent.",
    name: "Daniel R.",
    title: "Tech Startup Founder",
  },
];

const TestimonialsSection = () => (
  <section className="bg-namaca-navy py-24">
    <div className="container">
      <FadeUpBlur>
        <h2 className="font-display text-white text-center mb-16" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
          Trusted. Proven. Referenced.
        </h2>
      </FadeUpBlur>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeInScale key={t.name} index={i} staggerDelay={0.1}>
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-namaca-orange text-namaca-orange" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-white/75 text-base leading-relaxed mb-6 italic font-body flex-1">
                "{t.text}"
              </p>
              {/* Divider + author */}
              <div className="border-t border-white/[0.06] pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-namaca-orange/20 flex items-center justify-center text-namaca-orange font-display text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold font-body">{t.name}</div>
                  <div className="text-namaca-muted text-xs font-body">{t.title}</div>
                </div>
              </div>
            </div>
          </FadeInScale>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
