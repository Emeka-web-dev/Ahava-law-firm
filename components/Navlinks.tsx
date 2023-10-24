"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navlinks = () => {
  const toggle = () => {
    if (isOpen == false) setIsOpen(true);
    if (isOpen == true) setIsOpen(false);
  };
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`duration-500 ease-in-out md:static absolute z-10 bg-black md:bg-inherit md:min-h-fit min-h-[91vh] left-0 ${
          isOpen ? "top-[9vh]" : "top-[-100vh]"
        } md:w-auto w-full flex items-start px-5`}
      >
        <ul className="flex md:flex-row flex-col py-4 md:items-center gap-[4vw]">
          {navLinks.map((nav) => (
            <li key={nav.name}>
              <a
                className="hover:text-gray-500 active:text-gray-500"
                href={nav.link}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={toggle} className="md:hidden">
        {!isOpen ? (
          <AiOutlineMenu className="text-2xl" />
        ) : (
          <AiOutlineClose className="text-2xl" />
        )}
      </button>
    </>
  );
};

export default Navlinks;
