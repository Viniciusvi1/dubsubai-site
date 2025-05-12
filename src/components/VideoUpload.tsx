import React, { useState } from "react";

const VideoUpload: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) return;
    // Aqui você vai conectar com a IA ou API de backend
    alert("Vídeo pronto para ser processado!");
  };

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Envie seu vídeo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full"
        />
        {videoURL && (
          <video src={videoURL} controls className="w-full rounded-lg" />
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Processar vídeo
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
