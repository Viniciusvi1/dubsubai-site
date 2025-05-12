import { useState } from "react";
import { Button } from "@/components/ui/button";

const SubtitlesPage = () => {
  const [video, setVideo] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!video) return alert("Envie um vídeo primeiro!");
    // Aqui vai a lógica futura de envio para a IA
    alert(`Vídeo ${video.name} pronto para processar legendas.`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gerador de Legendas com IA</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <Button className="mt-4" onClick={handleUpload}>
        Gerar Legendas
      </Button>
    </div>
  );
};

export default SubtitlesPage;
