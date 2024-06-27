import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "../../shadcn/ui/pagination";
import { useArticlePagination } from "./ArticlePagination.hooks";
import ArticlePaginationPages from "./ArticlePaginationPages";
import { cn } from "../../shadcn/lib/utils";

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
  const { showLeftEllipsis, showRightEllipsis, pageNumbersToDisplay } =
    useArticlePagination(totalPages, currentPage);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst
            onClick={() => setCurrentPage(1)}
            className={cn(currentPage === 1 ? "hidden" : "cursor-pointer")}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={cn(currentPage === 1 ? "hidden" : "cursor-pointer")}
          />
        </PaginationItem>
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <ArticlePaginationPages
          pageNumbersToDisplay={pageNumbersToDisplay}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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
            className={cn(
              currentPage === totalPages ? "hidden" : "cursor-pointer"
            )}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast
            onClick={() => setCurrentPage(totalPages)}
            className={cn(
              currentPage === totalPages ? "hidden" : "cursor-pointer"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ArticlePagination;
