export type Source = {
  id: string | null;
  name: string | null;
};

export type ArticleApiResponse = {
  source: Source;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
};

export type ApiResponse = {
  status: string | null;
  totalResults: number | null;
  articles: ArticleApiResponse[];
};
