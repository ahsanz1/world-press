import React from "react";
import { Link } from "react-router-dom";
import fwIcon from "../../icons/fw-orange.png";
import MailIcon from "../../icons/mail-orange.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white w-full px-4 pt-10">
      <div className="flex flex-row flex-wrap">
        <div className="pb-2">
          <h2 className="text-2xl text-left mb-9">Newspaper</h2>
          <p className="text-base text-left text-[#c5c5c5] mb-3">
            Daily newspaper with interesting scientific articles and guides on
            modern technology and fashion.
          </p>
          <Link
            to={"/about-us"}
            className="text-[#e09d37] flex items-center gap-x-2"
          >
            <span>Read more </span>
            <img src={fwIcon} className="w-5 h-5"></img>
          </Link>
        </div>
        <div className="pb-2 mt-10 w-full">
          <h2 className="text-2xl text-left mb-10 pb-4 border-b-2 border-white">
            Company
          </h2>
          <div className="flex flex-col items-left text-base text-[#c5c5c5] font-normal">
            <p className="mb-1">Home Page</p>
            <p className="mb-1">Blog</p>
            <p className="mb-1">About Us</p>
            <p className="mb-1">Contact</p>
          </div>
        </div>
        <div className="pb-2 mt-10 w-full">
          <h2 className="text-2xl text-left mb-10 pb-4 border-b-2 border-white">
            Categories
          </h2>
          <div className="flex flex-col items-left text-base text-[#c5c5c5] font-normal">
            <p className="mb-1">Home Page</p>
            <p className="mb-1">Blog</p>
            <p className="mb-1">About Us</p>
            <p className="mb-1">Contact</p>
          </div>
        </div>
        <div className="pb-4 mt-10 w-full">
          <div className="flex flex-col items-center text-center text-base text-[#c5c5c5] font-normal">
            <span className="flex items-center gap-x-2">
              <img src={MailIcon} className="w-5 h-5"></img>{" "}
              <p className="mb-1">info@newspaper.domain</p>
            </span>

            <p className="mb-1">
              Copyright © 2022. Newspaper magazine, all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
