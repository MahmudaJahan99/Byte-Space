import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TopicCardProps {
  icon: ReactNode;
  label: string;
  category: string;
}

const TopicCard = ({ icon, label, category }: TopicCardProps) => {
  const searchParams = new URLSearchParams({ category });

  return (
    <Link
      to={`/courses?${searchParams.toString()}`}
      aria-label={`Explore ${label} courses`}
      className="group h-full w-full border border-gray-border rounded-3xl p-4 flex flex-col items-center gap-2 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover/50 text-lg font-medium leading-[1.2] 
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue"
    >
      <span aria-hidden="true" className="bg-electric-lime p-3 rounded-full">
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
};

export default TopicCard;
