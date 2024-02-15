import React from "react";
import img1 from "../../../Portfolio Vector Images/technology/aws.png";
import img2 from "../../../Portfolio Vector Images/technology/googlecloud.png";
import img3 from "../../../Portfolio Vector Images/technology/firebase.png";
import img4 from "../../../Portfolio Vector Images/technology/mongodb.png";

export default function CloudInfra() {
  return (
    <div>
      <ul className="flex flex-row">
        <li className="techStack" data-tip="AWS">
          <img src={img1} alt="" />
          <span className="tooltip-text">AWS</span>
        </li>
        <li className="techStack" data-tip="Google Cloud">
          <img src={img2} alt="" />
          <span className="tooltip-text">Google Cloud</span>
        </li>
        <li className="techStack" data-tip="Firebase">
          <img src={img3} alt="" className="bgcI" />
          <span className="tooltip-text">Firebase</span>
        </li>
        <li className="techStack" data-tip="MongoDB">
          <img src={img4} alt="" />
          <span className="tooltip-text">MongoDB</span>
        </li>
      </ul>
    </div>
  );
}
