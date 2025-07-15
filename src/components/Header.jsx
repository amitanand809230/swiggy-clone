import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch, IoIosHelpCircleOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { icon: <IoHomeOutline />, name: "Home", to: "/" },
    { icon: <IoIosSearch />, name: "Search", to: "/search" },
    { icon: <IoIosHelpCircleOutline />, name: "Help", to: "/help" },
    { icon: <BsCart4 />, name: "My order" },
    { icon: <IoPerson />, name: "Sign In", to: "/signin" },
  ];

  return (
    <>
  
      {toggle && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setToggle(false)}
        ></div>
      )}

    
      <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-3">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo" className="w-[100px]" />
            <div className="text-sm md:text-base">
              <span className="font-bold border-b-2 border-orange-500">Sarai</span>{" "}
              Faridabad, Haryana{" "}
              <RxCaretDown
                fontSize={20}
                className="inline text-[#fc8019] cursor-pointer"
                onClick={() => setToggle(true)}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center text-[18px] font-semibold text-[#686b78]">
            {links.map((link, i) =>
              link.to ? (
                <Link key={i} to={link.to}>
                  <div className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer">
                    {link.icon}
                    {link.name}
                  </div>
                </Link>
              ) : (
                <div key={i} className="flex items-center gap-2 cursor-pointer">
                  {link.icon}
                  {link.name}
                </div>
              )
            )}
          </nav>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden text-2xl text-[#fc8019]">
            {toggle ? (
              <FiX onClick={() => setToggle(false)} />
            ) : (
              <FiMenu onClick={() => setToggle(true)} />
            )}
          </div>
        </div>

        {/* Mobile Slide-in Nav */}
        <div
          className={`md:hidden fixed top-0 left-0 w-[70%] sm:w-[60%] h-full bg-white shadow-xl z-50 transition-transform duration-300 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 text-[#686b78] font-semibold text-lg">
            {links.map((link, i) =>
              link.to ? (
                <Link
                  key={i}
                  to={link.to}
                  onClick={() => setToggle(false)}
                  className="block mb-5"
                >
                  <div className="flex items-center gap-3 hover:text-[#fc8019]">
                    {link.icon}
                    {link.name}
                  </div>
                </Link>
              ) : (
                <div
                  key={i}
                  className="flex items-center gap-3 mb-5 cursor-pointer"
                >
                  {link.icon}
                  {link.name}
                </div>
              )
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
