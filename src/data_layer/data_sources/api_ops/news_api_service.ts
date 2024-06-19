import { apiUrl } from "../../../utils/api_url";
import { ApiData } from "../../models/types";

export class NewsApiService {
  async getRemoteNewsApiData(): Promise<ApiData> {
    try {
      const response: Response = await fetch(apiUrl);

      if (!response.ok) {
        console.error(`Error fetching data from News API: ${response.status}`);
        throw new Error(
          `Error fetching data from News API: ${response.status}`
        );
      }

      const data: ApiData = await response.json();
      return data;
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
