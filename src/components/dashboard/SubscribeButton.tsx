import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface SubscribeButtonProps {
  currentTier: string;
  isLoading?: boolean;
  onSubscribe?: () => void;
  className?: string;
}

const SubscribeButton = ({ 
  currentTier, 
  isLoading: externalLoading,
  onSubscribe,
  className 
}: SubscribeButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubscribe = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: "professional" }
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Falha ao criar sessão de pagamento");
      }
      
      if (onSubscribe) {
        onSubscribe();
      }
    } catch (error) {
      console.error("Erro ao processar assinatura:", error);
      toast({
        title: "Erro ao processar assinatura",
        description: error instanceof Error ? error.message : "Ocorreu um erro inesperado",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={isLoading || externalLoading || currentTier !== "free"}
      variant="default"
      className={className}
    >
      {isLoading || externalLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processando...
        </>
      ) : (
        "Assinar Plano Profissional"
      )}
    </Button>
  );
};

export default SubscribeButton;
