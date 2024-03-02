'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import styles from './pagination.module.css';

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850) setPageRangeDisplayed(10);
      if (window.innerWidth < 850) setPageRangeDisplayed(9);
      if (window.innerWidth < 750) setPageRangeDisplayed(7);
      if (window.innerWidth < 650) setPageRangeDisplayed(5);
      if (window.innerWidth < 520) setPageRangeDisplayed(3);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

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