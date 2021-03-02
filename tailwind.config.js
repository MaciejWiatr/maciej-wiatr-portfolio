const plugin = require("tailwindcss/plugin");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "purple-bg": "#F9F9FC",
                "main-gray": "#A9ACBF",
                primary: "#5222D0",
                "primary--dark": "#4111C0",
                dark: "#161616",
                "secondary-gray": "#B2B2B2",
                "bg-gray": "#0F1221",
            },
            maxWidth: {
                "screen-3xl": "1720px",
                "screen-4xl": "1920px",
            },
            minWidth: {
                16: "16rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("tailwindcss-question-mark"),
        plugin(({ addUtilities }) => {
            const utils = {
                ".flex-center": {
                    "justify-content": "center",
                    "align-items": "center",
                },
                ".no-scrollbar": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none",
                },
                ".desaturated": {
                    filter: "saturate(0)",
                },
                ".desaturated:hover": {
                    filter: "saturate(1)",
                },
            };
            addUtilities(utils);
        }),
    ],
};
