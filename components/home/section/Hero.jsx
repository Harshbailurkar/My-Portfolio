import React from "react";
import HeroImg from "../../../Portfolio Vector Images/Hero-Img.svg";
import HeroSocialLink from "../../socialLinks/HeroSocialLink";
import arrow from "../../../Portfolio Vector Images/right-arrow.png";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-5 md:p-10 pt-10 md:pt-20 pr-0 order-2 md:order-1">
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          Harsh Ramesh Bailurkar
        </h1>
        <p className="text-xl md:text-3xl pt-5 text-center text-zinc-500">
          Welcome to a realm where web development transcends boundaries,
          shaping not just pages but societal landscapes. I'm on a mission to
          architect digital ecosystems that aren't just functional; they're
          transformative.
        </p>
        <section className="pt-5 text-center">
          <HeroSocialLink />
          <button className="bg-purple p-2 md:p-4 m-2 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <a
              href="https://github.com/Harshbailurkar"
              className="flex items-center text-white"
              target="_blank"
            >
              <span> My Code Tails</span>
              <img src={arrow} alt="" className="ml-2" />
            </a>
          </button>
        </section>
      </div>
      <div className="md:w-1/2 order-1 md:order-2">
        <img src={HeroImg} alt="" className="p-5" />
      </div>
    </div>
  );
}
