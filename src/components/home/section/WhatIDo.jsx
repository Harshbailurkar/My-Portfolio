import React from "react";
import { Fade } from "react-awesome-reveal";
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
    <div className="m-36">
      <h1 className="text-center font-semibold text-6xl">What I Do</h1>
      <ul>
        {data.map((item, index) => (
          <Fade
            key={index}
            ascade
            damping={0.1}
            {...(index % 2 === 0 ? { left: true } : { right: true })}
            style={{ opacity: 0.9, transition: "opacity 1s ease-in-out" }}
          >
            <li
              className={`flex items-center ${
                index % 2 === 0
                  ? "justify-between"
                  : "justify-between md:flex-row-reverse"
              }`}
            >
              <div className="w-full">
                <img src={item.imgUrl} alt="" className="w-full" />
              </div>
              <div className="w-1/2 md:w-3/4">
                <h1 className="text-center font-normal text-4xl p-3">
                  {item.Title}
                </h1>
                {item.TechStack}
                <ul className="p-5 text-xl">
                  {Object.values(item.Description).map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Fade>
        ))}
      </ul>
    </div>
  );
}
