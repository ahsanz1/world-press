import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { NewsArticleProps } from "../../lib/types/common";
import "./style.scss";
import { Icon } from "../icon";
import { fetchAuthorGender } from "../../lib/api";
import MaleAvatar from "../../icons/male.svg";
import FemaleAvatar from "../../icons/female.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../../lib/context";

const NewsArticle = ({
  newsArticle = {},
  completeArticleContent = "",
}: NewsArticleProps) => {
  console.log("completeArticleContent", completeArticleContent);
  const [authorGender, setAuthorGender] = useState("male");
  const { setSelectedAuthorGender } = useContext(AppContext);
  useEffect(() => {
    if (newsArticle.author) {
      // fetchAuthorGender(`${newsArticle.author.split(" ")[0]}&country=us`).then(
      //   (gender: string) => {
      //     setAuthorGender(gender);
      //   }
      // );
      setSelectedAuthorGender(authorGender);
    }
  }, []);

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
        className="article-content mt-7 mb-7 leading-7 text-lg break-words tracking-wide"
      ></p>
      <div className="px-6 py-8 w-full bg-light-grey mb-8">
        <div className="flex flex-row gap-x-4">
          <img
            className="w-8 h-8 rounded-full"
            src={authorGender === "male" ? MaleAvatar : FemaleAvatar}
            alt=""
          ></img>
          <h4 className="font-bold text-xl">{newsArticle.author}</h4>
        </div>
        <p className="text-base font-normal mt-6">
          Enthusiast of modern approach in fashion and artistic art. He has been
          working as a blogger for many years and has won many awards.
        </p>
        <p className="text-base font-bold mt-6">
          <Link to={`/author/${newsArticle.author}`}>Check All</Link>
        </p>
      </div>
    </div>
  );
};

export default NewsArticle;
