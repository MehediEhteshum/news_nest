import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../shadcn/ui/card";
import { ArticleEntity } from "@/domain_layer/entities/ArticleEntity";
import { tagBgColors, themeBgColor } from "@/utils/Constants";

type Props = {
  article: ArticleEntity;
};

const ArticleCard: React.FC<Props> = ({ article }) => {
  const [imgSrc, setImgSrc] = useState("dummy");

  return (
    <Card
      className={`${themeBgColor} relative overflow-visible rounded-2xl flex sm:flex-col`}
    >
      <div className="relative items-center justify-center flex rounded-[inherit]">
        <img
          src={imgSrc ?? "/images/logo.png"}
          onError={() => setImgSrc("/images/logo.png")}
          alt={"image-" + article.id.slice(0, 5)}
          className="absolute pt-2 px-2 w-full h-full object-cover blur-sm rounded-[inherit]"
        />
        <img
          src={imgSrc ?? "/images/logo.png"}
          alt={"image-" + article.id.slice(0, 5)}
          className="relative sm:h-48 h-32 aspect-[16/9] rounded-[inherit]"
        />
      </div>

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
    </Card>
  );
};

export default ArticleCard;
