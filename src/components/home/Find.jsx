import React from "react";
import { scrollToElement } from "../utils";

const Find = () => {
    return (
        <div className="flex flex-col px-5 sm:px-10 gap-4 justify-center items-center h-[350px] bg-black text-white">
            <h1 className="font-roboto text-[24px] md:text-[25px] font-semibold text-center">
                Let’s Find What’s Keeping You Stuck
            </h1>
            <p className="text-center text-[#F8F8F8]/70 text-[16px] md:text-[14px] font-open_sans">
                A free strategy audit is just the start. Together we’ll design a
                brand that finally moves.
            </p>
            <button
                onClick={() => {
                    window.open(
                        "https://calendly.com/geebeestudios/consulation-geebee-studios",
                        "_blank"
                    );
                }}
                className="py-2 px-4 text-[14px] bg-primary"
            >
                Start The Brand Reset!
            </button>
        </div>
    );
};

export default Find;
