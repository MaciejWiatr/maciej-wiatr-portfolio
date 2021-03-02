import HeroImg from "../../assets/hero_img.svg";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HeroElement = () => {
    useEffect(() => {
        gsap.timeline().from("#hero__title p", {
            x: -200,
            stagger: 0.1,
            duration: 0.85,
            ease: "back",
            opacity: 0,
        });
    }, []);

    return (
        <section className="w-full mt-16 lg:mt-0">
            <div className="relative p-5 pt-20 pb-20 lg:pt-40 lg:pb-40 bg-purple-bg w-full h-full md:h-4/5 rounded-lg flex justify-start overflow-hidden">
                <div className="w-full items-center lg:items-start lg:w-2/3 flex flex-col justify-center lg:pl-20 relative z-20">
                    <h1
                        id="hero__title"
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark w-full text-center lg:text-left"
                    >
                        <p>Fullstack developer</p>
                        <p>którego</p>
                        <p className="text-primary">potrzebujesz</p>
                    </h1>
                    <p className="max-w-md mb-4 mt-5 text-center md:text-left">
                        Cześć, Mam na imię Maciej i w sumie to lorem ipsum haha
                        mam ochotę zjeść coś dobrego np pierogi czy coś idk co
                        ja mam tu wpisać 4real
                    </p>
                    <form
                        className="flex flex-col sm:flex-row max-w-full"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="contact" />
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
    );
};

export default HeroElement;
