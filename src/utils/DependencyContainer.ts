import { Container } from "inversify";
import "reflect-metadata";
import { INewsApiService } from "../data_layer/data_sources/api_ops/INewsApiService";
import { NewsApiService } from "../data_layer/data_sources/api_ops/NewsApiService";
import { SYMBOLS } from "./Symbols";
import { IArticleRepo } from "../domain_layer/repository_interfaces/IArticleRepo";
import { ArticleRepo } from "../data_layer/repositories/ArticleRepo";
import { GetRemoteNewsArticlesUseCase } from "../domain_layer/usecases/GetRemoteNewsArticlesUseCase";
import { IUseCase } from "../domain_layer/usecases/core/IUseCase";
import { ArticleEntity } from "../domain_layer/entities/ArticleEntity";

const container = new Container();

container.bind<INewsApiService>(SYMBOLS.INewsApiService).to(NewsApiService);
container.bind<IArticleRepo>(SYMBOLS.IArticleRepo).to(ArticleRepo);
container
  .bind<IUseCase<void, ArticleEntity[]>>(SYMBOLS.GetRemoteNewsArticlesUseCase)
  .to(GetRemoteNewsArticlesUseCase);

export { container };
