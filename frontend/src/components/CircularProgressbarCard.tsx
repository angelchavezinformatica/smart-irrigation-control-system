import { LucideIcon } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CustomCard } from "./CustomCard";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  title: string;
  icon: LucideIcon;
  value: number;
  text: string;
  iconClassName?: string;
}

export function CircularProgressbarCard({
  title,
  icon,
  value,
  text,
  iconClassName,
}: Props) {
  return (
    <CustomCard title={title} icon={icon} iconClassName={iconClassName}>
      <div style={{ width: "150px", height: "150px" }}>
        <CircularProgressbar
          value={value}
          text={text}
          styles={buildStyles({
            pathColor: "#4caf50",
            textColor: "#333",
            trailColor: "#ddd",
            textSize: "16px",
          })}
        />
      </div>
    </CustomCard>
  );
}
