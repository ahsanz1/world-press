import React, { useState } from "react";
import CloseIcon from "../../icons/close-light.svg";
import Dropdown from "../dropdown";
import GlobeIcon from "../../icons/globe-white.png";
import { MobileMenuProps } from "../../lib/types/common";

const MobileMenu = ({
  setShowMobileMenu,
  allCountries,
  setSelectedCountry,
}: MobileMenuProps) => {
  const [showCountries, setShowCountries] = useState(false);
  return (
    <div className="flex flex-col absolute bg-black w-full z-10 p-3 h-screen items-end">
      <img
        src={CloseIcon}
        onClick={(e) => {
          e.preventDefault();
          setShowMobileMenu(false);
        }}
        style={{ width: "1.5em", height: "1.5em" }}
      />
      <div className="flex flex-col items-center text-white w-full h-full justify-center">
        <p className="tracking-custom-widest mb-5">MENU</p>
        <p className="font-semibold text-3xl mb-3">Home Page</p>
        <p className="font-semibold text-3xl mb-3">Blog</p>
        <p className="font-semibold text-3xl mb-3">About Us</p>
        <p className="font-semibold text-3xl mb-3">Contact</p>
      </div>
      <span
        className="flex items-center rounded-r-lg px-0.5 absolute top-1/2 left-0 w-8 h-12 border-white border-thin"
        onClick={(e) => {
          e.preventDefault();
          setShowCountries(!showCountries);
        }}
      >
        <img src={GlobeIcon} className="max-w-full max-h-full"></img>
      </span>
      <Dropdown
        items={allCountries}
        onSelect={(country: any) => {
          setSelectedCountry(country.cca2.toLowerCase());
          setShowCountries(!showCountries);
        }}
        className={`flex-col absolute z-50 top-0 left-0 h-full w-full overflow-y-scroll bg-black text-white ${
          !showCountries ? "hidden" : "flex"
        } rounded-sm shadow-2xl border-gray-300 border-thin`}
        itemsClassName="border-b-thin border-b-white"
      />
    </div>
  );
};

export default MobileMenu;
