import { ArticleApiResponse } from "./types/index";
import { ArticleEntity } from "../../domain_layer/entities/ArticleEntity";

export class ArticleModel implements ArticleEntity {
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

  constructor(articleApiResponse: ArticleApiResponse) {
    this.sourceId = articleApiResponse.source.id ?? "Unknown Id";
    this.sourceName = articleApiResponse.source.name ?? "Unnamed";
    this.author = articleApiResponse.author ?? "Anonymous";
    this.title = articleApiResponse.title ?? "Untitled";
    this.description = articleApiResponse.description ?? "No description";
    this.url = articleApiResponse.url;
    this.urlToImage = articleApiResponse.urlToImage;
    this.publishedAt = articleApiResponse.publishedAt
      ? new Date(articleApiResponse.publishedAt)
      : new Date();
    this.content = articleApiResponse.content ?? "No content";
    this.isFree = Math.random() < 0.3;
  }
}
