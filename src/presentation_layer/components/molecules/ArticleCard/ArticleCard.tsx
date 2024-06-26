import React from "react";
import { Card } from "../../shadcn/ui/card";
import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";
import { themeBgColor } from "@/utils/Constants";
import { useArticleCard } from "./ArticleCard.hooks";
import ArticleCardImage from "./ArticleCardImage";
import ArticleCardBody from "./ArticleCardBody";

type ArticleCardProps = {
  article: ArticleEntity;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { imgSrc, setImgSrc } = useArticleCard(article.urlToImage);

  return (
    <Card
      className={`${themeBgColor} relative overflow-visible rounded-2xl flex sm:flex-col`}
    >
      <ArticleCardImage
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        articleId={article.id}
      />
      <ArticleCardBody article={article} />
    </Card>
  );
};

export default ArticleCard;
