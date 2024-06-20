import { ArticleEntity } from "../entities/ArticleEntity";
import { IArticleRepo } from "../repository_interfaces/IArticleRepo";
import { IUseCase } from "./core/IUseCase";

export class GetRemoteNewsArticlesUseCase
  implements IUseCase<void, ArticleEntity[]>
{
  _articleRepo: IArticleRepo;

  constructor(articleRepo: IArticleRepo) {
    this._articleRepo = articleRepo;
  }

  async execute(): Promise<ArticleEntity[]> {
    return await this._articleRepo.getRemoteNewsArticles();
  }
}
