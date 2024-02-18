import React, { useState, useEffect } from "react";
import logo from "../Portfolio Vector Images/signature-black-removebg-preview.png";
import logo2 from "../Portfolio Vector Images/signature-white-Photoroom.png-Photoroom.png";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDark]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center px-4">
      <div className="flex justify-between w-full lg:w-auto items-center">
        <button className="block lg:hidden text-xl" onClick={toggleNav}>
          {isNavOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
        <img
          src={!isDark ? logo : logo2}
          alt=""
          className="w-32 h-auto mx-auto lg:mx-0 lg:w-48 pt-2"
        />
      </div>
      <ul
        className={`list-none flex flex-col lg:flex-row justify-between items-center text-xl font-normal ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <li className="px-2 lg:px-4 hover:font-medium my-2 lg:my-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "text-gray-700 hover:text-black"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="px-2 lg:px-4 hover:font-medium my-2 lg:my-0">
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "text-gray-700 hover:text-black"
            }
          >
            About
          </NavLink>
        </li>
        <li className="px-2 lg:px-4 hover:font-medium my-2 lg:my-0">
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "text-gray-700 hover:text-black"
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="px-2 lg:px-4 hover:font-medium my-2 lg:my-0">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "text-gray-700 hover:text-black"
            }
          >
            Contact Me
          </NavLink>
        </li>
        <li className="px-2 lg:px-4 hover:font-medium my-2 lg:my-0">
          <button
            onClick={changeTheme}
            className="flex justify-center items-center p-3"
          >
            <p className="p-1">theme</p>{" "}
            <p className="p-1">
              {!isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
            </p>
          </button>
        </li>
      </ul>
    </div>
  );
}
