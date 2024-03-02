'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import styles from './pagination.module.css';
import { useMediaQuery } from "react-responsive";

export default function Pagination({
  pages,
  currentPage,
}: {
  pages: number,
  currentPage: number,
}) {
  const [pageRangeDiplayed, setPageRangeDisplayed] = useState(10);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMax850 = useMediaQuery({ query: '(min-width: 850px)' });
  const isMin849 = useMediaQuery({ query: '(max-width: 849px)' });
  const isMin750 = useMediaQuery({ query: '(min-width: 750px)' });
  const isMin650 = useMediaQuery({ query: '(min-width: 650px)' });
  const isMin520 = useMediaQuery({ query: '(min-width: 520px)' });

  if (isMax850) setPageRangeDisplayed(10);
  if (isMin849) setPageRangeDisplayed(9);
  if (isMin750) setPageRangeDisplayed(7);
  if (isMin650) setPageRangeDisplayed(5);
  if (isMin520) setPageRangeDisplayed(3);

  const handlePageChange = (data: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', (data.selected + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <ReactPaginate
        pageCount={pages}
        forcePage={currentPage}
        pageRangeDisplayed={pageRangeDiplayed}
        marginPagesDisplayed={0}
        previousLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
        breakLabel={<HiDotsHorizontal />}
        onPageChange={handlePageChange}
        containerClassName={styles['paginate-list']}
      />
    </div>
  );
}