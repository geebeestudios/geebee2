import React from "react";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import process4 from "../../assets/process4.png";
import process5 from "../../assets/process5.png";
import process6 from "../../assets/process6.png";

const Process = () => {
  return (
    <div id="process" className="py-10 px-5 sm:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 bg-[#E9E4DC] lg:min-h-[500px]">
      <div className="hidden lg:flex relative w-full">
        {/* <div className="absolute border border-black/60 bg-transparent rounded-full top-[5%] h-[350px] w-[400px]" /> */}
        <div className="w-[50%] flex flex-col h-full justify-between">
          <div className="relative flex gap-4 items-start">
            <img
              className="h-[130px] w-fit object-cover"
              src={process1}
              alt=""
            />
            <div className="flex items-start gap-1 pt-3">
              <div className="h-[30px] w-[2px] bg-primary" />
              <p className="relative z-[5] text-nowrap text-[#4A4A4A]/70 text-[12px] italic">
                We put your brand under the microscope. <br /> We put your brand
                under the microscope to find what’s misaligned, <br />{" "}
                underperforming, or unclear--then realign it to win.
              </p>
            </div>
          </div>
          <div className="relative flex items-end gap-3">
            <img
              className="h-[220px] w-fit object-cover"
              src={process3}
              alt=""
            />
            <div className="text-nowrap flex items-start gap-1 pb-3">
              <div className="h-[30px] w-[2px] bg-primary" />
              <p className="relative z-[5] text-[#4A4A4A]/70 text-[12px] italic">
                We put your brand under the microscope. <br /> We put your brand
                under the microscope to find what’s misaligned, <br />{" "}
                underperforming, or unclear--then realign it to win.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 w-[50%] items-center justify-center">
          <img className="h-[130px] w-fit object-cover" src={process2} alt="" />
          <div className="text-nowrap flex items-start gap-1">
            <div className="h-[40px] w-[2px] bg-primary" />
            <div className="text-[#4A4A4A]/70 w-[120px] text-[12px]">
              <span>
                We turn your brand into a movement
                <br />
              </span>
              People remember feelings-- so we <br /> make them feel.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:items-center lg:items-start w-full justify-center">
        <h1 className="text-[25px] lg:text-[35px] font-montserrat font-bold mb-4">
          Our Process is Precise
        </h1>
        <ol className="pl-8 list-decimal flex flex-col gap-2 text-[#4A4A4A] text-[16px] lg:text-[19px]">
          <li className="">Strategic Brand Audit</li>
          <li className="">Emotional Brand Storytelling</li>
          <li className="">Packaging & Digital that Converts</li>
        </ol>
        <p className="relative z-[5] text-[#4A4A4A]">---</p>
        <p className="text-[19px] text-[#4A4A4A]">
          We don’t just make it look good- <br />{" "}
          <span className="text-[#4f4e4e] font-semibold">we make it sell.</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 lg:hidden w-full">
        <div className="flex flex-col px-5 gap-4 w-fit">
          <h1 className="text-center text-black/30 font-montserrat font-semibold text-[30px]">
            1
          </h1>
          <img className="h-[400px] w-[400px] object-cover" src={process4} alt="" />
          <p className="font-open_sans italic text-[#4A4A4A]/70 text-[15px]">
            We put your brand under the microscope. <br />
            We find the misalignment that’s costing you recognition, loyalty,
            and <br /> revenue-- and we fix it.
          </p>
        </div>
        <div className="flex flex-col px-5 gap-4 w-fit">
          <h1 className="text-center text-black/30 font-montserrat font-semibold text-[30px]">
            2
          </h1>
          <img className="h-[400px] w-[400px] object-cover" src={process5} alt="" />
          <p className="font-open_sans italic text-[#4A4A4A]/70 text-[15px]">
            We turn your brand into a movement <br />
            People remember feelings-- so we make them feel.
          </p>
        </div>
        <div className="flex flex-col px-5 gap-4 w-fit">
          <h1 className="text-center text-black/30 font-montserrat font-semibold text-[30px]">
            3
          </h1>
          <img className="h-[400px] w-[400px] object-cover" src={process6} alt="" />
          <p className="font-open_sans italic text-[#4A4A4A]/70 text-[15px]">
            We design for the sold- out effect. <br />
            We turn everyday packaging into a top-shelf experience <br />
            that sells itself-- and keeps selling out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
