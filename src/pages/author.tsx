import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MaleAvatar from "../icons/male.svg";
import FemaleAvatar from "../icons/female.svg";
import { AppContext } from "../lib/context";
import { HeadlineArticleType } from "../lib/types/common";
import ArticleCard from "../components/article-card";

const AuthorPage = () => {
  const [authorArticles, setAuthorArticles] = useState<HeadlineArticleType[]>(
    []
  );
  const { authorName = "" } = useParams();
  const { selectedAuthorGender, topHeadlines = [] } = useContext(AppContext);

  useEffect(() => {
    const articles = topHeadlines.filter(
      (th: HeadlineArticleType) => th.author && th.author === authorName
    );
    setAuthorArticles(articles);
  }, []);

  return (
    <div className="px-4">
      <div className="mt-4 py-10 lg:pl-96 lg:pr-12">
        <img
          src={selectedAuthorGender === "male" ? MaleAvatar : FemaleAvatar}
          className="w-16 h-16 rounded-full"
        ></img>
        <h2 className="text-5xl font-normal mt-4">{authorName}</h2>
        <p className="text-xl mt-6 font-normal">
          Enthusiast of modern approach in fashion and artistic art. He has been
          working as a blogger for many years and has won many awards.
        </p>
      </div>
      {authorArticles.map((article) => (
        <ArticleCard
          addTopBorder={true}
          circularImage={false}
          isAuthorPage={true}
          key={article.title}
          newsArticle={article}
          imgClassName="lg:w-1/3 lg:h-64 lg:object-cover"
        />
      ))}
    </div>
  );
};

export default AuthorPage;
