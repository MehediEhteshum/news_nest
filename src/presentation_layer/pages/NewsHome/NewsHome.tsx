import React from "react";
import { useNewsHomeViewModel } from "./NewsHome.vm";

const NewsHome: React.FC = () => {
  const { articles } = useNewsHomeViewModel();
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.title}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHome;
