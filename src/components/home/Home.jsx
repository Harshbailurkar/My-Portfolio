import React from "react";
import Hero from "./section/Hero";
import WhatIDo from "./section/WhatIDo";
import FindMeOn from "./section/FindMeOn";
import Footer from "../Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <WhatIDo />
      <FindMeOn />
    </div>
  );
}
