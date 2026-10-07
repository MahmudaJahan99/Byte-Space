interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblings?: number;
}

type PageItem = number | "ellipsis-start" | "ellipsis-end";

const getPageRange = (
  page: number,
  total: number,
  siblings: number,
): PageItem[] => {
  if (total <= 1) return [1];
  const start = Math.max(2, page - siblings);
  const end = Math.min(total - 1, page + siblings);

  const range: PageItem[] = [1];
  if (start > 2) range.push("ellipsis-start");
  for (let i = start; i <= end; i++) range.push(i);
  if (end < total - 1) range.push("ellipsis-end");
  range.push(total);
  return range;
};

const base =
  "min-w-10 h-10 px-3 rounded-lg border text-sm font-medium transition-colors";

const Pagination = ({
  page,
  totalPages,
  onPageChange,
  siblings = 1,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 mt-10"
    >
      <button
        className={`${base} disabled:opacity-40 disabled:cursor-not-allowed`}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        Prev
      </button>

      {getPageRange(page, totalPages, siblings).map((item) =>
        typeof item === "string" ? (
          <span key={item} className="px-1" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={item}
            className={`${base} ${item === page ? "bg-black text-white" : "hover:bg-gray-100"}`}
            onClick={() => onPageChange(item)}
            aria-current={item === page ? "page" : undefined}
            aria-label={`Page ${item}`}
          >
            {item}
          </button>
        ),
      )}

      <button
        className={`${base} disabled:opacity-40 disabled:cursor-not-allowed`}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
