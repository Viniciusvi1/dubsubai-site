import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Link, Video } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const VideoUploader = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [serviceType, setServiceType] = useState<"subtitle" | "dubbing">("subtitle");
  const [language, setLanguage] = useState("pt-BR");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [uploadType, setUploadType] = useState<"file" | "url">("file");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length) {
      const droppedFile = files[0];
      if (droppedFile.type.startsWith("video/")) {
        setFile(droppedFile);
      } else {
        toast({
          title: "Formato inválido",
          description: "Por favor, selecione um arquivo de vídeo.",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (uploadType === "file" && !file) return;
    if (uploadType === "url" && !videoUrl) return;

    setIsUploading(true);

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      
      if (uploadType === "file" && file) {
        toast({
          title: "Vídeo enviado com sucesso",
          description: `O vídeo "${file.name}" está sendo processado.`,
        });
        setFile(null);
      } else if (uploadType === "url") {
        toast({
          title: "Vídeo adicionado com sucesso",
          description: `O vídeo "${videoTitle || videoUrl}" está sendo processado.`,
        });
        setVideoUrl("");
        setVideoTitle("");
      }
    }, 2000);
  };

  // Helper function to extract video ID from YouTube URL
  const getYoutubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const renderYoutubePreview = () => {
    if (!videoUrl) return null;
    
    const videoId = getYoutubeVideoId(videoUrl);
    if (!videoId) return null;
    
    return (
      <div className="mt-4">
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-1">Tipo de Serviço</label>
          <Select 
            value={serviceType} 
            onValueChange={(value: "subtitle" | "dubbing") => setServiceType(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha o serviço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="subtitle">Legendas</SelectItem>
              <SelectItem value="dubbing">Dublagem</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-1">Idioma de Saída</label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha o idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
              <SelectItem value="en-US">Inglês (EUA)</SelectItem>
              <SelectItem value="es-ES">Espanhol</SelectItem>
              <SelectItem value="fr-FR">Francês</SelectItem>
              <SelectItem value="de-DE">Alemão</SelectItem>
              <SelectItem value="it-IT">Italiano</SelectItem>
              <SelectItem value="ja-JP">Japonês</SelectItem>
              <SelectItem value="zh-CN">Chinês (Mandarim)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={uploadType} onValueChange={(val) => setUploadType(val as "file" | "url")} className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="file">Upload de Arquivo</TabsTrigger>
          <TabsTrigger value="url">URL de Vídeo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="file" className="mt-4">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragging
                ? "border-brand-blue bg-blue-50"
                : "border-gray-300 hover:border-brand-blue hover:bg-blue-50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <input
              id="file-upload"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center">
              <Upload
                className={`w-12 h-12 mb-4 ${
                  isDragging ? "text-brand-blue" : "text-gray-400"
                }`}
              />
              {file ? (
                <div>
                  <p className="text-lg font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-medium">
                    Arraste e solte seu vídeo aqui
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ou clique para selecionar um arquivo
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Formatos suportados: MP4, AVI, MOV, WMV (max. 500MB)
                  </p>
                </div>
              )}
            </div>
          </div>

          {file && (
            <Button
              className="w-full mt-4"
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? "Enviando..." : "Enviar Vídeo"}
            </Button>
          )}
        </TabsContent>
        
        <TabsContent value="url" className="mt-4 space-y-4">
          <div>
            <Label htmlFor="video-title">Título do Vídeo</Label>
            <Input
              id="video-title"
              placeholder="Título para identificar o vídeo (opcional)"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="video-url">URL do Vídeo</Label>
            <div className="flex mt-1">
              <Input
                id="video-url"
                placeholder="https://youtube.com/watch?v=..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="rounded-r-none"
              />
              <Button
                type="submit"
                className="rounded-l-none"
                onClick={handleUpload}
                disabled={!videoUrl || isUploading}
              >
                {isUploading ? "Adicionando..." : "Adicionar"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Suporta vídeos do YouTube, Vimeo e URLs de vídeo diretas
            </p>
          </div>
          
          {renderYoutubePreview()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VideoUploader;
