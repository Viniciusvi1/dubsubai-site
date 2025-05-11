import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6 animate-fade-up max-w-2xl mx-auto text-center">
            <h1 className="heading-xl text-gray-900">
              Legende ou Duble.<br />
              <span className="text-brand-blue">Sua escolha. Seu idioma.</span>
            </h1>
            <p className="text-xl text-gray-700">
              Transforme seus vídeos com legendas precisas ou dublagem realista em múltiplos idiomas usando inteligência artificial.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/signup">
                <Button size="lg" className="font-medium text-base">
                  Começar Agora
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="font-medium text-base">
                  Agendar uma Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Experimente grátis. Sem necessidade de cartão de crédito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
