import React, { useState } from "react";
import MobileMenu from "./mobile-menu";
import MenuIcon from "../../icons/menu-dark.svg";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="px-4 py-3 bg-black w-full">
        <p className="text-white text-center">This is a promo banner</p>
      </div>
      <div className="flex flex-row justify-between px-4 py-3 bg-neutral-100 w-full items-center">
        <p className="font-bold text-3xl leading-tight">World Press</p>
        <img
          src={MenuIcon}
          onClick={(e) => {
            e.preventDefault();
            setShowMobileMenu(!showMobileMenu);
          }}
          style={{ width: "1.5em", height: "1.5em" }}
        />
      </div>
      {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
    </div>
  );
};

export default Header;
