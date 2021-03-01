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
import HeroImg from "../assets/hero_img.svg";
import { Fade as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";

export default function Home() {
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

    return (
        <div className="w-screen pl-6 pr-6 sm:pl-12 sm:pr-12  xl:pl-48 xl:pr-48 max-w-screen-3xl">
            <Head>
                <title>Maciej Wiatr</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="flex justify-between md:justify-start pt-5 pb-5 w-full items-center">
                <h1 className="font-semibold text-base md:text-lg">
                    Maciej Wiatr
                </h1>
                <ul className="hidden md:flex flex-1 justify-center space-x-12 items-center text-main-gray">
                    <li>
                        <a href="#" className="transition hover:text-primary">
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
                <ul className="hidden md:flex space-x-2 items-center text-lg text-main-gray">
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
                <button className="md:hidden">
                    <Hamburger size={25} rounded />
                </button>
            </nav>
            <section className="w-full">
                <div className="relative p-5 pt-40 pb-40 bg-purple-bg w-full h-full md:h-4/5 rounded-lg flex justify-start overflow-hidden">
                    <div className="w-full items-center lg:items-start lg:w-2/3 flex flex-col justify-center lg:pl-20 relative z-20">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark w-full text-center lg:text-left">
                            <p>Fullstack developer</p>
                            <p>którego</p>
                            <p className="text-primary">potrzebujesz</p>
                        </h1>
                        <p className="max-w-md mb-4 mt-5 text-center md:text-left">
                            Cześć, Mam na imię Maciej i w sumie to lorem ipsum
                            haha mam ochotę zjeść coś dobrego np pierogi czy coś
                            idk co ja mam tu wpisać 4real
                        </p>
                        <form
                            className="flex flex-col sm:flex-row max-w-full"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <input
                                className="h-12 rounded border-2 border-gray-200 pl-3 w-56 md:w-72 focus:ring-2 focus:outline-none max-w-full"
                                placeholder="Email"
                                name="email"
                            />
                            <button
                                className="h-10 mt-1 sm:mt-0 sm:h-auto sm:ml-2 bg-primary rounded pl-3 pr-3 text-white text-sm md:text-base transition hover:bg-primary--dark"
                                type="submit"
                            >
                                Skontaktuj się ze mną
                            </button>
                        </form>
                    </div>
                    <div className="hidden lg:block lg:absolute md:w-1/3 lg:w-1/2 max-w-2xl lg:-right-5 lg:top-1/4 transform lg:-translate-y-20 -rotate-12 z-10">
                        <HeroImg />
                    </div>
                </div>
            </section>
            <section className=" h-screen w-full">
                <div className="w-full bg-bg-gray relative flex flex-col lg:flex-row p-5 pt-12 pb-12">
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
                        <p className="text-gray-200 mt-3 mb-3">
                            convallis vehicula felis mi sed justo. In eu quam
                            sit amet sapien malesuada porttitor. Nam ullamcorper
                            felis quam, suscipit tempus eros lobortis at. Nunc
                            tristique elit et felis congue, a finibus
                        </p>
                        <button
                            className="h-10 bg-primary rounded pl-3 pr-3 text-white text-sm md:text-base transition hover:bg-primary--dark"
                            type="submit"
                        >
                            Zobacz wszystkie
                        </button>
                    </div>
                    <div className="w-full lg:w-3/5 relative lg:pr-20">
                        <button
                            onClick={() => handleSlider(true)}
                            className="text-black absolute z-30 -left-6 w-12 h-12 rounded-full bg-white top-1/2 flex flex-center text-xl transform -translate-y-5 shadow-lg transition hover:scale-110 focus:outline-none focus:ring-4"
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
                            className="text-black absolute z-30 right-16 w-12 h-12 rounded-full bg-white top-1/2 flex flex-center text-xl transform -translate-y-5 shadow-lg transition hover:scale-110 focus:outline-none focus:ring-4"
                        >
                            <FiChevronRight />
                        </button>
                        <div className="absolute left-0 h-full bg-gradient-to-r from-bg-gray to-transparent w-20 z-20"></div>
                        <div className="absolute right-20 h-full bg-gradient-to-l from-bg-gray to-transparent w-20 z-20"></div>
                        <div className="overflow-x-hidden">
                            <div
                                className="flex space-x-5 relative pt-2 pb-2"
                                css={css`
                                    transition: transform 0.4s ease;
                                    transform: translateX(${sliderVal}rem);
                                `}
                            >
                                <div className="ml-20 min-w-16 w-64 h-64 rounded-lg shadow-lg bg-white flex flex-nowrap overflow-hidden">
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
        </div>
    );
}
