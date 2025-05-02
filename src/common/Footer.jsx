import React from "react";
import logo from "/logo2.svg";

const Footer = () => {
    return (
        <div id="audit" className="h-fit md:h-[380px] px-3 md:px-0">
            <div className="flex py-10 flex-wrap items-center w-full px-5 sm:px-14 justify-between h-[85%]">
                <img className="h-[70px]" src={logo} alt="" />
                <div className="hidden sm:block">
                    <p className="font-semibold text-black/70 text-[15px]">
                        Email:{" "}
                        <a
                            href="mailto:hello@geebeestudios.com"
                            className="font-normal"
                        >
                            hello@geebeestudios.com
                        </a>
                    </p>
                    <p className="font-semibold text-black/70 text-[15px]">
                        Phone:{" "}
                        <a href="tel:+12202627030" className="font-normal">
                            +1 (220)262-7030
                        </a>
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-[370px]">
                    <p className="text-[14px] text-black/70">
                        Subscribe to our newsletter to get insights, tips &
                        early access
                    </p>
                    <div className="w-full flex flex-col sm:flex-row gap-5 items-center">
                        <input
                            placeholder="Your email here"
                            className="w-full sm:w-[73%] placeholder:text-[14px] bg-transparent p-2 border-[1.5px] outline-0 border-primary"
                            type="text"
                        />
                        <button className="w-full sm:w-[25%] font-roboto text-[14px] py-2 border-[1.5px] border-primary">
                            Join
                        </button>
                    </div>
                    <p className="text-[12px] text-black/70">
                        By subscribing, you agree to our Privacy Policy and
                        consent to receive updates.
                    </p>
                </div>
                <div className="block sm:hidden">
                    <h1 className="font-semibold font-open_sans underline mb-2">
                        Contact
                    </h1>
                    <p className="font-semibold text-black/70 text-[15px]">
                        Email:{" "}
                        <a
                            href="mailto:info@geebeestudios.com"
                            className="font-normal"
                        >
                            info@geebeestudios.com
                        </a>
                    </p>
                    <p className="font-semibold text-black/70 text-[15px]">
                        Phone:{" "}
                        <a href="tel:+12202627030" className="font-normal">
                            +1 (220) 262-7030
                        </a>
                    </p>
                </div>
            </div>
            <div className="py-5 flex items-center justify-center w-full h-[15%] bg-primary">
                <p className="text-[14px] text-black/70">
                    © 2025 Geebeestudios. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
