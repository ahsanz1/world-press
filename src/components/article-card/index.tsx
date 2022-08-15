import { format } from "date-fns";
import React from "react";
import { ArticleCardProps, HeadlineArticleType } from "../../lib/types/common";
import { Icon } from "../icon";
import RMblack from "../../icons/fw-black.png";
import RMorange from "../../icons/fw-orange.png";
import { Link } from "react-router-dom";

const ArticleCard = ({ circularImage, newsArticle }: ArticleCardProps) => {
  return (
    <div className="flex flex-col text-left border-t-2 border-black pt-9">
      <img
        src={newsArticle?.urlToImage}
        alt={newsArticle?.urlToImage}
        className="w-full h-auto object-contain"
      ></img>
      <p className="mt-5 mb-3 font-bold text-xs tracking-widest">
        {newsArticle?.publishedAt
          ? format(new Date(newsArticle.publishedAt), "dd MMMM yyyy")
          : ""}
      </p>
      <h3 className="mb-5 font-medium text-3xl">{newsArticle?.title}</h3>
      <p className="mb-5 text-base font-normal">{newsArticle?.description}</p>
      <Link to={`/news-article/${newsArticle?.articleId}`}>
        <Icon
          src={RMblack}
          srcOnHover={RMorange}
          alt={RMblack}
          imgClassName="h-5 w-5"
          text="Read more"
          textClassName="text-base font-bold mr-4 hover:text-custom-orange"
          className="flex flex-row items-center mb-9"
        />
      </Link>
    </div>
  );
};

export default ArticleCard;
