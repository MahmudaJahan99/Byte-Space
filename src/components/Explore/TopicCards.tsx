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
    category: "Graphic Design",
  },
  {
    logo: <CodeXml />,
    label: "Development",
    category: "Web Development",
  },
  {
    logo: <Laptop />,
    label: "Data Science",
    category: "Data Science",
  },
  {
    logo: <BuildingComplex />,
    label: "Business",
    category: "Freelance & Entrepreneurship",
  },
  {
    logo: <CircleDollarSign />,
    label: "Marketing",
    category: "Marketing",
  },
  {
    logo: <Camera />,
    label: "Photography",
    category: "Photography",
  },
];

const TopicCards = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 my-8 items-stretch">
      {topics.map((topic) => (
        <li key={topic.category}>
          <TopicCard
            icon={topic.logo}
            label={topic.label}
            category={topic.category}
          />
        </li>
      ))}
    </ul>
  );
};

export default TopicCards;
