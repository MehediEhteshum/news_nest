import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../shadcn/ui/pagination";
import { useArticlePagination } from "./ArticlePagination.hooks";

type ArticlePaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (pageNumber: number) => void;
};

const ArticlePagination: React.FC<ArticlePaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const { showLeftEllipsis, showRightEllipsis, getPageNumbersToDisplay } =
    useArticlePagination(totalPages, currentPage);

  const renderPaginationItems = () => {
    const pageNumbersToDisplay: number[] = getPageNumbersToDisplay();

    return pageNumbersToDisplay.map((pageNumber) => (
      <PaginationItem key={pageNumber}>
        <PaginationLink
          isActive={pageNumber === currentPage}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            aria-hidden={currentPage === 1}
          />
        </PaginationItem>
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {renderPaginationItems()}
        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ArticlePagination;
