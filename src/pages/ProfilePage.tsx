import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfilePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    company: "",
  });

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        setUser(data.session.user);
        // Fetch profile data if you have a profiles table
        // For now we'll just use the user's metadata
        if (data.session.user.user_metadata) {
          setProfile({
            name: data.session.user.user_metadata.name || "",
            bio: data.session.user.user_metadata.bio || "",
            company: data.session.user.user_metadata.company || "",
          });
        }
      } else {
        navigate("/login");
      }
    };

    checkSession();
  }, [navigate]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          name: profile.name,
          bio: profile.bio,
          company: profile.company,
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Perfil atualizado",
        description: "Suas informações foram atualizadas com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar perfil",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Perfil</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                    <Input 
                      id="name" 
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input 
                      id="email" 
                      value={user?.email || ""}
                      disabled
                      className="bg-gray-100"
                    />
                    <p className="text-sm text-gray-500 mt-1">O email não pode ser alterado.</p>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Empresa</label>
                    <Input 
                      id="company" 
                      value={profile.company}
                      onChange={(e) => setProfile({...profile, company: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium mb-1">Biografia</label>
                    <Textarea 
                      id="bio" 
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" disabled={loading}>
                    {loading ? "Salvando..." : "Salvar alterações"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Account Info */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Status da conta</p>
                  <p className="text-sm text-gray-500">Ativa</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium">Membro desde</p>
                  <p className="text-sm text-gray-500">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "-"}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={async () => {
                    await supabase.auth.signOut();
                    navigate("/login");
                  }}
                >
                  Sair da conta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
