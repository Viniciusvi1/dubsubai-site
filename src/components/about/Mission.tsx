const Mission = () => {
    return (
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-700 mb-6">
                No DubSubAI, nossa missão é quebrar as barreiras linguísticas que limitam o acesso 
                ao conteúdo global, capacitando criadores a alcançar audiências em todo o mundo.
              </p>
              <p className="text-lg text-gray-700">
                Acreditamos que o idioma nunca deve ser um obstáculo para compartilhar conhecimento, 
                entretenimento ou informações importantes. Nossa tecnologia de IA de ponta 
                torna isso possível ao oferecer legendas e dublagens de alta qualidade.
              </p>
            </div>
  
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Nossos Valores</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Inovação Constante</h4>
                  <p className="text-gray-700">
                    Investimos continuamente em pesquisa e desenvolvimento para melhorar nossas tecnologias de IA.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Acessibilidade Para Todos</h4>
                  <p className="text-gray-700">
                    Trabalhamos para tornar o conteúdo global acessível a todos, independentemente do idioma.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Qualidade Incomparável</h4>
                  <p className="text-gray-700">
                    Comprometemo-nos com a excelência em cada legenda e dublagem que nossa plataforma produz.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Foco no Cliente</h4>
                  <p className="text-gray-700">
                    Priorizamos a experiência e o feedback dos nossos clientes em todas as decisões que tomamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Mission;
  