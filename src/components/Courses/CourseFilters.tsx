import { useState } from "react";
import { Filter, Shapes, Signal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { Course } from "../../data/courseDetails";
import { courseCategories } from "../../data/courseCategories";
import type { SortOption } from "../../utils/courseFilters";

type OpenMenu = "filter" | "level" | "category" | null;

interface CourseFiltersProps {
  selectedLevel: Course["level"] | null;
  sortOption: SortOption;
  onLevelChange: (level: Course["level"] | null) => void;
  onSortChange: (option: SortOption) => void;
}

interface FilterDropdownProps {
  label: string;
  icon: LucideIcon;
  menuLabel: string;
  isOpen: boolean;
  onToggle: () => void;
  widthClass: string;
  children: React.ReactNode;
}

const FilterDropdown = ({
  label,
  icon: Icon,
  menuLabel,
  isOpen,
  onToggle,
  widthClass,
  children,
}: FilterDropdownProps) => {
  const menuId = `course-filter-${label.toLowerCase()}`;

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className="flex items-center gap-2 rounded-2xl border border-gray-border px-2.5 py-1.5 hover:bg-lightest-gray focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <Icon aria-hidden="true" className="h-4 w-4" />
        <span>{label}</span>
      </button>

      {isOpen && (
        <div
          id={menuId}
          aria-label={menuLabel}
          className={`absolute left-0 top-full z-20 mt-2 ${widthClass} rounded-xl bg-white p-2 text-left shadow-lg`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const optionClass =
  "block w-full rounded-lg px-4 py-2 text-left hover:bg-lightest-gray focus-visible:bg-lightest-gray focus-visible:outline-none";

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

  const sortOptions: {
    label: string;
    value: Exclude<SortOption, null>;
  }[] = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Rating: Low to High", value: "rating-asc" },
    { label: "Rating: High to Low", value: "rating-desc" },
  ];

  const levels: (Course["level"] | null)[] = [
    null,
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

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
        onToggle={() => toggleMenu("filter")}
        widthClass="w-56"
      >
        {sortOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={sortOption === option.value}
            onClick={() => selectSort(option.value)}
            className={optionClass}
          >
            {option.label}
          </button>
        ))}

        <button
          type="button"
          onClick={() => selectSort(null)}
          className={optionClass}
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
        onToggle={() => toggleMenu("level")}
        widthClass="w-48"
      >
        {levels.map((level) => (
          <button
            key={level ?? "all"}
            type="button"
            aria-pressed={selectedLevel === level}
            onClick={() => selectLevel(level)}
            className={optionClass}
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
        onToggle={() => toggleMenu("category")}
        widthClass="w-64"
      >
        <button
          type="button"
          onClick={() => selectCategory(null)}
          className={optionClass}
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
              className={optionClass}
            >
              {category}
            </button>
          ))}
      </FilterDropdown>
    </div>
  );
};

export default CourseFilters;
