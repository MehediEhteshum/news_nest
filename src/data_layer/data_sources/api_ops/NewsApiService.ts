import { injectable } from "inversify";
import { apiUrl } from "../../../utils/ApiUrl";
import { ApiData } from "../../models/types";
import { INewsApiService } from "./INewsApiService";
import axios, { AxiosResponse } from "axios";

@injectable()
export class NewsApiService implements INewsApiService {
  async getRemoteNewsApiData(): Promise<ApiData> {
    try {
      const response: AxiosResponse<ApiData> = await axios
        .get(apiUrl, {
          timeout: 15000,
        })
        .catch((error) => {
          throw error;
        });

      if (response.status !== 200) {
        throw new Error(
          `Error fetching data from News API: ${response.status}`
        );
      }

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Testing Purpose
// const newsApiService = new NewsApiService();
// newsApiService
//   .getRemoteNewsApiData()
//   .then((data) => {
//     console.log(data.articles.length);
//     console.log(data.totalResults);
//     console.log(data.status);
//   })
//   .catch((error) => {
//     console.error("Got an error" + error);
//   });
