/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,ts}", "./*.html"],
    theme: {
        extend: {
            colors: {
                // primary: "#02a6fb",
                // secondary: "#e2725b",
                // tertiary: "#5a6673",
                primary: "#168AAD",
                secondary: "#34A0A4",
                tertiary: "#52B69A",
                quaternary: "#76C893",
                primaryContrast: "#EE6C4D",
                textColor: "#111",
                textColorLight: "#f3f4f6",
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "bounce-slow": "bounce 5s 1.5",
            }
        },
    },
    plugins: [],
};
