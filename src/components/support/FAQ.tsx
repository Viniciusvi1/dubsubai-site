import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quais formatos de vídeo são suportados?",
      answer: "Suportamos a maioria dos formatos populares de vídeo, incluindo MP4, AVI, MOV, WMV e MKV. Nosso sistema converte automaticamente os formatos para processamento."
    },
    {
      question: "Quanto tempo leva para processar um vídeo?",
      answer: "O tempo de processamento depende da duração do vídeo e do tipo de serviço escolhido. Em média, um vídeo de 5 minutos é processado para legendas em cerca de 2-5 minutos, enquanto a dublagem pode levar de 5-15 minutos."
    },
    {
      question: "Quais idiomas são suportados?",
      answer: "Atualmente suportamos mais de 30 idiomas para legendas, incluindo português, inglês, espanhol, francês, alemão, italiano, chinês, japonês, coreano e muitos outros. Para dublagem, oferecemos cerca de 15 idiomas principais."
    },
    {
      question: "Como funciona o plano gratuito?",
      answer: "O plano gratuito permite processar até 3 minutos de vídeo por mês para legendas em até 2 idiomas. É perfeito para testar o serviço e ver a qualidade dos resultados antes de se inscrever em um plano pago."
    },
    {
      question: "Posso editar as legendas ou dublagens após a geração?",
      answer: "Sim, nossa plataforma oferece ferramentas de edição que permitem ajustar tempos de legendas, corrigir textos ou refazer trechos específicos de dublagem para garantir a máxima precisão."
    },
    {
      question: "É possível integrar o serviço com outras plataformas?",
      answer: "Sim, oferecemos uma API para integração com outras plataformas nos planos Empresariais. Entre em contato com nossa equipe de vendas para discutir suas necessidades específicas de integração."
    },
    {
      question: "Como é a qualidade das vozes na dublagem?",
      answer: "Utilizamos tecnologia avançada de IA para gerar vozes naturais e emocionais. Nossas vozes são constantemente avaliadas e melhoradas, oferecendo qualidade comparável a vozes humanas profissionais."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento. O acesso ao serviço continuará até o final do período de cobrança atual."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600">
            Encontre respostas para as perguntas mais comuns sobre nossa plataforma de legendas e dublagem.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-brand-blue hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
