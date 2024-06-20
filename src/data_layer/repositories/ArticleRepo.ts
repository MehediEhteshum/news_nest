import { INewsApiService } from "./../data_sources/api_ops/INewsApiService";
import { IArticleRepo } from "../../domain_layer/repository_interfaces/IArticleRepo";
import { ArticleModel } from "../models/ArticleModel";
import { ApiData } from "../models/types";

export class ArticleRepo implements IArticleRepo {
  private _newsApiService: INewsApiService;

  constructor(newsApiService: INewsApiService) {
    this._newsApiService = newsApiService;
  }

  // Source API
  async getRemoteNewsArticles(): Promise<ArticleModel[]> {
    const newsApiData: ApiData =
      await this._newsApiService.getRemoteNewsApiData();
    const articles: ArticleModel[] = newsApiData.articles.map((article) => {
      return new ArticleModel(article);
    });
    return articles;
  }

  // DB operations
  getSavedNewsArticles(): Promise<ArticleModel[]> {
    throw new Error("Method not implemented.");
  }
  getSavedNewsArticleById(id: string): Promise<ArticleModel | null> {
    throw new Error("Method not implemented. " + id);
  }
  saveNewsArticle(article: ArticleModel): Promise<void> {
    throw new Error("Method not implemented. " + article);
  }
  deleteNewsArticleById(id: string): Promise<void> {
    throw new Error("Method not implemented. " + id);
  }
}
