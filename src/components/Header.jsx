import React, { useContext } from "react";
// import component
import Socials from "./Socials";
import MobileNav from "./MobileNav";
// import logo
import logo from "../assets/img/header/logo.svg";
// import link
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseLeaveHandler, mouseEnterHandler } = useContext(CursorContext);
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} to={"/"} className="max-w-[200px]">
          <img src={logo} alt="" />
        </Link>
        {/* nav initial hidden - show on desktop mode */}
        <nav onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="hidden xl:flex gap-x-12 font-semibold">
          <Link to={"/"} className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          <Link to={"/about"} className="text-[#696c6d] hover:text-primary transition">
            About
          </Link>
          <Link to={"/portfolio"} className="text-[#696c6d] hover:text-primary transition">
            Portfolio
          </Link>
          <Link to={"/contact"} className="text-[#696c6d] hover:text-primary transition">
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
