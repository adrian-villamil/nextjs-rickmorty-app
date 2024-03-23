'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
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

  const isMax850 = useMediaQuery({ query: '(width >= 850px)' });
  const isMin849 = useMediaQuery({ query: '(750px <= width < 850px)' });
  const isMin750 = useMediaQuery({ query: '(650px <= width < 750px)' });
  const isMin650 = useMediaQuery({ query: '(520px <= width < 650px)' });
  const isMin520 = useMediaQuery({ query: '(width < 520px)' });

  const handlePageChange = (data: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', (data.selected + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      {isMax850 && <PaginationBar pages={pages} currentPage={currentPage} range={10} handlePageChange={handlePageChange} />}
      {isMin849 && <PaginationBar pages={pages} currentPage={currentPage} range={9} handlePageChange={handlePageChange} />}
      {isMin750 && <PaginationBar pages={pages} currentPage={currentPage} range={7} handlePageChange={handlePageChange} />}
      {isMin650 && <PaginationBar pages={pages} currentPage={currentPage} range={5} handlePageChange={handlePageChange} />}
      {isMin520 && <PaginationBar pages={pages} currentPage={currentPage} range={3} handlePageChange={handlePageChange} />}
    </div>
  );
}

function PaginationBar({
  pages,
  currentPage,
  range,
  handlePageChange,
}: {
  pages: number;
  currentPage: number;
  range: number;
  handlePageChange: (data: {selected: number}) => void;
}) {

  return (
    <ReactPaginate
      pageCount={pages}
      forcePage={currentPage}
      pageRangeDisplayed={range}
      marginPagesDisplayed={0}
      previousLabel={<FaChevronLeft />}
      nextLabel={<FaChevronRight />}
      breakLabel={<HiDotsHorizontal />}
      onPageChange={handlePageChange}
      containerClassName={styles['paginate-list']}
    />
  );
}