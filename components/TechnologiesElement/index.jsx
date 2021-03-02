import GameListElement from "../GameListElement";
import PixelatedProp from "../../assets/pixelated_prop.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const TechnologiesElement = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from("#technologies__title", {
            scrollTrigger: "#technologies__title",
            x: -200,
            stagger: 0.1,
            duration: 0.85,
            ease: "back",
            opacity: 0,
        });
    }, []);

    return (
        <section className="w-full relative">
            <div className="hidden md:block absolute right-0 w-96 -top-14 z-0">
                <PixelatedProp />
            </div>
            <div className="w-full md:w-3/5 p-6 md:pl-28 pt-16 pb-16 text-center md:text-left relative z-10">
                <h2
                    id="technologies__title"
                    className="text-4xl md:text-5xl font-bold"
                >
                    <p>Technologie</p>
                    <p>
                        <span className="text-primary">&</span>Umiejętności
                    </p>
                </h2>
                <p className="w-full md:w-96 mt-4 mb-4 leading-6 text-gray-500">
                    convallis vehicula felis mi sed justo. In eu quam sit amet
                    sapien malesuada porttitor. Nam ullamcorper felis quam,
                    suscipit tempus eros lobortis at. Nunc{" "}
                </p>
                <div className="flex">
                    <div className="w-1/2">
                        <h1 className="text-2xl text-center md:text-left md:text-3xl leading-7">
                            <span className="font-bold">Frontend</span>
                            <br />
                            Development
                        </h1>
                        <ul className="flex flex-wrap justify-center md:justify-start space-x-3 p-4 md:p-2 md:pl-0 border-r md:border-none">
                            <GameListElement
                                src="/logos/react.png"
                                tip="React.js"
                            />
                            <GameListElement
                                src="/logos/js.png"
                                tip="JavaScript ES6"
                            />
                            <GameListElement
                                src="/logos/ts.png"
                                tip="Typescript"
                            />
                            <GameListElement
                                src="/logos/next.png"
                                tip="Next.js"
                            />
                            <GameListElement
                                src="/logos/tail.png"
                                tip="Tailwind"
                            />
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-2xl text-center md:text-left md:text-3xl leading-7">
                            <span className="font-bold">Backend</span>
                            <br />
                            Development
                        </h1>
                        <ul className="flex flex-wrap justify-center md:justify-start space-x-3 p-4 md:p-2 md:pl-0 ">
                            <GameListElement
                                src="/logos/django.png"
                                tip="Django"
                            />
                            <GameListElement
                                src="/logos/python.png"
                                tip="Python"
                            />
                            <GameListElement
                                src="/logos/node.png"
                                tip="Nodejs"
                            />
                            <GameListElement
                                src="/logos/mongo.png"
                                tip="MongoDB"
                            />
                        </ul>
                    </div>
                </div>
                <a href="/" className="text-primary">
                    Wyświetl wszystkie
                </a>
            </div>
        </section>
    );
};

export default TechnologiesElement;
