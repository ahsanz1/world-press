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
  const { topHeadlines = [], setTopHeadlines } = useContext(AppContext);
  useEffect(() => {
    fetchTopHeadlines("country=us").then((headlines) => {
      const headlinesWithAIds = embedArticleIds(headlines);
      console.log("headlines", headlinesWithAIds);
      setTopHeadlines(headlinesWithAIds);
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Slider {...sliderSettings} className="flex flex-row">
        {topHeadlines.map((headline: HeadlineArticleType, idx: number) => (
          <div className="p-0">
            <HeadlineBanner {...headline} key={idx} />
          </div>
        ))}
      </Slider>
      <div className="px-4 mt-4">
        <CategoryNews
          circularImages={false}
          categoryTitle={"Most Viewed"}
          articles={topHeadlines.slice(2, 6)}
        />
      </div>
    </div>
  );
};

export default HomePage;
