const GameListElement = ({ src, tip }) => {
    return (
        <li className="mt-4 tech-list__element" data-tip={tip}>
            <img
                className="h-12 rounded desaturated transition-all transform hover:scale-110"
                src={src}
            />
        </li>
    );
};

export default GameListElement;
