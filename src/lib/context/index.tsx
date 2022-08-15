import React, { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../api";
import { HeadlineArticleType } from "../types/common";

export const AppContext = React.createContext<any>({});

const getTopHeadlinesLS = () => {
  const topHeadlines = window.localStorage.getItem("top-headlines");
  if (!topHeadlines) return [];
  return JSON.parse(topHeadlines);
};

const getNewsDateLS = () => {
  const nDate = window.localStorage.getItem("news-date");
  if (!nDate) return new Date().toDateString();
  else {
    if (nDate !== new Date().toDateString()) {
      return new Date().toDateString();
    }
  }
  return nDate;
};

const getCountryLS = () => {
  const country = window.localStorage.getItem("country");
  if (!country) return "";
  return country;
};

export const ContextProvider = ({ children }: any) => {
  const [topHeadlines, setTopHeadlines] = useState<HeadlineArticleType[]>(
    getTopHeadlinesLS()
  );
  const [newsDate, setNewsDate] = useState<string>(getNewsDateLS());
  const [country, setCountry] = useState<string>(getCountryLS());

  useEffect(() => {
    if (topHeadlines.length > 0) {
      window.localStorage.setItem(
        "top-headlines",
        JSON.stringify(topHeadlines)
      );
    }
  }, [topHeadlines]);

  useEffect(() => {
    if (newsDate) {
      window.localStorage.setItem("news-date", newsDate);
    }
  }, [newsDate]);

  useEffect(() => {
    if (country) {
      window.localStorage.setItem("country", country);
    }
  }, [country]);

  return (
    <AppContext.Provider
      value={{
        topHeadlines,
        setTopHeadlines,
        newsDate,
        setNewsDate,
        country,
        setCountry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
