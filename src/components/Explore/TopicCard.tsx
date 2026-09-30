import type { ReactNode } from "react";

interface TopicCardProps {
  icon: ReactNode;
  label: string;
}

const TopicCard = ({ icon, label }: TopicCardProps) => {
  return (
    <div className="border border-gray-border rounded-3xl py-4 px-6 xl:py-8 font-medium text-lg md:text-xl leading-[1.2] flex flex-col gap-2 items-center">
      <div className="bg-electric-lime p-3 rounded-full">{icon}</div>
      {label}
    </div>
  );
};

export default TopicCard;
