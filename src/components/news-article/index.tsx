import React from "react";
import { format } from "date-fns";
import { NewsArticleProps } from "../../lib/types/common";
import "./style.scss";

const NewsArticle = ({
  newsArticle = {},
  completeArticleContent = "",
}: NewsArticleProps) => {
  return (
    <div className="flex flex-col pt-7 px-4 text-left bg-lightest-grey-bg">
      <p className="tracking-widest font-bold">
        {newsArticle?.publishedAt
          ? format(new Date(newsArticle.publishedAt), "dd MMMM yyyy / hh:mm")
          : ""}
      </p>
      <p className="font-semibold text-4xl mt-7">{newsArticle?.title || ""}</p>
      {newsArticle?.urlToImage && (
        <img
          src={newsArticle.urlToImage}
          className="h-80 w-full mt-4 lg:h-auto lg:mt-12"
        ></img>
      )}
      <p
        dangerouslySetInnerHTML={{ __html: completeArticleContent }}
        className="article-content mt-7 mb-7 leading-7 text-lg break-words tracking-wide whitespace-pre-line"
      ></p>
    </div>
  );
};

export default NewsArticle;
