import { Upload, Settings, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-brand-blue" />,
      title: "Envie seu Vídeo",
      description: "Faça upload do seu vídeo diretamente em nossa plataforma em qualquer formato comum.",
    },
    {
      icon: <Settings className="w-8 h-8 text-brand-blue" />,
      title: "Escolha as Opções",
      description: "Selecione o idioma para legendas ou dublagem e personalize conforme necessário.",
    },
    {
      icon: <Download className="w-8 h-8 text-brand-blue" />,
      title: "Obtenha o Resultado",
      description: "Baixe ou compartilhe seu vídeo com legendas ou dublagem de alta qualidade.",
    },
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Como Funciona</h2>
          <p className="text-lg text-gray-600">
            Legendar ou dublar seus vídeos nunca foi tão fácil. Nosso processo simples de três etapas entrega 
            resultados profissionais em minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              
              {/* Step content */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector (not on the last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
