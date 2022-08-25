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
  addTopBorder?: boolean;
  isAuthorPage?: boolean;
  imgClassName?: string;
};

export type CategoryNewsProps = {
  categoryTitle?: string;
  articles: HeadlineArticleType[];
  circularImages?: boolean;
  addTopBorder?: boolean;
  topDescription?: string;
  className?: string;
  page?: string;
};

export type HorizontalCardProps = {
  title?: string;
  tagline?: string;
  subHeading?: string;
  paragraph?: string;
  flip?: boolean;
  imageUrl?: string;
  borderBottom?: boolean;
};

export type ParagraphsCardProps = {
  heading?: string;
  para1?: string;
  para2?: string;
};

export type SectionOverlayProps = {
  overlayImgUrl?: string;
  bigText?: string;
  heading1?: string;
  para1?: string;
  heading2?: string;
  para2?: string;
};

export type DropdownProps = {
  items: any[];
  onSelect: Function;
  className: string;
  itemsClassName?: string;
};

export type MobileMenuProps = {
  setShowMobileMenu: Function;
  allCountries: any[];
  setSelectedCountry: Function;
};
