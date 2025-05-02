import React from "react";
import picture from "../../assets/sound.png";

const Sound = () => {
    return (
        <div
            id="what"
            className="flex flex-col lg:flex-row gap-20 items-center py-10 sm:py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-[#E9E4DC] via-[#E9E4DC] to-[#c7a9629b]"
        >
            <img
                className="hidden lg:block h-[450px] w-[400px] object-cover"
                src={picture}
                alt=""
            />
            <div className="px-3">
                <h1 className="text-[25px] lg:text-[35px] font-montserrat font-bold mb-4">
                    Sound Familiar?
                </h1>
                <ol className="pl-8 list-disc flex flex-col gap-2 text-[#4A4A4A] text-[16px] lg:text-[19px]">
                    <li className="">
                        Your Product Looks great, but it’s not moving.
                    </li>
                    <li className="">
                        Customers aren’t connecting, buying, or coming back.
                    </li>
                    <li className="">
                        You feel{" "}
                        <span className="text-[#4f4e4e] font-semibold">
                            invisible
                        </span>{" "}
                        in a{" "}
                        <span className="text-[#4f4e4e] font-semibold">
                            crowded market.
                        </span>
                    </li>
                </ol>
                <p className="text-[#4A4A4A]">---</p>
                <p className="text-[19px] text-[#4A4A4A]">
                    You’re speaking facts when your{" "}
                    <span className="text-[#4f4e4e] font-semibold">
                        audience is craving <br /> feelings.
                    </span>
                </p>
            </div>
            <img
                className="block px-3 lg:hidden h-[450px] w-full lg:w-[400px] object-cover"
                src={picture}
                alt=""
            />
        </div>
    );
};

export default Sound;
