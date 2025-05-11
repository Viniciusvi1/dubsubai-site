import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingPlans from "@/components/pricing/PricingPlans";
import CTA from "@/components/home/CTA";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-lg mb-4">Planos e Preços</h1>
              <p className="text-xl text-gray-600">
                Escolha o plano ideal para suas necessidades de tradução e dublagem de vídeos
              </p>
            </div>
          </div>
        </section>
        
        <PricingPlans />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
