import { css, jsx } from "@emotion/react";
import Head from "next/head";
import {
    FiGithub,
    FiLinkedin,
    FiTwitter,
    FiRss,
    FiChevronRight,
    FiChevronLeft,
} from "react-icons/fi";
import PixelatedProp from "../assets/pixelated_prop.svg";
import { Fade as Hamburger } from "hamburger-react";
import { useRef, useState, useEffect } from "react";
import GameListElement from "../components/GameListElement";
import ReactTooltip from "react-tooltip";
import HeroElement from "../components/HeroElement";
import TechnologiesElement from "../components/TechnologiesElement";

export default function Home() {
    const [navOpen, setNavOpen] = useState(false);
    const [showTips, setShowTips] = useState(false);
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
        setShowTips(true);
    }, []);

    return (
        <div className="w-screen pl-0 pr-0 lg:pl-12 lg:pr-12 xl:pl-48 xl:pr-48 max-w-screen-4xl">
            <Head>
                <title>Maciej Wiatr</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="fixed z-50 top-0 left-0 bg-white lg:relative rounded-b-lg shadow-sm lg:rounded-none lg:shadow-none flex flex-col lg:flex-row pl-4 pr-4 lg:pl-0 lg:pr-0 justify-between md:justify-start pt-5 pb-5 w-full items-center">
                <h1 className="self-start font-semibold text-base md:text-lg">
                    <a href="/">Maciej Wiatr</a>
                </h1>
                <ul
                    className={`lg:flex flex-1 justify-center space-y-6 lg:space-y-0 text-center lg:space-x-12 items-center text-main-gray ${
                        navOpen ? "" : "hidden"
                    }`}
                >
                    <li>
                        <a
                            href="#opinions"
                            className="transition hover:text-primary"
                        >
                            Opinie
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition hover:text-primary">
                            Projekty
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition hover:text-primary">
                            Technologie
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition hover:text-primary">
                            Blog
                        </a>
                    </li>
                </ul>
                <ul
                    className={`flex lg:flex mt-5 lg:mt-0 space-x-4 items-center text-lg text-main-gray ${
                        navOpen ? "" : "hidden"
                    }`}
                >
                    <li>
                        <a href="https://github.com/MaciejWiatr" target="blank">
                            <div className="p-2 rounded-full bg-purple-100 transition hover:bg-purple-300 hover:text-primary">
                                <FiGithub className="transform translate-y-px" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/maciej-wiatr/"
                            target="blank"
                        >
                            <div className="p-2 rounded-full bg-purple-100 transition hover:bg-purple-300 hover:text-primary">
                                <FiLinkedin />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/maciej_wiatr"
                            target="blank"
                        >
                            <div className="p-2 rounded-full bg-purple-100 transition hover:bg-purple-300 hover:text-primary">
                                <FiTwitter />
                            </div>
                        </a>
                    </li>
                </ul>
                <button className="lg:hidden absolute right-0 top-0 p-2 focus:ring-2">
                    <Hamburger
                        size={30}
                        rounded
                        toggled={navOpen}
                        toggle={setNavOpen}
                        color="#B2B2B2"
                        hideOutline={true}
                    />
                </button>
            </nav>
            <HeroElement />
            <section id="opinions" className="w-full overflow-hidden">
                <div className="w-full bg-bg-gray relative flex flex-col lg:flex-row p-8 pt-16 pb-16 overflow-hidden">
                    <div className="w-full lg:w-2/5 text-white lg:pl-20">
                        <h3 className="text-sm text-gray-600 mb-2 font-semibold">
                            Co mówią o mnie inni
                        </h3>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-primary rounded-full mr-2 flex justify-center items-center text-xl">
                                <FiRss />
                            </div>
                            <h2 className="text-4xl font-semibold">Opinie</h2>
                        </div>
                        <p className="text-gray-200 mt-3 mb-3 pr-10">
                            convallis vehicula felis mi sed justo. In eu quam
                            sit amet sapien malesuada porttitor. Nam ullamcorper
                            felis quam, suscipit tempus eros lobortis at
                            tristique elit et felis congue, a finibus
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
                        >
                            <FiChevronRight />
                        </button>
                        <div className="absolute left-0 h-full bg-gradient-to-r from-bg-gray to-transparent w-20 z-20 pointer-events-none"></div>
                        <div className="absolute right-0 lg:right-20 h-full bg-gradient-to-l from-bg-gray to-transparent w-20 z-20 pointer-events-none"></div>
                        <div className="overflow-x-scroll no-scrollbar">
                            <div
                                className="flex space-x-5 relative pt-2 pb-2"
                                css={css`
                                    transition: transform 0.4s ease;
                                    transform: translateX(${sliderVal}rem);
                                `}
                            >
                                <div className="ml-1 lg:ml-20 min-w-16 w-64 h-64 rounded-lg shadow-lg bg-white flex flex-nowrap overflow-hidden">
                                    <div className="flex-1 w-full flex flex-col justify-center items-center p-3">
                                        <blockquote className="text-center italic text-lg lg:text-xl mb-2 ">
                                            “Fusce at dui faucibus odio
                                            elementum feugiat quis eget ante. In
                                            diam justo, sodales in euismod eget,
                                            iaculis id metus,,
                                        </blockquote>
                                        <p className="font-semibold">
                                            Maciej Wiatr
                                        </p>
                                        <p className="text-primary text-sm">
                                            CEO Kindly Software
                                        </p>
                                    </div>
                                </div>
                                <div className="min-w-16 w-64 h-64 rounded-lg shadow-lg bg-white flex flex-row overflow-hidden">
                                    <div className="flex-1 w-full flex flex-col justify-center items-center p-3">
                                        <blockquote className="text-center italic text-lg lg:text-xl mb-2">
                                            “Fusce at dui faucibus odio
                                            elementum feugiat quis eget ante. In
                                            diam justo, sodales in euismod eget,
                                            iaculis id metus,,
                                        </blockquote>
                                        <p className="font-semibold">
                                            Maciej Wiatr
                                        </p>
                                        <p className="text-primary text-sm">
                                            CEO Kindly Software
                                        </p>
                                    </div>
                                </div>
                                <div className="min-w-16 w-64 h-64 rounded-lg shadow-lg bg-white flex flex-row overflow-hidden">
                                    <div className="flex-1 w-full flex flex-col justify-center items-center p-3">
                                        <blockquote className="text-center italic text-lg lg:text-xl mb-2">
                                            “Fusce at dui faucibus odio
                                            elementum feugiat quis eget ante. In
                                            diam justo, sodales in euismod eget,
                                            iaculis id metus,,
                                        </blockquote>
                                        <p className="font-semibold">
                                            Maciej Wiatr
                                        </p>
                                        <p className="text-primary text-sm">
                                            CEO Kindly Software
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TechnologiesElement />
            {showTips ? (
                <ReactTooltip className="bg-white p-2 rounded shadow transition-all" />
            ) : null}
        </div>
    );
}
