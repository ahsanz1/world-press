import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CategoryNews from "../components/category-news";
import NewsArticle from "../components/news-article";
import { fetchCompleteArticle, fetchTopHeadlines } from "../lib/api";
import { AppContext } from "../lib/context";
import { HeadlineArticleType } from "../lib/types/common";

const ArticlePage = () => {
  const [newsArticle, setNewsArticle] = useState<HeadlineArticleType>({});
  const [completeArticleContent, setCompleteArticleContent] =
    useState<string>("");
  const { topHeadlines, entertainmentNews, technologyNews, sportsNews } =
    useContext(AppContext);
  const { articleId = "" } = useParams();

  useEffect(() => {
    const allArticles = topHeadlines
      .concat(entertainmentNews)
      .concat(technologyNews)
      .concat(sportsNews);
    const foundArticle = allArticles.find((article: HeadlineArticleType) =>
      (article.url || "").includes(articleId)
    );

    if (foundArticle) {
      setNewsArticle(foundArticle);
    } else {
      setNewsArticle({ title: "Article not found" });
    }
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

  useEffect(() => {
    if (!newsArticle.articleId || !articleId) return;
    if (articleId.toLowerCase() !== newsArticle.articleId.toLowerCase()) {
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
    }
  }, [articleId]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-4 pt-8">
      <div className="lg:w-4/6">
        <NewsArticle
          newsArticle={newsArticle}
          completeArticleContent={completeArticleContent}
        />
      </div>
      <div className="px-4 mt-4 bg-lightest-grey-bg lg:w-2/6 lg:border-l-2 lg:border-black lg:pl-8 lg:pr-5 lg:h-max">
        <CategoryNews
          circularImages={true}
          categoryTitle={"Most Viewed"}
          articles={topHeadlines.slice(2, 6)}
        />
      </div>
    </div>
  );
};

export default ArticlePage;
