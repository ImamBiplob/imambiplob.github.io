import React from "react";

import { skills } from "../constants";
import SkillBox from "./SkillBox";

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
          {skills.map((skill) => (
            <SkillBox key={skill.id} {...skill} />
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Skills;
