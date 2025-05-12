import { FileVideo, Film, Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import SubscribeButton from "./SubscribeButton";
import { Card, CardContent } from "@/components/ui/card";

type SubscriptionData = {
  subscribed: boolean;
  subscription_tier: string;
  subscription_end: string | null;
  minutes_remaining: number;
  languages: number;
  is_free: boolean;
};

const DashboardStats = () => {
  const { toast } = useToast();
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null);
  const [isLoadingSubscription, setIsLoadingSubscription] = useState(false);
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);
  
  const checkSubscription = async () => {
    try {
      setIsLoadingSubscription(true);
      
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        body: {}
      });
      
      if (error) {
        console.error("Error checking subscription:", error);
        throw new Error(error.message);
      }
      
      setSubscriptionData(data);
    } catch (error) {
      console.error("Failed to check subscription:", error);
      toast({
        title: "Erro ao verificar assinatura",
        description: "Não foi possível recuperar os detalhes da sua assinatura.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingSubscription(false);
    }
  };
  
  const openCustomerPortal = async () => {
    try {
      setIsLoadingPortal(true);
      
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        body: {}
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Failed to open customer portal:", error);
      toast({
        title: "Erro ao abrir portal de gerenciamento",
        description: "Não foi possível abrir o portal de gerenciamento da assinatura.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingPortal(false);
    }
  };
  
  // Check subscription on component mount
  useEffect(() => {
    checkSubscription();
  }, []);
  
  // Check if URL has checkout_success parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const checkoutSuccess = urlParams.get("checkout_success");
    
    if (checkoutSuccess === "true") {
      toast({
        title: "Assinatura realizada com sucesso!",
        description: "Sua assinatura foi ativada. Aproveite os recursos premium do DubSubAI.",
      });
      
      // Clean the URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Refresh subscription data
      checkSubscription();
    }
  }, []);

  // Default stats
  const stats = [
    {
      label: "Total de Vídeos",
      value: "0",
      icon: <FileVideo className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      label: "Minutos Disponíveis",
      value: subscriptionData ? `${subscriptionData.minutes_remaining}` : "...",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-green-100 text-green-800",
    },
    {
      label: "Idiomas Disponíveis",
      value: subscriptionData ? `${subscriptionData.languages}` : "...",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      label: "Plano Atual",
      value: subscriptionData ? subscriptionData.subscription_tier.charAt(0).toUpperCase() + subscriptionData.subscription_tier.slice(1) : "...",
      icon: <Film className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg border border-gray-200 flex items-center"
          >
            <div className={`rounded-full p-3 ${stat.color} mr-4`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{isLoadingSubscription && (i > 0) ? "..." : stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {subscriptionData && (
        <div className="flex justify-end">
          {subscriptionData.is_free ? (
            <Card className="w-full border-2 border-brand-blue">
              <CardContent className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Atualize para o Plano Profissional</h3>
                  <p className="text-gray-600">
                    Obtenha acesso a 60 minutos de vídeo e 15 idiomas por apenas R$49/mês
                  </p>
                </div>
                <SubscribeButton 
                  currentTier={subscriptionData.subscription_tier}
                  isLoading={isLoadingSubscription} 
                  className="whitespace-nowrap"
                />
              </CardContent>
            </Card>
          ) : (
            <Button
              variant="outline"
              onClick={openCustomerPortal}
              disabled={isLoadingPortal}
            >
              {isLoadingPortal ? "Carregando..." : "Gerenciar Assinatura"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardStats;
