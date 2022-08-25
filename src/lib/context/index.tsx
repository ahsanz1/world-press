import React, { useEffect, useState } from "react";
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

const getSelectedAuthorGenderLS = () => {
  const authorGender = window.localStorage.getItem("selected-author-gender");
  if (!authorGender) return "";
  return authorGender;
};

const getEntertainmentNewsLS = () => {
  const news = window.localStorage.getItem("entertainment-news");
  if (!news) return [];
  return JSON.parse(news);
};
const getTechnologyNewsLS = () => {
  const news = window.localStorage.getItem("technology-news");
  if (!news) return [];
  return JSON.parse(news);
};
const getSportsNewsLS = () => {
  const news = window.localStorage.getItem("sports-news");
  if (!news) return [];
  return JSON.parse(news);
};

const getSelectedCountryLS = () => {
  const sc = window.localStorage.getItem("selected-country");
  if (!sc) return "us";
  return sc;
};

export const ContextProvider = ({ children }: any) => {
  const [topHeadlines, setTopHeadlines] = useState<HeadlineArticleType[]>(
    getTopHeadlinesLS()
  );
  const [newsDate, setNewsDate] = useState<string>(getNewsDateLS());
  const [selectedAuthorGender, setSelectedAuthorGender] = useState<string>(
    getSelectedAuthorGenderLS()
  );
  const [entertainmentNews, setEntertainmentNews] = useState<
    HeadlineArticleType[]
  >(getEntertainmentNewsLS());
  const [sportsNews, setSportsNews] = useState<HeadlineArticleType[]>(
    getSportsNewsLS()
  );
  const [technologyNews, setTechnologyNews] = useState<HeadlineArticleType[]>(
    getTechnologyNewsLS()
  );

  const [selectedCountry, setSelectedCountry] = useState<string>(
    getSelectedCountryLS()
  );

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
    if (selectedCountry) {
      window.localStorage.setItem("selected-country", selectedCountry);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedAuthorGender) {
      window.localStorage.setItem(
        "selected-author-gender",
        selectedAuthorGender
      );
    }
  }, [selectedAuthorGender]);

  useEffect(() => {
    if (entertainmentNews.length > 0) {
      window.localStorage.setItem(
        "entertainment-news",
        JSON.stringify(entertainmentNews)
      );
    }
  }, [entertainmentNews]);

  useEffect(() => {
    if (technologyNews.length > 0) {
      window.localStorage.setItem(
        "technology-news",
        JSON.stringify(technologyNews)
      );
    }
  }, [technologyNews]);

  useEffect(() => {
    if (sportsNews.length > 0) {
      window.localStorage.setItem("sports-news", JSON.stringify(sportsNews));
    }
  }, [sportsNews]);

  return (
    <AppContext.Provider
      value={{
        topHeadlines,
        setTopHeadlines,
        newsDate,
        setNewsDate,
        selectedAuthorGender,
        setSelectedAuthorGender,
        entertainmentNews,
        setEntertainmentNews,
        technologyNews,
        setTechnologyNews,
        sportsNews,
        setSportsNews,
        selectedCountry,
        setSelectedCountry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
