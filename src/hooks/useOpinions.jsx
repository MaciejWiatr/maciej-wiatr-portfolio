import { useState } from "react";

const exampleOpinions = [
    {
        text: `“Fusce at dui faucibus odio elementum
feugiat quis eget ante. In diam justo,
sodales in euismod eget, iaculis id
metus,,`,
        author: "Maciej Wiatr",
        position: "CEO Kindly Software",
    },
    {
        text: `“Fusce at dui faucibus odio elementum
feugiat quis eget ante. In diam justo,
sodales in euismod eget, iaculis id
metus,,`,
        author: "Maciej Wiatr",
        position: "CEO Kindly Software",
    },
    {
        text: `“Fusce at dui faucibus odio elementum
feugiat quis eget ante. In diam justo,
sodales in euismod eget, iaculis id
metus,,`,
        author: "Maciej Wiatr",
        position: "CEO Kindly Software",
    },
];

const useOpinions = () => {
    const [opinions, setOpinions] = useState(exampleOpinions);

    return { opinions };
};

export { useOpinions };
