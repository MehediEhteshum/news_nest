import React from "react";
import { CardDescription, CardFooter, CardTitle } from "../../shadcn/ui/card";
import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";
import { tagBgColors } from "@/utils/Constants";

type ArticleCardBodyProps = {
  article: ArticleEntity;
};

const ArticleCardBody: React.FC<ArticleCardBodyProps> = ({ article }) => {
  return (
    <>
      <div className="flex flex-col pt-2 px-2 pb-10 gap-2">
        <CardTitle className="text-md">
          {article.title.substring(0, 50)}...
        </CardTitle>
        <CardDescription className="text-gray-300">
          {article.author}
        </CardDescription>
      </div>
      <CardFooter className="right-0 pr-2 sm:left-0 sm:px-2 pb-2 absolute bottom-0">
        <div
          className={`${
            article.isFree ? tagBgColors.free : tagBgColors.premium
          } dark:text-white rounded-full px-3 py-1 text-xs`}
        >
          {article.isFree ? "Free" : "Premium"}
        </div>
      </CardFooter>
    </>
  );
};

export default ArticleCardBody;
