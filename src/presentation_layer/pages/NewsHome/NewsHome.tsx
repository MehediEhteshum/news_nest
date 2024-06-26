import React from "react";
import { useNewsHomeViewModel } from "./NewsHome.vm";
import ArticleCard from "@/presentation_layer/components/molecules/ArticleCard/ArticleCard";

const NewsHome: React.FC = () => {
  const { articles } = useNewsHomeViewModel();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-2 sm:mx-16 md:mx-36 lg:mx-48">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsHome;
