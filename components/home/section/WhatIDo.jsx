import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import img1 from "../../../Portfolio Vector Images/vector2.svg";
import img2 from "../../../Portfolio Vector Images/Cloud.svg";
import img3 from "../../../Portfolio Vector Images/UI-UX.svg";
import FullStack from "../TechStack/FullStack";
import CloudInfra from "../TechStack/CloudInfra";
import UIUX from "../TechStack/UIUX";

const data = [
  {
    imgUrl: img1,
    Title: "Full Stack Development",
    TechStack: <FullStack />,
    Description: {
      1: "⚡ React-Redux Maestro for Responsive Frontends",
      2: "⚡Backend Architect: Node.js & Express Luminary",
      3: "⚡Database Dynamo: MongoDB, MySQL, Firebase",
    },
  },
  {
    imgUrl: img2,
    Title: "Cloud Infrastructure",
    TechStack: <CloudInfra />,
    Description: {
      1: "⚡Cloud Architect: AWS & Google Cloud Maestro",
      2: "⚡Firebase Sorcerer: Crafting Real-time Solutions",
      3: "⚡MongoDB Dynamo: Database Management Virtuoso",
    },
  },
  {
    imgUrl: img3,
    Title: "UI/UX Design",
    TechStack: <UIUX />,
    Description: {
      1: "⚡UX Visionary: Crafting Intuitive User Experiences",
      2: "⚡UI Architect: Designing Aesthetically Pleasing Interfaces",
      3: "⚡User-Centric Design Maestro: Bridging Functionality and Elegance",
    },
  },
];

export default function WhatIDo() {
  return (
    <div className="m-5 sm:m-10">
      <h1 className="text-center font-semibold text-4xl sm:text-6xl mb-5">
        What I Do
      </h1>
      <ul>
        {data.map((item, index) => (
          <Slide
            key={index}
            triggerOnce
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <li
              className={`flex flex-col sm:flex-row items-center justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full sm:w-1/2">
                <img src={item.imgUrl} alt="" className="w-full" />
              </div>
              <div className="w-full sm:w-1/2 md:w-3/4 p-3 mb-3">
                <h1 className="text-center font-medium text-4xl sm:text-4xl mb-2">
                  {item.Title}
                </h1>
                {item.TechStack}
                <ul className="p-3 text-2xl">
                  {Object.values(item.Description).map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Slide>
        ))}
      </ul>
    </div>
  );
}
