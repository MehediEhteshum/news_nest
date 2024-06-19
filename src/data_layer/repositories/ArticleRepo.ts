import { ArticleEntity } from "../../domain_layer/entities/ArticleEntity";
import { IArticleRepo } from "../../domain_layer/repository_interfaces/IArticleRepo";

export class ArticleRepo implements IArticleRepo {
  // Source API
  getRemoteNewsArticles(): Promise<ArticleEntity[]> {
    throw new Error("Method not implemented.");
  }

  // DB operations
  getSavedNewsArticles(): Promise<ArticleEntity[]> {
    throw new Error("Method not implemented.");
  }
  getSavedNewsArticleById(id: string): Promise<ArticleEntity | null> {
    throw new Error("Method not implemented. " + id);
  }
  saveNewsArticle(article: ArticleEntity): Promise<void> {
    throw new Error("Method not implemented. " + article);
  }
  deleteNewsArticleById(id: string): Promise<void> {
    throw new Error("Method not implemented. " + id);
  }
}
