import certificateData from "./certificateData";
import arrow from "../../../Portfolio Vector Images/right-arrow.png";
import React, { useState } from "react";

export default function Certificate() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="m-5 sm:m-10">
      <h1 className="text-center font-semibold text-4xl sm:text-5xl mb-5">
        Certificates
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {certificateData.map((data) => (
          <a
            href={data.link}
            target="_blank"
            key={data.id}
            className={`w-40 sm:w-64 m-4 rounded-lg border border-grey shadow-xl transition-transform duration-300 ${
              hoveredId === data.id ? "transform scale-110" : ""
            }`}
            onMouseEnter={() => setHoveredId(data.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="rounded-lg">
              <img
                src={data.bannerUrl}
                alt=""
                className="w-full rounded-t-lg"
              />
            </div>
            <div>
              <h2 className="p-2 text-center font-normal text-lg">
                {data.Title}
              </h2>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="bg-purple p-2 m-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mx-16 mt-0">
          <div>
            <a
              href="https://www.linkedin.com/in/harsh-bailurkar-011291247"
              className="flex flex-row "
              target="_blank"
            >
              <h2 className="text-white ">see more</h2>
              <img src={arrow} alt="" />
            </a>
          </div>
        </button>
      </div>
    </div>
  );
}
