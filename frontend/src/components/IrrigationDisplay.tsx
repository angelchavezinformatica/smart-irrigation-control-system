import { useState } from 'react';
import { Droplets, Thermometer, Clock } from 'lucide-react';

interface IrrigationData {
  temperature: number;
  humidity: number;
  irrigationTime: number;
}

export default function IrrigationDisplay() {
  const [data, setData] = useState<IrrigationData>({
    temperature: 35,
    humidity: 30,
    irrigationTime: 45.5
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'temperature' | 'humidity') => {
    const value = Number(e.target.value);
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sistema de control de riego inteligente
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Temperature Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Temperatura</h2>
              <Thermometer className="text-red-500" size={24} />
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={data.temperature}
              onChange={(e) => handleInputChange(e, 'temperature')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {data.temperature}°C
            </p>
          </div>

          {/* Humidity Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Humedad</h2>
              <Droplets className="text-blue-500" size={24} />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={data.humidity}
              onChange={(e) => handleInputChange(e, 'humidity')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {data.humidity}%
            </p>
          </div>

          {/* Irrigation Time Card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Tiempo de riego</h2>
              <Clock className="text-green-500" size={24} />
            </div>
            <div className="flex items-center justify-center h-[60px]">
              <p className="text-2xl font-bold text-gray-800">
                {data.irrigationTime.toFixed(2)} minutos
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Estado del sistema</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Estado actual</p>
              <p className="font-semibold text-green-600">Activo</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Ultima actualización</p>
              <p className="font-semibold">{new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}