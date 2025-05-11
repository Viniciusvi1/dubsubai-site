import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">Sobre o DubSubAI</h1>
          <p className="text-xl text-gray-700 mb-8">
            Nossa missão é democratizar o acesso a conteúdo em vídeo em qualquer idioma, tornando a comunicação 
            global mais acessível e inclusiva através de tecnologia de ponta.
          </p>
          <Link to="/demo">
            <Button size="lg" className="font-medium">
              Agendar uma Demonstração
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;