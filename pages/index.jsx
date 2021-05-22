import Head from "next/head";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import HeroSection from "../components/HeroElement";
import TechnologiesSection from "../components/TechnologiesElement";
import OpinionsSection from "../components/OpinionsSection";
import NavBar from "../components/NavBar";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
    const [navOpen, setNavOpen] = useState(false);
    const [showTips, setShowTips] = useState(false);

    useEffect(() => {
        setShowTips(true);
    }, []);

    return (
        <div className="w-screen xl:pl-30 xl:pr-30 2xl:pl-44 2xl:pr-44 max-w-screen-4xl">
            <Head>
                <title>Maciej Wiatr - Programista </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar navOpen={navOpen} setNavOpen={setNavOpen}></NavBar>
            <HeroSection />
            <OpinionsSection />
            <TechnologiesSection />
            <ProjectSection />
            <ContactSection />
            {showTips ? (
                <ReactTooltip className="bg-white p-2 rounded shadow transition-all" />
            ) : null}
        </div>
    );
}
