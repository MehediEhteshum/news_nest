import { ArticlePaginationPageNumbers } from "../..";
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
        <div className="grid grid-cols-5 gap-0 sm:grid-flow-col">
          {currentPage !== 1 && (
            <>
              <PaginationItem>
                <PaginationFirst
                  onClick={() => setCurrentPage(1)}
                  className="cursor-pointer"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                  }
                  className="cursor-pointer"
                />
              </PaginationItem>
            </>
          )}
          {showLeftEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <ArticlePaginationPageNumbers
            pageNumbersToDisplay={pageNumbersToDisplay}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {showRightEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {currentPage !== totalPages && (
            <>
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                  className="cursor-pointer"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLast
                  onClick={() => setCurrentPage(totalPages)}
                  className="cursor-pointer"
                />
              </PaginationItem>
            </>
          )}
        </div>
      </PaginationContent>
    </Pagination>
  );
};

export default ArticlePagination;
