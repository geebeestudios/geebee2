import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { scrollToElement } from "../components/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navOptions = [
        { title: "What We Do", to: "#what", offset: -80 },
        { title: "Our Process", to: "#process", offset: -50 },
        { title: "Testimonials", to: "#testimonials", offset: -60 },
    ];

    return (
        <div className="py-4 px-3 md:px-6 glass fixed left-0 w-full top-0 z-[99] flex justify-between items-center">
            <img
                className="relative z-[210] h-[40px] w-auto"
                src={logo}
                alt=""
            />
            <div className="hidden lg:flex gap-6 text-white/50">
                {navOptions.map((item, i) => (
                    <p
                        className="cursor-pointer"
                        key={i}
                        onClick={() => scrollToElement(item.to, item.offset)}
                    >
                        {item.title}
                    </p>
                ))}
            </div>
            <button
                onClick={() => {
                    toggleMenu();
                    window.open("tel:+12202627030", "_blank");
                }}
                className="hidden lg:block text-white bg-primary py-2 px-4"
            >
                Free Audit
            </button>
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="p-2 !text-white">
                    {isOpen ? (
                        <FiX className="w-6 h-6 relative z-[210] " />
                    ) : (
                        <FiMenu className="w-6 h-6 relative z-[210]" />
                    )}
                </button>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        className="flex flex-col gap-5 lg:hidden fixed px-10 h-screen w-full bg-black shadow-lg !z-[200] top-[0] pt-[106px] left-0"
                    >
                        {navOptions.map((item, i) => (
                            <motion.a
                                key={i}
                                className={`${
                                    i === 3 && "hidden"
                                } flex items-center text-[16px] text-white cursor-pointer`}
                                onClick={() => {
                                    toggleMenu();
                                    scrollToElement(item.to, item.offset);
                                }}
                            >
                                {item.title}
                            </motion.a>
                        ))}
                        <div className="flex flex-col w-full gap-3 mt-5">
                            <div
                                onClick={() => {
                                    toggleMenu();
                                    window.open(
                                        "https://calendly.com/geebeestudios/consulation-geebee-studios",
                                        "_blank"
                                    );
                                }}
                                // href="/join-us"
                                className="py-2 text-white bg-primary w-full flex justify-center border border-gray-400 rounded-md"
                            >
                                Free Audit
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
