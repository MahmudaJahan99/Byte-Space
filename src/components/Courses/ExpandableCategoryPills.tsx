import { useState } from "react";
import { courseCategories } from "../../data/courseCategories";
import PillButton from "../../ui/PillButton";

interface PillListProps {
  batchSize: number;
  className: string;
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const ExpandablePillList = ({
  batchSize,
  className,
  activeCategory,
  onCategoryClick,
}: PillListProps) => {
  const [visibleCount, setVisibleCount] = useState(batchSize);

  const total = courseCategories.length;
  const allShown = visibleCount >= total;
  const hasMore = total > batchSize;

  const handleToggle = () =>
    setVisibleCount(allShown ? batchSize : visibleCount + batchSize);

  return (
    <ul aria-label="Course categories" className={className}>
      {courseCategories.slice(0, visibleCount).map((category) => (
        <li key={category}>
          <PillButton
            label={category}
            active={category === activeCategory}
            onClick={() => onCategoryClick(category)}
          />
        </li>
      ))}

      {hasMore && (
        <li>
          <PillButton
            label={allShown ? "Less" : "More"}
            onClick={handleToggle}
            variant="toggle"
            expanded={allShown}
            className="text-electric-blue bg-electric-blue/20"
          />
        </li>
      )}
    </ul>
  );
};

export default ExpandablePillList;
