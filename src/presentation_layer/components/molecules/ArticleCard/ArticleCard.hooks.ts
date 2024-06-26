import { useState } from "react";

export const useArticleCard = (imgUrl: string | null) => {
  const [imgSrc, setImgSrc] = useState<string | null>(imgUrl);
  return {
    imgSrc,
    setImgSrc,
  };
};
