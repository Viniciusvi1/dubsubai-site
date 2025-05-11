import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [subtitleLanguage, setSubtitleLanguage] = useState("pt-BR");
  const [dubbingLanguage, setDubbingLanguage] = useState("pt-BR");
  const [saving, setSaving] = useState(false);
  
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    // Simulating API call
    setTimeout(() => {
      setSaving(false);
      toast({
        title: "Configurações salvas",
        description: "Suas preferências foram atualizadas com sucesso.",
      });
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Configurações</h1>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificações por Email</p>
                    <p className="text-sm text-gray-500">Receber atualizações sobre seus vídeos</p>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Idioma</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <Label htmlFor="subtitle-lang">Idioma de Legendas Padrão</Label>
                  <Input 
                    id="subtitle-lang" 
                    value={subtitleLanguage}
                    onChange={(e) => setSubtitleLanguage(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="dubbing-lang">Idioma de Dublagem Padrão</Label>
                  <Input 
                    id="dubbing-lang" 
                    value={dubbingLanguage}
                    onChange={(e) => setDubbingLanguage(e.target.value)}
                  />
                </div>
                
                <Button type="submit" disabled={saving}>
                  {saving ? "Salvando..." : "Salvar Configurações"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
