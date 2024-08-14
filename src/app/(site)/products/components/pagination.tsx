"use client";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

export function ProductsPagination() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1); // начальная страница
  const totalPages = 20; // общее количество страниц
  const siblingCount = 1; // количество "соседей" слева и справа от текущей страницы

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    console.log("params: ", params.toString());
    params.set("_page", "1");
    params.set("_limit", "9");
    router.push(`/products?${params.toString()}`);
  }, []);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);

    const params = new URLSearchParams(searchParams.toString());
    console.log("params: ", params.toString());
    params.set("_page", page.toString());
    params.set("_limit", "9");
    router.push(`/products?${params.toString()}`);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationItems = () => {
    const pages = [];
    const totalNumbers = siblingCount * 2 + 3; // Текущая страница + два соседа + первая и последняя страницы
    const totalBlocks = totalNumbers + 2; // Эти блоки включают в себя многоточия

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

      pages.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            isActive={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (startPage > 2) {
        pages.push(<PaginationEllipsis key="ellipsis1" />);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (endPage < totalPages - 1) {
        pages.push(<PaginationEllipsis key="ellipsis2" />);
      }

      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            isActive={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    } else {
      // Пагинация, когда количество страниц меньше или равно totalBlocks
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={handlePrevious} />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext href="#" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
