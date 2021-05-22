import { useState } from "react";

const exampleProjects = [
    {
        id: 1,
        name: "Nextagram",
        technologies: ["nextjs", "tailwind", "drf"],
        description:
            "Proident velit incididunt ut dolor ipsum aliqua. Laborum labore qui pariatur occaecat esse id est proident labore. Id ut reprehenderit consectetur voluptate Lorem minim laborum est cupidatat incididunt irure. Nostrud culpa anim laboris ex ut cupidatat sunt ut consectetur minim ut do amet excepteur. Lorem reprehenderit duis minim velit deserunt deserunt dolor do commodo deserunt ipsum dolore sunt.",
        ghLink: "https://github.com",
        liveLink: "https://mwiatr.live",
        image: "https://picsum.photos/1280/720",
    },
    {
        id: 2,
        name: "CodeHour",
        technologies: ["nextjs", "tailwind", "drf"],
        description:
            "Proident velit incididunt ut dolor ipsum aliqua. Laborum labore qui pariatur occaecat esse id est proident labore. Id ut reprehenderit consectetur voluptate Lorem minim laborum est cupidatat incididunt irure. Nostrud culpa anim laboris ex ut cupidatat sunt ut consectetur minim ut do amet excepteur. Lorem reprehenderit duis minim velit deserunt deserunt dolor do commodo deserunt ipsum dolore sunt.",
        ghLink: "https://github.com",
        liveLink: "https://mwiatr.live",
        image: "https://picsum.photos/1920/1080",
    },
    {
        id: 3,
        name: "Strona siema",
        technologies: ["nextjs", "tailwind", "drf"],
        description:
            "Proident velit incididunt ut dolor ipsum aliqua. Laborum labore qui pariatur occaecat esse id est proident labore. Id ut reprehenderit consectetur voluptate Lorem minim laborum est cupidatat incididunt irure. Nostrud culpa anim laboris ex ut cupidatat sunt ut consectetur minim ut do amet excepteur. Lorem reprehenderit duis minim velit deserunt deserunt dolor do commodo deserunt ipsum dolore sunt.",
        ghLink: "https://github.com",
        liveLink: "https://mwiatr.live",
        image: "https://picsum.photos/1300/500",
    },
];

const useProjects = () => {
    const [projects, setProjects] = useState(exampleProjects);
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [notSelected, setNotSelected] = useState(
        projects.filter((el) => el.id !== selectedProject.id)
    );

    const updateSelected = (id) => {
        setSelectedProject(() => projects.find((p) => p.id === id));
        setNotSelected(() => projects.filter((el) => el.id !== id));
    };

    return { projects, selectedProject, notSelected, updateSelected };
};

export { useProjects };
