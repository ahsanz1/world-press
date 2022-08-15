import React from "react";
import { CategoryNewsProps } from "../../lib/types/common";
import ArticleCard from "../article-card";

const CategoryNews = ({
  categoryTitle,
  articles,
  circularImages,
}: CategoryNewsProps) => {
  return (
    <div className="flex flex-col w-full text-left b-3">
      <h5 className="font-bold text-lg pb-5">{categoryTitle}</h5>
      {articles.map((article) => (
        <ArticleCard
          circularImage={circularImages}
          newsArticle={article}
          key={article.title}
        />
      ))}
    </div>
  );
};

export default CategoryNews;
