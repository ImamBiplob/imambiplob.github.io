import { useState } from "react";

import logo from "../assets/logo-navbar.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div id="navbar" className="relative">
      <div className="fixed top-0 left-0 right-0 backdrop-blur bg-opacity-25 z-20 text-slate-400 shadow-lg">
        <div className="flex mx-auto flex-row justify-between items-center py-6 w-full ">
          <a href="#hero">
            <img
              className="w-[124px] h-[32px] ml-5 flex-1"
              src={logo}
              alt="imambiplob logo"
            />
          </a>

          <ul className="sm:flex hidden list-none justify-end mr-5 text-lg items-center">
            <li className="cursor-pointer bg-heading font-medium mr-5 hover:opacity-75">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer bg-heading font-medium mr-5 hover:opacity-75">
              <a href="#education">Education</a>
            </li>
            <li className="cursor-pointer bg-heading font-medium mr-5 hover:opacity-75">
              <a href="#experience">Experience</a>
            </li>
            <li className="cursor-pointer bg-heading font-medium hover:opacity-75 ">
              <a href="#projects">Projects</a>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] mr-5 object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-center items-center flex-1 flex-col">
                <li className="cursor-pointer bg-heading text-[18px]  hover:opacity-75">
                  <a href="#skills">Skills</a>
                </li>
                <li className="cursor-pointer bg-heading text-[18px] mt-5 hover:opacity-75">
                  <a href="#education">Education</a>
                </li>
                <li className="cursor-pointer bg-heading text-[18px] mt-5 hover:opacity-75">
                  <a href="#experience">Experience</a>
                </li>
                <li className="cursor-pointer bg-heading text-[18px] mt-5 hover:opacity-75 ">
                  <a href="#projects">Projects</a>
                </li>
                <ul className=" list-none flex justify-end mt-5 items-center flex-1">
                  <li className="cursor-pointer bg-heading  mr-5 hover:opacity-75">
                    <a href="https://github.com/ImamBiplob" target="_blank">
                      <img src={github} className="w-12 h-12 py-2"></img>
                    </a>
                  </li>
                  <li className="cursor-pointer bg-heading  mr-5 hover:opacity-75">
                    <a
                      href="https://linkedin.com/in/imambiplob"
                      target="_blank"
                    >
                      <img src={linkedin} className="w-12 h-12 py-2"></img>
                    </a>
                  </li>
                  <li className="cursor-pointer bg-heading   hover:opacity-75">
                    <a
                      href="https://discordapp.com/users/730699723606065243"
                      target="_blank"
                    >
                      <img src={discord} className="w-12 h-12 py-2"></img>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
