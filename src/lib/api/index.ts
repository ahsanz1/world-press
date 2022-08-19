import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "./endpoints";

const SERVER_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_BASE_URL
    : "http://localhost:8080";
const GENDER_API_BASE_URL = process.env.REACT_APP_GENDER_API_BASE_URL;
const GENDER_API_KEY = process.env.REACT_APP_GENDER_API_KEY;

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
    return articleHtmlRes.data;
  } catch (error) {
    console.log("Error fetching article html: ", error as AxiosError);
  }
};

export const fetchAuthorGender = async (params: string) => {
  try {
    const genderRes = await axios.get(
      `${GENDER_API_BASE_URL}${ENDPOINTS.GET_GENDER}?${params}&key=${GENDER_API_KEY}`
    );
    return genderRes?.data?.gender || "unknown";
  } catch (error) {
    console.log("Error fetching author gender: ", error as AxiosError);
  }
};

export const fetchAuthorArticles = async (authorName: string) => {
  try {
    const authorArticlesRes = await axios.get(
      `${SERVER_BASE_URL}${ENDPOINTS.AUTHOR_ARTICLES}`,
      {
        params: {
          authorName: authorName,
        },
      }
    );
    return authorArticlesRes?.data?.articles || [];
  } catch (error) {
    console.log("Could not fetch author articles: ", error);
    return [];
  }
};
