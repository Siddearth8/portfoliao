import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="  border-gray-600  text-gray-400 bg-slate-800  w-full mx-auto flex justify-between items-center  fixed top-0 ">
      <a href='#hero'><h1 className="text-3xl font-bold primary-color ml-4 " >sid</h1></a>
      <ul className="hidden md:flex">
        <li className="p-5   ">
          <a className=" border hover:text-pink-400 rounded-2xl p-2 hover:bg-green-950" href="#about">About</a>
        </li>
        <li className="p-5">
          <a className=" border hover:text-pink-400 rounded-2xl p-2 hover:bg-green-950" href="#project">project</a>
        </li>
        <li className="p-5">
          <a className=" border hover:text-pink-400 rounded-xl p-2 hover:bg-green-950" href="#skill">skill</a>
        </li>
        <li className="p-5">
          <a className=" border hover:text-pink-400 rounded-2xl p-2 hover:bg-green-950" href="#contact">contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">sid</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#project">project</a>
          </li>
          <li className="p-2">
            <a href="#skill">skill</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
