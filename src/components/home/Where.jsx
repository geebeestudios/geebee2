import React from "react";
import picture from "../../assets/sound2.png";

const Where = () => {
  return (
    <div className="pt-10 lg:py-0 flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 lg:px-20 bg-[#F8F8F8]">
      <div className="h-fit">
        <h1 className="text-[25px] lg:text-[35px] font-montserrat font-bold mb-4">
          This is Where We Come In
        </h1>
        <ol className="pl-8 list-disc flex flex-col gap-2 text-[#4A4A4A] text-[16px] lg:text-[19px]">
          <li className="">
            We obsess over Shelf Appeal, Buyer Behavior, and <br /> Emotionally
            intelligent storytelling- so your product <br /> isn’t just seen, it’s
            felt.{" "}
          </li>
        </ol>
        <p className="text-[#4A4A4A]">---</p>
        <p className="text-[16px] lg:text-[19px] text-[#4A4A4A]">
          And that's what{" "}
          <span className="text-[#4f4e4e] font-semibold">drives sales.</span>
        </p>
      </div>
      <div className="relative">
        <img
          className="h-[400px] lg:h-[600px] w-auto object-cover"
          src={picture}
          alt=""
        />
      </div>
    </div>
  );
};

export default Where;
