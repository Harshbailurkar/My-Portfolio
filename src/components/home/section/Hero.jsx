import React from "react";
import HeroImg from "../../../Portfolio Vector Images/Hero-Img.svg";
import HeroSocialLink from "../../socialLinks/HeroSocialLink";
import arrow from "../../../Portfolio Vector Images/right-arrow.png";
export default function Hero() {
  return (
    <div className="flex flex-row ">
      <div className="basis-1/2 p-20 pt-36 pr-0">
        <h1 className="text-6xl font-semibold text-center">
          Harsh Ramesh Bailurkar
        </h1>
        <p className="text-3xl pt-10 subpixel-antialiased text-left text-zinc-500">
          Welcome to a realm where web development transcends boundaries,
          shaping not just pages but societal landscapes. I'm on a mission to
          architect digital ecosystems that aren't just functional; they're
          transformative.
        </p>
        <section>
          <HeroSocialLink />
          <button className="bg-purple p-4 m-2 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <div>
              <a
                href="https://github.com/Harshbailurkar"
                className="flex flex-row "
                target="_blank"
              >
                <h2 className="text-white "> My Code Tails</h2>
                <img src={arrow} alt="" />
              </a>
            </div>
          </button>
        </section>
      </div>
      <div className="basis-1/2  mr-5">
        <img src={HeroImg} alt="" className="p-5" />
      </div>
    </div>
  );
}
