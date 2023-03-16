import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-black-gradient z-20 text-slate-400 mt-5 sm:py-4 py-2 sm:text-xl text-base max-[350px]:text-sm relative"
    >
      <div className="flex justify-center items-center">
        <p className="text-center pr-2 m-2 border-r border-solid border-slate-400">
          Copyright &copy; <span id="year">2023</span>
        </p>
        <p className="text-center">All Rights Reserved</p>
        <a href="mailto:imamhbiplob@gmail.com" className="hover:opacity-80">
          <p className="text-center pl-2 m-2 border-l border-solid border-slate-400">
            Imam Hossain Biplob
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
