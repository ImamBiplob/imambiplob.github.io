import React from "react";
import bracu from "../assets/bracu.svg";
import ndc from "../assets/ndc.svg";
import graduate from "../assets/graduate.jpg";
import thesis from "../assets/thesis.jpg";
import ImagePopup from "./ImagePopup";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col justify-center items-center w-full relative scroll-mt-16 mb-4"
    >
      <div className="absolute z-[0] w-[30%] h-[80%] -left-[10%] rounded-full blue__gradient bottom-0" />

      <h2 className="mt-6 z-15 text-center font-medium text-2xl 2xl:text-3xl text-gradient">
        Education
      </h2>
      <div className="flex py-3 gap-8 flex-col justify-center items-center align-middle mt-10 w-full">
        <AnimationOnScroll
          className="w-[75%] max-[400px]:w-[65%]"
          animateIn="animate__fadeInLeftBig"
          animateOut="animate__fadeOutLeftBig"
          delay={100}
          initiallyVisible={false}
          animatePreScroll={false}
        >
          <div className="shadow-lg border-spacing-2 rounded-md z-10 bg-black-gradient drop-shadow-xl">
            <div className="flex max-[400px]:flex-col justify-start items-center shadow-md">
              <img
                className="rounded-md bg-white sm:w-40 sm:h-40 w-28 h-28 max-[400px]:mt-3"
                src={bracu}
                alt="bracu logo"
              />

              <div className="flex flex-col w-full">
                <h3 className="pl-5 pr-2 sm:text-xl text-base text-slate-300 text-left pt-2 max-[430px]:text-sm">
                  B.Sc. in Computer Science and Engineering
                </h3>

                <h4 className="pl-5 py-1 sm:text-lg text-sm text-emerald-500 text-left italic max-[430px]:text-xs">
                  <ImagePopup
                    imagePath={graduate}
                    text={"Graduated with High Distinction"}
                    place={"#education"}
                  />
                </h4>

                <h4 className="pl-5 sm:text-lg text-sm text-slate-500 text-left pb-2 max-[430px]:text-xs">
                  (2018 - 2022)
                </h4>
              </div>
            </div>
            <div className="flex flex-col p-3 mx-2 justify-center items-start">
              <h4 className="sm:text-lg text-sm text-slate-400 text-left max-[430px]:text-xs">
                <span className="underline text-slate-300">Key Courses:-</span>{" "}
                Object Oriented Programming, Data Structures, Algorithms,
                Artificial Intelligence, Numerical Methods, Microprocessors,
                Computer Architecture, Software Engineering, System Analysis and
                Design, Database Systems, Operating Systems, Computer Networks,
                VLSI Design, Cryptography and Cryptanalysis.
              </h4>
              <h4 className="sm:text-lg py-2 text-sm text-slate-400 text-left max-[430px]:text-xs">
                <span className="underline text-slate-300">Thesis:-</span>{" "}
                <span className="text-center">
                  Risk based Hybrid Security Model for enhancing eHealth
                  services of Cloud System.
                </span>{" "}
                <span className="text-slate-300">
                  (September, 2021 - September, 2022)
                </span>
                <span className="text-center">
                  <ImagePopup
                    imagePath={thesis}
                    text={"★★★★★"}
                    place="#educatiion"
                  />
                </span>
                <ul className="list-disc mt-2 ml-10">
                  <li className="py-1">
                    <span className="text-slate-300">Research Area:-</span>{" "}
                    Encryption, Searchable Encryption, Risk Analysis, Access
                    Control Mechanisms (e.g., based on Role, Past Behaviour,
                    Data Sensitivity), eHealth Systems, Cloud Security.
                  </li>
                  <li>Under Review in ICCIT</li>
                </ul>
              </h4>
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          className="w-[75%] max-[400px]:w-[65%]"
          animateIn="animate__fadeInRightBig"
          animateOut="animate__fadeOutRightBig"
          initiallyVisible={false}
          animatePreScroll={false}
          delay={100}
          offset={800}
        >
          <div className="flex max-[400px]:flex-col justify-start items-center shadow-lg border-spacing-2 rounded-md z-10 bg-black-gradient drop-shadow-xl">
            <img
              className="rounded-md bg-white sm:w-40 sm:h-40 w-28 h-28 max-[400px]:mt-3"
              src={ndc}
              alt="ndc logo"
            />

            <div className="flex flex-col w-full">
              <h3 className="pl-5 pr-2 sm:text-xl text-base text-slate-300 text-left pt-2 max-[430px]:text-sm">
                Higher Secondary Certificate
              </h3>
              <h4 className="pl-5 py-1 sm:text-lg text-sm text-emerald-500 text-left italic max-[430px]:text-xs">
                GPA: 5.0
              </h4>
              <h4 className="pl-5 sm:text-lg text-sm text-slate-500 text-left pb-2 max-[430px]:text-xs">
                (2015 - 2017)
              </h4>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Education;
