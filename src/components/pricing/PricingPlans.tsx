import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<string | null>(null);
  
  const plans = [
    {
      id: "free",
      name: "Gratuito",
      price: "R$0",
      period: "para sempre",
      description: "Perfeito para testar o serviço",
      features: [
        "3 minutos de vídeo por mês",
        "Legendas em 2 idiomas",
        "Suporte por email",
        "Exportação em formato SRT",
        "Limite de 720p",
      ],
      buttonText: "Começar Grátis",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
    {
      id: "professional",
      name: "Profissional",
      price: "R$49",
      period: "por mês",
      description: "Para criadores de conteúdo e educadores",
      features: [
        "60 minutos de vídeo por mês",
        "Legendas em 15 idiomas",
        "Dublagem em 5 idiomas",
        "Suporte prioritário",
        "Exportação em múltiplos formatos",
        "Qualidade até 4K",
        "Separação de falantes",
      ],
      buttonText: "Assinar Agora",
      buttonVariant: "default" as const,
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Empresarial",
      price: "R$199",
      period: "por mês",
      description: "Para empresas e grandes produtoras",
      features: [
        "300 minutos de vídeo por mês",
        "Legendas em todos os idiomas",
        "Dublagem em 30 idiomas",
        "Suporte prioritário 24/7",
        "API de integração",
        "Qualidade até 8K",
        "Separação avançada de falantes",
        "Personalização de vozes",
      ],
      buttonText: "Contato Comercial",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
  ];

  const handleSubscription = async (planId: string) => {
    try {
      setIsLoading(planId);
      
      // Check if user is logged in
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Redirect to login if user is not authenticated
        toast({
          title: "Login necessário",
          description: "Você precisa estar logado para assinar um plano.",
        });
        navigate("/login", { state: { redirectAfterLogin: "/pricing" } });
        return;
      }
      
      if (planId === "free") {
        // For free tier, redirect to dashboard
        navigate("/dashboard");
        toast({
          title: "Plano Gratuito Ativo",
          description: "Você está usando o plano gratuito do DubSubAI.",
        });
        return;
      }
      
      // Call edge function to create checkout session
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: planId }
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      if (data?.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        throw new Error("Falha ao criar sessão de pagamento");
      }
      
    } catch (error) {
      console.error("Erro ao processar assinatura:", error);
      toast({
        title: "Erro ao processar assinatura",
        description: error instanceof Error ? error.message : "Ocorreu um erro inesperado",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Planos e Preços</h2>
          <p className="text-lg text-gray-600">
            Escolha o plano ideal para suas necessidades de legendagem e dublagem.
            Todos os planos incluem acesso à nossa tecnologia de IA de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-xl border ${
                plan.highlighted 
                  ? "border-brand-blue shadow-lg shadow-blue-100" 
                  : "border-gray-200"
              } p-6 relative`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500"> {plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-blue shrink-0 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button 
                  variant={plan.buttonVariant}
                  onClick={() => handleSubscription(plan.id)}
                  disabled={isLoading !== null}
                  className={`w-full ${plan.highlighted ? "bg-brand-blue hover:bg-brand-dark" : ""}`}
                >
                  {isLoading === plan.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    plan.buttonText
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Precisa de um plano personalizado? {" "}
            <Link to="/support" className="text-brand-blue hover:underline font-medium">
              Entre em contato conosco
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
