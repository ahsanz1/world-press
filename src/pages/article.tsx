import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchCompleteArticle, fetchTopHeadlines } from "../lib/api";
import { HeadlineArticleType } from "../lib/types/common";

const ArticlePage = () => {
  const [newsArticle, setNewsArticle] = useState<HeadlineArticleType>({});
  const [completeArticleContent, setCompleteArticleContent] =
    useState<string>("");
  const { articleId = "" } = useParams();

  const addRandomLineBreaks = (articleString: string) => {
    let mArticleString = "";
    const articleStringTokens = articleString.split(".");
    for (let i = 0; i < articleStringTokens.length; i++) {
      mArticleString += `${articleStringTokens[i]}. `;
      if (
        i > 1 &&
        Math.random() >= 0.5 &&
        articleStringTokens[i].length > 40 &&
        (!articleStringTokens[i].includes("\“") ||
          !articleStringTokens[i].includes("\”")) && (!articleStringTokens[i].includes("Mr") && !articleStringTokens[i].includes("Mrs"))
      ) {
        mArticleString += "\n\n";
      }
    }
    return mArticleString;
  };

  useEffect(() => {
    const getNewsArticle = async () => {
      const newsArticles = await fetchTopHeadlines(`country=us`);
      if (newsArticles.length > 0) {
        const foundArticle = newsArticles.find((article: HeadlineArticleType) =>
          (article.url || "").includes(articleId)
        );
        if (foundArticle) {
          setNewsArticle(foundArticle);
        } else {
          setNewsArticle({ title: "Article not found" });
        }
      }
    };
    getNewsArticle();
  }, []);

  useEffect(() => {
    if (Object.keys(newsArticle).length === 0) return;
    fetchCompleteArticle(newsArticle?.url || "")
      .then((content: string) => {
        setCompleteArticleContent(content);
      })
      .catch((err) => {
        console.error("Invalid article URL", err);
      });
  }, [newsArticle]);

  return (
    <div className="flex flex-col pt-7 px-4 text-left bg-lightest-grey-bg">
      <p className="tracking-widest font-bold">
        {newsArticle?.publishedAt
          ? format(new Date(newsArticle.publishedAt), "dd MMMM yyyy / hh:mm")
          : ""}
      </p>
      <p className="font-semibold text-4xl mt-7">{newsArticle?.title || ""}</p>
      {newsArticle?.urlToImage && (
        <img src={newsArticle.urlToImage} className="h-80 w-full mt-4"></img>
      )}
      <p className="mt-7 mb-7 leading-7 text-lg break-words tracking-wide whitespace-pre-line">
        {completeArticleContent || newsArticle?.content}
      </p>
    </div>
  );
};

export default ArticlePage;
