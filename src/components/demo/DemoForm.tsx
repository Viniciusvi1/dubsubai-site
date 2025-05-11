import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, industry: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Solicitação enviada",
        description: "Nossa equipe entrará em contato para agendar sua demonstração!",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        industry: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="heading-lg mb-4">Agende uma Demonstração</h1>
          <p className="text-lg text-gray-600">
            Veja nossa plataforma em ação com uma demonstração personalizada. 
            Preencha o formulário abaixo e nossa equipe entrará em contato para agendar.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">
                  Empresa
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="industry" className="block mb-2 font-medium">
                Setor
              </label>
              <Select onValueChange={handleSelectChange} value={formData.industry}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione seu setor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="education">Educação</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="entertainment">Entretenimento</SelectItem>
                  <SelectItem value="ecommerce">E-Commerce</SelectItem>
                  <SelectItem value="technology">Tecnologia</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Mensagem (opcional)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos mais sobre suas necessidades específicas..."
                rows={4}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              Ao enviar, você concorda com nossa{" "}
              <a href="/privacy" className="text-brand-blue hover:underline">
                Política de Privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
