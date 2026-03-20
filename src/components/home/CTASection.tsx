import FadeUpBlur from "@/components/animations/FadeUpBlur";

const CTASection = () => (
  <section className="py-28 text-center" style={{
    background: 'radial-gradient(ellipse at center, rgba(234,118,0,0.12) 0%, #080C14 65%)',
  }}>
    <div className="container max-w-3xl">
      <FadeUpBlur>
        <h2 className="font-display text-white mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.04em' }}>
          Stop guessing. Start knowing.
        </h2>
      </FadeUpBlur>
      <FadeUpBlur delay={0.2}>
        <p className="text-namaca-muted text-lg leading-relaxed font-body mb-10 max-w-xl mx-auto">
          Join 1,500+ Canadian businesses with crystal-clear
          finances. Your first consultation is free —
          and it changes&nbsp;everything.
        </p>
      </FadeUpBlur>
      <FadeUpBlur delay={0.4}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book-now"
            className="bg-namaca-orange text-white rounded-full px-10 py-4 font-semibold text-sm uppercase tracking-[0.14em] hover:bg-namaca-glow hover:scale-[1.03] transition-all font-body"
          >
            Book Free Consultation
          </a>
          <a
            href="https://namaca.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-10 py-4 text-white text-sm font-semibold uppercase tracking-[0.14em] hover:scale-[1.03] transition-transform font-body"
          >
            namaca.ca →
          </a>
        </div>
      </FadeUpBlur>
      <FadeUpBlur delay={0.5}>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-namaca-muted text-sm font-body">
          <span>✓ No commitment required</span>
          <span>✓ Canadian tax experts</span>
          <span>✓ Response within 24h</span>
        </div>
      </FadeUpBlur>
    </div>
  </section>
);

export default CTASection;
