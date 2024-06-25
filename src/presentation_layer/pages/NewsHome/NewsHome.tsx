import React from "react";
import { useNewsHomeViewModel } from "./NewsHome.vm";
import ArticleCard from "@/presentation_layer/components/molecules/ArticleCard";

const NewsHome: React.FC = () => {
  const { articles } = useNewsHomeViewModel();

  return (
    <div className="px-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default NewsHome;
