import { useSearchParams } from "react-router-dom";

export function usePagination<T>(items: T[], pageSize: number) {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  // Clamp invalid values like ?page=abc, ?page=-3 or ?page=999
  const raw = Number(searchParams.get("page"));
  const page =
    Number.isInteger(raw) && raw >= 1 ? Math.min(raw, totalPages) : 1;

  const pageItems = items.slice((page - 1) * pageSize, page * pageSize);

  const setPage = (nextPage: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev); // keeps other params (e.g. category)
      if (nextPage <= 1) next.delete("page");
      else next.set("page", String(nextPage));
      return next;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { page, totalPages, pageItems, setPage };
}
