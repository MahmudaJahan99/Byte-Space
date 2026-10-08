import { useNavigate, useSearchParams } from "react-router-dom";
import { courseCategories } from "../../data/courseCategories";
import PillButton from "../../ui/PillButton";
import ExpandablePillList from "./ExpandableCategoryPills";

const SMALL_COUNT = 7;
const MEDIUM_COUNT = 12;

const CategoryPills = () => {
  const navigate = useNavigate();
  
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") || "Featured";

  const handleCategoryClick = (category: string) => {
    if (category === "Featured") {
      navigate("/courses");
      return;
    }

    navigate(`/courses?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      {/* Small screens */}
      <ExpandablePillList
        batchSize={SMALL_COUNT}
        className="flex md:hidden flex-wrap justify-center items-center gap-4"
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      {/* Medium screens */}
      <ExpandablePillList
        batchSize={MEDIUM_COUNT}
        className="hidden md:flex lg:hidden flex-wrap justify-center items-center gap-4"
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      {/* Large screens */}
      <ul
        aria-label="Course categories"
        className="hidden lg:flex flex-wrap justify-center items-center gap-4"
      >
        {courseCategories.map((category) => (
          <li key={category}>
            <PillButton
              label={category}
              active={category === activeCategory}
              onClick={() => handleCategoryClick(category)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryPills;
