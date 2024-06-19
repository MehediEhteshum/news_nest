export interface ArticleEntity {
  id: string;
  sourceId: string;
  sourceName: string;
  author: string;
  title: string;
  description: string;
  url: string | null;
  urlToImage: string | null;
  publishedAt: Date;
  content: string;
  isFree: boolean;
}
