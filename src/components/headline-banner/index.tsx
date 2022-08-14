import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeadlineArticleType } from "../../lib/types/common";
import "./style.scss";

const HeadlineBanner = ({
  title = "",
  url = "",
  urlToImage = "",
  articleId = "",
  description = "",
}: HeadlineArticleType) => {
  const navigate = useNavigate();

  // const onHeadlineBannerClick = () => {
  //   console.log(articleId);
  //   navigate({
  //     pathname: `/news-article/${articleId}`,
  //   });
  // };

  return (
    <div
      className="p-3 bg-cover bg-no-repeat bg-center h-80 lg:h-2/6 headline-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${urlToImage}')`,
      }}
    >
      <div className="pt-5 px-4 pb-2 lg:py-56 lg:px-16 lg:w-3/4">
        <Link
          to={{
            pathname: `/news-article/${articleId}`,
          }}
        >
          <h2 className="font-semibold text-4xl text-white">{title}</h2>
          <p className="hidden lg:block pt-6 text-white text-lg font-medium">
            {description}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HeadlineBanner;
