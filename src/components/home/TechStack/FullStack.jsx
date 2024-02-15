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
        <li className="techStack" data-tip="HTML5">
          <img src={img1} alt="" />
          <span className="tooltip-text">HTML5</span>
        </li>
        <li className="techStack" data-tip="CSS">
          <img src={img2} alt="" />
          <span className="tooltip-text">CSS</span>
        </li>
        <li className="techStack" data-tip="JavaScript">
          <img src={img3} alt="" className="bgcI" />
          <span className="tooltip-text">JavaScript</span>
        </li>
        <li className="techStack" data-tip="React">
          <img src={img4} alt="" />
          <span className="tooltip-text">React</span>
        </li>
        <li className="techStack" data-tip="Node.js">
          <img src={img5} alt="" />
          <span className="tooltip-text">Node.js</span>
        </li>
        <li className="techStack" data-tip="MongoDB">
          <img src={img6} alt="" />
          <span className="tooltip-text">MongoDB</span>
        </li>
      </ul>
    </div>
  );
}
