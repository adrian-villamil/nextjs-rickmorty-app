'use client';

import ReactPaginate from "react-paginate";
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  pages,
}: {
  pages: number,
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
        onPageChange={handlePageChange}
        className={styles['react-paginate']}
      />
    </div>
  );
}