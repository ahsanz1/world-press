import React, { useState } from "react";
import MobileMenu from "./mobile-menu";
import MenuIcon from "../../icons/menu-dark.svg";
import { Link } from "react-router-dom";
import InstagramIcon from "../../icons/instagram-black.svg";
import InstagramIconOrange from "../../icons/instagram-orange.svg";
import FBIcon from "../../icons/fb-black.svg";
import FBIconOrange from "../../icons/fb-orange.svg";
import TwitterIcon from "../../icons/twitter-black.svg";
import TwitterIconOrange from "../../icons/twitter-orange.svg";
import InIcon from "../../icons/linkedin-black.svg";
import InIconOrange from "../../icons/linkedin-orange.svg";
import { Icon } from "../icon";
import "./style.scss";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="flex flex-col header">
      <div className="promo-banner px-4 py-3 bg-black w-full text-sm font-semibold leading-4 lg:flex lg:flex-row lg:justify-between">
        <p className="text-white text-center">This is a promo banner</p>
        <div className="hidden lg:flex lg:flex-row gap-x-4 text-white">
          <Link to={"/contact"} className="hover:text-custom-orange">
            Contact
          </Link>
          <Link to={"/contact"} className="hover:text-custom-orange">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="navbar flex flex-row justify-between px-4 py-3 bg-neutral-100 w-full items-center border-b-2 lg:px-6">
        <Link to="/">
          <p className="font-bold text-3xl leading-tight">World Press</p>
        </Link>
        <div className="hidden lg:flex flex-row justify-between gap-x-10 text-lg font-medium">
          <p className="hover:text-custom-orange">Home Page</p>
          <p className="hover:text-custom-orange">Simple Post</p>
          <p className="hover:text-custom-orange">About Us</p>
          <p className="hover:text-custom-orange">Blog</p>
        </div>
        <div className="hidden lg:flex flex-row justify-between gap-x-6 text-lg font-medium">
          <Icon
            src={InstagramIcon}
            srcOnHover={InstagramIconOrange}
            alt="instagram"
            className="w-6 h-6"
          ></Icon>
          <Icon
            src={FBIcon}
            srcOnHover={FBIconOrange}
            alt="fb"
            className="w-6 h-6"
          ></Icon>
          <Icon
            src={InIcon}
            srcOnHover={InIconOrange}
            alt="in"
            className="w-6 h-6"
          ></Icon>
          <Icon
            src={TwitterIcon}
            srcOnHover={TwitterIconOrange}
            alt="twitter"
            className="w-6 h-6"
          ></Icon>
        </div>
        <img
          src={MenuIcon}
          onClick={(e) => {
            e.preventDefault();
            setShowMobileMenu(!showMobileMenu);
          }}
          style={{ width: "1.5em", height: "1.5em" }}
          className="lg:hidden"
        />
      </div>
      {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
    </div>
  );
};

export default Header;
