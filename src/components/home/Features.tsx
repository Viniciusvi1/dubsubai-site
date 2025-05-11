import { File, FileVideo, Globe, Calendar, Users, Ribbon } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileVideo className="w-6 h-6 text-brand-blue" />,
      title: "Reconhecimento Automático",
      description: "Nossa IA identifica e analisa vozes em vídeos com alta precisão, separando diferentes falantes.",
    },
    {
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      title: "Separação por Gênero",
      description: "Reconhecimento inteligente de vozes masculinas e femininas para dublagem mais natural.",
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-blue" />,
      title: "Tradução Automática",
      description: "Traduza seu conteúdo para múltiplos idiomas mantendo o contexto e significado original.",
    },
    {
      icon: <File className="w-6 h-6 text-brand-blue" />,
      title: "Legendas Sincronizadas",
      description: "Geração automática de legendas perfeitamente sincronizadas com o áudio do vídeo.",
    },
    {
      icon: <Ribbon className="w-6 h-6 text-brand-blue" />,
      title: "Dublagem Realista",
      description: "Vozes naturais e emocionais que parecem humanas, disponíveis em diversos idiomas.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-brand-blue" />,
      title: "Economia de Tempo",
      description: "Reduza horas de trabalho manual para minutos com processamento automatizado.",
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Funcionalidades Poderosas</h2>
          <p className="text-lg text-gray-600">
            Nossa tecnologia de IA oferece soluções avançadas para legendagem e dublagem de vídeos, 
            permitindo que você alcance audiências globais com facilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-blue-50 w-12 h-12 rounded-md flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
