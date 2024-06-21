import { Container } from "inversify";
import { INewsApiService } from "../data_layer/data_sources/api_ops/INewsApiService";
import { NewsApiService } from "../data_layer/data_sources/api_ops/NewsApiService";
import { TYPES } from "./Types";
import { IArticleRepo } from "../domain_layer/repository_interfaces/IArticleRepo";
import { ArticleRepo } from "../data_layer/repositories/ArticleRepo";

const container = new Container();

container.bind<INewsApiService>(TYPES.INewsApiService).to(NewsApiService);
container.bind<IArticleRepo>(TYPES.IArticleRepo).to(ArticleRepo);

export { container };
