import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="py-4 px-6 glass fixed left-0 w-full top-0 z-[99] flex justify-between items-center">
      <img className="h-[40px] w-auto" src={logo} alt="" />
      <div className="hidden lg:flex gap-6 text-white/50">
        <p>What We Do</p>
        <p>Our Process</p>
        <p>Testimonials</p>
      </div>
      <button className="hidden lg:block text-white bg-primary py-2 px-4">
        Free Audit
      </button>
    </div>
  );
};

export default Navbar;
