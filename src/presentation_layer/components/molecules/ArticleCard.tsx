import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../shadcn/ui/card";
import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";

const ArticleCard: React.FC<ArticleEntity> = (article) => {
  return (
    <Card className="relative overflow-visible rounded-2xl">
      <div className="aspect-[16/9]">
        <img src="/images/logo.png" alt="Image" className="object-cover" />
      </div>
      <div className="absolute inset-0 flex flex-col top-1/2 bg-slate-900 bg-opacity-65 pt-1 px-2 rounded-b-[inherit]">
        <CardTitle className="text-sm">
          {article.title.substring(0, 75)}...
        </CardTitle>
        <CardDescription>{article.author}</CardDescription>
        <CardFooter className="absolute p-0 pb-2 bottom-0">
          {article.isFree ? "Free" : "Premium"}
        </CardFooter>
      </div>
    </Card>
  );
};

export default ArticleCard;
