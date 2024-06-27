import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";
import { IUseCase } from "@/domain_layer/usecases/core/IUseCase";
import { articlesPerPage as articlesToShowPerPage } from "@/utils/Constants";
import { container } from "@/utils/DependencyContainer";
import { SYMBOLS } from "@/utils/Symbols";
import { useEffect, useState } from "react";

export const useNewsHomeViewModel = () => {
  const [articles, setArticles] = useState<ArticleEntity[]>([]);
  const getRemoteNewsArticlesUseCase = container.get<
    IUseCase<void, ArticleEntity[]>
  >(SYMBOLS.GetRemoteNewsArticlesUseCase);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage: number = articlesToShowPerPage;
  const startIndex = (currentPage - 1) * articlesPerPage;
  const visibleArticles: ArticleEntity[] = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const getArticles = async () => {
    try {
      const result = await getRemoteNewsArticlesUseCase.execute();
      setArticles(result);
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  };

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    articles,
    currentPage,
    setCurrentPage,
    visibleArticles,
    articlesPerPage,
  };
};
