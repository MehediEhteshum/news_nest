import {
  ArticleCard,
  ArticlePagination,
  LoaderCircle,
} from "@/presentation_layer/components";
import { useNewsHomeViewModel } from "./NewsHome.vm";

const NewsHome: React.FC = () => {
  const {
    articles,
    currentPage,
    setCurrentPage,
    visibleArticles,
    articlesPerPage,
  } = useNewsHomeViewModel();

  return articles.length > 0 ? (
    <div className="flex flex-col mx-4 sm:mx-20 md:mx-36 lg:mx-52 mb-16 mt-28 md:mt-24 gap-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <ArticlePagination
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / articlesPerPage)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <LoaderCircle className="h-16 w-16" />
    </div>
  );
};

export default NewsHome;
