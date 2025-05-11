import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-brand-blue text-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            Pronto para Globalizar Seus Vídeos?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Comece hoje mesmo a expandir seu alcance com legendas e dublagens impulsionadas por IA. 
            Experimente gratuitamente e veja a diferença.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="font-medium text-brand-blue">
                Criar Conta Grátis
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-medium">
                Agendar Demonstração
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
