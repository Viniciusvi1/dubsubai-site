import { Clock, Download, Eye, FileVideo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Mock data for video list
const mockVideos = [
  {
    id: 1,
    title: "Apresentação do Produto.mp4",
    thumbnail: "/placeholder.svg",
    duration: "03:45",
    status: "completed",
    type: "subtitle",
    language: "en-US",
    date: "2023-10-15",
  },
  {
    id: 2,
    title: "Treinamento da Equipe.mp4",
    thumbnail: "/placeholder.svg",
    duration: "12:30",
    status: "processing",
    type: "dubbing",
    language: "es-ES",
    date: "2023-10-14",
  },
  {
    id: 3,
    title: "Entrevista com Cliente.mp4",
    thumbnail: "/placeholder.svg",
    duration: "08:20",
    status: "completed",
    type: "subtitle",
    language: "pt-BR",
    date: "2023-10-12",
  },
  {
    id: 4,
    title: "Vídeo Institucional.mp4",
    thumbnail: "/placeholder.svg",
    duration: "05:15",
    status: "failed",
    type: "dubbing",
    language: "fr-FR",
    date: "2023-10-10",
  },
];

type VideoItemProps = {
  video: typeof mockVideos[0];
};

const VideoItem = ({ video }: VideoItemProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="relative aspect-video bg-gray-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2 truncate" title={video.title}>
          {video.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>
            {video.type === "subtitle" ? "Legendas" : "Dublagem"} ({video.language})
          </span>
          <span>{video.date}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {video.status === "completed" ? (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Concluído
              </span>
            ) : video.status === "processing" ? (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <Clock className="w-3 h-3 mr-1 animate-pulse" />
                Processando
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Falhou
              </span>
            )}
          </div>
          
          <div className="flex space-x-1">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <Eye className="h-4 w-4" />
            </Button>
            {video.status === "completed" && (
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoList = () => {
  const [filter, setFilter] = useState("all");

  const filteredVideos = filter === "all" 
    ? mockVideos 
    : mockVideos.filter(video => video.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Seus Vídeos</h2>
        <div className="flex space-x-2">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            Todos
          </Button>
          <Button 
            variant={filter === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("completed")}
          >
            Concluídos
          </Button>
          <Button 
            variant={filter === "processing" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("processing")}
          >
            Processando
          </Button>
        </div>
      </div>

      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FileVideo className="w-16 h-16 mx-auto text-gray-400 mb-3" />
          <h3 className="text-xl font-medium text-gray-700">Nenhum vídeo encontrado</h3>
          <p className="text-gray-500 mt-1">
            Não há vídeos com o filtro selecionado
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoList;
