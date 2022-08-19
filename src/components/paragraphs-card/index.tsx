import React from "react";
import { ParagraphsCardProps } from "../../lib/types/common";

const ParagraphsCard = ({ heading, para1, para2 }: ParagraphsCardProps) => {
  return (
    <div className="flex flex-col gap-y-6 my-8 text-left lg:flex-row lg:gap-y-0 lg:gap-x-8">
      <h2 className="font-medium text-4xl lg:w-1/3">{heading}</h2>
      <p className="font-normal text-base lg:w-1/3">{para1}</p>
      <p className="font-normal text-base lg:w-1/3">{para2}</p>
    </div>
  );
};

export default ParagraphsCard;
