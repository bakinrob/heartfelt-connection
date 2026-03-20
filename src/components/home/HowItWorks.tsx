import FadeUpBlur from "@/components/animations/FadeUpBlur";
import FadeInScale from "@/components/animations/FadeInScale";

const steps = [
  {
    num: "01",
    title: "Start a Conversation",
    body: "Book a free discovery call. We learn your business, your pain points, and your goals.",
  },
  {
    num: "02",
    title: "We Map Your Finances",
    body: "We show you exactly what we'll handle, which tools we'll use, and how your dashboards will look.",
  },
  {
    num: "03",
    title: "Onboarding in Days",
    body: "Your dedicated team takes over. We handle the migration, setup, and first-month close.",
  },
  {
    num: "04",
    title: "Ongoing Clarity",
    body: "Monthly reviews, real-time Xero dashboards, and a team that actually responds when you message them.",
  },
];

const HowItWorks = () => (
  <section className="bg-namaca-dark py-24">
    <div className="container">
      <FadeUpBlur>
        <span className="section-label">The Namaca Way</span>
        <h2 className="font-display text-white mb-16" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
          From conversation to clarity in&nbsp;4&nbsp;steps.
        </h2>
      </FadeUpBlur>

      <div className="flex flex-col lg:flex-row gap-8">
        {steps.map((step, i) => (
          <FadeInScale key={step.num} index={i} staggerDelay={0.12} className="flex-1 flex flex-col items-start">
            <span className="font-display text-5xl text-namaca-orange/20 mb-4">{step.num}</span>
            <h3 className="font-display text-xl text-white mb-2">{step.title}</h3>
            <p className="text-namaca-muted text-sm leading-relaxed font-body">{step.body}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block w-full h-px bg-gradient-to-r from-namaca-orange/60 to-transparent mt-6" />
            )}
          </FadeInScale>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
