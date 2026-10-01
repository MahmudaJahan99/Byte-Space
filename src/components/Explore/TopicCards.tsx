import {
  BuildingComplex,
  Camera,
  CircleDollarSign,
  CodeXml,
  Laptop,
  PencilSparkles,
} from "lucide-react";

import TopicCard from "./TopicCard";

const topics = [
  {
    logo: <PencilSparkles />,
    label: "Design",
  },
  {
    logo: <CodeXml />,
    label: "Development",
  },
  {
    logo: <Laptop />,
    label: "IT & Software",
  },
  {
    logo: <BuildingComplex />,
    label: "Business",
  },
  {
    logo: <CircleDollarSign />,
    label: "Marketing",
  },
  {
    logo: <Camera />,
    label: "Photography",
  },
];

const TopicCards = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 my-8">
      {topics.map((topic) => (
        <li key={topic.label}>
          <TopicCard icon={topic.logo} label={topic.label} />
        </li>
      ))}
    </ul>
  );
};

export default TopicCards;
