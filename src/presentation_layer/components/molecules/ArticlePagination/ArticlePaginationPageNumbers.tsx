import { PaginationItem, PaginationLink } from "../../shadcn/ui/pagination";

type ArticlePaginationPageNumbersProps = {
  pageNumbersToDisplay: number[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
};

const ArticlePaginationPageNumbers: React.FC<
  ArticlePaginationPageNumbersProps
> = ({ pageNumbersToDisplay, currentPage, setCurrentPage }) => {
  return pageNumbersToDisplay.map((pageNumber) => (
    <PaginationItem key={pageNumber} className="cursor-pointer">
      <PaginationLink
        isActive={pageNumber === currentPage}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </PaginationLink>
    </PaginationItem>
  ));
};

export default ArticlePaginationPageNumbers;
