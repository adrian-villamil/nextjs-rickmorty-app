'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import ReactPaginate from "react-paginate";
import styles from './pagination.module.css';

export default function Pagination({
  pages,
  currentPage,
}: {
  pages: number,
  currentPage: number,
}) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
        previousLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
        breakLabel={<HiDotsHorizontal />}
        onPageChange={handlePageChange}
        containerClassName={styles['paginate-list']}
      />
    </div>
  );
}