"use client";

import usePagination from "@lucasmogari/react-pagination";
import PaginationLink from "./PaginationLink";

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({ page, totalItems, perPage }: PaginationProps) => {
  // use the usePagination hook
  // getPageItem function that returns the type of page based on the index.
  // size - the number of pages
  const { getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 5,
  });

  const firstPage = 1;
  // calculate the next page, totalPages를 넘지않게
  const nextPage = Math.min(page + 1, totalPages);
  // calculate the previous page, firstPage보다 적지않게
  const prevPage = Math.max(page - 1, firstPage);
  // create a new array based on the total pages, 앞뒤 < > 를위한 +2
  const arr = new Array(totalPages + 2);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {[...arr].map((_, i) => {
        const { page, disabled, current } = getPageItem(i);
        console.log(" page, disabled, current", page, disabled, current);
        if (page === "previous") {
          return (
            <PaginationLink page={prevPage} disabled={disabled} key={page}>
              {"<"}
            </PaginationLink>
          );
        }

        if (page === "gap") {
          return <span key={`${page}-${i}`}>...</span>;
        }

        if (page === "next") {
          return (
            <PaginationLink page={nextPage} disabled={disabled} key={page}>
              {">"}
            </PaginationLink>
          );
        }

        // if (!page) return null;

        return (
          <PaginationLink active={current} key={page} page={page}>
            {page}
          </PaginationLink>
        );
      })}
    </div>
  );
};

export default Pagination;
