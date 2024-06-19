import { ArticleApiResponse } from "./types/index";
import { ArticleEntity } from "../../domain_layer/entities/ArticleEntity";
import { v4 as uuidv4 } from "uuid";

export class ArticleModel implements ArticleEntity {
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

  constructor(articleApiResponse: ArticleApiResponse) {
    this.id = uuidv4();
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
