
import type { Course } from "../../data/courseDetails";
import type { SortOption } from "../../utils/courseFilters";

interface ActiveFilterChipsProps {
  category: string | null;
  selectedLevel: Course["level"] | null;
  sortOption: SortOption;
  onRemoveCategory: () => void;
  onRemoveLevel: () => void;
  onRemoveSort: () => void;
  onClearAll: () => void;
}

const sortLabels: Record<Exclude<SortOption, null>, string> = {
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "rating-asc": "Rating: Low to High",
  "rating-desc": "Rating: High to Low",
};

const ActiveFilterChips = ({
  category,
  selectedLevel,
  sortOption,
  onRemoveCategory,
  onRemoveLevel,
  onRemoveSort,
  onClearAll,
}: ActiveFilterChipsProps) => {
  const hasActiveFilters = Boolean(
    category || selectedLevel || sortOption,
  );

  if (!hasActiveFilters) return null;

  return (
    <section
      aria-label="Applied filters"
      className="my-5 flex flex-wrap items-center gap-2"
    >
      <span className="mr-1 text-sm font-medium">
        Applied filters:
      </span>

      {category && (
        <button
          type="button"
          onClick={onRemoveCategory}
          aria-label={`Remove category filter: ${category}`}
          className="inline-flex items-center gap-2 rounded-full border border-gray-border px-3 py-1.5 text-sm hover:bg-lightest-gray"
        >
          {category}
          <span aria-hidden="true">×</span>
        </button>
      )}

      {selectedLevel && (
        <button
          type="button"
          onClick={onRemoveLevel}
          aria-label={`Remove level filter: ${selectedLevel}`}
          className="inline-flex items-center gap-2 rounded-full border border-gray-border px-3 py-1.5 text-sm hover:bg-lightest-gray"
        >
          {selectedLevel}
          <span aria-hidden="true">×</span>
        </button>
      )}

      {sortOption && (
        <button
          type="button"
          onClick={onRemoveSort}
          aria-label={`Remove sorting: ${sortLabels[sortOption]}`}
          className="inline-flex items-center gap-2 rounded-full border border-gray-border px-3 py-1.5 text-sm hover:bg-lightest-gray"
        >
          {sortLabels[sortOption]}
          <span aria-hidden="true">×</span>
        </button>
      )}

      <button
        type="button"
        onClick={onClearAll}
        className="ml-1 text-sm underline underline-offset-4"
      >
        Clear all
      </button>
    </section>
  );
};

export default ActiveFilterChips;