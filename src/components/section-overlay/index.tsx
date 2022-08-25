import React from "react";
import { SectionOverlayProps } from "../../lib/types/common";
import InfoIcon from "../../icons/info.png";

const SectionOverlay = ({
  overlayImgUrl,
  bigText,
  heading1,
  para1,
  heading2,
  para2,
}: SectionOverlayProps) => {
  return (
    <div className="flex flex-col py-8 lg:relative">
      <div className="w-full flex flex-row text-start lg:absolute lg:top-5 lg:left-5 lg:z-10">
        <img
          src={overlayImgUrl}
          className="w-full h-80 object-cover lg:w-1/2"
        ></img>
        <h1 className="hidden lg:block font-bold text-9xl lg:pt-20 lg:pl-16">
          {bigText}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap lg:flex-nowrap text-white px-4 bg-custom-greeen pb-8 lg:mt-60 lg:pt-24">
        <div className="px-6 py-8 lg:w-1/2">
          <img src={InfoIcon} className="h-4 w-4 rounded-full mb-5"></img>
          <h5 className="font-bold text-lg mb-5">{heading1}</h5>
          <p className="font-normal text-base mb-5">{para1}</p>
        </div>
        <div className="px-6 bg-custom-faded-green mt-2 py-8 lg:w-1/2 lg:ml-10">
          <img src={InfoIcon} className="h-4 w-4 rounded-full mb-5"></img>
          <h5 className="font-bold text-lg mb-5">{heading2}</h5>
          <p className="font-normal text-base mb-5">{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionOverlay;
