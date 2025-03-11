import React from "react";
import logo from "../assets/icons/logo.svg"
import { HiShoppingCart } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="container fixed left-1/2 -translate-x-1/2 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" width={18}/>
        <span className="text-lg">yumgurt</span>
      </div>
      <div>
        <ul className="gap-4 items-center hidden md:flex">
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Testimonial</a></li>
          <li><a href="">About Us</a></li>
        </ul>
      </div>
      <div className="flex gap-2">
      <button className="p-2 bg-white rounded"><HiShoppingCart className="text-primary text-xl" /></button>
      <button className="p-2 bg-white rounded md:hidden"><CiMenuFries className="text-primary text-xl" /></button>
      </div>
    </div>
  );
};

export default Navbar;
