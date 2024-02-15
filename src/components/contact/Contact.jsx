import profileImg from "../../Portfolio Vector Images/Profile-photo.png";
import HeroSocialLink from "../socialLinks/HeroSocialLink";
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-20 bg-gray-100">
      <div className="md:mr-20 mb-10 md:mb-0 flex flex-col justify-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-72 mx-auto rounded-full shadow-lg"
        />
        <a href="#" className="block text-center mt-4 text-purple-600 btn ">
          See My Resume
        </a>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-semibold text-center mb-4">Contact Me</h1>

        <p className="text-center mb-4 text-2xl">
          I am available on almost every social media. You can message me, I
          will reply within 24 hours.
        </p>

        <div className="flex content-center ">
          <IconContext.Provider
            value={{
              color: "red",
              className: "global-class-name mt-2",
              size: "2em",
            }}
          >
            <MdOutlineEmail />{" "}
            <h2 className="text-xl p-2 font-medium">
              {" "}
              harshbailurkar@gmail.com
            </h2>
          </IconContext.Provider>
        </div>

        <HeroSocialLink />
      </div>
    </div>
  );
}
