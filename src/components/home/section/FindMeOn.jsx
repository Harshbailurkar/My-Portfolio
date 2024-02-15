import React from "react";
import HeroSocialLink from "../../socialLinks/HeroSocialLink";
export default function FindMeOn() {
  return (
    <div className=" flex  flex-col justify-center">
      <h1 className="text-center font-semibold text-4xl">Find me on</h1>
      <div className=" flex justify-center">
        <HeroSocialLink />
      </div>
    </div>
  );
}
