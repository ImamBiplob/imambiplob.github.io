import React from "react";

import hero from "../assets/hero.svg";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Hero = () => (
  <AnimationOnScroll
    animateIn="animate__slideInDown"
    animateOut="animate__slideOutUp"
    initiallyVisible={true}
    animatePreScroll={true}
    delay={100}
  >
    <div
      id="hero"
      className="lg:flex-row flex flex-col md:pt-28 pt-20 mb-2 justify-center items-center md:mx-8 mx-4 relative"
    >
      <div className="lg:w-full md:w-[75%] w-full h-full p-5">
        <img src={hero} className="z-10" alt="man doing programming" />
      </div>
      <div className="lg:w-full md:w-[75%] w-full h-full p-5">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="z-15 text-center text-xl sm:text-2xl text-slate-400 lg:text-left">
            Hello, I'm <span className="text-gradient">IMAM</span>
          </h2>
          <h3 className="z-15 mt-1 text-center text-base sm:text-lg text-slate-500 lg:text-left italic">
            Junior Software Engineer at{" "}
            <span className="text-slate-400 hover:opacity-75">
              <a href="https://squarehealth.com.bd" target="_blank">
                Square Health Ltd.
              </a>
            </span>{" "}
            <span className="border-r mx-2"></span> Recent Graduate from CSE at{" "}
            <span className="text-slate-400 hover:opacity-75">
              <a href="https://bracu.ac.bd" target="_blank">
                BRAC University
              </a>
            </span>
          </h3>
          <p className="mt-4 mx-10 md:mx-0 z-15 text-center text-lg sm:text-xl text-slate-400 lg:text-left">
            A passionate adventurer with diverse interests, especially in
            Artificial Intelligence and Software Engineering. Having an adequate
            amount of programming experience with Java, Python and JavaScript,
            I'm now looking to explore further and expand my horizons.
          </p>
          <p className="mt-2 mx-10 md:mx-0 z-15 text-center text-lg sm:text-xl text-slate-400 lg:text-left">
            Asking you to go through the whole page to get a gist of me.
          </p>
          <a
            href="mailto:biplob@squarehealth.com.bd"
            className="md:w-[25%] h-[40px] w-[40%] mt-8"
          >
            <button
              type="button"
              className="hover:opacity-80 w-full h-full text-center text-[18px] font-normal rounded-md border bg-emerald-400 shadow-md shadow-slate-700 border-emerald-400  text-slate-900"
            >
              Reach Me
            </button>
          </a>
        </div>
      </div>
    </div>
  </AnimationOnScroll>
);

export default Hero;
