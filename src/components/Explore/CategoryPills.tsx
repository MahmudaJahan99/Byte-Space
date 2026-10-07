import { courseCategories } from "../../data/courseCategories";
import PillButton from "../../ui/PillButton";
import ExpandablePillList from "./ExpandableCategoryPills";

const SMALL_COUNT = 7;
const MEDIUM_COUNT = 12;

const CategoryPills = () => {
  return (
    <>
      {/* Small screens */}
      <ExpandablePillList
        batchSize={SMALL_COUNT}
        className="flex md:hidden flex-wrap justify-center items-center gap-4"
      />

      {/* Medium screens */}
      <ExpandablePillList
        batchSize={MEDIUM_COUNT}
        className="hidden md:flex lg:hidden flex-wrap justify-center items-center gap-4"
      />

      {/* Large screens */}
      <ul
        aria-label="Course categories"
        className="hidden lg:flex flex-wrap justify-center items-center gap-4"
      >
        {courseCategories.map((category) => (
          <li key={category}>
            <PillButton label={category} active={category === "Featured"} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryPills;
