"use client";
// -React-
import React, { useState } from "react";
// -Next-
import Link from "next/link";
import Image from "next/image";
// -Constants-
import { headerLinks } from "@/utils/constants/headbarLinks";
import { headerLogo } from "@/utils/constants/imagesConstants";
// -Components-
import NavBurger from "@/app/components/NavBurger";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const leftLinks = headerLinks.slice(0, 3);
  const rightLinks = headerLinks.slice(3);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
    className={`lg:py-8 md:px-0 min-h-[6rem] mx-auto w-full lg:sticky top-0 bg-blue-950 z-[2] overflow-hidden ${
        menuOpen ? "bg-white border-b-2 pb-[1rem]" : ""
      }`}
    >
      <div className="lg:flex lg:items-center lg:justify-between flex justify-between pt-[2rem] lg:pt-0 lg:mt-0 lg:w-full md:w-[80%] md:ml-[5rem]">
        <div className="hidden lg:flex lg:space-x-8">
          {leftLinks.map((linkGroup, index) => (
            <React.Fragment key={index}>
              {linkGroup.items.map((linkItem, i) => (
                <Link key={i} href={linkItem.href} passHref>
                  <span className="text-white font-medium hover:text-red-600 transition duration-300 ease-in-out">
                    {linkItem.name}
                  </span>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>
        <Link href="#homeSection" passHref className="ml-8 lg:ml-0 z-[60]">
          <span className="">
            <Image
              src={headerLogo}
              alt="Logo - Construcfy X Webflow Template"
              width={150}
              height={100}
            />
          </span>
        </Link>
        <NavBurger isOpen={menuOpen} toggleMenu={toggleMenu} />

        <div
          className={`lg:hidden absolute block top-[6rem] py-3 pb-4 rounded-b-3xl transition-all duration-400 ease-in-out left-0 w-full bg-white ${
            menuOpen
              ? "z-50 translate-y-0 opacity-100"
              : "z-[-10] translate-y-[-150%] opacity-0 "
          }`}
        >
          {headerLinks.map((linkGroup, index) => (
            <React.Fragment key={index}>
              {linkGroup.items.map((linkItem, i) => (
                <Link key={i} href={linkItem.href}>
                  <p
                    className={`text-gray-800 text-medium font-subtitle font-medium hover:text-red-600 transition duration-300 ease-in-out cursor-pointer block pt-2 pl-4 text-center`}
                  >
                    {linkItem.name}
                  </p>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div
          className={`hidden lg:flex lg:items-center lg:space-x-8 mr-[15rem] ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
          style={{ transition: "opacity 0.3s ease-in-out" }}
        >
          {rightLinks.map((linkGroup, index) => (
            <React.Fragment key={index}>
              {linkGroup.items.map((linkItem, i) => (
                <Link key={i} href={linkItem.href} passHref>
                  <span
                    className={`text-white font-medium hover:text-red-600 transition duration-300 ease-in-out`}
                  >
                    {linkItem.name}
                  </span>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
