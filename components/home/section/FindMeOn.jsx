import React from "react";
import OtherLinks from "../../socialLinks/OtherLinks";

export default function FindMeOn() {
  return (
    <div className="flex flex-col justify-center p-5 sm:p-10">
      <h1 className="text-center font-semibold text-4xl">Find me on</h1>
      <div className="flex justify-center">
        <OtherLinks />
      </div>
    </div>
  );
}
