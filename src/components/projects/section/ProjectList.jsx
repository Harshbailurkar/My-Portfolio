import projectData from "./projectData";
import React from "react";
export default function ProjectList() {
  const isDark = document.body.classList.contains("dark");

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8 px-4 lg:px-10 mb-12 ">
        {projectData.map((data) => (
          <div
            key={data.id}
            className={`w-full lg:w-1/4 p-4 rounded-lg   shadow-md ${
              isDark ? "bg-purple text-white" : "bg-sky text-purple"
            } `}
          >
            <div className="flex flex-col h-full">
              <div className="font-semibold text-3xl">
                <h1>{data.Title}</h1>
              </div>
              <br />
              <img src={data.imgUrl} alt="" />
              <div className=" text-gray-600 mt-2 flex-grow text-lg">
                {data.Des}
              </div>
              <div className="flex justify-center mt-4">
                <div className="mr-2">
                  <a href={data.codeLink} target="_blank" className="btn">
                    Code
                  </a>
                </div>
                <div>
                  <a href={data.demoLink} target="_blank" className="btn">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  justify-center p-4">
        <a
          href="https://github.com/Harshbailurkar"
          target="_blank"
          className="btn"
        >
          {" "}
          <h1> More projects</h1>
        </a>
      </div>
    </>
  );
}
