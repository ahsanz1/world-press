import React from "react";
import CloseIcon from "../../icons/close-light.svg";

const MobileMenu = ({ setShowMobileMenu }: any) => {
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
    </div>
  );
};

export default MobileMenu;
