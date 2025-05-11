import { FileVideo, Film, Calendar, Clock } from "lucide-react";

const DashboardStats = () => {
  // Mock stats data
  const stats = [
    {
      label: "Total de Vídeos",
      value: "12",
      icon: <FileVideo className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      label: "Minutos Processados",
      value: "126",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-green-100 text-green-800",
    },
    {
      label: "Vídeos Este Mês",
      value: "4",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      label: "Créditos Restantes",
      value: "35",
      icon: <Film className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
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
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
