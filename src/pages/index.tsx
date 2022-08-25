import React, { useContext, useEffect } from "react";
import HeadlineBanner from "../components/headline-banner";
import { fetchTopHeadlines } from "../lib/api";
import { HeadlineArticleType } from "../lib/types/common";
//@ts-ignore
import Slider from "react-slick";
import { sliderSettings } from "../lib/constants";
import { embedArticleIds } from "../lib/utils";
import { AppContext } from "../lib/context";
import CategoryNews from "../components/category-news";

const HomePage = () => {
  const {
    topHeadlines = [],
    setTopHeadlines,
    newsDate,
    entertainmentNews,
    setEntertainmentNews,
    technologyNews,
    setTechnologyNews,
    sportsNews,
    setSportsNews,
    selectedCountry,
  } = useContext(AppContext);

  useEffect(() => {
    if (new Date().toDateString() !== newsDate || topHeadlines.length === 0) {
      fetchTopHeadlines(`country=${selectedCountry}&pageSize=100`)
        .then((headlines) => {
          const headlinesWithAIds = embedArticleIds(headlines);
          setTopHeadlines(headlinesWithAIds);
        })
        .then(() => {
          fetchTopHeadlines(
            `country=${selectedCountry}&pageSize=5&category=entertainment`
          )
            .then((news) => {
              const newsWithAIds = embedArticleIds(news);
              setEntertainmentNews(newsWithAIds);
            })
            .then(() => {
              fetchTopHeadlines(
                `country=${selectedCountry}&pageSize=5&category=technology`
              ).then((news) => {
                const newsWithAIds = embedArticleIds(news);
                setTechnologyNews(newsWithAIds);
              });
            })
            .then(() => {
              fetchTopHeadlines(
                `country=${selectedCountry}&pageSize=5&category=sports`
              ).then((news) => {
                const newsWithAIds = embedArticleIds(news);
                setSportsNews(newsWithAIds);
              });
            });
        });
    }
  }, [selectedCountry]);

  return (
    <div className="flex flex-col w-full">
      <div className="">
        <Slider {...sliderSettings}>
          {topHeadlines.map((headline: HeadlineArticleType, idx: number) => (
            <div className="p-0">
              <HeadlineBanner {...headline} key={idx} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col px-4 my-12 lg:flex-row gap-x-8">
        <CategoryNews
          circularImages={false}
          categoryTitle={"Entertainment"}
          articles={entertainmentNews}
          className="lg:w-30pc-cm"
          topDescription="Latest entertainment news and gossip from the world of bollywood, Hollywood and regional film industries. Get the latest celebrity news on celebrity scandals, engagements, and divorces."
          page="home"
        />
        <CategoryNews
          circularImages={false}
          categoryTitle={"Technology"}
          articles={technologyNews}
          className="lg:w-2/5 border-x-2 border-black px-8"
          topDescription="The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more."
          page="home"
        />
        <CategoryNews
          circularImages={false}
          categoryTitle={"Sports"}
          articles={sportsNews}
          className="lg:w-30pc-cm"
          topDescription="Latest sports news from around the world with in-depth analysis, features, photos and videos covering football, tennis, motorsport, golf, rugby, sailing, skiing, horse racing and equestrian."
          page="home"
        />
      </div>
    </div>
  );
};

export default HomePage;
