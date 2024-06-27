import { PaginationItem, PaginationLink } from "../../shadcn/ui/pagination";

type ArticlePaginationPagesProps = {
  pageNumbersToDisplay: number[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
};

const ArticlePaginationPages: React.FC<ArticlePaginationPagesProps> = ({
  pageNumbersToDisplay,
  currentPage,
  setCurrentPage,
}) => {
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

export default ArticlePaginationPages;
