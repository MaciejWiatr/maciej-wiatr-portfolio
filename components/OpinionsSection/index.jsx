import { FiRss, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useOpinions } from "../../src/hooks/useOpinions";

const OpinionsSection = () => {
    const { opinions } = useOpinions();
    const [sliderVal, setSliderVal] = useState(0);

    const handleSlider = (add) => {
        setSliderVal((v) => {
            if (add) {
                return v + 8;
            } else {
                return v - 8;
            }
        });
    };

    useEffect(() => {
        gsap.to("#slider__container", {
            x: `${sliderVal * 1.5}rem`,
            duration: 0.4,
            ease: "power2",
        });
    }, [sliderVal]);

    useEffect(() => {
        gsap.timeline().from(".slider__element", {
            x: 300,
            stagger: 0.3,
            duration: 0.7,
            ease: "power4",
            opacity: 0,
        });
    }, []);

    return (
        <section id="opinions" className="w-full overflow-hidden">
            <div className="w-full bg-bg-gray relative flex flex-col lg:flex-row p-8 pt-16 pb-16 overflow-hidden">
                <div className="w-full lg:w-2/5 text-white lg:pl-20">
                    <h3 className="text-md text-gray-600 mb-2 font-semibold">
                        Co mówią o mnie inni
                    </h3>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full mr-2 flex justify-center items-center text-xl">
                            <FiRss />
                        </div>
                        <h2 className="text-4xl font-semibold">Opinie</h2>
                    </div>
                    <p className="text-gray-200 mt-3 mb-3 pr-10">
                        convallis vehicula felis mi sed justo. In eu quam sit
                        amet sapien malesuada porttitor. Nam ullamcorper felis
                        quam, suscipit tempus eros lobortis at tristique elit et
                        felis congue, a finibus
                    </p>
                    <button
                        className="h-10 bg-primary rounded pl-3 pr-3 text-white text-sm md:text-base transition hover:bg-primary--dark"
                        type="submit"
                    >
                        Zobacz wszystkie
                    </button>
                </div>
                <div className="w-full lg:w-3/5 relative lg:pr-20 mt-2 lg:mt-0">
                    <button
                        onClick={() => handleSlider(true)}
                        className="text-black absolute z-30 left-0 lg:-left-6 w-12
                            h-12 rounded-full bg-white top-1/2 flex flex-center
                            text-xl transition transform -translate-y-5 shadow-lg
                            hover:scale-110 focus:outline-none focus:ring-4"
                        css={css`
                            opacity: ${sliderVal < 0 ? 1 : 0};
                            pointer-events: ${sliderVal < 0
                                ? "initial"
                                : "none"};
                            transition: opacity 0.5s ease;
                        `}
                        disabled={sliderVal < 0 ? false : true}
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        onClick={() => handleSlider(false)}
                        className="text-black absolute z-30 right-0 lg:right-16 w-12 h-12 rounded-full
                            bg-white top-1/2 flex flex-center text-xl transform -translate-y-5
                            shadow-lg transition hover:scale-110 focus:outline-none focus:ring-4"
                        css={css`
                            opacity: ${sliderVal < 20 ? 1 : 0};
                            pointer-events: ${sliderVal < 20
                                ? "initial"
                                : "none"};
                            transition: opacity 0.5s ease;
                        `}
                        disabled={sliderVal < 20 ? false : true}
                    >
                        <FiChevronRight />
                    </button>
                    <div className="absolute left-0 h-full bg-gradient-to-r from-bg-gray to-transparent w-20 z-20 pointer-events-none"></div>
                    <div className="absolute right-0 lg:right-20 h-full bg-gradient-to-l from-bg-gray to-transparent w-20 z-20 pointer-events-none"></div>
                    <div className="overflow-x-scroll no-scrollbar">
                        <div
                            id="slider__container"
                            className="flex space-x-5 relative pt-2 pb-2"
                        >
                            {opinions.map((op, index) => {
                                return (
                                    <div
                                        key={op.author + index}
                                        className="slider__element  ml-1 lg:ml-20 min-w-16 w-64 h-64 rounded-lg shadow-lg bg-white flex flex-nowrap overflow-hidden"
                                    >
                                        <div className="flex-1 w-full flex flex-col justify-center items-center p-3">
                                            <blockquote className="text-center italic text-lg lg:text-xl mb-2 ">
                                                {op.text}
                                            </blockquote>
                                            <p className="font-semibold">
                                                {op.author}
                                            </p>
                                            <p className="text-primary text-sm">
                                                {op.position}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpinionsSection;
