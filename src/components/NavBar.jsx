import React from "react";
import logo from "../Portfolio Vector Images/signature-black-removebg-preview.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="list-none flex flex-row justify-evenly  items-center text-xl font-normal">
      <li className="flex flex-row items-center basis-1/4">
        <img src={logo} alt="" className="mx-4 w-64 h-24 pt-4 " />
      </li>

      <li className="hover:font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " font-bold underline underline-offset-8" : null
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? " font-bold underline underline-offset-8" : null
          }
        >
          About
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? " font-bold underline underline-offset-8" : null
          }
        >
          projects
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? " font-bold underline underline-offset-8" : null
          }
        >
          contact me
        </NavLink>
      </li>
      <li>
        <div className="mr-16">menu</div>
      </li>
    </ul>
  );
}
