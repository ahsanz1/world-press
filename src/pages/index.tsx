import React, { useEffect, useState } from "react";
import HeadlineBanner from "../components/headline-banner";
import { fetchTopHeadlines } from "../lib/api";
import { HeadlineArticleType } from "../lib/types/common";
//@ts-ignore
import Slider from "react-slick";
import { sliderSettings } from "../lib/constants";
import { embedArticleIds } from "../lib/utils";

const HomePage = () => {
  const [headlines, setHeadlines] = useState<HeadlineArticleType[]>([]);
  useEffect(() => {
    fetchTopHeadlines("country=us").then((headlines) => {
      const filteredHeadlines = headlines.filter(
        (h: HeadlineArticleType) =>
          h.url && h.urlToImage && !h.url.includes("youtube")
      );
      const headlinesWithAIds = embedArticleIds(filteredHeadlines);
      console.log("headlines", headlinesWithAIds);
      setHeadlines(headlinesWithAIds);
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Slider {...sliderSettings} className="flex flex-row">
        {headlines.map((headline, idx) => (
          <div className="p-0">
            <HeadlineBanner {...headline} key={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;
