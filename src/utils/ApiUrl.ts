const newsApiBaseUrl = import.meta.env.VITE_NEWS_API_BASE_URL;
const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;
const newsApiCountryParam = import.meta.env.VITE_COUNTRY_QUERY_PARAM;
const newsApiCategoryParam = import.meta.env.VITE_CATEGORY_QUERY_PARAM;

if (
  !newsApiBaseUrl ||
  !newsApiKey ||
  !newsApiCountryParam ||
  !newsApiCategoryParam
) {
  throw new Error("Missing required environment variables");
}

export const apiUrl: string = `${newsApiBaseUrl}?apiKey=${newsApiKey}&country=${newsApiCountryParam}&category=${newsApiCategoryParam}`;
