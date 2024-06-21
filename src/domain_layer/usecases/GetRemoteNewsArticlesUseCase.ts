import { inject, injectable } from "inversify";
import { ArticleEntity } from "../entities/ArticleEntity";
import type { IArticleRepo } from "../repository_interfaces/IArticleRepo";
import { IUseCase } from "./core/IUseCase";
import { SYMBOLS } from "../../utils/Symbols";

@injectable()
export class GetRemoteNewsArticlesUseCase
  implements IUseCase<void, ArticleEntity[]>
{
  private _articleRepo: IArticleRepo;

  constructor(@inject(SYMBOLS.IArticleRepo) articleRepo: IArticleRepo) {
    this._articleRepo = articleRepo;
  }

  async execute(): Promise<ArticleEntity[]> {
    return await this._articleRepo.getRemoteNewsArticles();
  }
}
