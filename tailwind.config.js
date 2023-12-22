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
    safelist: [
        "text-white",
        "bg-white",
        {
            pattern:
                /(bg|border|text)-(primary|secondary|tertiary|success|danger|warning|info|gray)-(50|100|300|500|600|700)/,
            variants: ["hover"],
        },
        {
            pattern: /(bg|border|text)-deep-black/,
            variants: ["hover"],
        },
        {
            pattern: /(bg|border|text)-paper/,
            variants: ["hover"],
        },
        {
            pattern: /(bg|border|text)-transparent/,
            variants: ["hover"],
        },
        "flex-wrap",
        "transition-transform",
        "hidden",
    ],
    theme: {
        extend: {
            backdropBlur: {
                xs: "1px",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                title: ["Urbanist", ...defaultTheme.fontFamily.sans],
                money: ["DM Mono", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                // primary: {
                //     DEFAULT: "#05386B",
                //     50: "#D8EBFD",
                //     100: "#B1D6FB",
                //     200: "#68B0F8",
                //     300: "#1A87F4",
                //     400: "#0961B9",
                //     500: "#05386B",
                //     600: "#042E58",
                //     700: "#03213F",
                //     800: "#02172C",
                //     900: "#010A13",
                //     950: "#00050A",
                // },
                // secondary: {
                //     DEFAULT: "#2DCD75",
                //     50: "#EAFAF1",
                //     100: "#D5F6E4",
                //     200: "#ABEDC9",
                //     300: "#7DE3AB",
                //     400: "#54D990",
                //     500: "#2DCD75",
                //     600: "#24A35D",
                //     700: "#1B7945",
                //     800: "#125430",
                //     900: "#092A18",
                //     950: "#05150C",
                // },
                // tertiary: {
                //     DEFAULT: "#379683",
                //     50: "#E9F7F4",
                //     100: "#D2EFE9",
                //     200: "#A5DED3",
                //     300: "#79CEBD",
                //     400: "#4CBDA7",
                //     500: "#379683",
                //     600: "#2C7768",
                //     700: "#215A4E",
                //     800: "#163C34",
                //     900: "#0B1E1A",
                //     950: "#050F0D",
                // },
                primary: {
                    DEFAULT: "#0D19A3",
                    50: "#E0EEFA",
                    100: "#C2DEF5",
                    200: "#85BDEA",
                    300: "#4C9EE1",
                    400: "#217BC4",
                    500: "#175587",
                    600: "#13446D",
                    700: "#0E3453",
                    800: "#092134",
                    900: "#04101A",
                    950: "#02080D",
                },
                secondary: {
                    DEFAULT: "#0D19A3",
                    50: "#E5FAFB",
                    100: "#CFF7F7",
                    200: "#9EEEF0",
                    300: "#6EE6E8",
                    400: "#39DDE0",
                    500: "#1FC1C3",
                    600: "#18989A",
                    700: "#137577",
                    800: "#0D4E4F",
                    900: "#062728",
                    950: "#031112",
                },
                paper: {
                    DEFAULT: "#F6FCFC",
                },
                "deep-black": {
                    DEFAULT: "#1F292E",
                },
                success: {
                    DEFAULT: "#73BE27",
                    50: "#F0FAE6",
                    100: "#E3F5D0",
                    200: "#C7ECA2",
                    300: "#ABE273",
                    400: "#8FD945",
                    500: "#73BE27",
                    600: "#5C981F",
                    700: "#457217",
                    800: "#2E4C10",
                    900: "#172608",
                    950: "#0A1103",
                },
                info: {
                    DEFAULT: "#2180BF",
                    50: "#E5F2FA",
                    100: "#CFE7F7",
                    200: "#9FCFEE",
                    300: "#6BB5E5",
                    400: "#3B9CDD",
                    500: "#2180BF",
                    600: "#1A6698",
                    700: "#144C71",
                    800: "#0E344E",
                    900: "#071A27",
                    950: "#030C11",
                },
                warning: {
                    DEFAULT: "#E8A530",
                    50: "#FCF5E8",
                    100: "#FAEDD6",
                    200: "#F6DBAC",
                    300: "#F1C983",
                    400: "#EDB75A",
                    500: "#E8A530",
                    600: "#CA8816",
                    700: "#976611",
                    800: "#65440B",
                    900: "#322206",
                    950: "#170F03",
                },
                danger: {
                    DEFAULT: "#C91D1D",
                    50: "#FCE9E9",
                    100: "#F8CECE",
                    200: "#F19D9D",
                    300: "#EA6C6C",
                    400: "#E33B3B",
                    500: "#C91D1D",
                    600: "#A01717",
                    700: "#781111",
                    800: "#500C0C",
                    900: "#280606",
                    950: "#160303",
                },
            },
        },
    },

    plugins: [forms],
};
