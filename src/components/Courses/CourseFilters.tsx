import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, Shapes, Signal } from "lucide-react";
import { courseCategories } from "../../data/courseCategories";
import type { Course } from "../../data/courseDetails";
import type { SortOption } from "../../utils/courseFilters";
import styles from "./Courses.module.css";
import FilterDropdown from "./filters/FilterDropdown";
import { levels, sortOptions } from "../../data/courseFilterOptions";

type OpenMenu = "filter" | "level" | "category" | null;

interface CourseFiltersProps {
  selectedLevel: Course["level"] | null;
  sortOption: SortOption;
  onLevelChange: (level: Course["level"] | null) => void;
  onSortChange: (option: SortOption) => void;
}

const CourseFilters = ({
  selectedLevel,
  sortOption,
  onLevelChange,
  onSortChange,
}: CourseFiltersProps) => {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const navigate = useNavigate();

  const toggleMenu = (menu: Exclude<OpenMenu, null>) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  const selectSort = (option: SortOption) => {
    onSortChange(option);
    setOpenMenu(null);
  };

  const selectLevel = (level: Course["level"] | null) => {
    onLevelChange(level);
    setOpenMenu(null);
  };

  const selectCategory = (category: string | null) => {
    if (category === null) {
      navigate("/courses");
    } else {
      navigate(`/courses?category=${encodeURIComponent(category)}`);
    }

    setOpenMenu(null);
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  return (
    <div
      aria-label="Course filters"
      className="mb-2 flex flex-wrap gap-3 sm:gap-5"
    >
      {/* Sort */}
      <FilterDropdown
        label="Filter"
        icon={Filter}
        menuLabel="Sort courses"
        isOpen={openMenu === "filter"}
        onClose={closeMenu}
        onToggle={() => toggleMenu("filter")}
        widthClass="w-56"
      >
        {sortOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={sortOption === option.value}
            onClick={() => selectSort(option.value)}
            className={styles.dropdownOption}
          >
            {option.label}
          </button>
        ))}

        <button
          type="button"
          onClick={() => selectSort(null)}
          className={styles.dropdownOption}
        >
          Default order
        </button>
      </FilterDropdown>

      {/* Level */}
      <FilterDropdown
        label="Level"
        icon={Signal}
        menuLabel="Filter by course level"
        isOpen={openMenu === "level"}
        onClose={closeMenu}
        onToggle={() => toggleMenu("level")}
        widthClass="w-48"
      >
        {levels.map((level) => (
          <button
            key={level ?? "all"}
            type="button"
            aria-pressed={selectedLevel === level}
            onClick={() => selectLevel(level)}
            className={styles.dropdownOption}
          >
            {level ?? "All Levels"}
          </button>
        ))}
      </FilterDropdown>

      {/* Category */}
      <FilterDropdown
        label="Category"
        icon={Shapes}
        menuLabel="Filter by course category"
        isOpen={openMenu === "category"}
        onClose={closeMenu}
        onToggle={() => toggleMenu("category")}
        widthClass="w-64"
      >
        <button
          type="button"
          onClick={() => selectCategory(null)}
          className={styles.dropdownOption}
        >
          All Categories
        </button>

        {courseCategories
          .filter((category) => category !== "Featured")
          .map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className={styles.dropdownOption}
            >
              {category}
            </button>
          ))}
      </FilterDropdown>
    </div>
  );
};

export default CourseFilters;
