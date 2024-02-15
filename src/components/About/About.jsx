import React from "react";
import bannerImg from "../../Portfolio Vector Images/vector1.svg";
import Education from "../../Portfolio Vector Images/Education.svg";
import Certificate from "./certificates/Certificate";
import SkillSet from "./SkillSet";
export default function About() {
  return (
    <div>
      <div className="flex flex-row p-4 pt-9 mx-10">
        <div className=" flex flex-col w-1/2 p-4 pt-16 ">
          <h1 className="text-center font-semibold text-5xl p-4">
            Know Who I’M
          </h1>
          <p className="text-left font-normal text-2xl p-3 align-middle">
            Hey there, I'm Harsh Bailurkar, a passionate Computer Science and
            Engineering student currently in my 6th semester. My enthusiasm lies
            in the world of development and problem-solving. I thrive on diving
            into coding challenges and crafting solutions that make a real
            difference. Eager to learn and grow in this ever-evolving field, I'm
            driven by the possibilities of technology and its power to shape a
            better tomorrow.
          </p>
        </div>
        <div className="w-1/2">
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="flex flex-row p-4 pt-9 mx-10">
        <div className="w-1/2">
          <img src={Education} alt="" className="w-2/3" />
        </div>
        <div className="flex flex-col w-1/2 p-4">
          <h1 className="text-center font-semibold text-5xl p-4">Education</h1>
          <h1 className="text-xl p-3 font-normal">Degree Pursuing :</h1>
          <p className="text-left font-normal text-xl  align-middle border border-blue-400 rounded-t-lg">
            <div className="bg-sky  p-2 rounded-t-lg">
              <p className="font-medium">
                Sharad Institute Of Technology College of Engineering (An
                Autonomus Institute)
              </p>
              <p className="flex justify-between p-1">
                <span>Btech. Computer Science And Engineering</span>
                <span>2021-2025</span>
              </p>
            </div>
            <div className="p-2 rounded-t-lg">
              <ul className="p-1">
                <li className="p-1">
                  ⚡Maintaining a strong CGPA of <b>8.3</b> as of the 5th
                  semester.
                </li>
                <li className="p-1">
                  ⚡Proficient in fundamental software engineering subjects: DS,
                  Algorithms, DBMS, OS, CN, SE.
                </li>
                <li className="p-1">
                  ⚡Expanding expertise beyond academics to encompass Full Stack
                  development, Machine Learning, and Cloud Computing
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
      <div>
        <Certificate />
      </div>
      <div>
        <SkillSet />
      </div>
    </div>
  );
}
