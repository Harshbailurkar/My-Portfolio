import React from "react";
import github from "../../Portfolio Vector Images/social media/github.png";
import linkedin from "../../Portfolio Vector Images/social media/LinkedIn.png";
import instagram from "../../Portfolio Vector Images/social media/insta.png";

export default function HeroSocialLink() {
  return (
    <div className="p-3">
      <ul id="heroSocial">
        <li>
          <a href="https://github.com/Harshbailurkar" target="_blank">
            {" "}
            <img src={github} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/harsh-bailurkar-011291247"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/harsh_bailurkar/" target="_blank">
            {" "}
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/WtykRexT" target="_blank">
            <img
              src="https://w7.pngwing.com/pngs/580/137/png-transparent-discord-logo-thumbnail.png"
              alt=""
              id="discord"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
