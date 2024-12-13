import "react-circular-progressbar/dist/styles.css";
import { Clock, Droplets, Thermometer } from "lucide-react";
import { CircularProgressbarCard } from "./CircularProgressbarCard";
import { IrrigationData } from "../app.hook";
import { CustomCard } from "./CustomCard";

interface Props {
  data: IrrigationData;
}

export function Cards({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CircularProgressbarCard
        title="Temperatura"
        icon={Thermometer}
        iconClassName="text-red-500"
        value={data.percentajeTemperature}
        text={`${data.temperature}°C`}
      />

      <CircularProgressbarCard
        title="Humedad"
        icon={Droplets}
        iconClassName="text-blue-500"
        value={data.percentajeHumidity}
        text={`${data.humidity}%`}
      />

      <CustomCard
        title="Tiempo de riego"
        icon={Clock}
        iconClassName="text-green-500"
      >
        <p className="text-4xl font-bold text-gray-800">
          {data.irrigationTime}
        </p>
      </CustomCard>
    </div>
  );
}
