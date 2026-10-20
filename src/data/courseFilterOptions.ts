import type { SortOption } from "../utils/courseFilters";
import type { Course } from "./courseDetails";

export const sortOptions: {
  label: string;
  value: Exclude<SortOption, null>;
}[] = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating: Low to High", value: "rating-asc" },
  { label: "Rating: High to Low", value: "rating-desc" },
];

export const levels: (Course["level"] | null)[] = [
  null,
  "Beginner",
  "Intermediate",
  "Advanced",
];
