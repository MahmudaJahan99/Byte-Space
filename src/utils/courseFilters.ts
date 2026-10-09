import type { Course } from "../data/courseDetails";

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "rating-asc"
  | "rating-desc"
  | null;

interface FilterCoursesParams {
  courses: Course[];
  selectedLevel: Course["level"] | null;
  category: string | null;
  sortOption: SortOption;
}

export const filterAndSortCourses = ({
  courses,
  selectedLevel,
  category,
  sortOption,
}: FilterCoursesParams): Course[] => {
  return [...courses]
    .filter((course) => {
      if (!selectedLevel) return true;

      return course.level === selectedLevel;
    })
    .filter((course) => {
      if (!category) return true;

      return course.category === category;
    })
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      }

      if (sortOption === "price-desc") {
        return b.price - a.price;
      }

      if (sortOption === "rating-asc") {
        return a.rating - b.rating;
      }

      if (sortOption === "rating-desc") {
        return b.rating - a.rating;
      }

      return 0;
    });
};
