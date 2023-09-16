import defaultTheme from "tailwindcss/defaultTheme";

import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "paper-white": {
                    DEFAULT: "#F8F9FD",
                },
                "deep-black": {
                    DEFAULT: "#1d1d1d",
                },
                success: {
                    DEFAULT: "#33d176",
                    50: "#f1fcf5",
                    100: "#defaea",
                    200: "#bef4d4",
                    300: "#8beab3",
                    400: "#52d689",
                    500: "#33d176",
                    600: "#1d9c53",
                    700: "#1b7a43",
                    800: "#1a6139",
                    900: "#175031",
                },
                info: {
                    DEFAULT: "#3d9cdd",
                    50: "#f2f8fd",
                    100: "#e4effa",
                    200: "#c2def5",
                    300: "#8dc4ec",
                    400: "#3d9cdd",
                    500: "#298bce",
                    600: "#1a6daf",
                    700: "#17578d",
                    800: "#174b75",
                    900: "#184062",
                },
                warning: {
                    DEFAULT: "#f2c619",
                    50: "#fdfbe9",
                    100: "#fcf7c5",
                    200: "#faed8e",
                    300: "#f7dc4d",
                    400: "#f2c619",
                    500: "#e2af10",
                    600: "#c3880b",
                    700: "#9c610c",
                    800: "#814d12",
                    900: "#6e3f15",
                },
                danger: {
                    DEFAULT: "#e85445",
                    50: "#fef3f2",
                    100: "#fde5e3",
                    200: "#fcd0cc",
                    300: "#f9afa8",
                    400: "#f38276",
                    500: "#e85445",
                    600: "#d53c2d",
                    700: "#b32f22",
                    800: "#942b20",
                    900: "#7b2921",
                },
            },
        },
    },

    plugins: [forms],
};
