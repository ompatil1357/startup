
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col">
        <section className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section className="min-h-screen flex items-center">
          <Features />
        </section>
        <section className="min-h-screen flex items-center">
          <HowItWorks />
        </section>
        <section className="min-h-screen flex items-center">
          <Testimonials />
        </section>
        <section className="min-h-screen flex items-center">
          <Partners />
        </section>
        <section className="min-h-screen flex items-center">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
