import { ApiData } from "../../models/types";

export interface INewsApiService {
  getRemoteNewsApiData(): Promise<ApiData>;
}
