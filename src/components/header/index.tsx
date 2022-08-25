import React, { useContext, useEffect, useState } from "react";
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
import { countries } from "../../lib/constants";
import { fetchCountry } from "../../lib/api";
import Dropdown from "../dropdown";
import ChevronDownDark from "../../icons/chevron-down-dark.png";
import ChevronDownOrange from "../../icons/chevron-down-orange.png";
import { AppContext } from "../../lib/context";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const [showCountries, setShowCountries] = useState(false);
  const [selectedCountryName, setSelectedCountryName] = useState<string>("");

  const { selectedCountry, setSelectedCountry, setTopHeadlines } =
    useContext(AppContext);

  const fetchAllCountries = async () => {
    const countryPromises = countries.map((c) => fetchCountry(c));
    const allCountries = await Promise.all(countryPromises);
    setAllCountries(allCountries);
  };

  useEffect(() => {
    if (selectedCountry && allCountries.length > 0) {
      const sCn = allCountries.find(
        (c) => (c.cca2 || "").toLowerCase() === selectedCountry
      );

      setSelectedCountryName(sCn?.name?.common || "Invalid Country");
      setTopHeadlines([]);
    }
  }, [selectedCountry, allCountries]);

  useEffect(() => {
    if (allCountries.length === 0) {
      fetchAllCountries();
    }
  }, []);

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
      <div className="navbar flex flex-row justify-between px-4 py-3 bg-light-grey w-full items-center border-b-2 lg:px-6">
        <Link to="/">
          <p className="font-bold text-3xl leading-tight">World Press</p>
        </Link>
        <div className="hidden lg:flex flex-row justify-between gap-x-10 text-lg font-medium">
          <Link to={"/about-us"}>
            <p className="hover:text-custom-orange">About Us</p>
          </Link>
          <p className="hover:text-custom-orange">Blog</p>
          <div className="relative">
            <span
              onClick={(e) => {
                e.preventDefault();
                setShowCountries(!showCountries);
              }}
            >
              <Icon
                text={selectedCountryName}
                src={ChevronDownDark}
                srcOnHover={ChevronDownOrange}
                className="flex flex-row items-center gap-3 cursor-pointer"
                imgClassName="w-3 h-3"
                textClassName="hover:text-custom-orange"
              />
            </span>
            <Dropdown
              items={allCountries}
              onSelect={(country: any) => {
                setSelectedCountry(country.cca2.toLowerCase());
                setShowCountries(!showCountries);
              }}
              className={`flex-col absolute top-8 z-50 max-h-80 overflow-y-scroll bg-light-grey ${
                !showCountries ? "hidden" : "flex"
              } rounded-sm shadow-2xl border-gray-300 border-thin`}
              itemsClassName="border-b-thin border-b-gray-300"
            />
          </div>
          {/* {/* <p className="hover:text-custom-orange">Home Page</p> */}
          <p className="hover:text-custom-orange">Category</p>
        </div>
        <div className="hidden lg:flex flex-row justify-between gap-x-6 text-lg font-medium">
          <Icon
            src={InstagramIcon}
            srcOnHover={InstagramIconOrange}
            alt="instagram"
            imgClassName="w-6 h-6"
          ></Icon>
          <Icon
            src={FBIcon}
            srcOnHover={FBIconOrange}
            alt="fb"
            imgClassName="w-6 h-6"
          ></Icon>
          <Icon
            src={InIcon}
            srcOnHover={InIconOrange}
            alt="in"
            imgClassName="w-6 h-6"
          ></Icon>
          <Icon
            src={TwitterIcon}
            srcOnHover={TwitterIconOrange}
            alt="twitter"
            imgClassName="w-6 h-6"
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
      {showMobileMenu && (
        <MobileMenu
          setShowMobileMenu={setShowMobileMenu}
          allCountries={allCountries}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </div>
  );
};

export default Header;
