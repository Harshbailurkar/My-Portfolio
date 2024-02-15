import React from "react";
import img1 from "../../../Portfolio Vector Images/technology/figma.png";
import img2 from "../../../Portfolio Vector Images/technology/xd.png";
import img3 from "../../../Portfolio Vector Images/technology/Adobe.png";

export default function UIUX() {
  return (
    <div>
      <div>
        <ul className="flex flex-row">
          <li className="techStack" data-tip="Figma">
            <img src={img1} alt="" />
            <span className="tooltip-text">Figma</span>
          </li>
          <li className="techStack" data-tip="Adobe XD">
            <img src={img2} alt="" />
            <span className="tooltip-text">Adobe XD</span>
          </li>
          <li className="techStack" data-tip="Adobe Illustrator">
            <img src={img3} alt="" />
            <span className="tooltip-text">Adobe Illustrator</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
