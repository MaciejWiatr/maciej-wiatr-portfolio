const GameListElement = ({ src }) => {
    return (
        <li className="mt-4">
            <img
                className="h-12 rounded desaturated transition-all"
                src={src}
            />
        </li>
    );
};

export default GameListElement;
