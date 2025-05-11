import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, Settings, User, Video, X } from "lucide-react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import VideoUploader from "@/components/dashboard/VideoUploader";
import VideoList from "@/components/dashboard/VideoList";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao sair",
        description: "Ocorreu um erro ao tentar sair. Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-brand-blue font-bold text-2xl">
            DubSubAI
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </header>
      
      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside 
          className={`
            ${sidebarOpen ? 'block' : 'hidden'} 
            lg:block fixed lg:relative inset-0 
            lg:inset-auto z-10 lg:z-0 w-64 
            bg-white border-r border-gray-200 
            h-full overflow-y-auto
          `}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 hidden lg:block">
            <Link to="/" className="text-brand-blue font-bold text-2xl">
              DubSubAI
            </Link>
          </div>
          
          {/* Sidebar Content */}
          <div className="p-4">
            <nav className="space-y-1">
              <Link to="/dashboard">
                <Button 
                  variant="default" 
                  className="w-full justify-start"
                >
                  <Video className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              
              <Link to="/profile">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                >
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                </Button>
              </Link>
              
              <Link to="/settings">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </Button>
              </Link>
            </nav>
            
            <div className="mt-8">
              <Button 
                variant="outline"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            
            <DashboardStats />
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Enviar Novo Vídeo</h2>
              <VideoUploader />
            </div>
            
            <VideoList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
