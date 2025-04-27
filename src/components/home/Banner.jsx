import React from "react";
import bannerImg from "../../assets/banner_img.png";
import ellipse1 from "../../assets/Ellipse1.svg";
import ellipse2 from "../../assets/Ellipse2.svg";
import { scrollToElement } from "../utils";
const Banner = () => {
  return (
    <div className="w-full relative grid grid-cols-1 lg:grid-cols-2 sm:px-10 lg:px-20 gap-20 lg:gap-0 lg:flex-row items-center justify-between pt-[150px] lg:pt-0 lg:h-[110dvh] bg-black text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-5">
        <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] font-montserrat font-bold">
          From Shelf-Stuck, <br /> to Sold Out!
        </h1>
        <p className="text-white/70 sm:w-[80%]">
          Your product deserves more than pretty packaging- It deserves
          movement, loyalty, and love.{" "}
          <span className="hidden lg:block">
            <span className="font-bold text-white">Geebee Studios</span> builds
            emotional, strategic branding that speaks your customer’s language
            and
            <span className="font-bold text-white"> drives action</span>. <br />{" "}
            ---
          </span>
        </p>
        <p className="hidden lg:block text-white/70 italic font-light">
          “Shelf Appeal + Buyer Behavior = Sales ”
        </p>
        <button className="hidden lg:block w-fit py-2 px-4 bg-primary text-[14px] text-white">
          Get Your Free Brand Strategy Audit
        </button>
      </div>
      <div className="relative overflow-x-visible place-items-center h-fit">
        <img
          className="relative object-cover z-10 h-[200px] md:h-[550px] w-auto"
          src={bannerImg}
          alt=""
        />
        <img className="absolute right-[30%] -top-20" src={ellipse1} alt="" />
        <img
          className="absolute right-0 lg:-right-20 top-[20%]"
          src={ellipse2}
          alt=""
        />
      </div>
      <div className="px-10 lg:hidden">
        <span>
          <span className="font-bold text-white">Geebee Studios</span> builds
          emotional, strategic branding that speaks your customer’s language and
          <span className="font-bold text-white"> drives action</span>. <br />{" "}
          ---
        </span>
        <p className="mb-4 text-white/70 italic font-light">
          “Shelf Appeal + Buyer Behavior = Sales ”
        </p>
        <button
          onClick={() => scrollToElement("#audit", -20)}
          className="mb-10 lg:mb-0 w-full sm:w-fit py-2 px-4 bg-primary text-[14px] text-white"
        >
          Get Your Free Brand Strategy Audit
        </button>
      </div>
    </div>
  );
};

export default Banner;
