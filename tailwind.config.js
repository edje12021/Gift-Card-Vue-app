/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helv: "Helvetica, Arial, sans-serif",
        nanum: "Nanum Pen Script, cursive",
        manrope: "Manrope, sans-serif",
      },
      fontSize: {
        xxs: "0.55rem",
      },
      colors: {
        cyan: "#33C7C7",
        grey: "#6B6B6B",
        dCyan: "#0C7E7E",
        lCyan: "#F2F9FD",
      },
      backgroundImage: {
        "banner-h1": "url('./src/assets/behindHeader.svg')",
        cta: "url('./src/assets/customGiftbg.svg')",
      },
      keyframes: {
        move: {
          "0%": { transform: "translate(0%)" },
          "100%": { transform: "translate(120%)" },
        },
      },
      animation: {
        move: "move 2s ease-in-out infinite",
      },
      // screens:{
      //   xs: "200px"
      // }
      // screens: {
      //   'xxs':  {'min': '200px', 'max': '300px'},
      //   ...defaultTheme.screens,
      // },
      
    },
  },
  plugins: [],
};

