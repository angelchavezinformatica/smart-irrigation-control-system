import { LucideIcon } from "lucide-react";

interface Props {
  children: React.ReactNode;
  title: string;
  icon: LucideIcon;
  iconClassName?: string;
}

export function CustomCard(props: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{props.title}</h2>
        <props.icon className={props.iconClassName} size={24} />
      </div>
      <div className="flex items-center justify-center h-[150px]">
        {props.children}
      </div>
    </div>
  );
}
