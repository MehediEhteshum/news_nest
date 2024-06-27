import { totalPagesToShow } from "@/utils/Constants";

export const useArticlePagination = (
  totalPages: number,
  currentPage: number
) => {
  let totalPagesToDisplay = totalPagesToShow;
  totalPagesToDisplay =
    totalPagesToDisplay - totalPages > 0 ? totalPages : totalPagesToDisplay;
  const allPageNumbers: number[] = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );
  const showLeftEllipsis: boolean = currentPage - 1 > 0;
  const showRightEllipsis: boolean = totalPages - currentPage > 0;

  const getPageNumbersToDisplay = (): number[] => {
    const pageNumbersToDisplay: number[] = [currentPage];

    for (let i = 1; pageNumbersToDisplay.length < totalPagesToDisplay; i++) {
      allPageNumbers.includes(currentPage + i)
        ? pageNumbersToDisplay.push(currentPage + i)
        : null;

      if (pageNumbersToDisplay.length > totalPagesToDisplay) {
        break;
      }

      allPageNumbers.includes(currentPage - i)
        ? pageNumbersToDisplay.unshift(currentPage - i)
        : null;
    }

    return pageNumbersToDisplay;
  };

  return {
    showLeftEllipsis,
    showRightEllipsis,
    getPageNumbersToDisplay,
  };
};
