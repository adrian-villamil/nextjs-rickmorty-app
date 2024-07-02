'use client';

import {
  PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { generatePaginationNumbers } from "@/utils/generatePaginationNumbers";
import clsx from "clsx";
import { redirect, usePathname, useSearchParams } from "next/navigation";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageNumber = parseInt(searchParams.get('page') ?? '1');
  const currentPage = isNaN(pageNumber) ? 1 : pageNumber;

  if (currentPage < 1 || isNaN(pageNumber)) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    redirect(`${pathname}?${params.toString()}`);
  }

  const paginationNumbers = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') return `${pathname}?${params.toString()}`;
    if (+pageNumber < 1) return `${pathname}?${params.toString()}`;
    if (+pageNumber > totalPages) return `${pathname}?${params.toString()}`;

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <PaginationContainer>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageUrl(currentPage - 1)}
            className={clsx({ 'pointer-events-none bg-zinc-200 opacity-40': currentPage <= 1 })}
          />
        </PaginationItem>
        {paginationNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {page === '...' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={createPageUrl(page)}
                isActive={pageNumber === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={createPageUrl(currentPage + 1)}
            className={clsx({ 'pointer-events-none bg-zinc-200 opacity-40': currentPage >= totalPages })}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
};