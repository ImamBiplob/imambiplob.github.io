import React from "react";

import project1 from "../assets/project-1.gif";
import project2 from "../assets/project-2.gif";
import project3 from "../assets/project-3.gif";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center w-full h-full relative py-10 scroll-mt-8"
    >
      <div className="absolute z-[0] w-[60%] h-[90%] -left-[50%] rounded-full blue__gradient bottom-48" />

      <h2 className="mt-4 z-15 text-center font-medium text-2xl 2xl:text-3xl text-gradient">
        Projects
      </h2>

      <ul className="w-full h-4/5 flex-wrap my-14 flex list-none justify-center items-center gap-8 sm:flex-row flex-col">
        <AnimationOnScroll
          className="w-1/2 h-[575px] sm:w-1/3 max-w-[300px] max-[500px]:w-[65%] max-[500px]:h-[500px] rounded-md shadow-lg bg-black-gradient z-10 drop-shadow-xl"
          animateIn="animate__slideInLeft"
          animateOut="animate__slideOutLeft"
          initiallyVisible={false}
          animatePreScroll={false}
          delay={100}
        >
          <li className="relative flex flex-col overflow-hidden items-center">
            <img
              src={project1}
              alt="MERN Project"
              className="mb-3 w-full rounded-md"
            />

            <h3 className="text-center py-2 md:text-lg text-base text-slate-300 mx-2 px-2">
              'Digital Medical Support System for Hospital'
            </h3>

            <p className="mt-1.5 text-center text-sm md:text-base text-slate-400 mx-1.5 px-1.5">
              A web application utilizing the{" "}
              <span className="text-gradient">MERN</span> stack that implements
              five features (e.g., making appointments, calling an ambulance).
              It includes creating database models and performing queries with
              mongoose, developing RESTful APIs using express, consuming APIs
              from react application, implementing authentication with JWT and
              so on.
            </p>

            <a
              href="https://github.com/ImamBiplob/470-Project"
              target="_blank"
              className="h-[40px] w-[50%] mb-3 bottom-0 fixed"
            >
              <button
                type="button"
                className="hover:opacity-80 w-full h-full text-center text-[18px] font-normal rounded-md border bg-emerald-400 shadow-md shadow-slate-700 border-emerald-400 text-slate-900"
              >
                Visit Repo
              </button>
            </a>
          </li>
        </AnimationOnScroll>

        <AnimationOnScroll
          className="w-1/2 h-[575px] sm:w-1/3 max-w-[300px] max-[500px]:w-[65%] max-[500px]:h-[500px] rounded-md shadow-lg bg-black-gradient z-10 drop-shadow-xl"
          animateIn="animate__zoomIn"
          animateOut="animate__zoomOut"
          initiallyVisible={false}
          animatePreScroll={false}
          delay={100}
        >
          <li className="relative flex flex-col overflow-hidden items-center">
            <img
              src={project2}
              alt="Django Project"
              className="mb-3 w-full min-h-1/2 rounded-md shadow-md"
            />

            <h3 className="text-center py-2 md:text-lg text-base text-slate-300 mx-2 px-2">
              'Gaming Matters'
            </h3>

            <p className="mt-1.5 text-center text-sm md:text-base text-slate-400 mx-1.5 px-1.5">
              A simple <span className="text-gradient">Django</span> application
              with creating models for DB, mapping urls to view functions, using
              templates with bootstrap, modifying admin panel, building RESTful
              API for Game model etc.
            </p>

            <a
              href="https://github.com/ImamBiplob/gaming_matters"
              target="_blank"
              className="h-[40px] w-[50%] mb-3 bottom-0 fixed"
            >
              <button
                type="button"
                className="hover:opacity-80 w-full h-full text-center text-[18px] font-normal rounded-md border bg-emerald-400 shadow-md shadow-slate-700 border-emerald-400 text-slate-900"
              >
                Visit Repo
              </button>
            </a>
          </li>
        </AnimationOnScroll>

        <AnimationOnScroll
          className="w-1/2 h-[575px] sm:w-1/3 max-w-[300px] max-[500px]:w-[65%] max-[500px]:h-[500px] rounded-md shadow-lg bg-black-gradient z-10 drop-shadow-xl"
          animateIn="animate__slideInRight"
          animateOut="animate__slideOutRight"
          initiallyVisible={false}
          animatePreScroll={false}
          delay={100}
        >
          <li className="relative flex flex-col overflow-hidden items-center">
            <img
              src={project3}
              alt="Portfolio Project"
              className="mb-3 w-full rounded-md shadow-md"
            />

            <h3 className="text-center py-2 md:text-lg text-base text-slate-300 mx-2 px-2">
              'My Portfolio Website'
            </h3>

            <p className="mt-1.5 text-center text-sm md:text-base text-slate-400 mx-1.5 px-1.5">
              To build this website <span className="text-gradient">React</span>{" "}
              is used. Created react functional components, further extracted
              react components to remove repetitions and to make it cleaner,
              scalable and maintanable, used props, react hooks etc.{" "}
              <span className="text-gradient">TailwindCSS</span> is utilized for
              styling and responsiveness.
            </p>

            <a
              href="https://github.com/ImamBiplob/imambiplob.github.io"
              target="_blank"
              className="h-[40px] w-[50%] mb-3 bottom-0 fixed"
            >
              <button
                type="button"
                className="hover:opacity-80 w-full h-full text-center text-[18px] font-normal rounded-md border bg-emerald-400 shadow-md shadow-slate-700 border-emerald-400 text-slate-900"
              >
                Visit Repo
              </button>
            </a>
          </li>
        </AnimationOnScroll>
      </ul>
    </div>
  );
};

export default Projects;
