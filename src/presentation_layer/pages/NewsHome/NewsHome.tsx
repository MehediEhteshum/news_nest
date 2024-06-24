import React from "react";
import { useEffect, useState } from "react";
import { container } from "@/utils/DependencyContainer";
import { SYMBOLS } from "@/utils/Symbols";
import { IUseCase } from "@/domain_layer/usecases/core/IUseCase";
import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";

const NewsHome: React.FC = () => {
  const [articles, setArticles] = useState<ArticleEntity[]>([]);
  const getRemoteNewsArticlesUseCase = container.get<
    IUseCase<void, ArticleEntity[]>
  >(SYMBOLS.GetRemoteNewsArticlesUseCase);

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

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHome;
