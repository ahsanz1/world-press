import axios from "axios";
import { ENDPOINTS } from "./endpoints";

const BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

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

    console.log("top hedlines", topHeadlinesRes);
  } catch (error) {
    console.log("Could not fetch top headlines: ", error);
  }
};
