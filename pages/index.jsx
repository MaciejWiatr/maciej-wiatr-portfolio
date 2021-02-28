import Head from "next/head";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import HeroImg from "../assets/hero_img.svg";
import { Fade as Hamburger } from "hamburger-react";

export default function Home() {
    return (
        <div className="w-screen xl:pl-48 xl:pr-48 max-w-screen-3xl">
            <Head>
                <title>Maciej Wiatr</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="flex justify-between md:justify-start pt-5 pb-5 pl-12 pr-12 w-full items-center">
                <h1 className="font-semibold text-lg">Maciej Wiatr</h1>
                <ul className="hidden md:flex flex-1 justify-center space-x-12 items-center text-main-gray">
                    <li>O mnie</li>
                    <li>Projekty</li>
                    <li>Technologie</li>
                </ul>
                <ul className="hidden md:flex space-x-2 items-center text-lg text-main-gray">
                    <li>
                        <div className="p-2 rounded-full bg-purple-300 text-purple-900">
                            <FiGithub />
                        </div>
                    </li>
                    <li>
                        <div className="p-2 rounded-full bg-purple-100">
                            <FiLinkedin />
                        </div>
                    </li>
                    <li>
                        <div className="p-2 rounded-full bg-purple-100">
                            <FiTwitter />
                        </div>
                    </li>
                </ul>
                <button className="md:hidden">
                    <Hamburger size={25} rounded />
                </button>
            </nav>
            <div className="pl-12 pr-12 pb-20 h-screen w-full">
                <div className="relative p-5 md:p-0 bg-purple-bg w-full h-full md:h-4/5 rounded-lg flex justify-start overflow-hidden">
                    <div className="w-full items-center lg:items-start lg:w-2/3 flex flex-col justify-center lg:pl-20 relative z-20">
                        <h1 className="text-6xl font-bold text-dark w-full text-center lg:text-left">
                            <p>Fullstack developer</p>
                            <p>którego</p>
                            <p className="text-primary">potrzebujesz</p>
                        </h1>
                        <p className="max-w-md mb-4 mt-4 text-center md:text-left">
                            Cześć, Mam na imię Maciej i w sumie to lorem ipsum
                            haha mam ochotę zjeść coś dobrego np pierogi czy coś
                            idk co ja mam tu wpisać 4real
                        </p>
                        <form
                            className="flex max-w-full"
                            data-netlify="true"
                            method="POST"
                            action="/success"
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="Contact"
                            />
                            <input
                                className="h-12 rounded border-2 border-gray-200 pl-3 w-56 md:w-72"
                                placeholder="Email"
                                name="email"
                            />
                            <button
                                className="ml-2 bg-primary rounded pl-3 pr-3 text-white text-sm md:text-base"
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
            </div>
        </div>
    );
}
