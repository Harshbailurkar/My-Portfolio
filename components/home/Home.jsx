import React from "react";
import Hero from "./section/Hero";
import WhatIDo from "./section/WhatIDo";
import FindMeOn from "./section/FindMeOn";
import { Fade } from "react-awesome-reveal";
export default function Home() {
  return (
    <div>
      <Fade
        cascade
        damping={0.1}
        style={{ opacity: 0.9, transition: "opacity 1s ease-in-out" }}
      >
        <Hero />
        <WhatIDo />
        <FindMeOn />
      </Fade>
    </div>
  );
}
