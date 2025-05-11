import { Globe, Clock, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Globe className="w-12 h-12 text-brand-blue" />,
      title: "Alcance Global",
      description: "Expanda sua audiência para mercados internacionais quebrando barreiras linguísticas com legendas e dublagens em múltiplos idiomas."
    },
    {
      icon: <Clock className="w-12 h-12 text-brand-blue" />,
      title: "Economia de Tempo",
      description: "Reduza semanas de trabalho para apenas minutos com nossa tecnologia de IA que processa vídeos com rapidez e precisão."
    },
    {
      icon: <Users className="w-12 h-12 text-brand-blue" />,
      title: "Acessibilidade",
      description: "Torne seu conteúdo acessível para pessoas com deficiência auditiva ou que preferem consumir conteúdo em seu idioma nativo."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Por Que Escolher DubSubAI</h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma oferece inúmeros benefícios para criadores de conteúdo, educadores e empresas 
            que desejam expandir seu alcance global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-5 bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
