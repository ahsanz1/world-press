import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "./endpoints";

const BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const fetchTopHeadlines = async (params: string) => {
  try {
    const topHeadlinesRes = await axios.get(
      `${BASE_URL}${ENDPOINTS.TOP_HEADLINES}?${params}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
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
      `${SERVER_BASE_URL}${ENDPOINTS.COMPLETE_ARTICLE}`,
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
