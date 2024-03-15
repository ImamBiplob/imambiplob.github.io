import React from "react";
import shl from "../assets/shl.svg";
import jotno from "../assets/jotno.png";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center w-full relative scroll-mt-16 mb-4"
    >
      <div className="absolute z-[0] w-[30%] h-[80%] -right-[10%] rounded-full blue__gradient bottom-0" />

      <h2 className="mt-6 z-15 text-center font-medium text-2xl 2xl:text-3xl text-gradient">
        Experience
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
                src={shl}
                alt="shl logo"
              />

              <div className="flex flex-col w-full">
                <h3 className="pl-5 pr-2 sm:text-xl text-base text-slate-300 text-left pt-2 max-[430px]:text-sm">
                  <a
                    className="hover:opacity-75"
                    href="https://squarehealth.com.bd"
                    target="_blank"
                  >
                    Square Health Ltd.
                  </a>
                </h3>

                <h4 className="pl-5 py-1 sm:text-lg text-sm text-emerald-500 text-left italic max-[430px]:text-xs">
                  Junior Software Engineer (Backend)
                </h4>

                <h4 className="pl-5 sm:text-lg text-sm text-slate-500 text-left pb-2 max-[430px]:text-xs">
                  (March, 2024 - Present)
                </h4>
              </div>
            </div>
            <div className="flex flex-col p-3 mx-2 justify-center items-start">
              <h4 className="sm:text-lg text-sm text-slate-400 text-left max-[430px]:text-xs">
                <span className="underline text-slate-300">Key Skills:-</span>{" "}
                Core Java, Spring Framework, Spring Boot, SQL, Elasticsearch,
                Kafka, Docker, Kubernetes, AWS, System Design, Microservices,
                Test-Driven Development.
              </h4>
            </div>
            <div className="flex flex-col p-3 mx-2 justify-center items-start">
              <h4 className="sm:text-lg text-sm text-slate-300 text-left max-[430px]:text-xs">
                <div className="flex">
                  <span className="underline">Flagship Project:- </span>
                  <a
                    className="hover:opacity-75 flex"
                    href="https://www.jotno.net"
                    target="_blank"
                  >
                    <img
                      className="rounded-md sm:w-8 sm:h-8 w-6 h-6 mx-2"
                      src={jotno}
                      alt="jotno logo"
                    />
                    Jotno
                  </a>
                </div>
              </h4>
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          className="w-[75%] max-[400px]:w-[65%]"
          animateIn="animate__fadeInRightBig"
          animateOut="animate__fadeOutRightBig"
          delay={100}
          initiallyVisible={false}
          animatePreScroll={false}
        >
          <div className="shadow-lg border-spacing-2 rounded-md z-10 bg-black-gradient drop-shadow-xl">
            <div className="flex max-[400px]:flex-col justify-start items-center shadow-md">
              <img
                className="rounded-md bg-white sm:w-40 sm:h-40 w-28 h-28 max-[400px]:mt-3"
                src={shl}
                alt="shl logo"
              />

              <div className="flex flex-col w-full">
                <h3 className="pl-5 pr-2 sm:text-xl text-base text-slate-300 text-left pt-2 max-[430px]:text-sm">
                  <a
                    className="hover:opacity-75"
                    href="https://squarehealth.com.bd"
                    target="_blank"
                  >
                    Square Health Ltd.
                  </a>
                </h3>

                <h4 className="pl-5 py-1 sm:text-lg text-sm text-emerald-500 text-left italic max-[430px]:text-xs">
                  Software Engineer Intern (Java)
                </h4>

                <h4 className="pl-5 sm:text-lg text-sm text-slate-500 text-left pb-2 max-[430px]:text-xs">
                  (July, 2023 - October, 2023)
                </h4>
              </div>
            </div>
            <div className="flex flex-col p-3 mx-2 justify-center items-start">
              <h4 className="sm:text-lg text-sm text-slate-400 text-left max-[430px]:text-xs">
                <span className="underline text-slate-300">Skills:-</span> Core
                Java, Spring Framework, Spring Boot, JPA, Hibernate, Spring MVC,
                Spring Data JDBC, Spring Data JPA, Thymeleaf, Spring Security,
                JSON Web Token (JWT), REST APIs, SQL, MySQL, Git, Github, Linux,
                Microservices, Test-Driven Development, Unit Testing,
                Integration Testing, JUnit, Mockito.
              </h4>
            </div>
            <div className="flex flex-col p-3 mx-2 justify-center items-start">
              <h4 className="sm:text-lg text-sm text-slate-400 text-left max-[430px]:text-xs">
                <span className="underline text-slate-300">Projects:</span>
                <ul className="list-disc mt-2 ml-10">
                  <li className="py-1">
                    <span className="text-slate-300">
                      <a
                        className="hover:opacity-75"
                        href="https://report.jotno.dev"
                        target="_blank"
                      >
                        DB Insight Reporter - Database-Driven Reporting and
                        Automation System{" "}
                        <span className="text-slate-400">(Full Stack)</span>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-300">
                      <a
                        className="hover:opacity-75"
                        href="https://billing.jotno.dev"
                        target="_blank"
                      >
                        Care Invoice - Multi-Organization based Healthcare
                        Billing System{" "}
                        <span className="text-slate-400">(Backend)</span>
                      </a>
                    </span>
                  </li>
                </ul>
              </h4>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Experience;
