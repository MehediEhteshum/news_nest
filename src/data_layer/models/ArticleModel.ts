import sha1 from "crypto-js/sha1";
import { ArticleApiData } from "./types/index";
import { ArticleEntity } from "../../domain_layer/entities/ArticleEntity";
import { articleDummyContent } from "@/utils/Constants";

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
    this.content = articleDummyContent;
    this.isFree = Math.random() < 0.3;
    this.id = sha1(
      articleApiData.url ?? this.author + "-" + this.title
    ).toString();
  }
}
