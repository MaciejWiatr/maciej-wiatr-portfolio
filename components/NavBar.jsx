import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Fade as Hamburger } from "hamburger-react";
import gsap from "gsap";
import { useEffect } from "react";

function NavBar(props) {
    useEffect(() => {
        gsap.timeline().from("#nav__items li", {
            y: -200,
            stagger: 0.1,
            duration: 0.85,
            ease: "back",
            opacity: 0,
        });
    }, []);

    return (
        <nav
            id="nav"
            className="fixed z-50 top-0 left-0 bg-white lg:relative rounded-b-lg shadow-sm lg:rounded-none lg:shadow-none flex flex-col lg:flex-row pl-6 pr-6 justify-between md:justify-start pt-5 pb-5 w-full items-center"
        >
            <h1 className="self-start font-semibold text-base md:text-lg">
                <a href="/#hero">Maciej Wiatr</a>
            </h1>
            <ul
                id="nav__items"
                className={`lg:flex flex-1 justify-center space-y-6 lg:space-y-0 text-center lg:space-x-12 items-center text-main-gray ${
                    props.navOpen ? "" : "hidden"
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
                    <a
                        href="#technologies"
                        className="transition hover:text-primary"
                    >
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
                    props.navOpen ? "" : "hidden"
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
                    <a href="https://twitter.com/maciej_wiatr" target="blank">
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
                    toggled={props.navOpen}
                    toggle={props.setNavOpen}
                    color="#B2B2B2"
                    hideOutline={true}
                />
            </button>
        </nav>
    );
}

export default NavBar;
