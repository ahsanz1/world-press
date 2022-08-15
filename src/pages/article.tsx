import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import NewsArticle from "../components/news-article";
import { fetchCompleteArticle, fetchTopHeadlines } from "../lib/api";
import { AppContext } from "../lib/context";
import { HeadlineArticleType } from "../lib/types/common";

const ArticlePage = () => {
  const [newsArticle, setNewsArticle] = useState<HeadlineArticleType>({});
  const [completeArticleContent, setCompleteArticleContent] =
    useState<string>("");
  const { topHeadlines } = useContext(AppContext);
  const { articleId = "" } = useParams();

  useEffect(() => {
    if (topHeadlines.length > 0) {
      const foundArticle = topHeadlines.find((article: HeadlineArticleType) =>
        (article.url || "").includes(articleId)
      );
      if (foundArticle) {
        setNewsArticle(foundArticle);
      } else {
        setNewsArticle({ title: "Article not found" });
      }
    } else setNewsArticle({ title: "Article not found" });
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
    <div className="flex flex-col">
      <NewsArticle
        newsArticle={newsArticle}
        completeArticleContent={completeArticleContent}
      />
    </div>
  );
};

export default ArticlePage;
