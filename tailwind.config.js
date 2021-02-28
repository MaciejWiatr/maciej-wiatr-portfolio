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
                dark: "#161616",
                "secondary-gray": "#B2B2B2",
            },
            maxWidth: {
                "screen-3xl": "1720px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwindcss-question-mark")],
};
