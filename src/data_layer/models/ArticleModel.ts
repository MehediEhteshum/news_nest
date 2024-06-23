import { ArticleApiData } from "./types/index";
import { ArticleEntity } from "../../domain_layer/entities/ArticleEntity";

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

  constructor(articleApiData: ArticleApiData) {
    this.sourceId = articleApiData.source.id ?? "Unknown Id";
    this.sourceName = articleApiData.source.name ?? "Unnamed";
    this.author = articleApiData.author ?? "Anonymous";
    this.title = articleApiData.title ?? "Untitled";
    this.description = articleApiData.description ?? "No description";
    this.url = articleApiData.url;
    this.urlToImage = articleApiData.urlToImage;
    this.publishedAt = articleApiData.publishedAt
      ? new Date(articleApiData.publishedAt)
      : new Date();
    this.content = articleApiData.content ?? "No content";
    this.isFree = Math.random() < 0.3;
    this.id = articleApiData.url ?? this.author + "-" + this.title;
  }
}
