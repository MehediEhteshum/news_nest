import React from "react";
import { useNewsHomeViewModel } from "./NewsHome.vm";
import ArticleCard from "@/presentation_layer/components/molecules/ArticleCard/ArticleCard";
import LoaderCircle from "@/presentation_layer/components/atoms/LoaderCircle";

const NewsHome: React.FC = () => {
  const { articles } = useNewsHomeViewModel();

  return articles.length > 0 ? (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-20 md:mx-36 lg:mx-52 mb-16 mt-28 md:mt-24">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <LoaderCircle className="h-16 w-16" />
    </div>
  );
};

export default NewsHome;
