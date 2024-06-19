export type Source = {
  id: string | null;
  name: string | null;
};

export type ArticleApiData = {
  source: Source;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
};

export type ApiData = {
  status: string | null;
  totalResults: number | null;
  articles: ArticleApiData[];
};
