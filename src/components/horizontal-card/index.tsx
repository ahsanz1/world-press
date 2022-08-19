import React from "react";
import { HorizontalCardProps } from "../../lib/types/common";

const HorizontalCard = ({
  title,
  tagline,
  subHeading,
  paragraph,
  imageUrl,
  flip,
  borderBottom,
}: HorizontalCardProps) => {
  return (
    <div
      className={`flex flex-col mt-8 pb-8 lg:flex-row ${
        borderBottom ? "border-b-2 border-black lg:border-none" : ""
      }`}
    >
      <img
        className={`w-full h-80 lg:w-1/2 object-cover ${
          flip ? "order-last" : ""
        }`}
        src={imageUrl}
      ></img>
      <div
        className={`text-left w-full lg:w-1/2 ${
          flip ? "mb-6 lg:mb-0 lg:text-right lg:pr-14 lg:mt-6" : "lg:pl-14"
        }`}
      >
        <p className="text-base font-normal">{title}</p>
        <h2 className="font-medium text-4xl my-8">{tagline}</h2>
        <h4 className="font-bold text-lg">{subHeading}</h4>
        <p className="font-normal text-base mt-6">{paragraph}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
