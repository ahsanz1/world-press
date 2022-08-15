import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "./endpoints";

const SERVER_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_BASE_URL
    : "http://localhost:8080";

export const fetchTopHeadlines = async (params: string) => {
  try {
    const topHeadlinesRes = await axios.get(
      `${SERVER_BASE_URL}${ENDPOINTS.TOP_HEADLINES}`,
      {
        params: {
          paramString: params,
        },
      }
    );
    return topHeadlinesRes?.data?.articles || [];
  } catch (error) {
    console.log("Could not fetch top headlines: ", error);
    return [];
  }
};

export const fetchCompleteArticle = async (url: string) => {
  try {
    const articleHtmlRes = await axios.get(
      `${"http://localhost:8080"}${ENDPOINTS.COMPLETE_ARTICLE}`,
      {
        params: {
          url: url,
        },
      }
    );

    // console.log("Article Html: ", articleHtmlRes.data);
    return articleHtmlRes.data;
  } catch (error) {
    console.log("Error fetching article html: ", error as AxiosError);
  }
};
