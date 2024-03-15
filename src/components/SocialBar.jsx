import React, { useState } from "react";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import leetcode from "../assets/leetcode.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import wa from "../assets/wa.svg";

const SocialBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div className="fixed left-2 top-24 shadow-lg backdrop-blur rounded-md z-20">
        <a href="mailto:imam.hossain@g.bracu.ac.bd">
          <img
            src={mail}
            className="cursor-pointer w-12 max-[340px]:w-10 h-12 py-2 hover:opacity-75"
          ></img>
        </a>

        <a href="https://linkedin.com/in/imambiplob" target="_blank">
          <img
            src={linkedin}
            className="cursor-pointer w-12 max-[340px]:w-10 h-12 py-2 hover:opacity-75"
          ></img>
        </a>

        <a href="https://github.com/ImamBiplob" target="_blank">
          <img
            src={github}
            className="cursor-pointer w-12 max-[340px]:w-10 h-12 py-2 hover:opacity-75"
          ></img>
        </a>

        {isExpanded && (
          <>
            <a href="https://leetcode.com/ImamBiplob/" target="_blank">
              <img
                src={leetcode}
                className="cursor-pointer w-12 max-[340px]:w-10 h-12 py-2 hover:opacity-75"
              ></img>
            </a>

            <a
              href="https://discordapp.com/users/730699723606065243"
              target="_blank"
            >
              <img
                src={discord}
                className="cursor-pointer w-12 max-[340px]:w-10 h-12 py-2 hover:opacity-75"
              ></img>
            </a>

            <a href="https://wa.link/eetuad" target="_blank">
              <img
                src={wa}
                className="cursor-pointer w-12 max-[340px]:w-10 h-12 py-2 hover:opacity-75"
              ></img>
            </a>
          </>
        )}
        <div className="flex flex-col items-center">
          <button onClick={toggleExpand} className="h-6 hover:opacity-75">
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
