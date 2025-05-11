import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/support/FAQ";
import ContactForm from "@/components/support/ContactForm";

const SupportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-lg mb-4">Suporte</h1>
              <p className="text-xl text-gray-600">
                Encontre respostas para perguntas frequentes ou entre em contato com nossa equipe de suporte
              </p>
            </div>
          </div>
        </section>
        
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
