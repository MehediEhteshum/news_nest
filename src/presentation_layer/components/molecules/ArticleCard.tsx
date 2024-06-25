import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/ui/card";
import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";

const ArticleCard: React.FC<ArticleEntity> = (article) => {
  return (
    <Card
      className="relative overflow-visible"
      style={{ borderRadius: "1.25rem" }}
    >
      <div className="aspect-[16/9]">
        <img
          src="/images/logo.png"
          alt="Image"
          className="object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <CardHeader>
          <CardTitle className="text-md">{article.title}</CardTitle>
          <CardDescription>{article.author}</CardDescription>
        </CardHeader>
        <CardFooter>{article.isFree ? "Free" : "Premium"}</CardFooter>
      </div>
    </Card>
  );
};

export default ArticleCard;
