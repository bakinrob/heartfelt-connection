import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUsTabs from "@/components/home/WhyChooseUsTabs";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUsNumbered from "@/components/home/WhyChooseUsNumbered";
import ExpertiseCounters from "@/components/home/ExpertiseCounters";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import ContactForm from "@/components/home/ContactForm";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();

  return (
    <Layout>
      <HeroSection />
      <WhyChooseUsTabs />
      <ServicesGrid />
      <WhyChooseUsNumbered />
      <ExpertiseCounters />
      <Testimonials />
      <Partners />
      <ContactForm />
    </Layout>
  );
};

export default Index;
