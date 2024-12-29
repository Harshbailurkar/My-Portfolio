import React from "react";
import img1 from "../../../Portfolio Vector Images/technology/html5.png";
import img2 from "../../../Portfolio Vector Images/technology/css.png";
import img3 from "../../../Portfolio Vector Images/technology/javascript.png";
import img4 from "../../../Portfolio Vector Images/technology/react.png";
import img5 from "../../../Portfolio Vector Images/technology/nodejs.png";
import img6 from "../../../Portfolio Vector Images/technology/mongodb.png";

export default function FullStack() {
  return (
    <div>
      <ul className="flex flex-row">
        <li className="techStack" data-tip="JavaScript">
          <img src={img3} alt="" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="tooltip-text">JavaScript</span>
        </li>
        <li className="techStack" data-tip="React">
          <img src={img4} alt="" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="tooltip-text">React</span>
        </li>
        <li className="techStack" data-tip="Node.js">
          <img src={img5} alt="" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="tooltip-text">Node.js</span>
        </li>
        <li className="techStack" data-tip="python">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="python"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <span className="tooltip-text">python</span>
        </li>
        <li className="techStack" data-tip="python">
          <img
            src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
            alt="java"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <span className="tooltip-text">java</span>
        </li>
        <li className="techStack" data-tip="MongoDB">
          <img src={img6} alt="" className="w-12 h-12 md:w-16 md:h-16" />
          <span className="tooltip-text">MongoDB</span>
        </li>
      </ul>
    </div>
  );
}
