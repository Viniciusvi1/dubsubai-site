const Team = () => {
    const team = [
      {
        name: "Ana Silva",
        position: "CEO & Co-fundadora",
        image: "/placeholder.svg",
        bio: "Ana tem mais de 15 anos de experiência em IA e processamento de linguagem natural."
      },
      {
        name: "Carlos Mendes",
        position: "CTO & Co-fundador",
        image: "/placeholder.svg",
        bio: "Especialista em machine learning e processamento de áudio com doutorado em IA."
      },
      {
        name: "Mariana Santos",
        position: "Diretora de Produto",
        image: "/placeholder.svg",
        bio: "Lidera o desenvolvimento de produtos com foco na experiência do usuário."
      },
      {
        name: "Ricardo Almeida",
        position: "Diretor de Pesquisa",
        image: "/placeholder.svg",
        bio: "PhD em Linguística Computacional, especialista em tradução automática."
      }
    ];
  
    return (
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Nossa Equipe</h2>
            <p className="text-lg text-gray-600">
              Conheça as pessoas apaixonadas por tecnologia e acessibilidade que estão por trás do DubSubAI.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-brand-blue mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  