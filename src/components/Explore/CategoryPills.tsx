import { courseCategories } from "../../data/courseCategories";
import PillButton from "../../ui/PillButton";

const CategoryPills = () => {
  return (
    <>
      {/* Small screens */}
      <ul
        aria-label="Course categories"
        className="flex md:hidden flex-wrap justify-center items-center gap-4"
      >
        {courseCategories.slice(0, 7).map((category) => (
          <li key={category}>
            <PillButton label={category} active={category === "Featured"} />
          </li>
        ))}
      </ul>

      {/* Medium screens */}
      <ul
        aria-label="Course categories"
        className="hidden md:flex lg:hidden flex-wrap justify-center items-center gap-4"
      >
        {courseCategories.slice(0, 12).map((category) => (
          <li key={category}>
            <PillButton label={category} active={category === "Featured"} />
          </li>
        ))}
      </ul>

      {/* Large screens */}
      <ul
        aria-label="Course categories"
        className="hidden lg:flex flex-wrap justify-center items-center gap-4"
      >
        {courseCategories.map((category) => (
          <li key={category}>
            <PillButton
              label={category}
              active={category === "Featured"}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryPills;
