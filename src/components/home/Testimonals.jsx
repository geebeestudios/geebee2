import React from "react";
import stars from "../../assets/stars.svg";
import kings from "../../assets/kings.svg";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

const Testimonals = () => {
  return (
    <div className="flex w-full items-center justify-center h-[400px]">
      <div className="flex flex-col gap-5 items-center h-fit w-full px-10 sm:px-20 lg:px-0 lg:w-[50%]">
        <img className="w-[130px]" src={stars} alt="" />
        <p className="px-5 font-open_sans font-semibold text-center">
          “I truly don’t know what to say, this is amazing, You have been hard
          at work. WOW!!! I appreciate this opportunity to work with you. Thanks
          so much for your patience, guidance, & listening ear.”
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="p-[15px] bg-gray-300/80 rounded-full">
            <MdOutlinePhotoSizeSelectActual className="text-gray-400" />
          </div>
          <div className="flex font-roboto flex-col items-center md:items-start">
            <p className="text-[14px] text-black/80 font-semibold">
              Valda King
            </p>
            <p className="text-[14px] text-black/80">
              Founder, Kings Precise Cleaning
            </p>
          </div>
          <div className="hidden md:block h-[40px] mx-2 w-[1.5px] bg-black" />
          <img className="translate-y-1 w-[80px]" src={kings} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
