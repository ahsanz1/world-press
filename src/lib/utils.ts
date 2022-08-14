import { HeadlineArticleType } from "./types/common";

export const embedArticleIds = (articles: HeadlineArticleType[]) => {
  const articlesWithArticleIds = articles.map((article) => {
    const articleUrlTokens = article.url?.split("/");
    const hyphenatedString = articleUrlTokens?.find(
      (articleUrlToken) =>
        articleUrlToken.includes("-") && articleUrlToken.split("-").length > 1
    );
    if (hyphenatedString) {
      return { ...article, articleId: hyphenatedString.replace("html", "") };
    }
    return article;
  });
  if (articlesWithArticleIds.length > 0) {
    return articlesWithArticleIds;
  }
  return articles;
};
