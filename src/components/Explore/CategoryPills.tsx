import { courseCategories } from "../../data/courseCategories";
import PillButton from "../../ui/PillButton";

const CategoryPills = () => {
  return (
    <>
    {/* Small screens */}
    <div className="flex md:hidden flex-wrap justify-center items-center gap-4">
      {courseCategories.slice(0, 7).map((category) => (
        <PillButton
          key={category}
          label={category}
          active={category === "Featured"}
        />
      ))}
    </div>

    {/* Medium screens */}
    <div className="hidden md:flex lg:hidden flex-wrap justify-center items-center gap-4">
      {courseCategories.slice(0, 12).map((category) => (
        <PillButton
          key={category}
          label={category}
          active={category === "Featured"}
        />
      ))}
    </div>

    {/* Large screens */}
    <div className="hidden lg:flex flex-wrap justify-center items-center gap-4">
      {courseCategories.map((category) => (
        <PillButton
          key={category}
          label={category}
          active={category === "Featured"}
        />
      ))}
    </div>
    </>
    
  );
};

export default CategoryPills;
