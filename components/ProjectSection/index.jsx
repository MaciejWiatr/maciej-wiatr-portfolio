import { FiGithub, FiGlobe } from "react-icons/fi";
import { useProjects } from "../../src/hooks/useProjects";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

function ProjectGridItemSmall({ project, updateSelected }) {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            className="projects__grid__item--small bg-primary rounded-lg overflow-hidden relative"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {isHovered && (
                <div className="absolute w-full h-full bg-black bg-opacity-30 left-0 top-0 z-50 flex flex-col items-center justify-center">
                    <p className="text-white font-semibold text-xl mt-2">
                        {project.name}
                    </p>
                    <button
                        onClick={() => updateSelected(project.id)}
                        className="p-2 pt-1 pb-1 rounded text-white mt-3 hover:text-gray-300"
                    >
                        Zobacz
                    </button>
                </div>
            )}

            <Image
                src={project.image}
                layout="fill"
                className="object-cover"
            ></Image>
        </div>
    );
}

const ProjectSection = () => {
    const { projects, selectedProject, notSelected, updateSelected } =
        useProjects();

    return (
        <section className="w-full overflow-hidden text-dark">
            <div className="w-full bg-purple-bg relative pt-4 p-2 lg:pl-20 lg:pr-20 pb-4 overflow-hidden flex flex-col lg:flex-row">
                <div className="p-6 w-full lg:w-1/3 flex flex-col">
                    <h3 className="text-md text-primary mb-2 font-semibold">
                        Moje projekty i realizacje
                    </h3>
                    <div className="flex items-center">
                        <h2 className="text-4xl font-bold">
                            {selectedProject.name}
                        </h2>
                    </div>
                    <ul className="flex mt-2">
                        {selectedProject.technologies.map((tech, index) => {
                            return (
                                <li
                                    key={index}
                                    className="p-1 pl-2 pr-2 bg-primary rounded-lg mr-1 text-white text-sm"
                                >
                                    {tech}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="mt-2 mb-2">
                        {selectedProject.description.substring(0, 300)}
                    </p>
                    <div className="flex flex-grow items-end justify-evenly space-x-1">
                        <a
                            href={selectedProject.ghLink}
                            className="w-1/2 p-4 flex justify-center items-center space-x-1 bg-black rounded text-white hover:bg-gray-800"
                        >
                            <FiGithub />
                            <p>Github</p>
                        </a>
                        <a
                            href={selectedProject.liveLink}
                            className="w-1/2 p-4 flex justify-center items-center space-x-1 bg-primary hover:bg-primary--dark rounded text-white"
                        >
                            <FiGlobe />
                            <p>Wersja live</p>
                        </a>
                    </div>
                </div>
                <div className="projects__grid pt-2 lg:pt-6 p-6 w-full lg:w-2/3">
                    <div className="projects__grid__item--big bg-primary rounded-lg overflow-hidden relative">
                        <Image
                            src={selectedProject.image}
                            layout="fill"
                            className="object-cover"
                        ></Image>
                    </div>
                    <ProjectGridItemSmall
                        project={notSelected[0]}
                        updateSelected={updateSelected}
                    />
                    <ProjectGridItemSmall
                        project={notSelected[1]}
                        updateSelected={updateSelected}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
