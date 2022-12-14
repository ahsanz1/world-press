import React from "react";
import { CategoryNewsProps } from "../../lib/types/common";
import ArticleCard from "../article-card";

const CategoryNews = ({
  categoryTitle,
  articles,
  circularImages,
  topDescription,
  className,
  page,
}: CategoryNewsProps) => {
  return (
    <div className={`flex flex-col w-full text-left b-3 ${className}`}>
      <h5 className="font-bold text-lg pb-5">{categoryTitle}</h5>
      {topDescription && <p className="text-base">{topDescription}</p>}
      {articles.map((article, idx) => (
        <ArticleCard
          circularImage={circularImages}
          newsArticle={article}
          key={article.title}
          addTopBorder={page !== "home" || idx > 0}
        />
      ))}
    </div>
  );
};

export default CategoryNews;
