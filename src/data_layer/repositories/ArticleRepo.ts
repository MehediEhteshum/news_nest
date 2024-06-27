import type { INewsApiService } from "./../data_sources/api_ops/INewsApiService";
import { IArticleRepo } from "../../domain_layer/repository_interfaces/IArticleRepo";
import { ArticleModel } from "../models/ArticleModel";
import { ApiData, ArticleApiData } from "../models/types";
import { inject, injectable } from "inversify";
import { SYMBOLS } from "../../utils/Symbols";

@injectable()
export class ArticleRepo implements IArticleRepo {
  private _newsApiService: INewsApiService;

  constructor(
    @inject(SYMBOLS.INewsApiService) newsApiService: INewsApiService
  ) {
    this._newsApiService = newsApiService;
  }

  // Source API
  async getRemoteNewsArticles(): Promise<ArticleModel[]> {
    const newsApiData: ApiData =
      await this._newsApiService.getRemoteNewsApiData();

    const uniqueArticles: ArticleApiData[] = this.removeDuplicateArticles(
      newsApiData.articles
    );

    const randomArticles: ArticleApiData[] = this.getRandomArticles(
      uniqueArticles,
      64
    );

    const articles: ArticleModel[] = randomArticles.map((article) => {
      return new ArticleModel(article);
    });

    return articles;
  }

  private removeDuplicateArticles(
    articles: ArticleApiData[]
  ): ArticleApiData[] {
    return articles.reduce(
      (uniqueArticles: ArticleApiData[], article: ArticleApiData) => {
        if (
          !uniqueArticles.some(
            (uniqueArticle) => uniqueArticle.url === article.url
          )
        ) {
          uniqueArticles.push(article);
        }
        return uniqueArticles;
      },
      []
    );
  }

  private getRandomArticles(
    articles: ArticleApiData[],
    count: number
  ): ArticleApiData[] {
    return articles.sort(() => Math.random() - 0.5).slice(0, count);
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
