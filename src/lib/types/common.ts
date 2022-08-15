export type HeadlineArticleType = {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  title?: string;
  url?: string;
  urlToImage?: string;
  source?: {
    id?: string;
    name?: string;
  };
  articleId?: string;
};

export type NewsArticleProps = {
  newsArticle?: HeadlineArticleType;
  completeArticleContent?: string;
};

export type ArticleCardProps = {
  newsArticle?: HeadlineArticleType;
  circularImage?: boolean;
};

export type CategoryNewsProps = {
  categoryTitle?: string;
  articles: HeadlineArticleType[];
  circularImages?: boolean;
};
