import React, { useState, useEffect } from "react";
import stars from "../../assets/stars.svg";
import kings from "../../assets/kings.svg";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import custom styles
import "./TestimonialSwiper.css";

const Testimonals = () => {
    // Set up testimonial data
    const testimonials = [
        {
            text: "I truly don't know what to say, this is amazing, You have been hard at work. WOW!!! I appreciate this opportunity to work with you. Thanks so much for your patience, guidance, & listening ear.",
            name: "Valda King",
            position: "Founder, Kings Precise Cleaning",
            logo: kings,
        },
        {
            text: "The level of service and professionalism exceeded my expectations. The entire team went above and beyond to meet our needs and deliver exceptional results.",
            name: "James Wilson",
            position: "CEO, Wilson Enterprises",
            logo: kings, // Using same logo as placeholder - replace with actual logo
        },
    ];

    // Use responsive approach instead of direct DOM manipulation
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            id="testimonials"
            className="w-full py-10 min-h-[400px] md:h-[450px] flex justify-center items-center overflow-hidden"
        >
            <div className="w-full max-w-[1200px] px-4 sm:px-0">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={isMobile ? 0 : 30}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={!isMobile}
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-5 items-center h-fit w-full px-2 sm:px-6 md:px-10 lg:w-[80%] mx-auto">
                                <img
                                    className="w-[130px]"
                                    src={stars}
                                    alt="Rating stars"
                                />
                                <p className="px-2 sm:px-3 md:px-5 font-open_sans font-semibold text-center text-sm sm:text-base">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex flex-col md:flex-row items-center gap-3">
                                    <div className="p-[15px] bg-gray-300/80 rounded-full">
                                        <MdOutlinePhotoSizeSelectActual className="text-gray-400" />
                                    </div>
                                    <div className="flex font-roboto flex-col items-center md:items-start">
                                        <p className="text-[14px] text-black/80 font-semibold">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-[14px] text-black/80">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                    <div className="hidden md:block h-[40px] mx-2 w-[1.5px] bg-black" />
                                    <img
                                        className="translate-y-1 w-[80px]"
                                        src={testimonial.logo}
                                        alt={testimonial.name + "'s logo"}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonals;
