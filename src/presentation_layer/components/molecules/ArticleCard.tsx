import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../shadcn/ui/card";
import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";
import { tagBgColors, themeBgColor } from "@/utils/Constants";

const ArticleCard: React.FC<ArticleEntity> = (article) => {
  return (
    <Card className={`${themeBgColor} relative overflow-visible rounded-2xl`}>
      <div className="aspect-[16/9]">
        <img src={"/images/logo.png"} alt="Image" className="object-cover" />
      </div>
      <div className="flex flex-col pt-2 px-2 pb-10 gap-2">
        <CardTitle className="text-md">
          {article.title.substring(0, 50)}...
        </CardTitle>
        <CardDescription className="text-gray-300">
          {article.author}
        </CardDescription>
      </div>
      <CardFooter className="px-2 pb-2 absolute bottom-0">
        <div
          className={`${
            article.isFree ? tagBgColors.free : tagBgColors.premium
          } dark:text-white rounded-full px-3 py-1 text-xs`}
        >
          {article.isFree ? "Free" : "Premium"}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
