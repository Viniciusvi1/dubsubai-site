import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CareersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-lg mb-4">Carreiras</h1>
              <p className="text-xl text-gray-600">
                Junte-se à nossa equipe e ajude a transformar o mundo da dublagem e legendagem
              </p>
            </div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Por que trabalhar na DubSubAI?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Na DubSubAI, estamos revolucionando a forma como o conteúdo de vídeo é tornado acessível globalmente. 
                Nossa equipe é composta por pessoas apaixonadas, inovadoras e dedicadas a fazer a diferença. 
                Se você está procurando um ambiente dinâmico onde possa crescer e impactar milhões de usuários, 
                este é o lugar certo!
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Vagas em Aberto</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2">Engenheiro(a) de IA Senior</h3>
                  <p className="text-gray-600 mb-4">Remoto · Período Integral</p>
                  <p className="mb-4">
                    Buscamos um(a) especialista em IA com experiência em processamento de linguagem natural e 
                    síntese de voz para liderar nossa equipe de engenharia de IA.
                  </p>
                  <a href="mailto:dubsubai@hotmail.com" className="text-brand-blue hover:underline font-medium">
                    Candidatar-se →
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2">Desenvolvedor(a) Frontend React</h3>
                  <p className="text-gray-600 mb-4">São Paulo · Período Integral</p>
                  <p className="mb-4">
                    Procuramos desenvolvedor(a) frontend com experiência em React e TypeScript para 
                    criar interfaces intuitivas e responsivas para nossa plataforma.
                  </p>
                  <a href="mailto:dubsubai@hotmail.com" className="text-brand-blue hover:underline font-medium">
                    Candidatar-se →
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2">Especialista em Marketing Digital</h3>
                  <p className="text-gray-600 mb-4">Remoto · Período Integral</p>
                  <p className="mb-4">
                    Estamos em busca de um(a) especialista em marketing digital para expandir nossa 
                    presença online e desenvolver estratégias para aquisição de usuários.
                  </p>
                  <a href="mailto:dubsubai@hotmail.com" className="text-brand-blue hover:underline font-medium">
                    Candidatar-se →
                  </a>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg mb-4">
                  Não encontrou uma vaga que corresponda ao seu perfil? Envie seu currículo para consideração em futuras oportunidades.
                </p>
                <a href="mailto:dubsubai@hotmail.com" className="text-brand-blue hover:underline font-semibold">
                  dubsubai@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
