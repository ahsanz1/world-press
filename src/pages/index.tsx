import React, { useContext, useEffect, useState } from "react";
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
  } = useContext(AppContext);
  useEffect(() => {
    if (new Date().toDateString() !== newsDate || topHeadlines.length === 0) {
      fetchTopHeadlines("country=us&pageSize=100").then((headlines) => {
        const headlinesWithAIds = embedArticleIds(headlines);
        console.log("headlines", headlinesWithAIds);
        setTopHeadlines(headlinesWithAIds);
      });
    }
  }, []);

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
      <div className="flex flex-col px-4 mt-4 lg:flex-row gap-x-8">
        <CategoryNews
          circularImages={false}
          categoryTitle={"Most Viewed"}
          articles={topHeadlines.slice(1, 4)}
          className="lg:w-30pc-cm"
        />
        <CategoryNews
          circularImages={false}
          categoryTitle={"Most Viewed"}
          articles={topHeadlines.slice(5, 8)}
          className="lg:w-2/5 border-x-2 border-black px-8"
        />
        <CategoryNews
          circularImages={false}
          categoryTitle={"Most Viewed"}
          articles={topHeadlines.slice(9, 12)}
          className="lg:w-30pc-cm"
        />
      </div>
    </div>
  );
};

export default HomePage;
