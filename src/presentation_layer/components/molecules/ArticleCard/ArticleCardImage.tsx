import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type ArticleCardImageProps = {
  imgSrc: string | null;
  setImgSrc: React.Dispatch<React.SetStateAction<string | null>>;
  articleId: string;
};

const ArticleCardImage: React.FC<ArticleCardImageProps> = ({
  imgSrc,
  setImgSrc,
  articleId,
}) => {
  return (
    <div className="items-center justify-center flex rounded-[inherit]">
      <LazyLoadImage
        src={imgSrc ?? "/images/logo.png"}
        onError={() => setImgSrc("/images/logo.png")}
        alt={"image-" + articleId.slice(0, 5)}
        wrapperClassName="rounded-[inherit] w-[100%] h-[100%] items-center justify-center flex"
        className="sm:h-48 h-[100%] sm:w-[100%] w-52 rounded-[inherit]"
        effect="blur"
        wrapperProps={{
          style: {
            transition: "all 300ms ease 800ms",
            backdropFilter: "blur(300px)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      />
    </div>
  );
};

export default ArticleCardImage;
