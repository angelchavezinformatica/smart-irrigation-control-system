import { useEffect, useState } from "react";

export interface IrrigationData {
  temperature: number;
  percentajeTemperature: number;
  humidity: number;
  percentajeHumidity: number;
  irrigationTime: string;
}

export type SystemStatus = "ACTIVO" | "NO ACTIVO";

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${secs}`;
};

const MAX_TEMPERATURE = 50;
const MAX_HUMIDIDY = 100;

export function useApp() {
  const [data, setData] = useState<IrrigationData>({
    temperature: 0,
    percentajeTemperature: 0,
    humidity: 0,
    percentajeHumidity: 0,
    irrigationTime: "0",
  });

  const [status, setStatus] = useState<SystemStatus>("NO ACTIVO");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setData({
        temperature: data.temperature,
        percentajeTemperature: (data.temperature / MAX_TEMPERATURE) * 100,
        humidity: data.humidity,
        percentajeHumidity: (data.humidity / MAX_HUMIDIDY) * 100,
        irrigationTime: formatTime(data.irrigation_time),
      });
      setStatus("ACTIVO");
    };

    return () => {
      ws.close();
    };
  }, []);

  return { data, status };
}
