import React from "react";
import snapchat from "../../Portfolio Vector Images/social media/snapchat.svg";
import x from "../../Portfolio Vector Images/social media/x.svg";
import youtube from "../../Portfolio Vector Images/social media/youtube.svg";
import gmail from "../../Portfolio Vector Images/gmail.svg";
export default function OtherLinks() {
  return (
    <div className="p-3">
      <ul id="heroSocial">
        <li>
          <a
            href="https://www.snapchat.com/add/harshbailurkar?share_id=o1Gc_Op1l4Q&locale=en-IN "
            target="_blank"
          >
            {" "}
            <img src={snapchat} alt="" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/harshbailurkar" target="_blank">
            <img src={x} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/@harsh_bailurkar?si=l4lR3biIDXDEiWSi"
            target="_blank"
          >
            {" "}
            <img src={youtube} alt="" />
          </a>
        </li>
        <li>
          <a href="mailto:harshbailurkar@gmail.com" target="_blank">
            <img src={gmail} alt="" id="gmail2" />
          </a>
        </li>
      </ul>
    </div>
  );
}
