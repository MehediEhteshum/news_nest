import { ArticleEntity } from "../entities/ArticleEntity";

export interface IArticleRepo {
  // Source API
  getRemoteNewsArticles(): Promise<ArticleEntity[]>;

  // DB operations
  getSavedNewsArticles(): Promise<ArticleEntity[]>;
  getSavedNewsArticleById(id: string): Promise<ArticleEntity | null>;
  saveNewsArticle(article: ArticleEntity): Promise<void>;
  deleteNewsArticleById(id: string): Promise<void>;
}
