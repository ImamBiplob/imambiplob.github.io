import React from "react";
import java from "../assets/java.svg";
import js from "../assets/js.svg";
import python from "../assets/python.svg";
import sql from "../assets/sql.svg";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/express.svg";
import react from "../assets/react.svg";
import django from "../assets/django.svg";
import tailwind from "../assets/tailwind.svg";
import jwt from "../assets/jwt.svg";
import git from "../assets/git.svg";
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import bootstrap from "../assets/bootstrap.svg";
import npm from "../assets/npm.svg";
import docker from "../assets/docker.svg";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex w-full flex-col justify-center items-center py-16 relative"
    >
      <div className="absolute z-[0] w-[60%] h-[90%] -right-[50%] rounded-full blue__gradient bottom-48" />

      <h2 className="mt-6 z-15 text-center font-medium text-2xl 2xl:text-3xl text-gradient">
        Skills
      </h2>
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOut="animate__zoomOut"
        initiallyVisible={false}
        animatePreScroll={false}
        delay={100}
      >
        <div className="flex flex-1 my-5 md:mx-[100px] mx-[50px] justify-center items-center align-middle flex-wrap">
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={java}
            alt="java"
            title="Java"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={python}
            alt="python"
            title="Python"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={js}
            alt="js"
            title="JavaScript"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={sql}
            alt="sql"
            title="SQL"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={nodejs}
            alt="nodejs"
            title="Node.JS"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={express}
            alt="express"
            title="Express.JS"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={react}
            alt="react"
            title="React.JS"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={npm}
            alt="npm"
            title="NPM"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={django}
            alt="django"
            title="Django"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={html5}
            alt="html5"
            title="HTML5"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={css3}
            alt="css3"
            title="CSS3"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={bootstrap}
            alt="bootstrap"
            title="Bootstrap"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={tailwind}
            alt="tailwind"
            title="TailwindCSS"
          />
          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={jwt}
            alt="jwt"
            title="JSON WEB TOKEN"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={mysql}
            alt="mysql"
            title="MySQL"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={mongodb}
            alt="mongodb"
            title="MongoDB"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={git}
            alt="git"
            title="Git"
          />

          <img
            className="sm:w-[125px] sm:h-[125px] mx-6 w-[75px] h-[75px] mt-10"
            src={docker}
            alt="docker"
            title="Docker"
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Skills;
